import React from 'react';
import { Link } from 'react-router-dom';

const IndianWear = () => {
  // Sample product data for Indian Wear (30 products)
  const products = [
    { id: 31, name: 'Dewdrop Charm Cotton Dress', price: 899, image: '/Dress/Dewdrop Charm Cotton Dress 1.jpg' },
    { id: 32, name: 'Breezy Grace Mini Dress ', price: 899, image: '/Dress/Breezy Grace Mini Dress 1.jpg' },
    { id: 33, name: 'Victorian Cotton Maxi Dress ', price: 899, image: '/Dress/Victorian Cotton Maxi Dress 1.jpg' },
    { id: 34, name: 'Petal Grace Pink Cotton Dress ', price: 899, image: '/Dress/Petal Grace Pink Cotton Dress 1.jpg' },
    { id: 35, name: 'Olive Breeze Cotton Dress', price: 899, image: '/Dress/Olive Breeze Cotton Dress 1.jpg' },
    { id: 36, name: 'Ocean Drift Grey Maxi Dress', price: 899, image: '/Dress/Ocean Drift Grey Maxi Dress 1.jpg' },
    { id: 37, name: 'Vanilla Breeze Mini Dress ', price: 899, image: '/Dress/Vanilla Breeze Mini Dress 1.jpg' },
    { id: 38, name: 'Ivory Blossom Cotton Dress', price: 899, image: '/Dress/Ivory Blossom Cotton Dress 1.jpg' },
    { id: 39, name: 'Lilac Breeze Maxi Dress ', price: 899, image: '/Dress/Lilac Breeze Maxi Dress 1.jpg' },
    { id: 40, name: 'Coastal Charm Blue Maxi Dress', price: 899, image: '/Dress/Coastal Charm Blue Maxi Dress 1.jpg' },
    { id: 41, name: 'Mint Blossom Floral Maxi Dress', price: 899, image: '/Dress/Mint Blossom Floral Maxi Dress 1.jpg' },
    { id: 42, name: 'Sunkissed Lavender Maxi Dress', price: 899, image: '/Dress/Sunkissed Lavender Maxi Dress 1.jpg' },
    { id: 43, name: 'Bohemian Bloom Cotton Dress', price: 900, image: '/Dress/Bohemian Bloom Cotton Dress 1.jpg' },
    { id: 44, name: 'Galaxy White Cotton Maxi', price: 899, image: '/Dress/Galaxy White Cotton Maxi 1.jpg' },
    { id: 45, name: 'Skyline Charm Mini Dress', price: 799, image: '/Dress/Skyline Charm Mini Dress 1.jpg' },
    { id: 46, name: 'Filo Cotton Dress ', price: 999, image: '/Dress/Filo Cotton Dress 1.jpg' },
    { id: 47, name: 'Sarah Haze Cotton Dress ', price: 899, image: '/Dress/Sarah Haze Cotton Dress 1.jpg' },
    { id: 48, name: 'The White Canvas Dress  ', price: 799, image: '/Dress/The White Canvas Dress 1.jpg' },
    { id: 49, name: 'Calming Mist Floral Maxi', price: 899, image: '/Dress/Calming Mist Floral Maxi 1.jpg' },
    { id: 50, name: 'Posh Delight Green Cotton Maxi', price: 899, image: '/Dress/Posh Delight Green Cotton Maxi 1.jpg' },
    { id: 51, name: 'Artistry Pearl Cotton Maxi', price: 900, image: '/Dress/Artistry Pearl Cotton Maxi 1.jpg' },
    { id: 52, name: 'Silk Kurti with Palazzo', price: 3299, image: 'https://via.placeholder.com/300?text=Silk+Kurti+with+Palazzo' },
    { id: 53, name: 'Cotton Kurti with Skirt', price: 1499, image: 'https://via.placeholder.com/300?text=Cotton+Kurti+with+Skirt' },
    { id: 54, name: 'Chiffon Straight Kurti', price: 1399, image: 'https://via.placeholder.com/300?text=Chiffon+Straight+Kurti' },
    { id: 55, name: 'Printed Georgette Kurti', price: 1199, image: 'https://via.placeholder.com/300?text=Printed+Georgette+Kurti' },
    { id: 56, name: 'Rayon Kurti with Dupatta', price: 2099, image: 'https://via.placeholder.com/300?text=Rayon+Kurti+with+Dupatta' },
    { id: 57, name: 'Silk Kurti with Embroidery', price: 2699, image: 'https://via.placeholder.com/300?text=Silk+Kurti+with+Embroidery' },
    { id: 58, name: 'Cotton Flared Kurti', price: 1299, image: 'https://via.placeholder.com/300?text=Cotton+Flared+Kurti' },
    { id: 59, name: 'Velvet Straight Kurti', price: 2899, image: 'https://via.placeholder.com/300?text=Velvet+Straight+Kurti' },
    { id: 60, name: 'Linen Printed Kurti', price: 1599, image: 'https://via.placeholder.com/300?text=Linen+Printed+Kurti' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Dresses</h1>
      <p className="text-gray-600 text-center mb-8">
        Explore our exquisite collection of traditional Indian kurtis.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default IndianWear;