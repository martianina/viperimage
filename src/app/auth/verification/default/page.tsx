'use client';
import Default from '@/components/auth/variants/DefaultAuthLayout';

function VerificationDefault() {
  return (
    <Default
      maincard={
        <div className="mb-16 flex h-full w-full items-center justify-center dark:!bg-navy-900 md:mx-0 md:px-0 lg:mb-10 lg:items-start lg:justify-start">
          {/* Sign in section */}
          <div className="mt-[16vh] flex flex-col rounded-[20px] bg-white pb-16 pt-12 dark:!bg-navy-900 md:pr-6 lg:pr-0 xl:pr-24">
            <h2 className="mt-1 text-4xl font-bold text-navy-700 dark:text-white">
              2-Step Verification
            </h2>
            <p className="ml-1 mt-[15px] text-[15px] text-gray-600">
              Enter your 2-Step Verification email code to unlock!
            </p>
            {/* verification */}
            <div className="mb-4 mt-7 flex w-full items-center justify-center">
              <input
                type="text"
                placeholder="Enter 4-digit code"
                maxLength={4}
                className="w-full max-w-xs rounded-xl border-2 border-gray-200 px-4 py-3 text-center text-2xl font-bold text-navy-700 focus:border-brand-500 focus:outline-none dark:border-gray-600 dark:bg-navy-800 dark:text-white"
                style={{ letterSpacing: '0.5em' }}
              />
            </div>
            {/* button */}
            <button className="linear h-[50px] w-full rounded-xl bg-brand-500 text-base font-medium text-white transition duration-200 hover:bg-brand-600 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Unlock
            </button>
            <p className="mt-4 text-sm font-medium text-navy-700 dark:text-gray-500">
              Haven't received it?
              <span className="text-sm font-medium text-brand-500 dark:text-white">
                {' '}
                Resend a new code{' '}
              </span>
            </p>
          </div>
        </div>
      }
    />
  );
}

export default VerificationDefault;
