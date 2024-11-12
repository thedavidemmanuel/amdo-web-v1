"use client"
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { ArrowRight, GraduationCap, Briefcase, Book, Heart } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Education Scholarships",
      icon: GraduationCap,
      description: "Supporting bright minds in Gombe State through comprehensive educational scholarships.",
      details: [
        "Full academic scholarships for secondary school students",
        "University scholarship programs for undergraduate studies",
        "Educational materials and supplies support",
        "Mentorship and academic guidance",
        "Special focus on girls' education and STEM fields"
      ],
      image: "/scholarship.png"
    },
    {
      id: 2,
      title: "Skill Development",
      icon: Book,
      description: "Empowering youth with practical skills for the modern workforce.",
      details: [
        "Digital literacy and computer training programs",
        "Vocational training in high-demand trades",
        "Technical skills workshops",
        "Professional certification courses",
        "Hands-on practical training sessions"
      ],
      image: "/skills.png"
    },
    {
      id: 3,
      title: "Entrepreneurship Support",
      icon: Briefcase,
      description: "Fostering local business growth and economic development in Gombe State.",
      details: [
        "Small business startup grants",
        "Business planning and management training",
        "Mentorship from successful entrepreneurs",
        "Access to micro-loans and financial services",
        "Market linkage and business networking opportunities"
      ],
      image: "/entrepreneur.png"
    },
    {
      id: 4,
      title: "Social Well-being",
      icon: Heart,
      description: "Promoting community health and social development initiatives.",
      details: [
        "Community health education programs",
        "Youth sports and recreation activities",
        "Mental health awareness and support",
        "Environmental sustainability projects",
        "Community gathering and cultural events"
      ],
      image: "/wellbeing.png"
    }
  ];

  return (
    <>
      <div className="w-full bg-white">
        <Header />

        {/* Hero Section */}
        <div className="relative h-[500px] w-full overflow-hidden">
          <img
            src="/programs.png"
            alt="Programs Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="max-w-6xl mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
              <p className="text-xl max-w-2xl">
                Creating lasting impact through education, skills, entrepreneurship, and community well-being in Gombe State.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          {/* Programs Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Lives Through Our Initiatives</h2>
            <p className="text-gray-600 max-w-4xl mb-12">
              The Amdo Foundation implements comprehensive programs designed to address the specific needs of 
              our community in Gombe State. Through our four core initiative areas, we work to create 
              sustainable impact and empower individuals to build better futures.
            </p>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div key={program.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <program.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-3">
                      {program.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Stats */}
          <section className="bg-[#1a1a2e] text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Impact in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "100+", label: "Students Supported" },
                { number: "100+", label: "Skills Training Participants" },
                { number: "20+", label: "Businesses Launched" },
                { number: "200+", label: "Community Members Impacted" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Get Involved */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-600 mb-8">
              Whether you're interested in receiving support through our programs or want to contribute 
              to our mission, we welcome you to join our community of change-makers.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors" 
                onClick={() => {
                  window.location.href = '/scholarships';
                }}
              >
                Apply for Scholarships
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={() => {
                  window.location.href = '/donate';
                }}
              >
                Support Our Work
              </button>
            </div>
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
    </>
  );
};

export default ProgramsSection;