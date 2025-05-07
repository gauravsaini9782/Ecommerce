import React from 'react';

const ContactUs = () => {
  const whatsappNumber = "+918306526811";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-600" 
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-600" 
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea 
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-600" 
              rows="4"
              disabled
            ></textarea>
          </div>
          <p className="text-gray-600 text-center">
            Please click below to message us directly on WhatsApp
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;