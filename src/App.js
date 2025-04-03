import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NewArrivals from './pages/NewArrivals';
import IndianWear from './pages/IndianWear';
import WesternWear from './pages/WesternWear';
import ContactUs from './pages/ContactUs';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/indian-wear" element={<IndianWear />} />
            <Route path="/western-wear" element={<WesternWear />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;