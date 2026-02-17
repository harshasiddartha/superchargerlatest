-- ============================================
-- Supabase Database Migration
-- Quiz Application Schema
-- ============================================
-- NOTE: Do NOT enable RLS on auth.users - it's managed by Supabase Auth
-- ============================================

-- Create quizzes table
CREATE TABLE IF NOT EXISTS public.quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  is_published BOOLEAN DEFAULT false,
  ai_generated BOOLEAN DEFAULT false,
  link TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create questions table
CREATE TABLE IF NOT EXISTS public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID REFERENCES public.quizzes(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  marks INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create options table
CREATE TABLE IF NOT EXISTS public.options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT false,
  points INTEGER DEFAULT 0
);

-- Create responses table
CREATE TABLE IF NOT EXISTS public.responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID REFERENCES public.quizzes(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  respondent_name TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create answers table
CREATE TABLE IF NOT EXISTS public.answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  response_id UUID REFERENCES public.responses(id) ON DELETE CASCADE,
  question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE,
  option_id UUID REFERENCES public.options(id) ON DELETE CASCADE
);

-- Enable Row Level Security on public tables
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS Policies for quizzes table
-- ============================================

-- Users can view their own quizzes
CREATE POLICY "Users can view their own quizzes" ON public.quizzes
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own quizzes
CREATE POLICY "Users can insert their own quizzes" ON public.quizzes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own quizzes
CREATE POLICY "Users can update their own quizzes" ON public.quizzes
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own quizzes
CREATE POLICY "Users can delete their own quizzes" ON public.quizzes
  FOR DELETE USING (auth.uid() = user_id);

-- Anyone can view published quizzes
CREATE POLICY "Anyone can view published quizzes" ON public.quizzes
  FOR SELECT USING (is_published = true);

-- ============================================
-- RLS Policies for questions table
-- ============================================

-- Users can view questions for their own quizzes
CREATE POLICY "Users can view questions for their own quizzes" ON public.questions
  FOR SELECT USING (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE user_id = auth.uid()
    )
  );

-- Anyone can view questions for published quizzes
CREATE POLICY "Anyone can view questions for published quizzes" ON public.questions
  FOR SELECT USING (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE is_published = true
    )
  );

-- Users can insert questions for their own quizzes
CREATE POLICY "Users can insert questions for their own quizzes" ON public.questions
  FOR INSERT WITH CHECK (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE user_id = auth.uid()
    )
  );

-- Users can update questions for their own quizzes
CREATE POLICY "Users can update questions for their own quizzes" ON public.questions
  FOR UPDATE USING (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE user_id = auth.uid()
    )
  );

-- Users can delete questions for their own quizzes
CREATE POLICY "Users can delete questions for their own quizzes" ON public.questions
  FOR DELETE USING (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE user_id = auth.uid()
    )
  );

-- ============================================
-- RLS Policies for options table
-- ============================================

-- Users can view options for questions in their own quizzes
CREATE POLICY "Users can view options for their own quizzes" ON public.options
  FOR SELECT USING (
    question_id IN (
      SELECT id FROM public.questions
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE user_id = auth.uid()
      )
    )
  );

-- Anyone can view options for published quizzes
CREATE POLICY "Anyone can view options for published quizzes" ON public.options
  FOR SELECT USING (
    question_id IN (
      SELECT id FROM public.questions
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE is_published = true
      )
    )
  );

-- Users can insert options for their own quizzes
CREATE POLICY "Users can insert options for their own quizzes" ON public.options
  FOR INSERT WITH CHECK (
    question_id IN (
      SELECT id FROM public.questions
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE user_id = auth.uid()
      )
    )
  );

-- Users can update options for their own quizzes
CREATE POLICY "Users can update options for their own quizzes" ON public.options
  FOR UPDATE USING (
    question_id IN (
      SELECT id FROM public.questions
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE user_id = auth.uid()
      )
    )
  );

-- Users can delete options for their own quizzes
CREATE POLICY "Users can delete options for their own quizzes" ON public.options
  FOR DELETE USING (
    question_id IN (
      SELECT id FROM public.questions
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE user_id = auth.uid()
      )
    )
  );

-- ============================================
-- RLS Policies for responses table
-- ============================================

-- Anyone can insert responses for published quizzes
CREATE POLICY "Anyone can insert responses for published quizzes" ON public.responses
  FOR INSERT WITH CHECK (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE is_published = true
    )
  );

-- Quiz owners can view responses for their quizzes
CREATE POLICY "Quiz owners can view responses" ON public.responses
  FOR SELECT USING (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE user_id = auth.uid()
    )
  );

-- Anyone can view responses for published quizzes (for result pages)
CREATE POLICY "Anyone can view responses for published quizzes" ON public.responses
  FOR SELECT USING (
    quiz_id IN (
      SELECT id FROM public.quizzes WHERE is_published = true
    )
  );

-- ============================================
-- RLS Policies for answers table
-- ============================================

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

-- Quiz owners can view answers for responses to their quizzes
CREATE POLICY "Quiz owners can view answers" ON public.answers
  FOR SELECT USING (
    response_id IN (
      SELECT id FROM public.responses
      WHERE quiz_id IN (
        SELECT id FROM public.quizzes WHERE user_id = auth.uid()
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
