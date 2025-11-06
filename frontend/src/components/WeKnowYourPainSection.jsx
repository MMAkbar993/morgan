import React from 'react';

export default function WeKnowYourPainSection() {
  return (
    <section className="relative py-0">
      <div className="relative w-full">
        {/* Background Image */}
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-300">
          {/* Placeholder for image - replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600">
            <div className="text-white text-center">
              <div className="text-lg mb-2">Office Meeting Image</div>
              <div className="text-sm">Conference room with team</div>
            </div>
          </div>

          {/* Play Button */}
          <button className="absolute top-1/2 right-1/4 transform -translate-y-1/2 group z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#ffe000] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>

          {/* Overlay with Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              WE KNOW YOUR PAIN.
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl leading-relaxed">
              John Morgan's brother Tim was injured as a teen. Their experience with a lawyer was a nightmare. John spent 35 years building a firm to do better for families like his. And yours.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white py-4 px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-xs text-gray-500 leading-relaxed">
            The attorney featured above is licensed in Florida. For a full list of attorneys in your state please visit our attorney page. Results may vary depending on your particular facts and legal circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}

