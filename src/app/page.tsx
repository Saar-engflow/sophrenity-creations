'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import services from '@/data/services';
import products from '@/data/products';
import ServiceCard from '@/components/ServiceCard';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Combine services and products for hero carousel
  const heroItems = [...services.slice(0, 3), ...products.slice(0, 3)];
  
const headlines = [
  "Make Every Moment Unforgettable",
  "Luxury She’ll Cherish Forever",
  "Turn Dreams into Reality",
  "Elegance in Every Detail",
  "Celebrate Love, Celebrate Life",
  "Thoughtful Beauty, Delivered"
];
  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, heroItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };

const categories = [
  { name: 'Services', icon: '💆🏽‍♀️' },       
  { name: 'Products', icon: '🛍️' },         
  { name: 'Bags', icon: '👜' },            
  { name: 'Seasonal Gift', icon: '🎁' },    
  { name: 'Event Decor', icon: '🎀' },     
];


  return (
    <main className="w-full">
      {/* Hero Carousel Section */}
      <section 
        className="relative w-full h-[60vh] overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #f1e3e5 0%, #e6dccd 100%)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                {headlines[currentSlide % headlines.length]}
              </h1>
              <p className="text-xl text-gray-700 max-w-lg">
                {heroItems[currentSlide].description}
              </p>
              <button 
                className="px-8 py-4 text-white font-semibold rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#c99aa2' }}
              >
                {currentSlide < 3 ? 'Learn More' : 'Shop Now'}
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[350px] h-[350px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                  <Image
                    src={heroItems[currentSlide].image}
                    alt={heroItems[currentSlide].name}
                    width={350}
                    height={350}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all"
        >
          <span className="text-2xl">←</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all"
        >
          <span className="text-2xl">→</span>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-black w-8' : 'bg-black/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Category Browse Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Browse by Category
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex-shrink-0 w-32 h-32 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:scale-105"
                style={{ backgroundColor: '#e6dccd' }}
              >
                <span className="text-4xl">{category.icon}</span>
                <span className="text-sm font-semibold text-black">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: '#f1e3e5' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                category={service.category}
                price={service.price}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Explore our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              className="px-8 py-4 text-white font-semibold rounded-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#c99aa2' }}
            >
              View All Products
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}