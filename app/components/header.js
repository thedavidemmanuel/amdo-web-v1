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
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <nav className="flex items-center space-x-6">
          {[
            'Home',
            'About Us',
            'Programs',
            'Blog',
            'Join Us',
            'Contact Us',
          ].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-black font-medium text-lg hover:text-gray-600"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#" 
            className="bg-[#123456] text-white px-6 py-2 rounded-md font-medium text-lg hover:bg-opacity-90"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}