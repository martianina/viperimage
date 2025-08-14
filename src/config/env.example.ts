// Copy this file to .env.local and fill in your actual values

export const envExample = {
  // NextAuth Configuration
  NEXTAUTH_SECRET: 'your-nextauth-secret-key-here',
  NEXTAUTH_URL: 'http://localhost:3000',

  // Supabase Configuration
  NEXT_PUBLIC_SUPABASE_URL: 'your-supabase-project-url',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: 'your-supabase-anon-key',
  SUPABASE_SERVICE_ROLE_KEY: 'your-supabase-service-role-key',

  // Google OAuth
  GOOGLE_CLIENT_ID: 'your-google-client-id',
  GOOGLE_CLIENT_SECRET: 'your-google-client-secret',

  // MailerLite Configuration
  MAILERLITE_API_KEY: 'your-mailerlite-api-key',
  MAILERLITE_GROUP_ID: 'your-mailerlite-group-id',

  // Email Configuration
  EMAIL_FROM: 'noreply@yourdomain.com',
  EMAIL_SERVER_HOST: 'smtp.mailerlite.com',
  EMAIL_SERVER_PORT: '587',
  EMAIL_SERVER_USER: 'your-mailerlite-username',
  EMAIL_SERVER_PASSWORD: 'your-mailerlite-password',
}; 