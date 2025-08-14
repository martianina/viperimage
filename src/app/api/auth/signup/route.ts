import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { mailerLite } from '@/lib/mailerlite';
import { randomBytes } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const { data: existingUsers, error: checkError } = await supabaseAdmin()
      .from('users')
      .select('id')
      .eq('email', email)
      .limit(1);
    
    if (checkError) {
      console.error('Error checking existing user:', checkError);
    }
    
    if (existingUsers && existingUsers.length > 0) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    // For now, assume first user is admin (we'll handle this properly once DB is set up)
    const isFirstUser = true; // Temporary - will be replaced with actual check

    // Create user in Supabase Auth
    const { data: { user }, error } = await supabaseAdmin().auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email for now
      user_metadata: {
        full_name: name,
        role: isFirstUser ? 'admin' : 'user', // First user becomes admin
      },
    });

    if (error || !user) {
      console.error('Supabase user creation error:', error);
      return NextResponse.json(
        { error: 'Failed to create user' },
        { status: 500 }
      );
    }

    // Generate verification token
    const verificationToken = randomBytes(32).toString('hex');
    
    // Store verification token in user metadata
    const { error: updateError } = await supabaseAdmin().auth.admin.updateUserById(user.id, {
      user_metadata: {
        ...user.user_metadata,
        verification_token: verificationToken,
        verification_expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
      },
    });
    
    if (updateError) {
      console.error('Error updating user metadata:', updateError);
    }

    // Send verification email
    const emailSent = await mailerLite.sendVerificationEmail(email, verificationToken);
    
    if (!emailSent) {
      console.warn('Failed to send verification email to:', email);
    }

    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.user_metadata?.full_name,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 