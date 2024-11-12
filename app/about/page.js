"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';
const AboutSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1);

  const advisoryBoard = [
    { name: 'Andele Tadi', img: 'people/andele.png'},
    { name: 'Ishaya Maifutuk', img: 'people/ishaya.png'},
    { name: 'Hadiza H. Musa', img: 'people/hadiza.png'},
    { name: 'Alfred Lisiyas', img: 'people/alfred.png'},
    { name: 'Ishaku Eli', img: 'people/ishaku.png'},
    { name: 'Seryamba Tanto', img: 'people/seryamba.png'}
  ];

  const faqs = [
    {
      id: 1,
      question: 'Is this donation tax deductible?',
      answer: 'Yes, all donations to [Organization Name] are tax deductible to the fullest extent allowed by law. Our Tax ID (EIN) is XX-XXXXXXX.'
    },
    {
      id: 2,
      question: 'Can I donate by check instead?',
      answer: 'Yes, you can make checks payable to [Organization Name] and mail them to [Address].'
    },
    {
      id: 3,
      question: 'Can I donate using PayPal?',
      answer: 'Yes, we accept PayPal donations through our secure payment system.'
    },
    {
      id: 4,
      question: 'How else can I make a gift to charity selected?',
      answer: 'We accept multiple forms of donations including credit cards, wire transfers, and stock donations.'
    },
    {
      id: 5,
      question: 'Will I get a receipt?',
      answer: 'Yes, you will receive an immediate email confirmation and a formal tax receipt.'
    },
    {
      id: 6,
      question: 'Is my donation secure?',
      answer: 'Yes, we use industry-standard encryption and security protocols to protect your information.'
    }
  ];


  return (
    <><div className="w-full bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <section className="py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About the Amdo Foundation</h1>
          <p className="text-gray-600 max-w-4xl">
            The Amdo Initiative is a community-focused organization in Billiri, Gombe State, Nigeria, aiming to empower locals through education,
            skill development, entrepreneurship, and social well-being. It promotes sustainable growth and community transformation by providing
            resources and opportunities that enable individuals to build better lives and contribute to creating a more equitable and
            prosperous future.
          </p>
        </section>

        {/* Hero Image */}
        <div className="w-full h-[400px] overflow-hidden mb-16">
          <img
            src="/abt1.png"
            alt="Community celebration"
            className="w-full h-full object-cover" />
        </div>

        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to create pathways for empowerment, education and growth. Working side by side with the right partners and support,
              we aim to foster a strong, vibrant, and resilient community in Gombe State, where each member has the tools to succeed and make a meaningful impact.
            </p>
          </div>
          <div className="h-[300px]">
            <img
              src="/abt2.png"
              alt="Mission activities"
              className="w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        {/* Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="h-[300px] md:order-1 order-2">
            <img
              src="/abt3.png"
              alt="Students learning"
              className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex flex-col justify-center md:order-2 order-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to create pathways for empowerment, ensuring every individual receives the support they need to thrive.
              Through a focus on education, mentorship, innovation, and sustainability, we aim to foster a strong, self-reliant community
              in Gombe State, where each member has the tools to succeed and make a meaningful impact.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: 'Community', desc: 'Building collaboration and fostering unity' },
              { title: 'Innovation', desc: 'Embracing creative solutions and new ideas' },
              { title: 'Integrity', desc: 'Maintaining transparency and trust' },
              { title: 'Sustainability', desc: 'Creating lasting positive impact' },
              { title: 'Empowerment', desc: 'Enabling growth and independence' }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#1a1a2e] text-white p-6 rounded-lg"
              >
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    <div className='mt-20' />



    <div className="max-w-[1144px] mx-auto px-6">
        <section className="mb-20">
          <h1 className="text-[28px] leading-8 font-bold text-gray-900 mb-6">LEADERSHIP</h1>
          <div className='mt-20' />
          <div>
            <h3 className="text-[22px] leading-7 font-semibold text-gray-900 mb-3">Our Advisory Board</h3>
            <p className="text-[15px] leading-[1.6] text-gray-600 mb-12 max-w-[960px]">
              The advisory board brings together a collection of experienced industry leaders committed to professional service across fields 
              dedicated to our mission. Our advisors provide strategic insight, expert program oversight, and ensure that we maintain the highest 
              standards of integrity and accountability.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6">
              {advisoryBoard.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-[72px] h-[72px] mx-auto mb-2 bg-gray-100 rounded-full overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[13px] font-medium text-gray-900">{member.name}</p>
                </div>
              ))}
            </div>

            <div className='mt-40' />

          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#F8F9FB] rounded-2xl py-12 px-8 mb-20">
          <div className="mb-10">
            <span className="block text-[13px] font-medium text-gray-500 uppercase tracking-wide mb-1">FAQs</span>
            <div className="flex justify-between items-center">
              <h2 className="text-[22px] leading-7 font-semibold text-gray-900">Frequently Asked Questions</h2>
              <a href="#" className="text-[13px] font-medium text-blue-600 hover:text-blue-700">
                SEE ALL FAQs →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                >
                  <span className="text-[15px] font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                      openFAQ === faq.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 py-4 text-[15px] leading-[1.6] text-gray-600 border-t border-gray-200 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Color Bars */}
      <div className="grid grid-cols-4">
        <div className="h-16 bg-[#4F7A41]"></div>
        <div className="h-16 bg-[#1B2B3A]"></div>
        <div className="h-16 bg-[#E6A622]"></div>
        <div className="h-16 bg-[#DCDFE4]"></div>
      </div>

    <Footer />
    </>
  );
};

export default AboutSection;