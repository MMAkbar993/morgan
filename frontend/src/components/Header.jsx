import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a2b5b] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="border-2 border-black outline outline-1 outline-[#ffe000] px-3 py-1.5 inline-block">
              <div className="text-[#ffe000] font-bold text-sm md:text-lg tracking-tight">
                MORGAN & MORGAN
              </div>
            </div>
            <div className="mt-1 text-xs hidden md:block">
              <span className="text-white">AMERICA'S </span>
              <span className="text-[#ffe000] font-semibold">LARGEST</span>
              <span className="text-white"> INJURY LAW FIRM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-4 xl:space-x-6">
              <a href="#" className="hover:text-[#ffe000] transition-colors text-sm">Locations</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors flex items-center text-sm">
                Practice Areas
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#ffe000] transition-colors text-sm">Attorneys</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors flex items-center text-sm">
                About
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#ffe000] transition-colors text-sm">Our Results</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors text-sm">Contact</a>
            </nav>

            {/* Search Icon */}
            <button className="hover:text-[#ffe000] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Phone Number */}
            <div className="text-[#ffe000] font-bold text-lg xl:text-2xl">
              (844) 332-1326
            </div>

            {/* Free Case Review Button */}
            <button className="bg-[#ffe000] text-black font-bold px-3 xl:px-4 py-2 rounded hover:bg-[#e6cc00] transition-colors text-sm xl:text-base">
              Free Case Review
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-[#ffe000] transition-colors">Locations</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors">Practice Areas</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors">Attorneys</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors">About</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors">Our Results</a>
              <a href="#" className="hover:text-[#ffe000] transition-colors">Contact</a>
              <div className="text-[#ffe000] font-bold text-lg">(844) 332-1326</div>
              <button className="bg-[#ffe000] text-black font-bold px-4 py-2 rounded hover:bg-[#e6cc00] transition-colors w-full">
                Free Case Review
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

