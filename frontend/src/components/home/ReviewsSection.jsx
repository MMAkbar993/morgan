import React, { useEffect, useMemo, useState } from 'react';

const REVIEWS = [
  {
    id: 'review-1',
    author: 'Tim S.',
    location: 'Atlanta, GA',
    rating: 5,
    quote:
      'Morgan & Morgan employees kept me informed throughout our legal process, especially my case worker, Kathleen, who was very kind and very helpful in explaining the legal paperwork.',
  },
  {
    id: 'review-2',
    author: 'Daniel W.',
    location: 'Atlanta, GA',
    rating: 5,
    quote:
      "It's well known what Morgan & Morgan says they do. And that’s exactly what they do. They handled the process very well and I appreciate them very much. Thank you Morgan and Morgan.",
  },
  {
    id: 'review-3',
    author: 'Claudia R.',
    location: 'Orlando, FL',
    rating: 5,
    quote:
      'They were compassionate and responsive every step of the way. I always felt like my case mattered and that I was in capable hands.',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#fbbf24]">
      {Array.from({ length: count }, (_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(() => REVIEWS, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#0d2248] py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">100,000+ Five Star Reviews</h2>
          <p className="mt-3 text-lg text-white/80">The reasons why clients trust Morgan &amp; Morgan.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((review, index) => {
              const isActive = index === activeIndex;
              return (
                <article
                  key={review.id}
                  className={`col-span-1 rounded-3xl bg-white p-8 text-left text-[#111827] transition duration-500 ${
                    isActive ? 'block opacity-100' : 'hidden opacity-0'
                  } md:block md:opacity-100`}
                  aria-hidden={!isActive}
                >
                  <div className="mb-6 text-3xl text-[#3b82f6]" aria-hidden="true">
                    “
                  </div>
                  <p className="text-base leading-relaxed text-[#1f2937]">{review.quote}</p>
                  <div className="mt-6 font-semibold text-[#111827]">{review.author}</div>
                  <div className="text-sm text-[#374151]">{review.location}</div>
                  <div className="mt-4">
                    <StarRow count={review.rating} />
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="relative flex items-center justify-center rounded-3xl bg-[#132c5d]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:max-w-[320px]">
              <img
                src="/20.avif"
                alt="Happy Morgan & Morgan client testimonial"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <button
                type="button"
                className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f5d000] text-[#0d2248] shadow-lg transition hover:scale-105"
                aria-label="Play client testimonial video"
              >
                <svg className="ml-1 h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.25 5.5v13l9.75-6.5-9.75-6.5z" />
                </svg>
              </button>
            </div>
          </aside>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3" role="tablist" aria-label="Client testimonials">
          {items.map((_item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={_item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => goToIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  isActive ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                }`}
              >
                <span className="sr-only">Go to review {index + 1}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-white/60">
          Results may vary depending on your particular facts and legal circumstances. Based on select nationwide reviews.
        </p>
      </div>
    </section>
  );
}


