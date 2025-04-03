import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-pink-700">About Us</h1>
      
      {/* Introduction Section */}
      <section className="mb-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-md backdrop-blur-sm">
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-pink-600">Kurti Elegance</span>, where tradition meets exclusivity. We are not just another fashion brand—we are curators of rare, premium kurtis designed for those who seek elegance, quality, and individuality in every stitch.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="mb-12 bg-pink-50 bg-opacity-70 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-pink-700">Our Story</h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Founded with a passion for preserving India’s rich textile heritage while embracing modern sophistication, Kurti Elegance began as a vision to bring unparalleled craftsmanship to discerning women worldwide. Over the years, we’ve partnered with master artisans and designers to create a collection that stands apart—each piece a testament to our commitment to rarity and excellence. Our kurtis are not mass-produced; they are carefully crafted in limited batches, ensuring you wear something truly unique.
        </p>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="mb-12 bg-pink-50 bg-opacity-70 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-pink-700">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-4 bg-white bg-opacity-90 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Rare & Premium Fabrics</h3>
            <p className="text-gray-700">
              We source only the finest materials—pure silks, handwoven cottons, luxurious velvets, and breathable linens—often from small, sustainable producers who share our values. Every fabric tells a story of tradition and quality.
            </p>
          </div>
          <div className="text-center p-4 bg-white bg-opacity-90 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Exclusive Designs</h3>
            <p className="text-gray-700">
              Our designs are born from a blend of timeless Indian artistry and contemporary flair. Limited-edition runs mean you won’t find our kurtis everywhere—your style remains as unique as you are.
            </p>
          </div>
          <div className="text-center p-4 bg-white bg-opacity-90 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">Unmatched Craftsmanship</h3>
            <p className="text-gray-700">
              Each kurti is crafted with meticulous attention to detail by skilled artisans. From intricate embroidery to perfect stitching, we ensure every piece meets our rigorous standards of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-12 bg-pink-50 bg-opacity-70 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-pink-700">Our Mission</h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          At Kurti Elegance, our mission is to empower women to express their individuality through fashion that’s as rare and remarkable as they are. We strive to deliver not just clothing, but an experience—where every purchase reflects luxury, authenticity, and pride in India’s heritage. Sustainability is at our core, and we work tirelessly to support ethical practices and artisan communities.
        </p>
      </section>

      {/* Why Trust Us Section */}
      <section className="mb-12 bg-pink-50 bg-opacity-70 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-pink-700">Why Trust Us?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg max-w-3xl mx-auto space-y-2">
          <li><span className="font-semibold text-pink-600">Proven Quality:</span> Thousands of satisfied customers across the globe trust us for our premium products and exceptional service.</li>
          <li><span className="font-semibold text-pink-600">Transparent Practices:</span> We’re open about our sourcing and production—every kurti comes with a legacy of care and integrity.</li>
          <li><span className="font-semibold text-pink-600">Customer First:</span> Your satisfaction is our priority. From secure shopping to hassle-free returns, we’re here for you every step of the way.</li>
          <li><span className="font-semibold text-pink-600">Exclusive Guarantee:</span> Our limited-edition promise ensures you own a piece that’s rare and irreplaceable.</li>
        </ul>
      </section>

      {/* Closing Section */}
      <section className="text-center bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
          Join us on this journey of elegance and exclusivity. At Kurti Elegance, we don’t just sell kurtis—we offer you a chance to wear art, heritage, and luxury, all in one. Discover the difference of premium, rare fashion today.
        </p>
        <a
          href="/new-arrivals"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-colors shadow-lg"
        >
          Explore Our Collection
        </a>
      </section>
    </div>
  );
};

export default AboutUs;