import React from 'react'

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 border-t border-slate-200">
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <p className="text-slate-400 text-sm font-light">
            © {new Date().getFullYear()} <span className="text-viper-400 font-semibold">The Viper Guy, LLC</span>. 
            All rights reserved.
          </p>
          <p className="text-slate-400 text-sm font-light mt-2">
            Dodge Viper Market & Archive | <a href="https://viperguy.com" className="text-viper-400 hover:text-viper-300 transition-colors">viperguy.com</a>
          </p>
        </div>
        <div className="flex justify-center space-x-8 text-sm">
          <a href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
} 