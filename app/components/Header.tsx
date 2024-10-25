'use client'

import Link from 'next/link';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <header>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">我的个人空间</Link>
            <div className="flex space-x-4 items-center">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  导航
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn">
                    <Link href="/diving" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      潜水
                    </Link>
                    <Link href="/resume" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      简历
                    </Link>
                  </div>
                )}
              </div>
              <a href="mailto:18310343827@163.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://github.com/zxyfreediver" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
