'use client';

// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-black hover:opacity-80 transition-opacity"
        >
          Sophrenity Creations
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link 
              href="/" 
              className="text-base font-medium text-gray-700 hover:text-black transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-base font-medium text-gray-700 hover:text-black transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <button 
              className="px-6 py-2 text-white font-semibold rounded-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#c99aa2' }}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-black transition-all ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col py-4">
            <li>
              <Link 
                href="/" 
                className="block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="block px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="px-6 py-3">
              <button 
                className="w-full px-6 py-2 text-white font-semibold rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#c99aa2' }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;