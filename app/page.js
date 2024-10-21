'use client';

import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'

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

      <main className="container mx-auto px-4 py-12 flex">
        <div className="w-1/2 pr-12">
          <h1 className="text-6xl font-bold mb-6 leading-tight">Building For Everyone</h1>
          <p className="text-lg text-gray-700 mb-8">
            Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual. Together, we shape a future where no one is left behind.
          </p>
          <div className="space-x-4">
            <Link href="#" className="bg-white text-gray-800 px-6 py-3 rounded border border-gray-300 hover:bg-gray-50">
              Learn More
            </Link>
            <Link href="#" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Donate
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative h-[700px]">
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
    </div>
  )
}