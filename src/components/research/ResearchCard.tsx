'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaCalendarAlt, FaJournalWhills, FaTimes } from 'react-icons/fa';
import { ResearchArticle } from '@/data/researchArticles';

interface ResearchCardProps {
  article: ResearchArticle;
}

const ResearchCard = ({ article }: ResearchCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Format abstract for better readability
  const formatAbstract = (abstract: string) => {
    return abstract
      .replace(/\. /g, '.\n\n')
      .replace(/\n\n+/g, '\n\n')
      .trim();
  };

  return (
    <>
      {/* Research Card */}
      <div
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
        onClick={openModal}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {article.teaser}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-1" />
              <span>{article.year}</span>
            </div>
            <div className="flex items-center">
              <FaJournalWhills className="mr-1" />
              <span className="truncate max-w-[200px]">{article.journal}</span>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            article.category === 'MC1R General' 
              ? 'bg-red-100 text-red-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-900 pr-4">
                  {article.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold p-1"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Publication Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Authors:</span>
                    <p className="text-gray-600 mt-1">{article.authors}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Journal:</span>
                    <p className="text-gray-600 mt-1">{article.journal}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Year:</span>
                    <p className="text-gray-600 mt-1">{article.year}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">PMID:</span>
                    <p className="text-gray-600 mt-1">{article.pmid}</p>
                  </div>
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Abstract</h3>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line bg-gray-50 p-4 rounded-lg">
                  {formatAbstract(article.abstract)}
                </div>
              </div>

              {/* Keywords */}
              {article.keywords && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.keywords.split(', ').map((keyword, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Topics & Concepts</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-medium border border-brand-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Affiliations */}
              {article.affiliations && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-2">Affiliations</h3>
                  <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">
                    {article.affiliations}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 flex items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View on PubMed
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResearchCard; 