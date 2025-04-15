import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  // Sample product data for New Arrivals (30 products)
  const products = [
    { id: 1, name: 'Women Black Mermaid Dress', price: 399, image: '/Dresses/Black mermaid 1.WEBP' },
    { id: 2, name: 'Women White Mermaid Dress', price: 399, image: '/Dresses/White mermaid 1.WEBP' },
    { id: 3, name: 'Women Red Mermaid Dress', price: 399, image: '/Dresses/Red mermaid 1.JPG' },
    { id: 4, name: 'Women Blue Mermaid Dress', price: 399, image: '/Dresses/Blue mermaid 1.WEBP' },
    { id: 5, name: 'Women Sky Blue Mermaid Dress', price: 399, image: '/Dresses/sky white mermaid 1.WEBP' },
    { id: 6, name: 'Women Yellow One Shoulder/Asymmetric Print Dress', price: 399, image: '/Dresses/Women yellow 1.WEBP' },
    { id: 7, name: 'Women Blue One Shoulder/Asymmetric Print Dress', price: 399, image: '/Dresses/womens blue 1.JPG' },
    { id: 8, name: 'Women Wine One Shoulder/Asymmetric Print Dress', price: 399, image: '/Dresses/womens wine 1.JPG' },
    { id: 9, name: 'Women Pink Bodycon Sleeveless Dress', price: 400, image: '/Dresses/Pink bodycon 1.JPG' },
    { id: 10, name: 'Women Green Bodycon Sleeveless Dress', price: 400, image: '/Dresses/Green bodycon 1.JPG' },
    { id: 11, name: 'Women Blue Bodycon Sleeveless Dress ', price: 400, image: '/Dresses/Blue bodycon 1.JPG' },
    { id: 12, name: 'Women Blue Layered Dress', price: 399, image: '/Dresses/Blue layred 1.JPG' },
    { id: 13, name: 'Women Yellow Sweet Heart Neck Dress', price: 399, image: '/Dresses/Yellow sweet 1.JPG' },
    { id: 14, name: 'Women Orange Layered/Tie-Up Dress ', price: 399, image: '/Dresses/Orange layred 1.JPG' },
    { id: 15, name: 'Women Black Mini Polyester Floral Print Dress', price: 400, image: '/Dresses/Black mini 1.WEBP' },
    { id: 16, name: 'Women Rama Mini Polyester Woven Dress', price: 400, image: '/Dresses/Rama mini 1.WEBP' },
    { id: 17, name: 'Women Purple Mini V-Neck Dress', price: 400, image: '/Dresses/Purple mini 1.WEBP' },
    { id: 18, name: 'Women Peach Knee Lenght Strap Dress', price: 400, image: '/Dresses/peach V neck 1.WEBP' },
    { id: 19, name: 'Women Blue Above Knee Dress', price: 400, image: '/Dresses/Blue V neck 1.WEBP' },
    { id: 20, name: 'Women Off White Strap V Neck Dress', price: 400, image: '/Dresses/White V neck 1.WEBP' },
    { id: 21, name: 'Obshivka Printed Fit and Flare Dress', price: 400, image: '/Dresses/obshivka printed 1.WEBP' },
    { id: 22, name: 'Obshivka Printed Fit and Flare Dress', price: 400, image: '/Dresses/Obshivka blue 1.WEBP' },
    { id: 23, name: 'Obshivka Printed Fit and Flare Dress', price: 400, image: '/Dresses/obshivka fit 1.WEBP' },
    { id: 24, name: 'Women Pink Mini Cutout Dress ', price: 400, image: '/Dresses/Cutout pink 1.WEBP' },
    { id: 25, name: 'Women Red Flared Cutout Dress', price: 400, image: '/Dresses/Cutout red 2.WEBP' },
    { id: 26, name: 'Women Purple Flared Boat Neck Dress', price: 400, image: '/Dresses/Cutout purple 1.WEBP' },
    // { id: 27, name: 'Silk Kurti with Embroidery', price: 2599, image: 'https://via.placeholder.com/300?text=Silk+Kurti+with+Embroidery' },
    // { id: 28, name: 'Cotton Flared Kurti', price: 1199, image: 'https://via.placeholder.com/300?text=Cotton+Flared+Kurti' },
    // { id: 29, name: 'Velvet Anarkali Kurti', price: 3299, image: 'https://via.placeholder.com/300?text=Velvet+Anarkali+Kurti' },
    // { id: 30, name: 'Linen Printed Kurti', price: 1499, image: 'https://via.placeholder.com/300?text=Linen+Printed+Kurti' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">New Arrivals</h1>
      <p className="text-gray-600 text-center mb-8">
      Exclusive!! Deal , Buy 2 Get 1 Free on all Products
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