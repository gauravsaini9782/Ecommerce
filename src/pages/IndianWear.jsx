import React from 'react';
import { Link } from 'react-router-dom';

const IndianWear = () => {
  // Sample product data for Indian Wear (30 products)
  const products = [
    { id: 31, name: 'Anarkali Silk Kurti', price: 2599, image: 'https://via.placeholder.com/300?text=Anarkali+Silk+Kurti' },
    { id: 32, name: 'Cotton Churidar Kurti', price: 999, image: 'https://via.placeholder.com/300?text=Cotton+Churidar+Kurti' },
    { id: 33, name: 'Embroidered Lehenga Kurti', price: 2999, image: 'https://via.placeholder.com/300?text=Embroidered+Lehenga+Kurti' },
    { id: 34, name: 'Printed Dhoti Kurti', price: 1299, image: 'https://via.placeholder.com/300?text=Printed+Dhoti+Kurti' },
    { id: 35, name: 'Chiffon Saree Kurti', price: 1699, image: 'https://via.placeholder.com/300?text=Chiffon+Saree+Kurti' },
    { id: 36, name: 'Velvet Salwar Kurti', price: 2799, image: 'https://via.placeholder.com/300?text=Velvet+Salwar+Kurti' },
    { id: 37, name: 'Linen Straight Kurti', price: 1399, image: 'https://via.placeholder.com/300?text=Linen+Straight+Kurti' },
    { id: 38, name: 'Handwoven Banarasi Kurti', price: 3999, image: 'https://via.placeholder.com/300?text=Handwoven+Banarasi+Kurti' },
    { id: 39, name: 'Cotton Phulkari Kurti', price: 1099, image: 'https://via.placeholder.com/300?text=Cotton+Phulkari+Kurti' },
    { id: 40, name: 'Georgette Sharara Kurti', price: 1899, image: 'https://via.placeholder.com/300?text=Georgette+Sharara+Kurti' },
    { id: 41, name: 'Rayon Palazzo Set', price: 1999, image: 'https://via.placeholder.com/300?text=Rayon+Palazzo+Set' },
    { id: 42, name: 'Silk Kurta with Dupatta', price: 2899, image: 'https://via.placeholder.com/300?text=Silk+Kurta+with+Dupatta' },
    { id: 43, name: 'Cotton Asymmetrical Kurti', price: 1199, image: 'https://via.placeholder.com/300?text=Cotton+Asymmetrical+Kurti' },
    { id: 44, name: 'Chanderi Anarkali Set', price: 2399, image: 'https://via.placeholder.com/300?text=Chanderi+Anarkali+Set' },
    { id: 45, name: 'Printed Kota Kurti', price: 899, image: 'https://via.placeholder.com/300?text=Printed+Kota+Kurti' },
    { id: 46, name: 'Silk Straight Kurta', price: 2099, image: 'https://via.placeholder.com/300?text=Silk+Straight+Kurta' },
    { id: 47, name: 'Georgette Flared Kurti', price: 1599, image: 'https://via.placeholder.com/300?text=Georgette+Flared+Kurti' },
    { id: 48, name: 'Rayon Kurta with Skirt', price: 2199, image: 'https://via.placeholder.com/300?text=Rayon+Kurta+with+Skirt' },
    { id: 49, name: 'Cotton Kurti with Jacket', price: 1699, image: 'https://via.placeholder.com/300?text=Cotton+Kurti+with+Jacket' },
    { id: 50, name: 'Velvet Anarkali Kurti', price: 3499, image: 'https://via.placeholder.com/300?text=Velvet+Anarkali+Kurti' },
    { id: 51, name: 'Linen Embroidered Kurti', price: 1799, image: 'https://via.placeholder.com/300?text=Linen+Embroidered+Kurti' },
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
      <h1 className="text-3xl font-bold mb-6 text-center">Indian Wear</h1>
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