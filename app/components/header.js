'use client';

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/Amdo Initiative logo.png"
            alt="Amdo Initiative Logo"
            width={100}
            height={0}
            className="object-contain"
          />
        </div>
        <nav className="flex items-center space-x-6">
          {[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about-us' },
            { name: 'Programs', href: '/programs' },
            { name: 'Blog', href: '/blog' },
            { name: 'Join Us', href: '/join-us' },
            { name: 'Contact Us', href: '/contact-us' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 

              className="text-black font-medium text-lg hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/donate" 
            className="bg-[#2B9348] text-white px-6 py-2 rounded-md font-medium text-lg hover:bg-opacity-90"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}