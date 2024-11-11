'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Programs', href: '/programs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Join Us', href: '/join-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="w-full py-4 px-6 bg-white relative z-50">
      <div className="max-w-7xl mx-auto">
        {/* esktop Navigation */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/Amdo Initiative logo.png"
              alt="Amdo Initiative Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* mobile menu*/}
          <button 
            className="lg:hidden text-black p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-black font-medium text-lg hover:text-gray-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/donate" 
              className="bg-[#2B9348] text-white px-6 py-2 rounded-md font-medium text-lg hover:bg-opacity-90 transition-colors duration-200"
            >
              Donate
            </Link>
          </nav>
        </div>

        {/* mobile menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '76px' }}
        >
          <nav className="flex flex-col px-6 py-4 space-y-4 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-black font-medium text-lg py-2 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/donate" 
              className="bg-[#2B9348] text-white px-6 py-2 rounded-md font-medium text-lg hover:bg-opacity-90 transition-colors duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}