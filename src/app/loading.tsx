export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-100 dark:bg-gray-800">
      <div className="flex flex-col items-center space-y-4">
        {/* Custom Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-brand-300 rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
        </div>
      </div>
    </div>
  );
} 