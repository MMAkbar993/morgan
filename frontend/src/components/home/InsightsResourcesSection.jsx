import React, { useState } from 'react';

export default function InsightsResourcesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "The Basics: What is a personal injury lawsuit?",
      color: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "How Much is My Personal Injury Case Worth?",
      color: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "The Morgan & Morgan Difference",
      color: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Why Case Details Matter",
      color: "bg-blue-100"
    }
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Insights & Resources
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              Explore articles and resources to guide you through your options and making informed decisions after an accident.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
              View more helpful articles
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Article Cards Carousel */}
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className={`${article.color} rounded-lg p-6 md:p-8 min-w-[280px] md:min-w-[320px] flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer`}
                >
                  <div className="text-blue-600 mb-4">
                    {article.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {article.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(3)].map((_, index) => (
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
    </section>
  );
}

