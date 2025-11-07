import React, { useState } from 'react';

export default function FeeFreeSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    zipCode: '',
    email: '',
    caseType: '',
    description: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-[#1a2b5b] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Header Text */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              AMERICA'S LARGEST INJURY LAW FIRM™
            </h1>

            {/* Call to Action */}
            <p className="text-lg md:text-xl mb-6">
              Get a <span className="underline font-semibold">FREE</span> case evaluation today.
            </p>

            {/* Video Player */}
            <div className="relative mb-8 w-full max-w-lg">
              <div className="relative bg-gray-300 rounded-lg overflow-hidden aspect-video">
                {/* Video Thumbnail Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  {/* <div className="text-gray-500 text-sm"><img src="" alt="" /></div> */}
                  <img src="16.webp" alt="Video Thumbnail" />
                </div>
                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ffe000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* As seen on */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="text-sm md:text-base whitespace-nowrap">As seen on:</span>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <span className="text-sm md:text-base font-semibold">ABC NEWS</span>
                <span className="text-sm md:text-base font-semibold">CNN</span>
                <span className="text-sm md:text-base font-semibold">USA TODAY</span>
                <span className="text-sm md:text-base font-semibold">FOX</span>
                <span className="text-sm md:text-base font-semibold">NBC NEWS</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex flex-col border-2 border-[rgba #ffffff4d(255, 255, 255, 0.30);] border-solid rounded-lg p-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              It's Easy to Get Started.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                  required
                />
              </div>

              {/* Phone Number and Zip Code */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                  required
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                required
              />

              {/* Case Type Dropdown */}
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                required
              >
                <option value="">- Case Type -</option>
                <option value="car-accident">Car Accident</option>
                <option value="truck-accident">Truck Accident</option>
                <option value="motorcycle-accident">Motorcycle Accident</option>
                <option value="slip-fall">Slip and Fall</option>
                <option value="medical-malpractice">Medical Malpractice</option>
                <option value="workers-compensation">Workers' Compensation</option>
                <option value="other">Other</option>
              </select>

              {/* Description Textarea */}
              <textarea
                name="description"
                placeholder="Please describe what happened"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#ffe000] resize-none"
                required
              />

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-[#1a2b5b] focus:ring-[#ffe000]"
                  required
                />
                <label htmlFor="consent" className="text-sm">
                  I hereby expressly consent to receive automated communications including calls, texts, emails, and/or prerecorded messages.
                </label>
              </div>

              {/* Terms & Privacy */}
              <p className="text-xs text-gray-300">
                By submitting this form, you agree to our Terms & acknowledge our Privacy Policy.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ffe000] text-black font-bold py-4 rounded-lg hover:bg-[#e6cc00] transition-colors text-lg"
              >
                Start your claim
              </button>

              {/* Copyright Notice */}
              <p className="text-xs text-gray-400 text-center mt-4">
                Results may vary depending on your particular facts and legal circumstances. ©2025 Morgan and Morgan, P.A. All rights reserved.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

