'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AuthNavbar = () => {
  const pathname = usePathname();
  const isSignInPage = pathname === '/auth/sign-in';

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-end rounded-xl bg-white/10 p-2 backdrop-blur-xl">
      <div className="relative mt-[3px] flex h-[61px] w-[200px] flex-grow items-center justify-center gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 md:w-[200px] md:flex-grow-0 xl:w-[200px]">
        {/* Login Button - only show if not on sign-in page */}
        {!isSignInPage && (
          <Link
            href="/auth/sign-in"
            className="flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 transition-colors"
          >
            Have an account?<br />Log in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default AuthNavbar; 