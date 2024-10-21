'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'

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
    <>
      <Head>
        <title>The Amdo Initiative - Building For Everyone</title>
        <meta name="description" content="Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual." />
        <meta name="keywords" content="Amdo Initiative, community development, empowerment, education, opportunities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.amdoinitiative.org/" />
        <meta property="og:title" content="The Amdo Initiative - Building For Everyone" />
        <meta property="og:description" content="Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual." />
        <meta property="og:image" content="https://www.amdoinitiative.org/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.amdoinitiative.org/" />
        <meta property="twitter:title" content="The Amdo Initiative - Building For Everyone" />
        <meta property="twitter:description" content="Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual." />
        <meta property="twitter:image" content="https://www.amdoinitiative.org/twitter-image.jpg" />

          {/* JSON-LD structured data */}
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Amdo Initiative",
              "url": "https://www.amdoinitiative.org",
              "logo": "https://www.amdoinitiative.org/logo.png",
              "sameAs": [
                "https://www.facebook.com/amdoinitiative",
                "https://www.twitter.com/amdoinitiative",
                "https://www.linkedin.com/company/amdoinitiative"
              ],
              "description": "Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual."
            })
          }}
        />
              
      </Head>

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

        <div className="container mx-auto px-4 mt-40">
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-normal mb-2 text-black">₦<AnimatedNumber value="500000" />+</p>
              <p className="text-xl text-black">Fund Raised</p>
            </div>
            <div className="w-6 h-6 bg-[#F9A602] rounded-full mt-4"></div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-normal mb-2 text-black"><AnimatedNumber value="50" />+</p>
              <p className="text-xl text-black">Volunteers</p>
            </div>
            <div className="w-6 h-6 bg-[#F9A602] rounded-full mt-4"></div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-normal mb-2 text-black"><AnimatedNumber value="100" /></p>
              <p className="text-xl text-black">Scholarships</p>
            </div>
            <div className="w-6 h-6 bg-[#F9A602] rounded-full mt-4"></div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-normal mb-2 text-black"><AnimatedNumber value="24" /></p>
              <p className="text-xl text-black">Workshops</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}