'use client';

// components/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard = ({ name, description, category, price, image }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
      <div className="relative w-full h-64 overflow-hidden" style={{ backgroundColor: '#f1e3e5' }}>
        <Image 
          src={image} 
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Optional Sale Badge */}
        {Math.random() > 0.5 && (
          <span 
            className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full"
            style={{ backgroundColor: '#c99aa2' }}
          >
            SALE
          </span>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#c99aa2' }}>
          {category}
        </span>
        <h3 className="text-xl font-bold mb-3 text-black">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600 mb-4 flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-2xl font-bold text-black">
            ${price}
          </p>
          <button 
            className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#c99aa2' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;