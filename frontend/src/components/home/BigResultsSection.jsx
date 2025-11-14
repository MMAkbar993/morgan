import React, { useState } from 'react';

const caseResults = [
  {
    location: 'New Orleans, LA',
    amount: '$13,000,000,000',
    title: 'Deepwater Horizon Oil Spill',
    description: 'In 2010, the Deepwater Horizon explosion became one of the largest environmental disasters in U.S. history, devastating coastal ecosystems and communities across the Gulf. Morgan & Morgan helped fight to achieve a $13 billion resolution for impacted individuals and businesses.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'Los Angeles, CA',
    amount: '$1,800,000,000',
    title: 'Porter Ranch Gas Leak',
    description: 'In 2015, thousands of residents were displaced after a massive methane leak at the Aliso Canyon facility caused widespread illness and property damage. Morgan & Morgan attorneys Mike Morgan, Frank Petosa, and Rena Rocha helped secure a landmark $1.8 billion settlement for those affected.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'San Francisco, CA',
    amount: '$425,651,947',
    title: 'Rodriguez v. Google',
    description: 'In 2025, a federal jury awarded $425.7 million to Google users after finding the company collected data without consent. Morgan & Morgan attorneys John Yanchunis, Ryan McGee, Michael Ram, and Kenya Reddy helped secure the verdict.',
    icon: 'databreach-results.svg',
    iconAlt: 'data breach icon.',
  },
  {
    location: 'Nationwide',
    amount: '$400,000,000',
    title: 'Dicamba Herbicide Settlement',
    description: 'In 2020, farmers reached a $400 million settlement after Dicamba herbicide drifted onto neighboring fields and destroyed crops. Morgan & Morgan attorney Rene Rocha helped achieve justice for thousands of affected farmers nationwide.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'Northern District of Georgia',
    amount: '$380,500,000',
    title: 'Equifax, Inc., Customer Data Security Breach Litigation',
    description: 'In 2020, following a 2017 data breach that exposed personal data of more than 140 million Americans, Equifax agreed to a $380.5 million settlement. Morgan & Morgan attorney John Yanchunis helped secure relief for those affected.',
    icon: 'databreach-results.svg',
    iconAlt: 'data breach icon.',
  },
  {
    location: 'Eastern District of Virginia',
    amount: '$190,000,000',
    title: 'Capital One Consumer Data Security Breach Litigation',
    description: 'In 2022, Capital One agreed to a $190 million settlement after a 2019 data breach exposed personal information of over 100 million people. Morgan & Morgan helped secure compensation and identity protection for affected customers across the U.S.',
    icon: 'databreach-results.svg',
    iconAlt: 'data breach icon.',
  },
  {
    location: 'Alachua, FL',
    amount: '$120,000,000',
    title: 'Jacob T. Rodgers v. City of Gainesville',
    description: 'In 2021, a jury awarded $120 million to Jacob Rodgers after a Gainesville city employee ran a stop sign and plowed into Jacob\'s friend\'s vehicle, leaving him paralyzed. Morgan & Morgan attorneys Jeff Humphries, Brian McClain, and Brian Lee fought to hold the city accountable.',
    icon: 'caraccident-results.svg',
    iconAlt: 'car accident icon',
  },
  {
    location: 'Northern District of California',
    amount: '$117,500,000',
    title: 'Yahoo! Inc. Customer Data Security Breach Litigation',
    description: 'In 2020, Yahoo agreed to a $117.5 million settlement after data breaches from 2013–2016 exposed billions of accounts. Morgan & Morgan attorney John Yanchunis helped achieve accountability and relief for affected users nationwide.',
    icon: 'databreach-results.svg',
    iconAlt: 'data breach icon.',
  },
  {
    location: 'Miami, FL',
    amount: '$100,000,000',
    title: 'Campbell v. Monte Carlo of Miami Condo Association',
    description: 'In 2025, a Miami jury awarded $100 million to former Florida senator Daphne Campbell after her son was fatally shot during a 2021 condo break-in. Morgan & Morgan helped represent the family and prove that security failures contributed to his death.',
    icon: 'negligentsecurity-results.svg',
    iconAlt: 'negligent security icon.',
  },
  {
    location: 'Volusia County, FL',
    amount: '$90,800,000',
    title: 'Estate of Frank Townsend v. RJ Reynolds, et al.',
    description: 'In 2010, a jury awarded $90.8 million in Estate of Frank Townsend v. R.J. Reynolds after finding the company liable for misleading tobacco marketing. Morgan & Morgan attorneys Gregory D. Prysock and Keith R. Mitnik fought to hold Big Tobacco accountable.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'Washington, DC',
    amount: '$63,000,000',
    title: 'U.S. OPM Data Security Breach Litigation',
    description: 'In 2022, a $63 million settlement was finalized to resolve massive data breaches of OPM from 2014–2015 that exposed sensitive records of government employees and contractors. Morgan & Morgan attorney John Yanchunis helped secure relief for those harmed.',
    icon: 'databreach-results.svg',
    iconAlt: 'data breach icon.',
  },
  {
    location: 'S.D. NY',
    amount: '$60,000,000',
    title: 'Morgan Stanley Data Security Litigation',
    description: 'In 2022, Morgan Stanley settled for $60 million in a data security class action over failures to erase customer data from disposed hardware in 2016 and 2019. Morgan & Morgan helped push for accountability and protections for affected clients.',
    icon: 'databreach-results.svg',
    iconAlt: 'data breach icon.',
  },
  {
    location: 'Tampa, FL',
    amount: '$45,000,000',
    title: 'MGM Resorts Data Breach',
    description: 'In 2025, MGM Resorts agreed to a $45 million settlement after data breaches in 2019 and 2023 exposed sensitive guest information. Morgan & Morgan\'s John A. Yanchunis helped secure relief and protections for affected customers.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'Escambia, FL',
    amount: '$40,000,000',
    title: 'Estate of Patricia Allen v. RJ Reynolds, et al.',
    description: 'In 2011, a Florida jury awarded $40 million to the family of Patricia Allen, who died from smoking-related illness after years of cigarette addiction. Morgan & Morgan held R.J. Reynolds accountable for concealing the dangers of its products.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'Hillsborough, FL',
    amount: '$37,850,000',
    title: 'Coleman v. Martinez',
    description: 'In 2007, a Hillsborough County jury awarded $37.8 million after doctors delayed a needed C-section, leaving baby Brendan Dixon with severe brain injury and lifelong disabilities. Morgan & Morgan attorneys Armando Lauritano and Keith Carter fought for the Coleman family.',
    icon: 'medmal-results.svg',
    iconAlt: 'medical malpractice icon.',
  },
  {
    location: 'Nashville, TN',
    amount: '$31,894,263',
    title: 'Gooch v. Smyrna Ready Mix Concrete',
    description: 'In 2024, a Tennessee jury awarded $31.9 million to Jennifer Gooch after a concrete truck ran a stop sign and crashed into her car. She suffered lasting back and ankle injuries. Morgan & Morgan attorneys Kelli Lester, Burke Keaty, and Susan Neal Wiley fought to get the compensation she deserved.',
    icon: 'caraccident-results.svg',
    iconAlt: 'car accident icon',
  },
  {
    location: 'Jacksonville, FL',
    amount: '$30,600,000',
    title: 'Scott Winckler vs. Suzuki Motor Corporation',
    description: 'In 2024, a Jacksonville jury awarded $30.6 million to motorcyclist Scott Winckler after defective brakes on his Suzuki caused a devastating crash. Morgan & Morgan fought to help him secure justice for his life-altering injuries.',
    icon: 'motorcycle-results.svg',
    iconAlt: 'motorcycle icon.',
  },
  {
    location: 'Tampa, FL',
    amount: '$30,000,000',
    title: 'Conrad v. Woodward',
    description: 'In 2024, a Tampa jury awarded $30.1 million in Conrad v. Woodward following a devastating fire. Morgan & Morgan attorney Ryan Will helped hold the responsible parties accountable.',
    icon: 'fire-results.svg',
    iconAlt: 'fire icon.',
  },
  {
    location: 'Philadelphia, PA',
    amount: '$29,045,285',
    title: 'Heath J. Wilson v. JM Lapp Plumbing and Heating',
    description: 'In 2024, a Philadelphia jury awarded $29 million to cyclist Heath Wilson after a plumber\'s truck struck him at an intersection, leaving him with catastrophic brain injuries. Morgan & Morgan fought to secure the compensation he deserved.',
    icon: 'truck-results.svg',
    iconAlt: 'truck iconl.',
  },
  {
    location: 'Orlando, FL',
    amount: '$25,927,183',
    title: 'Brink v. Ruiz',
    description: 'In 2024, a Florida jury awarded $25 million to a motorcyclist who suffered a traumatic brain injury in a crash. Morgan & Morgan attorney Keith Mitnik represented the victim and helped secure justice for his life-changing injuries.',
    icon: 'motorcycle-results.svg',
    iconAlt: 'motorcycle icon.',
  },
  {
    location: 'Orlando, FL',
    amount: '$20,839,758',
    title: 'Hurley v. John Mina',
    description: 'In 2023, an Orlando jury awarded $20.8 million to a motorcyclist injured in a serious crash. Morgan & Morgan attorney Ryan Rudd fought to ensure fair compensation for his client\'s recovery.',
    icon: 'caraccident-results.svg',
    iconAlt: 'car accident icon',
  },
  {
    location: 'San Francisco, CA',
    amount: '$20,000,000',
    title: 'Smith v. Apple, Inc.',
    description: 'In 2024, Apple agreed to a $20 million settlement resolving claims that certain Apple Watch models were prone to battery swelling and screen damage. Morgan & Morgan helped consumers nationwide recover payments for affected devices.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'Lawrenceville, GA',
    amount: '$19,000,000',
    title: 'Entrekin, Amos vs Comcast',
    description: 'In 2023, a Gwinnett County jury awarded nearly $19M to the family of Amos Entrekin after a Comcast work van ran a red light and crashed into his car. Morgan & Morgan fought to get his family the compensation they deserved.',
    icon: 'general-results.svg',
    iconAlt: 'general icon.',
  },
  {
    location: 'Florida',
    amount: '$18,888,875',
    title: 'Van Zyl v. Kincaid',
    description: 'In 2024, a Florida jury awarded $18.8 million to Deon Van Zyl after a negligent driver cut him off, causing a crash that left him permanently wheelchair-bound. Morgan & Morgan attorney Keith Mitnik fought for accountability and the compensation Deon deserved.',
    icon: 'caraccident-results.svg',
    iconAlt: 'car accident icon',
  },
  {
    location: 'Gainesville, FL',
    amount: '$17,000,000',
    title: 'Gainesville Apartment Fire',
    description: 'In 2025, an Alachua County jury awarded $17 million to a mother and child badly burned in a Gainesville apartment fire. Morgan & Morgan helped prove the property\'s safety failures caused the tragic, preventable blaze.',
    icon: 'fire-results.svg',
    iconAlt: 'fire icon.',
  },
  {
    location: 'Jacksonville, FL',
    amount: '$16,422,353',
    title: 'Jessica Long vs. The Travelers Home and Marine Insurance Company',
    description: 'In 2022, a Jacksonville jury awarded $16.4 million to Jessica Long after a devastating car crash left her with lasting injuries. Morgan & Morgan fought to hold the insurer accountable and secure the compensation she deserved.',
    icon: 'caraccident-results.svg',
    iconAlt: 'car accident icon',
  },
  {
    location: 'Orange County, FL',
    amount: '$14,500,000',
    title: 'Good Gateway LLC and SEG Gateway LLC',
    description: 'In 2014, an Orange County jury awarded $14.5 million to Good Gateway LLC and SEG Gateway LLC after developers proved they were defrauded out of their membership interests in a major Orlando project. Morgan & Morgan attorneys Clay Townsend, Keith Mitnik, and John Dill helped achieve that result.',
    icon: 'contractbreach-results.svg',
    iconAlt: 'contract breach icon.',
  },
  {
    location: 'Volusia, FL',
    amount: '$13,500,000',
    title: 'Brown v. R. J. Reynolds Tobacco Company',
    description: 'In 2024, a Florida jury awarded $13.5 million to the family of Arthur Brown, who died from COPD after decades of cigarette addiction. Morgan & Morgan attorneys Kathryn Barnett, Jason Gichner, Katy Massa, and Tony Luciano fought to hold R.J. Reynolds accountable.',
    icon: 'classaction-results.svg',
    iconAlt: 'class action icon.',
  },
  {
    location: 'Kissimmee, FL',
    amount: '$12,206,398',
    title: 'Woida, Joanne vs Evers Wood Products Inc. and Thomas, Rosetta',
    description: 'In 2023, an Osceola County jury awarded $12.2 million to Joanne Woida after a dump truck struck her car, causing severe neck and back injuries that required two surgeries. Morgan & Morgan attorney Grant Gillenwater fought to prove the driver and employer were negligent.',
    icon: 'truck-results.svg',
    iconAlt: 'truck iconl.',
  },
  {
    location: 'Florida',
    amount: '$12,023,195',
    title: 'Rausin v. Rodgers',
    description: 'In 2024, a Florida jury awarded $12 million to the family of a 13-year-old girl left paraplegic after a reckless driver rear-ended her grandparents\' car on Thanksgiving Day. Morgan & Morgan attorney Keith Mitnik fought for the family\'s justice.',
    icon: 'caraccident-results.svg',
    iconAlt: 'car accident icon',
  },
  {
    location: 'Philadelphia, PA',
    amount: '$11,997,285',
    title: 'Yvette Torres v. Penske, et al.',
    description: 'In 2024, a Philadelphia jury awarded $12 million to Yvette Torres, who suffered severe neck and back injuries after being struck by a commercial truck. Morgan & Morgan attorneys Alex Hyder, Clancy Boylan, and Hannah Molitoris fought for her justice.',
    icon: 'truck-results.svg',
    iconAlt: 'truck iconl.',
  },
  {
    location: 'Orlando, FL',
    amount: '$11,391,183',
    title: 'Olga Mun v. Site Centers Corp., (Target) et. al',
    description: 'In 2025, an Orange County jury awarded $11.3 million to a woman who fractured her leg after tripping on an uneven curb at a Target in Winter Garden. Morgan & Morgan attorneys Matt Morgan, Perry Nava and Fan Li proved the store\'s negligence caused her lifelong injuries.',
    icon: 'slip-results.svg',
    iconAlt: 'slip and fall icon.',
  },
  {
    location: 'Orlando, FL',
    amount: '$11,000,000',
    title: 'Estate of Vinh Chung v. AK Family Holdings',
    description: 'In 2025, an Orlando jury awarded $11 million in Jada Paige Chung, as Personal Representative of the Estate of Vinh Chung vs. AK Family Holdings, LLC and On The Move Fitness, LLC for wrongful death. Morgan & Morgan fought to secure the verdict the family deserved.',
    icon: 'general-results.svg',
    iconAlt: 'general icon.',
  },
  {
    location: 'Daytona Beach, FL',
    amount: '$10,766,000',
    title: 'William Duffey v. Janet Rogier',
    description: 'In 2025, a Volusia County jury awarded $10.6 million to Marine Corps veteran William Duffey, who was severely injured when a driver turned into his path on State Road A1A. Morgan & Morgan fought to secure justice for the Daytona Beach Shores motorcyclist.',
    icon: 'motorcycle-results.svg',
    iconAlt: 'motorcycle icon.',
  },
  {
    location: 'Fulton, GA',
    amount: '$10,042,880',
    title: 'Wright v. Hagos Park, LLC & John Doe Corporation',
    description: 'In 2024, a Fulton County jury awarded $10 million to the family of Sharon Wright, who was fatally shot during an unprovoked attack at an apartment complex. Morgan & Morgan proved the owners failed to address known security risks and fought for compensation.',
    icon: 'negligentsecurity-results.svg',
    iconAlt: 'negligent security icon.',
  },
  {
    location: 'Orange County, FL',
    amount: '$6,640,031',
    title: 'Burke v. Lancheros and VL Auto Transport, Inc.',
    description: 'In 2021, an Orange County jury awarded $6.6 million to James Burke after a truck jackknifed on I-4, sending concrete barriers into his path. Morgan & Morgan attorneys Matt Morgan, Keith Mitnik, and Nick Russo proved the crash caused his permanent back injury.',
    icon: 'caraccident-results.svg',
    iconAlt: 'car accident icon',
  },
];

export default function BigResultsSection() {
  const [mobileSlide, setMobileSlide] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());

  // Mobile: 3 cards per slide, Desktop: 9 cards per slide (3x3 grid)
  const mobileCardsPerSlide = 3;
  const desktopCardsPerSlide = 9;
  const mobileTotalSlides = Math.ceil(caseResults.length / mobileCardsPerSlide);
  const desktopTotalSlides = Math.ceil(caseResults.length / desktopCardsPerSlide);

  const toggleFlip = (index) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleMobileNext = () => {
    setMobileSlide((prev) => (prev >= mobileTotalSlides - 1 ? 0 : prev + 1));
  };

  const handleMobilePrev = () => {
    setMobileSlide((prev) => (prev <= 0 ? mobileTotalSlides - 1 : prev - 1));
  };

  const handleDesktopNext = () => {
    setDesktopSlide((prev) => (prev >= desktopTotalSlides - 1 ? 0 : prev + 1));
  };

  const handleDesktopPrev = () => {
    setDesktopSlide((prev) => (prev <= 0 ? desktopTotalSlides - 1 : prev - 1));
  };

  const ResultCard = ({ result, index }) => {
    const isFlipped = flippedCards.has(index);

    return (
      <div className="h-full">
        <div className="relative h-full" style={{ perspective: '1000px' }}>
          <div
            className="relative w-full h-full transition-transform duration-700"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer"
              style={{ backfaceVisibility: 'hidden' }}
              onClick={() => toggleFlip(index)}
            >
              <div className="px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50">
                {result.location}
              </div>
              <div className="flex-1 px-4 py-6 flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <img
                    src={`/sites/default/files/2025-10/${result.icon}`}
                    alt={result.iconAlt}
                    className="w-16 h-16 mx-auto"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                  {result.amount}
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {result.title}
                </div>
              </div>
              <div className="px-4 py-3 border-t border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Read more</span>
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
              onClick={() => toggleFlip(index)}
            >
              <div className="flex-1 px-4 py-6 flex flex-col">
                <h6 className="text-lg font-semibold text-gray-900 mb-3">{result.title}</h6>
                <p className="text-sm text-gray-700 leading-relaxed flex-1">{result.description}</p>
              </div>
              <div className="px-4 py-3 border-t border-gray-200">
                <span className="text-sm font-semibold text-gray-700">Close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-green-50 py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">
          The Right Firm for Big Wins
        </h2>

        {/* Mobile View */}
        <div className="block lg:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
              >
                {Array.from({ length: mobileTotalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 gap-4 px-2">
                      {caseResults
                        .slice(slideIndex * mobileCardsPerSlide, (slideIndex + 1) * mobileCardsPerSlide)
                        .map((result, idx) => {
                          const actualIndex = slideIndex * mobileCardsPerSlide + idx;
                          return (
                            <div key={actualIndex} className="h-80">
                              <ResultCard result={result} index={actualIndex} />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                <button
                  onClick={handleMobilePrev}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={mobileSlide === 0}
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleMobileNext}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={mobileSlide === mobileTotalSlides - 1}
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand-primary transition-colors"
              >
                View more cases
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${desktopSlide * 100}%)` }}
              >
                {Array.from({ length: desktopTotalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-6 px-2">
                      {caseResults
                        .slice(slideIndex * desktopCardsPerSlide, (slideIndex + 1) * desktopCardsPerSlide)
                        .map((result, idx) => {
                          const actualIndex = slideIndex * desktopCardsPerSlide + idx;
                          return (
                            <div key={actualIndex} className="h-96">
                              <ResultCard result={result} index={actualIndex} />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                <button
                  onClick={handleDesktopPrev}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={desktopSlide === 0}
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleDesktopNext}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={desktopSlide === desktopTotalSlides - 1}
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <a
                href="/"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand-primary transition-colors"
              >
                View more cases
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            Results may vary depending on your particular facts and legal circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}

