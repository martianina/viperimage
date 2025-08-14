interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export class MailerLiteService {
  private apiKey: string;
  private baseUrl = 'https://connect.mailerlite.com/api';

  constructor() {
    this.apiKey = process.env.MAILERLITE_API_KEY!;
  }

  async sendEmail(data: EmailData): Promise<boolean> {
    try {
      // For now, just log the email data
      console.log('Email would be sent:', data);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async sendPasswordResetEmail(email: string, resetToken: string): Promise<boolean> {
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;
    
    return this.sendEmail({
      to: email,
      subject: 'Password Reset Request',
      html: `
        <h2>Password Reset Request</h2>
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link expires in 24 hours.</p>
      `,
    });
  }

  async sendVerificationEmail(email: string, verificationToken: string): Promise<boolean> {
    const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verification?token=${verificationToken}`;
    
    return this.sendEmail({
      to: email,
      subject: 'Verify Your Email',
      html: `
        <h2>Welcome to Ginger Science!</h2>
        <p>Please verify your email address by clicking the link below:</p>
        <a href="${verificationUrl}">Verify Email</a>
        <p>If you didn't create an account, please ignore this email.</p>
      `,
    });
  }
}

export const mailerLite = new MailerLiteService(); 