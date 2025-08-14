export default function AdminLoading() {
  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-gray-800">
      {/* Sidebar Placeholder */}
      <div className="fixed !z-50 flex min-h-full flex-col bg-white shadow-2xl shadow-white/5 dark:!bg-gray-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 w-80">
        <div className="flex justify-center mt-[50px]">
          <div className="relative flex w-[256px] justify-center rounded-[20px] bg-gradient-to-br from-brand-700 via-brand-500 to-brand-300 pb-4">
            <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-gradient-to-b from-brand-300 to-brand-600">
              <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="mt-16 flex h-fit flex-col items-center text-white">
              <p className="text-lg font-bold">Ginger Science</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="h-full w-full font-dm dark:bg-gray-900 ml-80">
        <main className="mx-2.5 flex-none transition-all dark:bg-gray-800 md:pr-2">
          <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center space-y-4">
              {/* Loading Spinner */}
              <div className="relative">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-brand-300 rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 