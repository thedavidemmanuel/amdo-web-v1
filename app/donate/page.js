"use client"
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Check, DollarSign, CreditCard, Building2, Gift, HeartHandshake } from 'lucide-react';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('100');
  const [isMonthly, setIsMonthly] = useState(false);
  
  const impactMetrics = [
    {
      amount: "₦5,000",
      description: "Provides educational materials for one student for a term"
    },
    {
      amount: "₦25,000",
      description: "Funds one month of vocational training for an aspiring entrepreneur"
    },
    {
      amount: "₦50,000",
      description: "Supports a small business startup grant"
    },
    {
      amount: "₦100,000",
      description: "Funds a full term scholarship for a secondary school student"
    }
  ];

  const donationUse = [
    {
      percentage: "40%",
      category: "Education Programs",
      description: "Scholarships, educational materials, and mentorship programs"
    },
    {
      percentage: "25%",
      category: "Skill Development",
      description: "Vocational training, workshops, and certification courses"
    },
    {
      percentage: "20%",
      category: "Entrepreneurship",
      description: "Business grants, training, and support services"
    },
    {
      percentage: "15%",
      category: "Community Programs",
      description: "Social welfare initiatives and community events"
    }
  ];

  return (
    <div className="w-full bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="/donate.png"
          alt="Support Our Cause"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference</h1>
            <p className="text-xl max-w-2xl">
              Your support empowers communities in Gombe State through education, 
              skills development, and social programs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Donation Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Form */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Our Mission</h2>
            
            {/* Donation Type Toggle */}
            <div className="flex gap-4 mb-6">
              <button 
                className={`flex-1 py-3 px-4 rounded-lg border ${!isMonthly ? 'bg-blue-600 text-white' : 'border-gray-300 text-gray-700'}`}
                onClick={() => setIsMonthly(false)}
              >
                One-time
              </button>
              <button 
                className={`flex-1 py-3 px-4 rounded-lg border ${isMonthly ? 'bg-blue-600 text-white' : 'border-gray-300 text-gray-700'}`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['50', '100', '250', '500'].map((amount) => (
                <button
                  key={amount}
                  className={`py-3 px-4 rounded-lg border ${
                    donationAmount === amount ? 'bg-blue-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                  onClick={() => setDonationAmount(amount)}
                >
                  ₦{amount},000
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Amount (₦)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Enter amount"
                  value={donationAmount !== '50' && donationAmount !== '100' && donationAmount !== '250' && donationAmount !== '500' ? donationAmount : ''}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Payment Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
                <CreditCard className="w-5 h-5" />
                Donate with Card
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50">
                <Building2 className="w-5 h-5" />
                Bank Transfer
              </button>
            </div>
          </div>

          {/* Impact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h2>
            <div className="space-y-6">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">{metric.amount}</div>
                    <div className="text-gray-600">{metric.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fund Allocation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Donation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationUse.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.percentage}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.category}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Gift className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Corporate Giving</h3>
                <p className="text-gray-600 mb-4">Partner with us through corporate donations, matching gifts, or sponsored programs.</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700">Learn More →</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HeartHandshake className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Legacy Giving</h3>
                <p className="text-gray-600 mb-4">Make a lasting impact through planned giving and estate donations.</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700">Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Learn more about our donation process, tax benefits, and how your support makes a difference.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
            View Donation FAQs →
          </a>
        </section>
      </main>

      {/* Bottom Color Bars */}
      <div className="grid grid-cols-4">
        <div className="h-16 bg-[#4F7A41]"></div>
        <div className="h-16 bg-[#1B2B3A]"></div>
        <div className="h-16 bg-[#E6A622]"></div>
        <div className="h-16 bg-[#DCDFE4]"></div>
      </div>

      <Footer />
    </div>
  );
};

export default DonationPage;