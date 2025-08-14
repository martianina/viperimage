import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6">
        <p className="text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-base">
          ©{new Date().getFullYear()} MC1R Data Foundation. All Rights Reserved.
        </p>
        <div className="flex space-x-4 text-sm text-gray-500">
          <Link 
            href="/privacy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-500 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-500 transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
