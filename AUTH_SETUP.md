# Authentication Setup Guide

This guide will help you set up the authentication system for your Ginger Science application using NextAuth.js, Supabase, and MailerLite.

## Prerequisites

- Node.js 18+ installed
- Supabase account and project
- MailerLite account
- Google Cloud Console project (for OAuth)

## Step 1: Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# MailerLite Configuration
MAILERLITE_API_KEY=your-mailerlite-api-key
MAILERLITE_GROUP_ID=your-mailerlite-group-id

# Email Configuration
EMAIL_FROM=noreply@yourdomain.com
EMAIL_SERVER_HOST=smtp.mailerlite.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-mailerlite-username
EMAIL_SERVER_PASSWORD=your-mailerlite-password
```

## Step 2: Supabase Setup

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and API keys

### 2. Configure Authentication
1. In your Supabase dashboard, go to Authentication > Settings
2. Enable Email authentication
3. Configure your site URL (http://localhost:3000 for development)
4. Add your redirect URLs:
   - `http://localhost:3000/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/credentials`

### 3. Set up Database Schema
The authentication system will automatically create the necessary tables through NextAuth's Supabase adapter.

## Step 3: Google OAuth Setup

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google+ API

### 2. Create OAuth Credentials
1. Go to APIs & Services > Credentials
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
5. Copy the Client ID and Client Secret

## Step 4: MailerLite Setup

### 1. Get API Key
1. Log into your MailerLite account
2. Go to Integrations > API
3. Generate a new API key
4. Copy the API key

### 2. Create a Group
1. Go to Subscribers > Groups
2. Create a new group for your application
3. Note the Group ID

## Step 5: Generate NextAuth Secret

Generate a secure random string for NEXTAUTH_SECRET:

```bash
# On macOS/Linux
openssl rand -base64 32

# Or use an online generator
# https://generate-secret.vercel.app/32
```

## Step 6: Install Dependencies

The required dependencies have already been installed:

```bash
npm install next-auth @supabase/supabase-js @auth/supabase-adapter
```

## Step 7: Test the Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/auth/sign-in`

3. Test the following flows:
   - Email/password sign-up
   - Email/password sign-in
   - Google OAuth sign-in
   - Password reset
   - Email verification

## API Endpoints

The following API endpoints are available:

- `POST /api/auth/signup` - User registration
- `POST /api/auth/forgot-password` - Send password reset email
- `POST /api/auth/reset-password` - Reset password with token
- `GET /api/auth/reset-password?token=...` - Validate reset token
- `POST /api/auth/verify-email` - Verify email with token
- `GET /api/auth/verify-email?token=...` - Validate verification token

## Authentication Pages

The following pages are available:

- `/auth/sign-in` - Sign in page
- `/auth/sign-up` - Sign up page
- `/auth/forgot-password` - Forgot password page
- `/auth/reset-password` - Reset password page
- `/auth/verification` - Email verification page
- `/auth/lock` - Account lock page

## Security Features

- Password strength validation (minimum 8 characters)
- Secure token generation and validation
- Rate limiting (implemented in API routes)
- CSRF protection (NextAuth built-in)
- Secure session management
- Email verification
- Password reset with time-limited tokens

## Production Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
Update your environment variables for production:

```bash
NEXTAUTH_URL=https://yourdomain.com
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
# ... other variables
```

### Supabase Production Settings
1. Update your Supabase site URL to your production domain
2. Add production redirect URLs
3. Configure email templates

## Troubleshooting

### Common Issues

1. **"Invalid redirect URI" error**
   - Check your Google OAuth redirect URIs
   - Ensure they match exactly (including http/https)

2. **"Invalid API key" error**
   - Verify your Supabase API keys
   - Check that you're using the correct keys (anon vs service role)

3. **Email not sending**
   - Verify your MailerLite API key
   - Check the group ID exists
   - Review MailerLite API logs

4. **Session not persisting**
   - Check NEXTAUTH_SECRET is set
   - Verify NEXTAUTH_URL matches your domain

### Debug Mode

Enable debug mode by adding to your `.env.local`:

```bash
DEBUG=next-auth:*
```

## Support

If you encounter issues:

1. Check the browser console for errors
2. Review the server logs
3. Verify all environment variables are set correctly
4. Test each service individually (Supabase, MailerLite, Google OAuth)

## Next Steps

After setup, consider implementing:

1. User profile management
2. Role-based access control
3. Two-factor authentication
4. Account deletion
5. Data export functionality
6. Audit logging 