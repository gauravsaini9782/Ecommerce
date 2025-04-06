import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "6376918138";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-pink-600">Girls Fashion Trends</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-600">Home</Link>
            <Link to="/about-us" className="text-gray-600 hover:text-pink-600">About Us</Link>
            <Link to="/new-arrivals" className="text-gray-600 hover:text-pink-600">New Arrivals</Link>
            <Link to="/indian-wear" className="text-gray-600 hover:text-pink-600">Dresses</Link>
            <Link to="/western-wear" className="text-gray-600 hover:text-pink-600">Kurta Sets</Link>
            <Link to="/contact-us" className="text-gray-600 hover:text-pink-600">Contact Us</Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.812-1.48-1.77-1.48-2.91 0-.634.233-1.218.652-1.697.42-.477.956-.766 1.535-.788.58-.022 1.13.198 1.63.57.501.373 1.883 1.25 1.883 2.975 0 1.726-1.883 3.447-1.62 3.595.263.148 1.547-.074 2.39-.694.846-.62 1.49-1.39 1.667-1.64.177-.248.099-.471-.074-.644zM12 0C5.373 0 0 5.373 0 12c0 2.137.561 4.248 1.62 6.095L0 24l5.904-1.62A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.182c-1.978 0-3.84-.561-5.447-1.535L5.03 21.18l.533-1.523A10.073 10.073 0 013.818 12 10.182 10.182 0 0112 1.818c5.635 0 10.182 4.547 10.182 10.182S17.635 22.182 12 22.182z"/>
              </svg>
            </a>
          </div>

          {/* Hamburger Menu */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link to="/" className="block py-2 text-gray-600 hover:text-pink-600">Home</Link>
            <Link to="/about-us" className="block py-2 text-gray-600 hover:text-pink-600">About Us</Link>
            <Link to="/new-arrivals" className="block py-2 text-gray-600 hover:text-pink-600">New Arrivals</Link>
            <Link to="/indian-wear" className="block py-2 text-gray-600 hover:text-pink-600">Indian Wear</Link>
            <Link to="/western-wear" className="block py-2 text-gray-600 hover:text-pink-600">Western Wear</Link>
            <Link to="/contact-us" className="block py-2 text-gray-600 hover:text-pink-600">Contact Us</Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 text-gray-600 hover:text-green-600"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.812-1.48-1.77-1.48-2.91 0-.634.233-1.218.652-1.697.42-.477.956-.766 1.535-.788.58-.022 1.13.198 1.63.57.501.373 1.883 1.25 1.883 2.975 0 1.726-1.883 3.447-1.62 3.595.263.148 1.547-.074 2.39-.694.846-.62 1.49-1.39 1.667-1.64.177-.248.099-.471-.074-.644zM12 0C5.373 0 0 5.373 0 12c0 2.137.561 4.248 1.62 6.095L0 24l5.904-1.62A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.182c-1.978 0-3.84-.561-5.447-1.535L5.03 21.18l.533-1.523A10.073 10.073 0 013.818 12 10.182 10.182 0 0112 1.818c5.635 0 10.182 4.547 10.182 10.182S17.635 22.182 12 22.182z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;