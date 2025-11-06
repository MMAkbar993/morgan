import React, { useState } from 'react';

export default function BigWinsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  return (
    <section className="bg-[#1a2b5b] text-white py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The Right Firm for Big Wins
            </h2>
            
            {/* Sub-heading/Description */}
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Insurance companies know us—and they know we fight for every dollar.
            </p>
            
            {/* Call to Action Button */}
            <button className="bg-[#ffe000] text-black font-bold px-6 py-4 rounded-lg hover:bg-[#e6cc00] transition-colors text-lg mb-6 w-full md:w-auto">
              Get a free case evaluation
            </button>
            
            {/* Secondary Link */}
            <a href="#" className="flex items-center gap-2 text-white hover:text-[#ffe000] transition-colors mb-8 group">
              <span>See more results</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            {/* Legal Disclaimer */}
            <p className="text-xs text-gray-400 leading-relaxed">
              Results may vary depending on your particular facts and legal circumstances. The attorneys shown in these photos may not be licensed in your state. To find an attorney licensed in your area, please visit our attorney page.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Image Container */}
            <div className="relative mb-4">
              {/* Main Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                {/* Placeholder for image - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">
                  <div className="text-gray-600 text-center">
                    <svg className="w-24 h-24 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Case Result Image</p>
                  </div>
                </div>
                
                {/* Case Result Overlay */}
                <div className="absolute bottom-0 left-0 right-0">
                  {/* Top Section - Blue Background */}
                  <div className="bg-[#007bff] text-white px-4 py-3">
                    <p className="text-sm md:text-base">
                      Kimberly won <span className="font-bold">20x</span> what was offered
                    </p>
                  </div>
                  
                  {/* Bottom Section - White Background */}
                  <div className="bg-white text-[#007bff] px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-bold">$100,000</span>
                        <span className="text-xs text-gray-600">insurance offer</span>
                      </div>
                      
                      {/* Arrow */}
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#007bff]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-2xl md:text-3xl font-bold">$1,900,878</span>
                        <span className="text-xs text-gray-600">verdict</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Case Details */}
            <p className="text-white text-sm md:text-base mb-4">
              Car Accident | Orlando, FL
            </p>
            
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

