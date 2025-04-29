'use client';
import { useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal'; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-[#F0E6FA]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#8A4F7D] hover:text-[#DCD0FF] transition">
          Lic. Rebeca Moran
        </Link>
        
        {/* Menú para desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-[#5E4A7D] hover:text-[#DCD0FF] transition font-medium">Sobre mí</Link>
          <Link href="/services" className="text-[#5E4A7D] hover:text-[#DCD0FF] transition font-medium">Servicios</Link>
          <button 
            onClick={() => setShowContactModal(true)}
            className="bg-[#DCD0FF] text-[#5E4A7D] px-4 py-2 rounded-lg hover:bg-[#C9B8FF] transition font-medium shadow hover:shadow-md"
          >
            Contacto
          </button>
        </div>

        {/* Botón móvil */}
        <button 
          className="md:hidden text-[#5E4A7D] focus:outline-none"
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
        <div className="md:hidden bg-white py-3 px-4 space-y-4 border-t border-[#F0E6FA]">
          <Link 
            href="/about" 
            className="block text-[#5E4A7D] hover:text-[#DCD0FF] py-2 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Sobre mí
          </Link>
          <Link 
            href="/services" 
            className="block text-[#5E4A7D] hover:text-[#DCD0FF] py-2 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <button 
            onClick={() => {
              setIsOpen(false);
              setShowContactModal(true);
            }}
            className="inline-block bg-[#DCD0FF] text-[#5E4A7D] px-4 py-2 rounded-lg hover:bg-[#C9B8FF] font-medium mt-2 w-full text-center"
          >
            Contacto
          </button>
        </div>
      )}

      {/* Modal de Contacto */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </nav>
  );
}