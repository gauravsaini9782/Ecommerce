import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  // Sample product data for New Arrivals (30 products)
  const products = [
    { id: 1, name: 'Silk Anarkali Kurti', price: 2499, image: 'https://via.placeholder.com/300?text=Silk+Anarkali+Kurti' },
    { id: 2, name: 'Cotton Straight Kurti', price: 899, image: 'https://via.placeholder.com/300?text=Cotton+Straight+Kurti' },
    { id: 3, name: 'Embroidered Georgette Kurti', price: 1799, image: 'https://via.placeholder.com/300?text=Embroidered+Georgette+Kurti' },
    { id: 4, name: 'Printed Rayon Kurti', price: 1199, image: 'https://via.placeholder.com/300?text=Printed+Rayon+Kurti' },
    { id: 5, name: 'Chiffon Layered Kurti', price: 1599, image: 'https://via.placeholder.com/300?text=Chiffon+Layered+Kurti' },
    { id: 6, name: 'Velvet Kurti with Zari', price: 2999, image: 'https://via.placeholder.com/300?text=Velvet+Kurti+with+Zari' },
    { id: 7, name: 'Linen Straight Kurti', price: 1399, image: 'https://via.placeholder.com/300?text=Linen+Straight+Kurti' },
    { id: 8, name: 'Handwoven Silk Kurti', price: 3499, image: 'https://via.placeholder.com/300?text=Handwoven+Silk+Kurti' },
    { id: 9, name: 'Cotton Block Print Kurti', price: 999, image: 'https://via.placeholder.com/300?text=Cotton+Block+Print+Kurti' },
    { id: 10, name: 'Georgette A-Line Kurti', price: 1699, image: 'https://via.placeholder.com/300?text=Georgette+A-Line+Kurti' },
    { id: 11, name: 'Rayon Palazzo Kurti Set', price: 1899, image: 'https://via.placeholder.com/300?text=Rayon+Palazzo+Kurti+Set' },
    { id: 12, name: 'Silk Embroidered Kurti', price: 2799, image: 'https://via.placeholder.com/300?text=Silk+Embroidered+Kurti' },
    { id: 13, name: 'Cotton Asymmetrical Kurti', price: 1299, image: 'https://via.placeholder.com/300?text=Cotton+Asymmetrical+Kurti' },
    { id: 14, name: 'Chanderi Kurti with Dupatta', price: 2299, image: 'https://via.placeholder.com/300?text=Chanderi+Kurti+with+Dupatta' },
    { id: 15, name: 'Printed Cotton Kurti', price: 799, image: 'https://via.placeholder.com/300?text=Printed+Cotton+Kurti' },
    { id: 16, name: 'Silk Straight Kurti', price: 1999, image: 'https://via.placeholder.com/300?text=Silk+Straight+Kurti' },
    { id: 17, name: 'Georgette Flared Kurti', price: 1499, image: 'https://via.placeholder.com/300?text=Georgette+Flared+Kurti' },
    { id: 18, name: 'Rayon Anarkali Kurti', price: 2099, image: 'https://via.placeholder.com/300?text=Rayon+Anarkali+Kurti' },
    { id: 19, name: 'Cotton Kurti with Jacket', price: 1599, image: 'https://via.placeholder.com/300?text=Cotton+Kurti+with+Jacket' },
    { id: 20, name: 'Velvet Straight Kurti', price: 2699, image: 'https://via.placeholder.com/300?text=Velvet+Straight+Kurti' },
    { id: 21, name: 'Linen Embroidered Kurti', price: 1799, image: 'https://via.placeholder.com/300?text=Linen+Embroidered+Kurti' },
    { id: 22, name: 'Silk Kurti with Palazzo', price: 3199, image: 'https://via.placeholder.com/300?text=Silk+Kurti+with+Palazzo' },
    { id: 23, name: 'Cotton Kurti with Skirt', price: 1399, image: 'https://via.placeholder.com/300?text=Cotton+Kurti+with+Skirt' },
    { id: 24, name: 'Chiffon Straight Kurti', price: 1299, image: 'https://via.placeholder.com/300?text=Chiffon+Straight+Kurti' },
    { id: 25, name: 'Printed Georgette Kurti', price: 1099, image: 'https://via.placeholder.com/300?text=Printed+Georgette+Kurti' },
    { id: 26, name: 'Rayon Kurti with Dupatta', price: 1999, image: 'https://via.placeholder.com/300?text=Rayon+Kurti+with+Dupatta' },
    { id: 27, name: 'Silk Kurti with Embroidery', price: 2599, image: 'https://via.placeholder.com/300?text=Silk+Kurti+with+Embroidery' },
    { id: 28, name: 'Cotton Flared Kurti', price: 1199, image: 'https://via.placeholder.com/300?text=Cotton+Flared+Kurti' },
    { id: 29, name: 'Velvet Anarkali Kurti', price: 3299, image: 'https://via.placeholder.com/300?text=Velvet+Anarkali+Kurti' },
    { id: 30, name: 'Linen Printed Kurti', price: 1499, image: 'https://via.placeholder.com/300?text=Linen+Printed+Kurti' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">New Arrivals</h1>
      <p className="text-gray-600 text-center mb-8">
        Check out our latest collection of kurtis fresh from the designers!
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

export default NewArrivals;