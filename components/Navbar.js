'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition">
          Lic. Rebeca Moran
        </Link>
        
        {/* Menú para desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-gray-900 hover:text-indigo-600 transition font-medium">Sobre mí</Link>
          <Link href="/services" className="text-gray-900 hover:text-indigo-600 transition font-medium">Servicios</Link>
          <Link href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium shadow hover:shadow-md">
            Contacto
          </Link>
        </div>

        {/* Botón móvil */}
        <button 
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white py-3 px-4 space-y-4 border-t border-gray-100">
          <Link 
            href="/about" 
            className="block text-gray-900 hover:text-indigo-600 py-2 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Sobre mí
          </Link>
          <Link 
            href="/services" 
            className="block text-gray-900 hover:text-indigo-600 py-2 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}