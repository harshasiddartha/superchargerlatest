# SuperCharger - Advanced Quiz & Survey Platform

A comprehensive quiz and survey platform built with Next.js, Supabase, and AI integration. Create, manage, and analyze quizzes with powerful analytics and AI-powered insights.

## 🚀 Live Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This+starter+configures+Supabase+Auth+to+use+cookies%2C+making+the+user%27s+session+available+throughout+the+entire+Next.js+app+-+Client+Components%2C+Server+Components%2C+Route+Handlers%2C+Server+Actions+and+Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png)

## ✨ Features

### 🎯 Core Quiz Functionality
- **Quiz Creation & Management**: Create quizzes with multiple questions and customizable options
- **Manual & AI-Powered Creation**: Build quizzes manually or use AI to generate questions automatically
- **Flexible Scoring System**: Assign points to different answer options for sophisticated scoring
- **Publish & Share**: Publish quizzes and share them via public links
- **Real-time Editing**: Edit quiz content, questions, and options with live updates

### 🤖 AI Integration
- **Gemini AI Integration**: Powered by Google's Gemini AI for content generation
- **Smart Question Generation**: Generate quiz questions based on topics and requirements
- **Context-Aware AI**: AI understands existing quiz content to generate non-redundant questions
- **AI-Powered Analytics**: Get intelligent insights and analysis of quiz responses
- **Personalized Feedback**: AI-generated personalized summaries and recommendations

### 📊 Advanced Analytics & Reporting
- **Comprehensive Response Analytics**: Track and analyze all quiz responses
- **Visual Data Representation**: Interactive charts and graphs using Chart.js
- **Filtering & Search**: Filter responses by date, score range, and specific questions
- **Statistical Insights**: Average scores, min/max points, response distribution
- **Individual Response Tracking**: View detailed responses for each participant

### 🔐 Authentication & Security
- **Supabase Authentication**: Secure user authentication with email/password
- **Protected Routes**: Role-based access control for quiz management
- **Session Management**: Persistent sessions across browser refreshes
- **Password Reset**: Secure password reset functionality
- **User Profile Management**: Manage user accounts and preferences

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between light and dark themes
- **Gradient Backgrounds**: Beautiful gradient designs throughout the application
- **Interactive Components**: Smooth animations and hover effects
- **Accessibility**: Built with accessibility best practices

### 📱 User Experience
- **Intuitive Dashboard**: Clean and organized quiz management interface
- **Real-time Updates**: Live updates when publishing or modifying quizzes
- **Copy-to-Clipboard**: Easy sharing with one-click link copying
- **Progress Indicators**: Loading states and progress feedback
- **Error Handling**: Comprehensive error handling with user-friendly messages

## 🛠️ Technology Stack

### Frontend
- **Next.js 14+**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern component library
- **Lucide React**: Beautiful icon library
- **Chart.js**: Data visualization and analytics
- **React Chart.js 2**: React wrapper for Chart.js

### Backend & Database
- **Supabase**: Backend-as-a-Service platform
- **PostgreSQL**: Robust relational database
- **Supabase Auth**: Authentication and user management
- **Supabase SSR**: Server-side rendering support

### AI & External Services
- **Google Gemini AI**: AI content generation and analysis
- **@google/genai**: Official Google Gemini SDK

### Development Tools
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### Styling & Theming
- **Tailwind CSS**: Utility-first styling
- **CSS Variables**: Dynamic theming support
- **next-themes**: Theme switching functionality
- **Tailwind Animate**: Animation utilities

## 📁 Project Structure

```
quizresultapp/
├── app/                          # Next.js App Router
│   ├── (auth-pages)/            # Authentication pages
│   │   ├── sign-in/             # Login page
│   │   ├── sign-up/             # Registration page
│   │   ├── forgot-password/     # Password reset
│   │   └── layout.tsx           # Auth layout
│   ├── auth/                    # Authentication handlers
│   │   └── callback/            # OAuth callbacks
│   ├── protected/               # Protected user routes
│   │   ├── quizzes/             # Quiz management
│   │   │   ├── new/             # Create new quiz
│   │   │   ├── [id]/            # Individual quiz management
│   │   │   │   ├── edit/        # Edit quiz
│   │   │   │   └── responses/   # View responses
│   │   │   └── page.tsx         # Quiz list
│   │   └── page.tsx             # Dashboard
│   ├── quiz/                    # Public quiz pages
│   │   └── [id]/                # Take quiz
│   │       └── result/          # Quiz results
│   ├── actions.ts               # Server actions
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── ui/                      # UI components (shadcn/ui)
│   ├── tutorial/                # Onboarding components
│   ├── header-auth.tsx          # Authentication header
│   ├── hero.tsx                 # Landing page hero
│   ├── theme-switcher.tsx       # Theme toggle
│   └── ...
├── lib/                         # Utility libraries
│   └── utils.ts                 # Common utilities
├── utils/                       # Application utilities
│   ├── supabase/                # Supabase configuration
│   │   ├── client.ts            # Browser client
│   │   ├── server.ts            # Server client
│   │   ├── middleware.ts        # Auth middleware
│   │   └── check-env-vars.ts    # Environment validation
│   └── utils.ts                 # Additional utilities
├── middleware.ts                # Next.js middleware
├── components.json              # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Supabase account
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quizresultapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Set up Supabase database**
   
   Run the following SQL in your Supabase SQL editor:

   ```sql
   -- Enable Row Level Security
   ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

   -- Create quizzes table
   CREATE TABLE public.quizzes (
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
   CREATE TABLE public.questions (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     quiz_id UUID REFERENCES public.quizzes(id) ON DELETE CASCADE,
     text TEXT NOT NULL,
     marks INTEGER DEFAULT 1,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
   );

   -- Create options table
   CREATE TABLE public.options (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE,
     text TEXT NOT NULL,
     is_correct BOOLEAN DEFAULT false,
     points INTEGER DEFAULT 0
   );

   -- Create responses table
   CREATE TABLE public.responses (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     quiz_id UUID REFERENCES public.quizzes(id) ON DELETE CASCADE,
     user_id UUID REFERENCES auth.users(id),
     respondent_name TEXT,
     submitted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
   );

   -- Create answers table
   CREATE TABLE public.answers (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     response_id UUID REFERENCES public.responses(id) ON DELETE CASCADE,
     question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE,
     option_id UUID REFERENCES public.options(id) ON DELETE CASCADE
   );

   -- Set up Row Level Security policies
   CREATE POLICY "Users can view their own quizzes" ON public.quizzes
     FOR SELECT USING (auth.uid() = user_id);

   CREATE POLICY "Users can insert their own quizzes" ON public.quizzes
     FOR INSERT WITH CHECK (auth.uid() = user_id);

   CREATE POLICY "Users can update their own quizzes" ON public.quizzes
     FOR UPDATE USING (auth.uid() = user_id);

   CREATE POLICY "Users can delete their own quizzes" ON public.quizzes
     FOR DELETE USING (auth.uid() = user_id);

   CREATE POLICY "Anyone can view published quizzes" ON public.quizzes
     FOR SELECT USING (is_published = true);

   CREATE POLICY "Anyone can insert responses" ON public.responses
     FOR INSERT WITH CHECK (true);

   CREATE POLICY "Anyone can insert answers" ON public.answers
     FOR INSERT WITH CHECK (true);

   CREATE POLICY "Quiz owners can view responses" ON public.responses
     FOR SELECT USING (
       quiz_id IN (
         SELECT id FROM public.quizzes WHERE user_id = auth.uid()
       )
     );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses a relational database schema with the following main entities:

### Tables
- **quizzes**: Store quiz metadata and settings
- **questions**: Individual questions within quizzes
- **options**: Answer options for each question
- **responses**: User submissions for quizzes
- **answers**: Specific answers selected by users

### Key Features
- **UUID Primary Keys**: Secure, non-sequential identifiers
- **Cascade Deletes**: Maintains referential integrity
- **Timestamps**: Automatic creation time tracking
- **Row Level Security**: Database-level access control
- **Flexible Scoring**: Points-based scoring system

## 🎯 Usage Guide

### Creating Quizzes
1. **Sign up/Login** to your account
2. **Navigate to Dashboard** and click "Create New Quiz"
3. **Choose Creation Method**:
   - Manual: Build questions step by step
   - AI: Generate questions automatically using Gemini AI
4. **Configure Quiz**:
   - Add title and description
   - Set up questions and options
   - Assign points to different answers
5. **Save and Publish** your quiz

### Taking Quizzes
1. **Access Public Link** shared by quiz creator
2. **Answer Questions** by selecting options
3. **Submit Responses** to see results
4. **View Detailed Results** with AI analysis

### Analyzing Responses
1. **Access Quiz Management** from your dashboard
2. **View Response Analytics** with filtering options
3. **Generate AI Insights** for comprehensive analysis
4. **Export Data** for further analysis

## 🔧 Configuration

### Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `GEMINI_API_KEY`: Google Gemini API key for AI features

### Customization
- **Themes**: Modify `tailwind.config.ts` for custom styling
- **Components**: Extend shadcn/ui components in `components/ui/`
- **Database**: Add custom fields to existing tables as needed

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository** to Vercel
2. **Set Environment Variables** in Vercel dashboard
3. **Deploy** with automatic builds

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **Railway**: Full-stack deployment support
- **DigitalOcean**: App Platform deployment

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Supabase Team** for the powerful backend platform
- **Google** for Gemini AI capabilities
- **shadcn/ui** for the beautiful component library
- **Vercel** for deployment and hosting

## 📞 Support

For support, email support@scoreup.com or join our Discord community.

---

**Built with ❤️ using Next.js, Supabase, and AI**
