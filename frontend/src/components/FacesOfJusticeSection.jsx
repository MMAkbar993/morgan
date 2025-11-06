import React, { useState } from 'react';

export default function FacesOfJusticeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const attorneys = [
    {
      name: "Ashley Winstead",
      title: "Trial Attorney, Jacksonville",
      image: "https://via.placeholder.com/300x400?text=Ashley+Winstead"
    },
    {
      name: "Jason Miller",
      title: "Managing Partner, Jacksonville",
      image: "https://via.placeholder.com/300x400?text=Jason+Miller"
    },
    {
      name: "Jac",
      title: "Trial Attorney",
      image: "https://via.placeholder.com/300x400?text=Jac"
    },
    {
      name: "Attorney 4",
      title: "Trial Attorney",
      image: "https://via.placeholder.com/300x400?text=Attorney+4"
    },
    {
      name: "Attorney 5",
      title: "Trial Attorney",
      image: "https://via.placeholder.com/300x400?text=Attorney+5"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Faces of Justice
            </h2>
            
            <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
              Our 1,000+ attorneys are whip-smart, bighearted, and passionate people who wouldn't hesitate to go the extra mile for their clients.
            </p>
            
            {/* Signature Placeholder */}
            <div className="mb-6">
              <div className="text-gray-400 italic text-sm">Signature</div>
            </div>
            
            {/* Matt Morgan Profile */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <div className="text-gray-600 text-xs text-center">MM</div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Matt Morgan</div>
                <div className="text-gray-600">Managing Partner</div>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8 group">
              Meet our attorneys
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <p className="text-xs text-gray-500 leading-relaxed">
              The attorneys shown in these videos may not be licensed in your state. To find an attorney licensed in your area, please visit our attorney page.
            </p>
          </div>

          {/* Right Column - Video Thumbnails */}
          <div className="flex flex-col">
            <div className="relative mb-4">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                {attorneys.map((attorney, index) => (
                  <div key={index} className="flex-shrink-0 w-64 snap-center">
                    <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-[3/4] mb-3">
                      {/* Video Thumbnail */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">
                        <div className="text-gray-600 text-center text-sm">
                          <div className="mb-2">Video</div>
                          <div>{attorney.name}</div>
                        </div>
                      </div>
                      
                      {/* Play Button */}
                      <button className="absolute inset-0 flex items-center justify-center group">
                        <div className="w-16 h-16 bg-[#ffe000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{attorney.name}</div>
                      <div className="text-gray-600 text-sm">{attorney.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2">
              {attorneys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-gray-900 w-8'
                      : 'bg-gray-400 hover:bg-gray-600'
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

