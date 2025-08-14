'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export function ModelYearSidebar() {
  const pathname = usePathname()
  const currentYear = pathname.split('/').pop()

  return (
    <aside className="w-80 bg-primary border-r border-slate-200 shadow-sm">
      <div className="sticky top-0 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Model Years</h2>
          <p className="text-sm text-slate-600">Dodge Viper</p>
        </div>
        <nav className="space-y-1">
          {Array.from({ length: 26 }, (_, i) => 1992 + i).map((year) => (
            <a
              key={year}
              href={`/model-year/${year}`}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                year.toString() === currentYear
                  ? 'bg-primary text-yellow-400 shadow-md'
                  : 'text-yellow-400 hover:text-yellow-300 hover:bg-slate-100'
              }`}
            >
              {year}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
} 