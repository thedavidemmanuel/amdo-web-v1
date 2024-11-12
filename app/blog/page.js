import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { BookOpen, Mail, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BlogPage = () => {
  const upcomingTopics = [
    {
      icon: BookOpen,
      title: "Community Success Stories",
      description: "Inspiring tales of transformation and impact from Gombe State"
    },
    {
      icon: Clock,
      title: "Project Updates",
      description: "Regular updates on our ongoing initiatives and achievements"
    },
    {
      icon: AlertCircle,
      title: "Educational Resources",
      description: "Valuable insights and learning materials for community development"
    }
  ];

  return (
    <div className="w-full bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="/programs.png"
          alt="Blog Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl max-w-2xl">
              Stories of Impact, Growth, and Community Development
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Coming Soon Message */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're preparing something special for you. Our blog will feature inspiring stories, 
            updates on our projects, and valuable resources for community development.
          </p>
          
          {/* Email Notification Form */}
          <Card className="max-w-md mx-auto bg-gray-50">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Notify Me
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Get notified when we launch our blog
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Topics */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What to Expect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <topic.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h4>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Story to Share?
            </h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear about your experiences and insights in community development.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Contact Us
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
  );
};

export default BlogPage;