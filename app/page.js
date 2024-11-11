'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/,/g, ''));
    const duration = 2000;
    let timer = setInterval(() => {
      start += end / (duration / 16);
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
}

import { ArrowUpRight } from 'lucide-react';

// Reusable Work Card Component
const WorkCard = ({ icon, title, description }) => (
  <div className="bg-[#1B1B3A] p-8 rounded-lg">
    <div className="mb-4 text-3xl">{icon}</div>
    <h3 className="text-white text-xl font-medium mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

// Reusable Blog Card Component
const BlogCard = ({ image, title, description }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-lg mb-4">
      <Image 
        src={image} 
        alt={title} 
        width={300}
        height={200}
        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="font-medium text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
    <div className="flex items-center text-[#2B9348] text-sm font-medium">
      Read More
      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
    </div>
  </div>
);


export default function HomePage() {
  const workItems = [
    {
      icon: "🎓",
      title: "Scholarships",
      description: "Providing financial assistance to deserving students to help them achieve their educational goals."
    },
    {
      icon: "📈",
      title: "People Development",
      description: "Offering mentorship, training, and personal development workshops to empower individuals with the skills they need to succeed."
    },
    {
      icon: "👥",
      title: "Community Development",
      description: "Implementing sustainable projects that improve the quality of life in communities."
    }
  ];

  const blogPosts = [
    {
      image: "/rec1.png",
      title: "Education for Children",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies and..."
    },
    {
      image: "/rec2.png",
      title: "Solving for Poverty",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies..."
    },
    {
      image: "/rec3.png",
      title: "Undergraduate Scholarships",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies..."
    },
    {
      image: "/rec4.png",
      title: "Sustainable Development",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies..."
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <Header />

      <main className="container mx-auto px-4 py-12 relative">
        <div className="w-1/2 pr-12 mt-39">
          <h1 className="text-5xl font-medium mb-6 leading-tight text-black">
            Building For <span className="text-black">Everyone</span>
          </h1>
          <p className="text-base text-black mb-8 max-w-[500px]">
            Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual. Together, we shape a future where no one is left behind.
          </p>
          <div className="space-x-16">
            <Link href="#" className="bg-white text-black px-6 py-3 rounded-lg border border-black text-xxl font-normal hover:bg-gray-100 transition-colors duration-300">
              Learn More
            </Link>
            <Link href="#" className="bg-[#2B9348] text-white px-6 py-3 rounded-lg text-xl font-normal hover:bg-[#228B22] transition-colors duration-300">
              Donate
            </Link>
          </div>
        </div>
        
        <div className="w-1/2 absolute right-0 top-12 h-[700px]">
          <Image 
            src="/hero-image-1.png"
            alt="Community member 1"
            width={250}
            height={250}
            className="absolute left-0 top-0 rounded-full object-cover float-animation"
            style={{ left: '0px', top: '0px', animationDelay: '0s' }}
          />
          <Image 
            src="/hero-image-2.png"
            alt="Community member 2"
            width={200}
            height={200}
            className="absolute rounded-full object-cover float-animation"
            style={{ left: '263px', top: '-36px', animationDelay: '0.5s' }}
          />
          <Image 
            src="/hero-image-3.png"
            alt="Community member 3"
            width={200}
            height={200}
            className="absolute rounded-full object-cover float-animation"
            style={{ left: '406px', top: '150px', animationDelay: '1s' }}
          />
          <Image 
            src="/hero-image-4.png"
            alt="Community member 4"
            width={250}
            height={250}
            className="absolute rounded-full object-cover float-animation"
            style={{ left: '118px', top: '237px', animationDelay: '1.5s' }}
          />
        </div>
      </main>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mt-96 mb-20">
        <div className="flex justify-between items-center bg-white max-w-5xl mx-auto">
          <div className="flex flex-col items-center px-4">
            <p className="text-3xl font-normal mb-2 text-black">₦<AnimatedNumber value="500000" />+</p>
            <p className="text-lg text-black">Fund Raised</p>
          </div>
          <div className="w-4 h-4 bg-[#F9A602] rounded-full"></div>
          <div className="flex flex-col items-center px-4">
            <p className="text-3xl font-normal mb-2 text-black"><AnimatedNumber value="50" />+</p>
            <p className="text-lg text-black">Volunteers</p>
          </div>
          <div className="w-4 h-4 bg-[#F9A602] rounded-full"></div>
          <div className="flex flex-col items-center px-4">
            <p className="text-3xl font-normal mb-2 text-black"><AnimatedNumber value="100" /></p>
            <p className="text-lg text-black">Scholarships</p>
          </div>
          <div className="w-4 h-4 bg-[#F9A602] rounded-full"></div>
          <div className="flex flex-col items-center px-4">
            <p className="text-3xl font-normal mb-2 text-black"><AnimatedNumber value="24" /></p>
            <p className="text-lg text-black">Workshops</p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl font-medium mb-6 leading-tight">
              About <span className="text-[#2B9348]">Amdo Initiative</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-[500px]">
              The Amdo Initiative is committed to empowering individuals through education,
              career development, entrepreneurship, and social well-being. By offering
              education and training programs, we aim to help people develop skills that will help
              them personally and professionally.
            </p>
            <button className="bg-[#2B9348] text-white px-8 py-3 rounded-lg hover:bg-[#228B22] transition-colors duration-300">
              More About Us
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/home-students.png"
              alt="Students in classroom"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-[#F9A602] text-sm font-medium mb-2">What we do</p>
            <h2 className="text-3xl font-medium">Our Work</h2>
          </div>
          <Link href="#" className="text-[#2B9348] flex items-center hover:underline">
            Read More
            <ArrowUpRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <WorkCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Join Initiative Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-[#F9A602] text-sm font-medium mb-2">Join the Amdo Initiative for Education</p>
              <h2 className="text-3xl font-medium mb-6">Who can apply?</h2>
              <p className="text-gray-600 mb-8">
                Recipients will be selected based on financial need, academic performance,
                leadership potential, curiosity, courage, and character traits indicative of a person
                who is already engaged in their community and will give back and perpetuate the
                shared outcomes and goals of the Foundation for their fellows.
              </p>
              <button className="bg-[#2B9348] text-white px-8 py-3 rounded-lg hover:bg-[#228B22] transition-colors duration-300">
                Apply Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/home-students.png"
                alt="Students raising hands"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-[#F9A602] text-sm font-medium mb-2">Blog</p>
          <h2 className="text-3xl font-medium">Stay updated with us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}