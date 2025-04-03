import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kurti Store</h3>
            <p className="text-gray-400">Premium quality kurtis for every occasion</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about-us" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: support@kurtistore.com</p>
            <p className="text-gray-400">Phone: +91 123-456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 Kurti Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;