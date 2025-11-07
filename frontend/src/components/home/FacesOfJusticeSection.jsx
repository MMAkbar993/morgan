import React, { useState, useRef, useEffect } from 'react';

export default function FacesOfJusticeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);
  const attorneys = [
    {
      name: "Ashley Winstead",
      title: "Trial Attorney, Jacksonville",
      image: "2.avif"
    },
    {
      name: "Jason Miller",
      title: "Managing Partner, Jacksonville",
      image: "3.avif"
    },
    {
      name: "Jac",
      title: "Trial Attorney",
      image: "1.avif"
    },
    {
      name: "Attorney 4",
      title: "Trial Attorney",
      image: "4.avif"
    },
    {
      name: "Attorney 5",
      title: "Trial Attorney",
      image: "8.webp"
    }
  ];
  const totalSlides = attorneys.length;

  const scrollToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slide = container.children[index];
    if (!slide) return;

    slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    scrollToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              The Faces of Justice
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-800 md:text-xl">
              Our 1,000+ attorneys are whip-smart, bighearted, and passionate people who wouldn't hesitate to go the extra mile for their clients.
            </p>
            
            {/* Signature Placeholder */}
            <div className="mb-6 w-full max-w-[320px]">
              <div className="text-sm italic text-gray-400">Signature</div>
            </div>
            
            {/* Matt Morgan Profile */}
            <div className="mb-8 flex w-full max-w-md items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                {/* <div className="text-gray-600 text-xs text-center">MM</div> */}
                <img src="3.avif" alt="" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Matt Morgan</div>
                <div className="text-gray-600">Managing Partner</div>
              </div>
            </div>
            
            <a
              href="#"
              className="group mb-8 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Meet our attorneys
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <p className="text-xs leading-relaxed text-gray-500">
              The attorneys shown in these videos may not be licensed in your state. To find an attorney licensed in your area, please visit our attorney page.
            </p>
          </div>

          {/* Right Column - Video Thumbnails */}
          <div className="flex flex-col">
            <div className="relative mb-6">
              <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 lg:-left-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe000] lg:flex"
                  aria-label="Show previous attorney"
                >
                  <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-hide"
              >
                {attorneys.map((attorney, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[85vw] sm:w-60 md:w-64 lg:w-72 xl:w-80 snap-center transition-transform duration-200 ${
                      index === currentSlide ? 'scale-[1.02]' : 'scale-100'
                    }`}
                  >
                    <div
                      className={`relative mb-3 overflow-hidden rounded-2xl shadow-lg aspect-[3/4] ${
                        index === currentSlide
                          ? 'ring-4 ring-[#ffe000] ring-offset-2 ring-offset-white'
                          : 'ring-1 ring-gray-200'
                      }`}
                    >
                      <img
                        src={`/${attorney.image}`}
                        alt={attorney.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />

                      {/* Play Button */}
                      <button
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        className="group absolute inset-0 flex items-center justify-center"
                        aria-label={`Play video for ${attorney.name}`}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffe000] shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
                          <svg className="ml-1 h-6 w-6 text-black sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{attorney.name}</div>
                      <div className="text-sm text-gray-600">{attorney.title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 lg:-right-6">
                <button
                  type="button"
                  onClick={handleNext}
                  className="hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe000] lg:flex"
                  aria-label="Show next attorney"
                >
                  <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {attorneys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-gray-900'
                      : 'w-2 bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <div className="mt-3 flex w-full items-center justify-center gap-4 sm:hidden">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm transition hover:bg-gray-200"
                  aria-label="Show previous attorney"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm transition hover:bg-gray-200"
                  aria-label="Show next attorney"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

