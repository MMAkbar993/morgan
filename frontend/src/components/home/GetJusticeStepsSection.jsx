import React from 'react';

const STEPS = [
  {
    number: '1',
    title: 'Get a Free Case Evaluation',
    description:
      "Tell us what happened—we'll listen, answer your questions, and explain your options with no obligation. Our team is available 24/7 to give you the guidance you need.",
    linkLabel: 'Get Justice',
  },
  {
    number: '2',
    title: 'Get the Best Legal Support',
    description:
      "From paperwork to dealing with insurance companies, we take care of every detail so you can focus on healing. You won't pay a dime until we win your case.",
    linkLabel: 'Get Justice',
  },
  {
    number: '3',
    title: 'Get Max Compensation',
    description:
      'We fight to get you every dollar you deserve, and you get paid as quickly as possible. No stress, no hassle—just real results.',
    linkLabel: 'Get Justice',
  },
];

export default function GetJusticeStepsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-[#f2f5ff] to-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map(({ number, title, description, linkLabel }) => (
            <article
              key={number}
              className="rounded-2xl bg-white p-8 shadow-[0_18px_45px_-25px_rgba(9,38,85,0.35)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0a2043] text-2xl font-bold text-white">
                {number}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0a2043]">{title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-[#1f2940]">{description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-semibold uppercase tracking-wide text-[#0a2043] hover:text-[#f5d000]"
              >
                {linkLabel}
                <span className="ml-1 text-base">›</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


