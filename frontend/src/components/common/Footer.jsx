import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Logo and Intro Section */}
          <div className="lg:w-1/3">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-1">
                MORGAN & MORGAN
                <span className="block w-24 h-1 bg-[#ffe000] mt-1"></span>
              </h2>
              <p className="text-sm text-gray-600">AMERICA'S LARGEST INJURY LAW FIRM</p>
            </div>
            <p className="text-gray-700 mb-4 text-sm">
              After 35 years, Morgan & Morgan remains a family firm dedicated to fighting for the average American family.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-semibold text-sm">100k+ 5-Star Reviews</span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* M&M Column */}
          <div>
            <h3 className="font-bold mb-4">M&M</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Practice Areas</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Our Results</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Our Attorneys</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">In the Media</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Accessibility</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Complaints</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Pound Law</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Opt Out</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Co-counsel</a></li>
              <li><a href="#" className="hover:text-[#ffe000] transition-colors">Editorial Policy</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex space-x-2 mb-6">
              <a href="#" className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">App Stores</h4>
              <div className="space-y-2">
                <a href="#" className="block">
                  <div className="border border-gray-300 px-3 py-2 text-xs flex items-center space-x-2 hover:bg-gray-50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span>Download on the App Store</span>
                  </div>
                </a>
                <a href="#" className="block">
                  <div className="border border-gray-300 px-3 py-2 text-xs flex items-center space-x-2 hover:bg-gray-50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>GET IT ON Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Footer Logos */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-wrap gap-8 mb-8">
            <div className="text-sm font-bold">MORGAN & MORGAN<br /><span className="font-normal">THE MORGAN CONNECTION</span></div>
            <div className="text-sm font-bold">MORGAN MORGAN<br /><span className="font-normal">BUSINESS TRIAL GROUP</span></div>
            <div className="text-sm font-bold">THE WHISTLEBLOWER ATTORNEYS<br /><span className="text-xs font-normal">MORGAN & MORGAN</span></div>
            <div className="text-sm font-bold">ABOGADOS.COM<br /><span className="text-xs font-normal">MORGAN & MORGAN</span></div>
            <div className="text-sm font-bold flex items-center">
              CLASS ACTION COM
              <svg className="w-5 h-4 ml-1" viewBox="0 0 20 16" fill="none">
                <rect x="0" y="0" width="20" height="2.67" fill="currentColor"/>
                <rect x="0" y="2.67" width="20" height="2.67" fill="white"/>
                <rect x="0" y="5.34" width="20" height="2.67" fill="currentColor"/>
                <rect x="0" y="8" width="20" height="2.67" fill="white"/>
                <rect x="0" y="10.67" width="20" height="2.67" fill="currentColor"/>
                <rect x="0" y="13.34" width="20" height="2.67" fill="white"/>
                <path d="M0 0 L0 16 L6 12 L0 8 Z" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-8">
          <h3 className="font-bold mb-4">Select Offices</h3>
          <p className="text-sm text-gray-700 mb-2">
            Orlando, Fort Myers, Jacksonville, Miami, Atlanta, Tampa, Los Angeles, Boston, New York City, Philadelphia, Nashville
          </p>
          <p className="text-sm text-gray-600">
            For a full list of locations in your area please visit our <a href="#" className="text-[#ffe000] hover:underline">Office Locations</a> page.
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="mb-8 text-xs text-gray-600">
          <p>
            This site is designed to be accessible to and usable by people with and without disabilities. Please contact us if you encounter an accessibility or usability issue on this site. Attorney advertising. Prior results do not guarantee a similar outcome. Cases will be handled by attorneys licensed in the local jurisdiction. Cases may be associated with, or referred to, other law firms as co-counsel or referral counsel. Based on select nationwide reviews.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-600">
              ©2025 Morgan and Morgan, P.A. All rights reserved
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-700 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
                Your privacy choices.
              </button>
              <a href="#" className="text-sm text-gray-600 hover:text-[#ffe000] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-[#ffe000] transition-colors">Disclaimers and Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

