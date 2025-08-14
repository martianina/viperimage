'use client';
import { PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthNavbar from '@/components/navbar/AuthNavbar';

interface AuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <AuthNavbar />
      </div>
      
      <div className="flex min-h-screen">
        {/* Left side - Auth form */}
        <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Ginger Science"
                  width={120}
                  height={40}
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            {children}
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-orange-600 to-orange-700">
            <div className="flex h-full items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">Welcome to Ginger</h1>
                <p className="mt-4 text-xl opacity-90">
                  Your secure authentication platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
