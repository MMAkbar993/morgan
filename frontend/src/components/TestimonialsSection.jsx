import React, { useState } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Morgan & Morgan employees kept me informed through out legal process, especially my case worker, Kathleen, who was very kind and very helpful in explaining the legal paperwork.",
      name: "Tim S.",
      location: "Atlanta, GA",
      rating: 5
    },
    {
      text: "It's well known what Morgan & Morgan says they do. And that's exactly what they do. Period. They handled the process very well and I appreciate them very much. Thank you Morgan and Morgan.",
      name: "Daniel W.",
      location: "Atlanta, GA",
      rating: 5
    }
  ];

  return (
    <section className="bg-[#1a2b5b] text-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            100,000+ Five Star Reviews
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            The reasons why clients trust Morgan & Morgan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-gray-800 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex flex-col">
                <div className="font-bold text-gray-900 mb-1">{testimonial.name}</div>
                <div className="text-gray-600 text-sm mb-2">{testimonial.location}</div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#ffe000]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Video Testimonial - Third Item */}
          <div className="relative bg-white rounded-lg overflow-hidden aspect-square shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">
              <div className="text-gray-600 text-center text-sm">
                <div className="mb-2">Video</div>
                <div>Testimonial</div>
              </div>
            </div>
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-16 h-16 bg-[#ffe000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[...Array(5)].map((_, index) => (
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

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center">
          Results may vary depending on your particular facts and legal circumstances. Based on select nationwide reviews.
        </p>
      </div>
    </section>
  );
}

