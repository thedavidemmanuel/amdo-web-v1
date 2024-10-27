'use client';

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Image 
              src="/Amdo Initiative logo.png"
              alt="Amdo Initiative Logo"
              width={100}
              height={0}
              className="object-contain mb-4"
            />
            <p className="text-gray-600 text-sm mb-4 font-light">
              Empowering our community by developing its people, creating opportunities, and building lasting solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-black font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Programs', 'Blog', 'Join Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="col-span-1">
            <h3 className="text-black font-medium text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {[
                'Education Initiatives',
                'Community Development',
                'Youth Empowerment',
                'Skills Training',
                'Mentorship'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-black font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm font-light">
                Email: info@amdoinitiative.org
              </li>
              <li className="text-gray-600 text-sm font-light">
                Phone: +234 123 456 7890
              </li>
              <li className="text-gray-600 text-sm font-light">
                Address: Lagos, Nigeria
              </li>
            </ul>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {[
                { name: 'Facebook', href: '#' },
                { name: 'Twitter', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Instagram', href: '#' }
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <span className="sr-only">{social.name}</span>
                  {/* You can add social media icons here */}
                  <div className="w-6 h-6 bg-gray-400 rounded-full hover:bg-gray-600 transition-colors duration-200"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm font-light">
              © {currentYear} The Amdo Initiative. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-light transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}