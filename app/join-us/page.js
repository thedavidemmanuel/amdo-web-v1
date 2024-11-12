"use client"
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Users, Heart, Star, Clock, BookOpen, Trophy, ChevronRight, HandHeart } from 'lucide-react';

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occupation: '',
    area: 'education', 
    experience: '',
    availability: '',
    motivation: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: Heart,
      title: "Make a Real Impact",
      description: "Directly contribute to improving lives in Gombe State through meaningful projects and initiatives."
    },
    {
      icon: Star,
      title: "Gain Experience",
      description: "Develop new skills and get hands-on experience in community development and social impact work."
    },
    {
      icon: Users,
      title: "Network & Connect",
      description: "Meet like-minded individuals and build relationships with community leaders and changemakers."
    },
    {
      icon: Trophy,
      title: "Professional Growth",
      description: "Enhance your CV with valuable volunteer experience and receive certificates of recognition."
    },
    {
      icon: BookOpen,
      title: "Learn & Develop",
      description: "Access training opportunities and learn about community development and social impact."
    },
    {
      icon: Clock,
      title: "Flexible Commitment",
      description: "Choose volunteer opportunities that fit your schedule and availability."
    }
  ];

  const volunteerAreas = [
    {
      title: "Education Support",
      activities: [
        "Tutoring and mentoring students",
        "Organizing educational workshops",
        "Supporting scholarship programs",
        "Assisting with computer literacy classes"
      ]
    },
    {
      title: "Skills Development",
      activities: [
        "Teaching vocational skills",
        "Facilitating training workshops",
        "Mentoring aspiring entrepreneurs",
        "Supporting technical training programs"
      ]
    },
    {
      title: "Community Outreach",
      activities: [
        "Organizing community events",
        "Conducting needs assessments",
        "Supporting health awareness programs",
        "Coordinating youth activities"
      ]
    },
    {
      title: "Administrative Support",
      activities: [
        "Program coordination",
        "Data management",
        "Communications and social media",
        "Event planning and logistics"
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="/programs.png"
          alt="Join Our Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl max-w-2xl">
              Be part of a movement transforming lives and building stronger communities in Gombe State.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Why Join Us Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Areas Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <HandHeart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
            <p className="text-gray-600">
              Fill out the form below to start your volunteer journey with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Area of Volunteering *
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="education">Education Support</option>
                <option value="skills">Skills Development</option>
                <option value="community">Community Outreach</option>
                <option value="admin">Administrative Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Relevant Experience
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability *
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="both">Both Weekdays and Weekends</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to volunteer with us? *
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </section>

        {/* Testimonials Preview */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hear from Our Volunteers</h2>
          <p className="text-gray-600 mb-6">
            Discover the experiences of those who have already joined our mission.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
            Read Volunteer Stories →
          </a>
        </section>
      </main>

     

      <Footer />
    </div>
  );
};

export default JoinUsPage;


 {/* Bottom Color Bars */}
 <div className="grid grid-cols-4">
 <div className="h-16 bg-[#4F7A41]"></div>
 <div className="h-16 bg-[#1B2B3A]"></div>
 <div className="h-16 bg-[#E6A622]"></div>
 <div className="h-16 bg-[#DCDFE4]"></div>
</div>