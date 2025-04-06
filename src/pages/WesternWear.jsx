import React from 'react';
import { Link } from 'react-router-dom';

const WesternWear = () => {
  // Sample product data for Western Wear (30 products)
  const products = [
    { id: 61, name: 'Mauve Melody Cosmos Suit Set', price: 1499, image: '/Dress/Dewdrop Charm Cotton Dress 1.jpg' },
    { id: 62, name: 'Moss Green Majesty Suit Set', price: 1499, image: '/Kurta Set/moss green majesty 1.jpg' },
    { id: 63, name: 'Mimosa Luxe Yellow Suit Set', price: 1499, image: '/Kurta Set/mimosa luxe yellow 1.jpg' },
    { id: 64, name: 'Molten Magic Orange Suit Set', price: 1499, image: '/Kurta Set/molten magic orange 1.jpg' },
    { id: 65, name: 'Samara Green Heavy Embroidered', price: 1599, image: '/Kurta Set/samara green heavy embroidered 1.jpg' },
    { id: 66, name: 'Samaira Ivory Cotton Suit Set', price: 1199, image: '/Kurta Set/samara ivory cotton 1.jpg' },
    { id: 67, name: 'Spring Olive Cotton Suit Set', price: 1199, image: '/Kurta Set/spring olive cotton 1.jpg' },
    { id: 68, name: 'Zeenat Pink Muslin Suit Set', price: 1199, image: '/Kurta Set/zeenat pink mulsin 1.jpg' },
    { id: 69, name: 'Navy Elegance Cotton Suit Set', price: 1099, image: '/Kurta Set/navy elegance cotton 1.jpg' },
    { id: 70, name: 'Crimson Blush Kurta Set', price: 1499, image: '/Kurta Set/crimson blush kurta 1.jpg' },
    { id: 71, name: 'Anamika Muslin Suit Set', price: 1299, image: '/Kurta Set/Anamika muslin 1.jpg' },
    { id: 72, name: 'Advika Ivory Cotton Suit Set', price: 1299, image: '/Kurta Set/advika ivory cotton 1.jpg' },
    { id: 73, name: 'Vintage Charm Cotton Suit Set', price: 1199, image: '/Kurta Set/vintage charm cotton 1.jpg' },
    { id: 74, name: 'Shadow Grace Cotton Suit Set', price: 1299, image: '/Kurta Set/shadow grace cotton 1.jpg' },
    { id: 75, name: 'Abeer Cotton Suit Set', price: 1099, image: '/Kurta Set/abeer cotton 1.jpg' },
    { id: 76, name: 'Kesariya Cosmos Kurta Set ', price: 1499, image: '/Kurta Set/Kesariya cosmos kurta 1.jpg' },
    { id: 77, name: 'Shivanjali Silk Suit Set', price: 1499, image: '/Kurta Set/Shivanjali silk 1.jpg' },
    { id: 78, name: 'Mystic Waves Muslin Suit Set', price: 1299, image: '/Kurta Set/Mystic waves muslin 1.jpg' },
    { id: 79, name: 'Regal Shadow Black Kurta Set', price: 1399, image: '/Kurta Set/Regal shadow black kurta 1.jpg' },
    { id: 80, name: 'Aadhya Pink Muslin Suit Set', price: 1299, image: '/Kurta Set/Aadhya pink muslin 1.jpg' },
    { id: 81, name: 'Saadhvi Muslin Suit Set', price: 1299, image: '/Kurta Set/Saadhvi muslin 1.jpg' },
    { id: 82, name: 'Roshni Pink Silk Kurta Set', price: 1299, image: '/Kurta Set/Roshni pink silk kurta 1.jpg' },
    { id: 83, name: 'Electric Lush Heavy Embroidered Suit Set', price: 1499, image: '/Kurta Set/Electric lush heavy embroidered 1.jpg' },
    { id: 84, name: 'Sofia Brown Heavy Embroidered Suit Set', price: 1499, image: '/Kurta Set/sofia brown heavy embroidered 1.jpg' },
    { id: 85, name: 'Rutvik Silk Suit Set', price: 1299, image: '/Kurta Set/Rutvik silk 1.jpg' },
    { id: 86, name: 'Pastel Grow Co-Ord Set', price: 1399, image: '/Kurta Set/pastel grow co-ords set 1.jpg' },
    { id: 87, name: 'Vasana Silk Worked Kurta Set', price: 1599, image: '/Kurta Set/Vasana silk worked kurta 1.jpg' },
    { id: 88, name: 'Mermaid Wave Muslin Suit Set', price: 1299, image: '/Kurta Set/mermaid wave muslin 1.jpg' },
    { id: 89, name: 'Paakhi Yellow Muslin Suit Set', price: 1099, image: '/Kurta Set/paakhi yellow muslin 1.jpg' },
    { id: 90, name: 'Swan Pink Muslin Suit Set', price: 1099, image: '/Kurta Set/swan pink muslin 1.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Kurta sets</h1>
      <p className="text-gray-600 text-center mb-8">
        Special Offer On Girls Fashion trends. BUY 2 GET 1 FREE
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