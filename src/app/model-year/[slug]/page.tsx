import React from 'react'

interface ModelYearPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ModelYearPage({ params }: ModelYearPageProps) {
  const { slug } = await params
  
  return (
    <div className="min-h-screen bg-primary-50 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary-900 mb-4">
            {slug} Dodge Viper
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            Explore the {slug} Dodge Viper generation - specifications, history, and available listings.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Model Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-800">Generation:</span>
                  <span className="font-semibold text-primary-900">
                    {slug === '1996' ? 'Gen II' : 
                     slug === '2008' ? 'Gen IV' : 
                     slug === '2015' ? 'Gen V' : 'Unknown'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">Engine:</span>
                  <span className="font-semibold text-primary-900">V10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-800">Horsepower:</span>
                  <span className="font-semibold text-primary-900">
                    {slug === '1996' ? '450 hp' : 
                     slug === '2008' ? '600 hp' : 
                     slug === '2015' ? '645 hp' : 'Varies'}
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Available Listings</h2>
              <p className="text-gray-800">
                Browse current {slug} Viper listings and find your perfect match.
              </p>
              <div className="mt-4">
                <a 
                  href="/listings/current" 
                  className="inline-block bg-accent-400 text-primary-900 font-bold py-3 px-6 rounded-lg hover:bg-accent-500 transition-colors"
                >
                  View Listings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
