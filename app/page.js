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

export default function HomePage() {
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
            src="/hero-image-1.svg"
            alt="Community member 1"
            width={250}
            height={250}
            className="absolute left-0 top-0 rounded-full object-cover float-animation"
            style={{ left: '0px', top: '0px', animationDelay: '0s' }}
          />
          <Image 
            src="/hero-image-2.svg"
            alt="Community member 2"
            width={200}
            height={200}
            className="absolute rounded-full object-cover float-animation"
            style={{ left: '263px', top: '-36px', animationDelay: '0.5s' }}
          />
          <Image 
            src="/hero-image-3.svg"
            alt="Community member 3"
            width={200}
            height={200}
            className="absolute rounded-full object-cover float-animation"
            style={{ left: '406px', top: '150px', animationDelay: '1s' }}
          />
          <Image 
            src="/hero-image-4.svg"
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

      <Footer />
    </div>
  )
}