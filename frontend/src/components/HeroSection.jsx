import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            Personal Injury Lawyers
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Fighting For You
          </h2>
        </div>

        {/* Descriptive Paragraph */}
        <p className="text-lg md:text-xl text-gray-800 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          With 35 years, 1,000 attorneys, and $25 billion recovered, we fight to get you what you deserve—start your free case review anytime by text, phone, or online.
        </p>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* First Feature Box */}
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-1 bg-blue-600 mb-4"></div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide">
              FIGHTING FOR MORE
            </h3>
          </div>

          {/* Second Feature Box */}
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-1 bg-blue-600 mb-4"></div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide">
              THE FEE IS FREE, UNLESS WE WIN
            </h3>
          </div>

          {/* Third Feature Box */}
          <div className="flex flex-col items-center text-center">
            <div className="w-8 h-1 bg-blue-600 mb-4"></div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide">
              LOCAL CARE + NATIONAL POWER
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

