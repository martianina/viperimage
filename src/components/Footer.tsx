import React from 'react'

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 border-t border-slate-200">
      <div className="container mx-auto px-8 text-center">
        <p className="text-slate-400 text-sm font-light">
          © {new Date().getFullYear()} <span className="text-viper-400 font-semibold">VIPERGUY</span>. 
          Dodge Viper Market & Archive.
        </p>
      </div>
    </footer>
  )
} 