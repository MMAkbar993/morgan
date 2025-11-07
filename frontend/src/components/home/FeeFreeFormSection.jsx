import React, { useState } from 'react';

export default function FeeFreeFormSection() {
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
    <section className="bg-[#1a2b5b] text-white py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              THE FEE IS FREE®
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Only pay if we win. Contact us 24/7.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              It's Easy to Get Started
            </h3>
            <p className="text-gray-600 mb-6">
              Provide a few simple details about your injury and our team will take it from there.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
                required
              />
              
              {/* Case Type Dropdown */}
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffe000]"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ffe000] resize-none"
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
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I hereby expressly consent to receive automated communications including calls, texts, emails, and/or prerecorded messages.
                </label>
              </div>
              
              {/* Terms & Privacy */}
              <p className="text-xs text-gray-500">
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

