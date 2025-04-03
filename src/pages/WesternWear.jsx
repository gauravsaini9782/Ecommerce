import React from 'react';
import { Link } from 'react-router-dom';

const WesternWear = () => {
  // Sample product data for Western Wear (30 products)
  const products = [
    { id: 61, name: 'Denim Kurti Top', price: 1499, image: 'https://via.placeholder.com/300?text=Denim+Kurti+Top' },
    { id: 62, name: 'Cotton Tunic Kurti', price: 899, image: 'https://via.placeholder.com/300?text=Cotton+Tunic+Kurti' },
    { id: 63, name: 'Cape Style Kurti', price: 1799, image: 'https://via.placeholder.com/300?text=Cape+Style+Kurti' },
    { id: 64, name: 'Printed Shirt Kurti', price: 1199, image: 'https://via.placeholder.com/300?text=Printed+Shirt+Kurti' },
    { id: 65, name: 'Chiffon Overlay Kurti', price: 1599, image: 'https://via.placeholder.com/300?text=Chiffon+Overlay+Kurti' },
    { id: 66, name: 'Velvet Crop Kurti', price: 1999, image: 'https://via.placeholder.com/300?text=Velvet+Crop+Kurti' },
    { id: 67, name: 'Linen Shirt Kurti', price: 1299, image: 'https://via.placeholder.com/300?text=Linen+Shirt+Kurti' },
    { id: 68, name: 'Silk High-Low Kurti', price: 2299, image: 'https://via.placeholder.com/300?text=Silk+High-Low+Kurti' },
    { id: 69, name: 'Cotton Peplum Kurti', price: 999, image: 'https://via.placeholder.com/300?text=Cotton+Peplum+Kurti' },
    { id: 70, name: 'Georgette Wrap Kurti', price: 1699, image: 'https://via.placeholder.com/300?text=Georgette+Wrap+Kurti' },
    { id: 71, name: 'Rayon Off-Shoulder Kurti', price: 1899, image: 'https://via.placeholder.com/300?text=Rayon+Off-Shoulder+Kurti' },
    { id: 72, name: 'Silk Cold-Shoulder Kurti', price: 2099, image: 'https://via.placeholder.com/300?text=Silk+Cold-Shoulder+Kurti' },
    { id: 73, name: 'Cotton Maxi Kurti', price: 1399, image: 'https://via.placeholder.com/300?text=Cotton+Maxi+Kurti' },
    { id: 74, name: 'Chanderi Shirt Kurti', price: 1799, image: 'https://via.placeholder.com/300?text=Chanderi+Shirt+Kurti' },
    { id: 75, name: 'Printed Asymmetrical Kurti', price: 1099, image: 'https://via.placeholder.com/300?text=Printed+Asymmetrical+Kurti' },
    { id: 76, name: 'Silk Belted Kurti', price: 1999, image: 'https://via.placeholder.com/300?text=Silk+Belted+Kurti' },
    { id: 77, name: 'Georgette Ruffle Kurti', price: 1499, image: 'https://via.placeholder.com/300?text=Georgette+Ruffle+Kurti' },
    { id: 78, name: 'Rayon Flared Top Kurti', price: 1699, image: 'https://via.placeholder.com/300?text=Rayon+Flared+Top+Kurti' },
    { id: 79, name: 'Cotton Crop Top Kurti', price: 1299, image: 'https://via.placeholder.com/300?text=Cotton+Crop+Top+Kurti' },
    { id: 80, name: 'Velvet Jacket Kurti', price: 2399, image: 'https://via.placeholder.com/300?text=Velvet+Jacket+Kurti' },
    { id: 81, name: 'Linen High-Low Kurti', price: 1599, image: 'https://via.placeholder.com/300?text=Linen+High-Low+Kurti' },
    { id: 82, name: 'Silk Peplum Top Kurti', price: 2199, image: 'https://via.placeholder.com/300?text=Silk+Peplum+Top+Kurti' },
    { id: 83, name: 'Cotton Shirt Style Kurti', price: 1199, image: 'https://via.placeholder.com/300?text=Cotton+Shirt+Style+Kurti' },
    { id: 84, name: 'Chiffon Tiered Kurti', price: 1799, image: 'https://via.placeholder.com/300?text=Chiffon+Tiered+Kurti' },
    { id: 85, name: 'Printed Denim Kurti', price: 1399, image: 'https://via.placeholder.com/300?text=Printed+Denim+Kurti' },
    { id: 86, name: 'Rayon Tunic Top Kurti', price: 1599, image: 'https://via.placeholder.com/300?text=Rayon+Tunic+Top+Kurti' },
    { id: 87, name: 'Silk Overlay Kurti', price: 1999, image: 'https://via.placeholder.com/300?text=Silk+Overlay+Kurti' },
    { id: 88, name: 'Cotton Flared Western Kurti', price: 1299, image: 'https://via.placeholder.com/300?text=Cotton+Flared+Western+Kurti' },
    { id: 89, name: 'Velvet High-Low Kurti', price: 2499, image: 'https://via.placeholder.com/300?text=Velvet+High-Low+Kurti' },
    { id: 90, name: 'Linen Cape Kurti', price: 1699, image: 'https://via.placeholder.com/300?text=Linen+Cape+Kurti' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Western Wear</h1>
      <p className="text-gray-600 text-center mb-8">
        Discover our modern kurti designs with a western twist.
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

export default WesternWear;