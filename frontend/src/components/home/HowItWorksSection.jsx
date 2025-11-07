import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HowItWorksSection() {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true });
  const channels = t('howItWorks.channels', { returnObjects: true });

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            {t('howItWorks.description')}
          </p>
        </div>

        {/* Step 1 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600">{channels.form}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600">{channels.phone}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600">{channels.text}</span>
                    </div>
                  </div>
                  <svg className="w-8 h-8 text-blue-600 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="w-full max-w-xs mx-auto lg:mx-0">
                  <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                    {/* <div className="text-gray-500 text-sm text-center">
                      <div>Consultation</div>
                      <div>Image</div>
                    </div> */}
                    <img src="11.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">{steps[0].number}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {steps[0].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {steps[0].description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                  {steps[0].link}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="flex flex-col items-center lg:items-start">
                {/* <div className="flex gap-4 mb-4">
                  {['Attorney', 'Paralegal', 'Case Manager', 'Investigator'].map((role, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-2 overflow-hidden">
                        <div className="text-gray-600 text-xs text-center">{role[0]}</div>
                      </div>
                      <span className="text-xs text-gray-600 text-center">{role}</span>
                    </div>
                  ))}
                </div> */}
                <img src="12.webp" alt="" />
              </div>
            </div>
            
            <div className="lg:col-span-2 flex items-start gap-6 order-1 lg:order-2">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">{steps[1].number}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {steps[1].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {steps[1].description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                  {steps[1].link}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center lg:items-start">
                {/* <div className="space-y-3">
                  <div className="bg-blue-100 p-4 rounded-lg transform rotate-2">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-semibold text-blue-600">Gather Evidence</span>
                    </div>
                  </div>
                  <div className="bg-blue-200 p-4 rounded-lg transform -rotate-1 ml-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <span className="text-sm font-semibold text-blue-700">Build your Case</span>
                    </div>
                  </div>
                  <div className="bg-blue-300 p-4 rounded-lg transform rotate-1 ml-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-semibold text-blue-800">Fight for Best Result</span>
                    </div>
                  </div>
                </div> */}
                <img src="13.webp" alt="" />
              </div>
            </div>
            
            <div className="lg:col-span-2 flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">{steps[2].number}</span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {steps[2].title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {steps[2].description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                  {steps[2].link}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

