import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/Juniper_Fashion_Banner_1_-_Desktop_c01c9eb1-883a-4495-aead-3b7cc40b0521.webp',
    '/kurta_ssset_banner.webp',
    '/Sajilo_Banner_2.webp',
  ];

  const products = [
    { id: 1, name: 'Roshni Pink Silk Kurta Set', price: 1299, image: '/Kurta Set/Roshni pink silk kurta 1.jpg' },
    { id: 2, name: 'Advika Ivory Cotton Suit Set ', price: 1299, image: '/Kurta Set/advika ivory cotton 1.jpg' },
    { id: 3, name: 'Samara Green Heavy Embroidered Suit', price: 1499, image: '/Kurta Set/samara green heavy embroidered 1.jpg' },
    { id: 4, name: 'Vasana Silk Worked Kurta Set', price: 1499, image: '/Kurta Set/Vasana silk worked kurta 1.jpg' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="container mx-auto px-4">
      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg my-8">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/new-arrivals" 
            className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
          >
            View All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;