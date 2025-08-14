import React from 'react'

export interface ListingCardProps {
  title: string
  year: number
  trim: string
  generation: string
  exterior_color: string
  interior_color: string
  transmission: string
  mileage: number
  location: string
  price: number
  vin?: string
  source: string
  listing_url: string
  image_url: string
}

export function ListingCard(props: ListingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-primary-200 p-6 hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img 
          src={props.image_url} 
          alt={props.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-accent-400 text-primary-900 text-xs font-bold rounded-full">
            {props.source}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title and Year */}
        <div>
          <h3 className="text-xl font-bold text-primary-900 mb-1">
            {props.year} {props.trim}
          </h3>
          <p className="text-sm text-gray-800">
            {props.generation} • {props.exterior_color} / {props.interior_color}
          </p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center text-gray-800">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {props.mileage.toLocaleString()} mi
          </div>
          <div className="flex items-center text-gray-800">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 01-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {props.transmission}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-800">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {props.location}
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-primary-100">
          <div className="text-2xl font-bold text-accent-400 mb-3">
            ${props.price.toLocaleString()}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <a 
              href={props.listing_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-primary-900 text-white text-center py-2 px-4 rounded-xl hover:bg-primary-800 transition-colors font-medium"
            >
              View Listing
            </a>
            <button className="px-4 py-2 border border-primary-300 text-gray-800 rounded-xl hover:bg-primary-50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* VIN if available */}
        {props.vin && (
          <div className="pt-2 border-t border-primary-100">
            <p className="text-xs text-primary-600 font-mono">
              VIN: {props.vin}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
