import React from 'react';
import type { Product } from '../Type';
import { useThemeClasses } from '../hooks/useTheme';


interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { getThemeClass } = useThemeClasses();

  const cardClasses = getThemeClass(
    'rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]',
    {
      theme1: 'bg-white border border-gray-200 shadow-sm',
      theme2: 'bg-gray-800 border-l-4 border-purple-500',
      theme3: 'bg-white rounded-xl shadow-lg hover:shadow-xl'
    }
  );

  const titleClasses = getThemeClass(
    'text-lg font-semibold mb-2 line-clamp-1',
    {
      theme1: 'text-gray-800',
      theme2: 'text-white',
      theme3: 'text-purple-800'
    }
  );
    const parentClasses = getThemeClass(
    'p-4',
    {
      theme1: '',
      theme2: 'text-white',
      theme3: ''
    }
  );



  const priceClasses = getThemeClass(
    'font-bold',
    {
      theme1: 'text-blue-600',
      theme2: 'text-purple-400',
      theme3: 'text-orange-500'
    }
  );

  return (
    <div className={cardClasses}>
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain p-4 bg-white"
        />
      </div>
      <div className={parentClasses}>
        <h3 className={titleClasses}>{product.title}</h3>
        <p className={priceClasses}>${product.price}</p>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-sm line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center text-sm">
          <span className="mr-1">⭐ {product.rating.rate}</span>
          <span>({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};