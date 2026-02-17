-- ============================================
-- Fix RLS Policies for responses and answers tables
-- Run this in Supabase SQL Editor to fix the RLS violation
-- ============================================

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert responses" ON public.responses;
DROP POLICY IF EXISTS "Anyone can insert answers" ON public.answers;
DROP POLICY IF EXISTS "Anyone can view answers for their own responses" ON public.answers;

-- Create updated policies for responses table
-- Anyone can insert responses for published quizzes
CREATE POLICY "Anyone can insert responses for published quizzes" ON public.responses
  FOR INSERT WITH CHECK (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE is_published = true
    )
  );

-- Anyone can view responses for published quizzes (for result pages)
CREATE POLICY "Anyone can view responses for published quizzes" ON public.responses
  FOR SELECT USING (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE is_published = true
    )
  );

-- Create updated policies for answers table
-- Anyone can insert answers for responses to published quizzes
CREATE POLICY "Anyone can insert answers for published quizzes" ON public.answers
  FOR INSERT WITH CHECK (
    response_id IN (
      SELECT id FROM public.responses
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE is_published = true
      )
    )
  );

-- Anyone can view answers for responses to published quizzes (for quiz results)
CREATE POLICY "Anyone can view answers for published quizzes" ON public.answers
  FOR SELECT USING (
    response_id IN (
      SELECT id FROM public.responses
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE is_published = true
      )
    )
  );
