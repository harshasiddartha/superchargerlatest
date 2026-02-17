# 🚀 Deployment Guide

This guide provides step-by-step instructions for deploying SuperCharger to various platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
- [Netlify Deployment](#netlify-deployment)
- [Railway Deployment](#railway-deployment)
- [DigitalOcean App Platform](#digitalocean-app-platform)
- [Self-Hosted Deployment](#self-hosted-deployment)
- [Post-Deployment Configuration](#post-deployment-configuration)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed locally
- ✅ A Supabase account and project created
- ✅ A Google Gemini API key
- ✅ Git repository set up
- ✅ All environment variables ready

---

## Pre-Deployment Checklist

### 1. Database Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the project to be fully provisioned (2-3 minutes)

2. **Run Database Migration**
   - Navigate to your Supabase project dashboard
   - Go to **SQL Editor**
   - Copy the contents of `supabase-migration.sql`
   - Paste and execute the SQL script
   - Verify all tables are created successfully

3. **Verify RLS Policies**
   - Check that Row Level Security is enabled on all tables
   - Ensure policies are correctly set up
   - **Important**: Do NOT enable RLS on `auth.users` table

### 2. Environment Variables

Prepare the following environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
GEMINI_API_KEY=your-gemini-api-key-here
```

**Where to find Supabase credentials:**
- Go to your Supabase project dashboard
- Navigate to **Settings** → **API**
- Copy the **Project URL** and **anon/public key**

**Where to get Gemini API key:**
- Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
- Create a new API key
- Copy and securely store it

### 3. Build Test

Test the build locally before deploying:

```bash
npm run build
```

If the build succeeds, you're ready to deploy!

---

## Vercel Deployment (Recommended)

Vercel is the recommended platform for Next.js applications due to seamless integration and optimal performance.

### Step 1: Prepare Your Repository

1. **Push to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

### Step 2: Connect to Vercel

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your Git provider (GitHub recommended)

2. **Import Project**
   - Click **"Add New Project"**
   - Select your repository
   - Vercel will auto-detect Next.js

### Step 3: Configure Environment Variables

1. **Add Environment Variables**
   - In the project settings, go to **Environment Variables**
   - Add each variable:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `GEMINI_API_KEY`

2. **Set for All Environments**
   - Select **Production**, **Preview**, and **Development**
   - Click **Save**

### Step 4: Deploy

1. **Configure Build Settings**
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

2. **Deploy**
   - Click **Deploy**
   - Wait for build to complete (2-5 minutes)
   - Your app will be live at `your-project.vercel.app`

### Step 5: Custom Domain (Optional)

1. **Add Domain**
   - Go to **Settings** → **Domains**
   - Add your custom domain
   - Follow DNS configuration instructions
   - SSL certificate is automatically provisioned

### Vercel-Specific Notes

- ✅ Automatic HTTPS
- ✅ Edge Network (CDN)
- ✅ Automatic deployments on git push
- ✅ Preview deployments for pull requests
- ✅ Built-in analytics
- ✅ Environment variable management
- ✅ Zero-downtime deployments

---

## Netlify Deployment

### Step 1: Prepare Build Configuration

Create `netlify.toml` in the root directory:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy via Netlify Dashboard

1. **Sign up/Login**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your Git provider

2. **New Site from Git**
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Add Environment Variables**
   - Go to **Site settings** → **Environment variables**
   - Add all required variables
   - Click **Deploy site**

### Step 3: Deploy via Netlify CLI (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

---

## Railway Deployment

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project

### Step 2: Deploy from GitHub

1. **Connect Repository**
   - Click **"New Project"**
   - Select **"Deploy from GitHub repo"**
   - Choose your repository

2. **Configure Service**
   - Railway auto-detects Next.js
   - Build command: `npm run build`
   - Start command: `npm start`

3. **Add Environment Variables**
   - Go to **Variables** tab
   - Add all required environment variables
   - Railway will automatically redeploy

4. **Generate Domain**
   - Railway provides a `.railway.app` domain
   - Custom domains available in Pro plan

### Railway-Specific Notes

- ✅ Automatic deployments
- ✅ Built-in PostgreSQL option (if needed)
- ✅ Environment variable management
- ✅ Logs and metrics dashboard

---

## DigitalOcean App Platform

### Step 1: Create App

1. **Sign up/Login**
   - Go to [digitalocean.com](https://digitalocean.com)
   - Navigate to **App Platform**

2. **Create App from Source**
   - Click **"Create App"**
   - Connect your Git repository
   - Select branch: `main`

### Step 2: Configure App

1. **Build Settings**
   - Type: **Web Service**
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: `3000`

2. **Environment Variables**
   - Add all required variables
   - Set for all environments

3. **Deploy**
   - Click **"Create Resources"**
   - Wait for deployment (5-10 minutes)

### Step 3: Custom Domain

1. **Add Domain**
   - Go to **Settings** → **Domains**
   - Add your domain
   - Configure DNS records as instructed

---

## Self-Hosted Deployment

### Option 1: Docker Deployment

1. **Create Dockerfile**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

2. **Update next.config.ts**

Add output configuration:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // ... rest of config
};
```

3. **Build and Run**

```bash
# Build Docker image
docker build -t supercharger .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  -e GEMINI_API_KEY=your_key \
  supercharger
```

### Option 2: Traditional Server Deployment

1. **Server Requirements**
   - Node.js 18+
   - npm or yarn
   - PM2 (for process management)
   - Nginx (for reverse proxy)

2. **Deploy Steps**

```bash
# Clone repository
git clone your-repo-url
cd supercharger

# Install dependencies
npm install

# Build application
npm run build

# Set environment variables
export NEXT_PUBLIC_SUPABASE_URL=your_url
export NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
export GEMINI_API_KEY=your_key

# Start with PM2
npm install -g pm2
pm2 start npm --name "supercharger" -- start
pm2 save
pm2 startup
```

3. **Nginx Configuration**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Post-Deployment Configuration

### 1. Update Supabase Redirect URLs

1. **Go to Supabase Dashboard**
   - Navigate to **Authentication** → **URL Configuration**
   - Add your production URL to **Site URL**
   - Add `https://your-domain.com/auth/callback` to **Redirect URLs**

### 2. Test Authentication Flow

1. **Sign Up**
   - Test user registration
   - Verify email confirmation (if enabled)

2. **Sign In**
   - Test login functionality
   - Verify session persistence

3. **Password Reset**
   - Test forgot password flow
   - Verify email delivery

### 3. Verify Database Connection

1. **Check Database Queries**
   - Create a test quiz
   - Verify data persistence
   - Check RLS policies are working

### 4. Test AI Features

1. **Gemini API**
   - Create a quiz with AI generation
   - Verify API calls are working
   - Check rate limits and quotas

### 5. Monitor Performance

1. **Set Up Monitoring**
   - Enable Vercel Analytics (if using Vercel)
   - Set up error tracking (Sentry, LogRocket, etc.)
   - Monitor API response times

---

## Troubleshooting

### Build Failures

**Issue**: Build fails with module not found errors
- **Solution**: Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Issue**: TypeScript errors during build
- **Solution**: Fix TypeScript errors locally first
- Run `npm run build` locally before deploying

### Environment Variables

**Issue**: Environment variables not working
- **Solution**: 
  - Verify variables are set correctly in platform dashboard
  - Restart/redeploy after adding variables
  - Check variable names match exactly (case-sensitive)

**Issue**: `NEXT_PUBLIC_` variables not available
- **Solution**: Variables prefixed with `NEXT_PUBLIC_` are exposed to browser
- Ensure they're set in production environment

### Database Connection

**Issue**: Cannot connect to Supabase
- **Solution**:
  - Verify Supabase URL and keys are correct
  - Check Supabase project is active
  - Verify network/firewall settings

**Issue**: RLS policies blocking requests
- **Solution**:
  - Review RLS policies in Supabase dashboard
  - Ensure user is authenticated
  - Check policy conditions match your use case

### Authentication Issues

**Issue**: Redirect URLs not working
- **Solution**:
  - Add production URL to Supabase redirect URLs
  - Include both `http://` and `https://` if needed
  - Check callback route is accessible

**Issue**: Session not persisting
- **Solution**:
  - Verify cookie settings in Supabase
  - Check domain settings match your deployment
  - Ensure HTTPS is enabled in production

### AI/API Issues

**Issue**: Gemini API errors
- **Solution**:
  - Verify API key is correct
  - Check API quota/limits
  - Review error messages for specific issues
  - Ensure `@google/genai` package is installed

**Issue**: Rate limit errors (429)
- **Solution**:
  - Check your API quota
  - Implement retry logic (already included)
  - Consider upgrading API tier

### Performance Issues

**Issue**: Slow page loads
- **Solution**:
  - Enable Next.js Image Optimization
  - Use CDN for static assets
  - Optimize database queries
  - Enable caching headers

**Issue**: High memory usage
- **Solution**:
  - Review server resources
  - Optimize bundle size
  - Consider upgrading hosting plan

---

## Security Checklist

Before going live, ensure:

- ✅ Environment variables are secure (not in git)
- ✅ Supabase RLS policies are properly configured
- ✅ HTTPS is enabled
- ✅ API keys have appropriate permissions
- ✅ Rate limiting is configured
- ✅ Error messages don't expose sensitive info
- ✅ CORS settings are correct
- ✅ Database backups are enabled

---

## Support

If you encounter issues not covered here:

1. Check the [README.md](./README.md) for general information
2. Review platform-specific documentation
3. Check Supabase and Gemini API status pages
4. Review application logs for detailed error messages

---

**Happy Deploying! 🚀**
