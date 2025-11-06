import React from 'react';

export default function FightingForPeopleSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fighting for the People
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
            There's a reason we're America's largest injury law firm: our size means we can help more people, in more places, and fight for the justice they deserve.
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Segment 1 */}
          <div className="bg-gray-200 p-6 md:p-8 border-r border-gray-300">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              $25 BILLION
            </div>
            <div className="text-sm md:text-base text-gray-700">
              Recovered for clients nationwide
            </div>
          </div>

          {/* Segment 2 */}
          <div className="bg-gray-200 p-6 md:p-8 border-r border-gray-300">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              700,000+
            </div>
            <div className="text-sm md:text-base text-gray-700">
              Clients and families
            </div>
          </div>

          {/* Segment 3 */}
          <div className="bg-gray-200 p-6 md:p-8 border-r border-gray-300 relative">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              50 STATES
            </div>
            <div className="text-sm md:text-base text-gray-700">
              With attorneys ready
            </div>
          </div>

          {/* Segment 4 - Dark Blue with Arrow */}
          <div className="bg-[#1a2b5b] text-white p-6 md:p-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-8">
              <svg className="w-full h-full" viewBox="0 0 32 100" preserveAspectRatio="none">
                <path d="M0,0 L32,50 L0,100 Z" fill="#1a2b5b" />
              </svg>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              1
            </div>
            <div className="text-sm md:text-base">
              Click may change your life
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

