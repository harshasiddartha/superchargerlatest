"use server";
import "server-only";
import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";
import { GoogleGenAI } from "@google/genai";

export async function saveQuizAction(formData: FormData) {
  const supabase = await createClient();
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) {
    return { error: "Not authenticated" };
  }

  // Parse formData
  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";
  const questionsJson = formData.get("questions")?.toString() || "[]";
  let questions: any[] = [];
  try {
    questions = JSON.parse(questionsJson);
  } catch (e) {
    return { error: "Invalid questions data" };
  }

  // Insert quiz
  const { data: quiz, error: quizError } = await supabase
    .from("quizzes")
    .insert({
      user_id: user.id,
      title,
      description,
      is_published: false,
      ai_generated: false,
    })
    .select()
    .single();
  if (quizError) return { error: quizError.message };

  // Insert questions and options
  for (const q of questions) {
    const { data: question, error: questionError } = await supabase
      .from("questions")
      .insert({
        quiz_id: quiz.id,
        text: q.text,
        marks: q.marks,
      })
      .select()
      .single();
    if (questionError) return { error: questionError.message };
    for (const opt of q.options) {
      const { error: optionError } = await supabase
        .from("options")
        .insert({
          question_id: question.id,
          text: opt.text,
          is_correct: !!opt.isCorrect,
          points: opt.points ?? 0,
        });
      if (optionError) return { error: optionError.message };
    }
  }

  return { success: true, quizId: quiz.id, title: quiz.title, description: quiz.description };
}

/**
 * Sleep utility for retry delays
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Extract retry delay from Gemini API error response
 */
function extractRetryDelay(error: any): number {
  try {
    // Handle wrapped error structure (error.error.details)
    const errorObj = error?.error || error;
    
    // Check if error has retry info in details
    if (errorObj?.details) {
      for (const detail of errorObj.details) {
        if (detail["@type"] === "type.googleapis.com/google.rpc.RetryInfo" && detail.retryDelay) {
          // Convert retry delay to milliseconds (it's usually in seconds)
          const delaySeconds = parseFloat(detail.retryDelay) || 0;
          return Math.ceil(delaySeconds * 1000);
        }
      }
    }
    // Check error message for retry delay
    const message = errorObj?.message || error?.message || "";
    const retryMatch = message.match(/retry in ([\d.]+)s/i) || message.match(/Please retry in ([\d.]+)s/i);
    if (retryMatch) {
      const delaySeconds = parseFloat(retryMatch[1]) || 0;
      return Math.ceil(delaySeconds * 1000);
    }
  } catch {}
  // Default exponential backoff: 2s, 4s, 8s
  return 2000;
}

/**
 * Check if error is a rate limit/quota error
 */
function isRateLimitError(error: any): boolean {
  if (!error) return false;
  
  // Handle wrapped error structure (error.error)
  const errorObj = error?.error || error;
  
  const status = errorObj?.status || errorObj?.code || error?.status || error?.code;
  const message = errorObj?.message || error?.message || "";
  
  return (
    status === 429 ||
    status === "RESOURCE_EXHAUSTED" ||
    message.includes("quota") ||
    message.includes("Quota exceeded") ||
    message.includes("rate limit") ||
    message.includes("Rate limit") ||
    message.includes("429") ||
    message.includes("RESOURCE_EXHAUSTED")
  );
}

export async function generateQuizWithGemini(
  prompt: string,
  maxRetries: number = 3
): Promise<{ quiz?: any; error?: string; retryAfter?: number }> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return { error: "Gemini API key not set" };
  
  const ai = new GoogleGenAI({ apiKey });
  let lastError: any = null;
  
  // Use latest Gemini 3 Flash Preview model (launched Dec 17, 2025)
  // This replaces the deprecated gemini-2.0-flash-001 model
  const model = "gemini-3-flash-preview";
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });
      
      let quiz;
      let text = response.text || "";
      
      // Try to parse as JSON directly
      try {
        quiz = JSON.parse(text);
        return { quiz };
      } catch {}
      
      // Try to extract JSON from markdown/code block or text
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          quiz = JSON.parse(match[0]);
          return { quiz };
        } catch {}
      }
      
      // Fallback: return text
      return { quiz: text };
    } catch (e: any) {
      lastError = e;
      
      // Check if it's a rate limit error
      if (isRateLimitError(e)) {
        const retryDelay = extractRetryDelay(e);
        
        // If this is the last attempt, return error with retry info
        if (attempt === maxRetries) {
          const errorObj = e?.error || e;
          const errorMessage = errorObj?.message || e?.message || "Rate limit exceeded";
          const isQuotaExceeded = 
            errorMessage.includes("quota") || 
            errorMessage.includes("Quota exceeded") ||
            errorMessage.includes("exceeded your current quota");
          
          if (isQuotaExceeded) {
            return {
              error: "Gemini API quota exceeded. Please check your plan and billing details at https://ai.dev/rate-limit. You may need to upgrade your plan or wait for the quota to reset.",
              retryAfter: retryDelay,
            };
          }
          
          return {
            error: `Rate limit exceeded. Please retry after ${Math.ceil(retryDelay / 1000)} seconds.`,
            retryAfter: retryDelay,
          };
        }
        
        // Wait before retrying
        await sleep(retryDelay);
        continue; // Retry
      }
      
      // For non-rate-limit errors, return immediately
      return {
        error: e.message || "Failed to generate quiz",
      };
    }
  }
  
  // Fallback error
  return {
    error: lastError?.message || "Failed to generate quiz after multiple attempts",
  };
} 