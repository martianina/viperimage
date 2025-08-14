import React from 'react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-slate-900 tracking-tight">
          <span className="text-yellow-400">The VIPER GUY</span>
        </Link>
        <div className="space-x-10">
          <Link href="/" className="font-medium text-slate-700 hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/model-year/1996" className="font-medium text-slate-700 hover:text-slate-900 transition-colors">Model Years</Link>
          <Link href="/services" className="font-medium text-slate-700 hover:text-slate-900 transition-colors">Services</Link>
          <Link href="/about" className="font-medium text-slate-700 hover:text-slate-900 transition-colors">About</Link>
        </div>
      </div>
    </nav>
  )
} 