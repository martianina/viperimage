'use client';

import { useState } from 'react';
import { FaDownload, FaExternalLinkAlt, FaSpinner, FaTimes } from 'react-icons/fa';

const PublicWhitepaperPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // GitHub Pages URL for the whitepaper
  const pdfUrl = "https://ginger-science.github.io/whitepaper/";

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Full-Page PDF Viewer */}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
            <div className="text-center">
              <FaSpinner className="w-8 h-8 text-brand-500 animate-spin mx-auto mb-3" />
              <p className="text-gray-600">Loading whitepaper...</p>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
            <div className="text-center max-w-md mx-auto p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTimes className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load PDF</h3>
              <p className="text-gray-600 mb-4">
                The whitepaper couldn't be loaded. Please try opening it in a new tab or downloading the file.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-md font-medium transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                  Open in New Tab
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition-colors duration-200"
                >
                  <FaDownload className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        )}

        <iframe
          src={pdfUrl}
          className="w-full h-screen"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title="Ginger Science Whitepaper"
        />
      </div>
    </div>
  );
};

export default PublicWhitepaperPage;
