import React, { useEffect, useState } from 'react';
import { useThemeClasses } from '../hooks/useTheme';
import type { Product } from '../Type';
import { ProductCard } from '../components/ProductCard';
import { fetchFromAPI } from '../api/api';


export const Home: React.FC = () => {
  const { getThemeClass } = useThemeClasses();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  const containerClasses = getThemeClass(
    'min-h-screen mt-4 pt-16 pb-12 px-4 transition-all duration-300',
    {
      theme1: 'bg-gray-50',
      theme2: 'bg-gray-900',
      theme3: 'bg-gradient-to-br from-blue-50 to-purple-50'
    }
  );

  const titleClasses = getThemeClass(
    'text-3xl font-bold mb-4',
    {
      theme1: 'text-gray-800',
      theme2: 'text-white',
      theme3: 'text-purple-700'
    }
  );

  const subtitleClasses = getThemeClass(
    'text-lg mb-8',
    {
      theme1: 'text-gray-600',
      theme2: 'text-gray-300',
      theme3: 'text-purple-600'
    }
  );
   useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchFromAPI<Product[]>("/products");
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
       finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className={containerClasses}>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={containerClasses}>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className="container mx-auto">
        <h1 className={titleClasses}>Welcome to our Store</h1>
        <p className={subtitleClasses}>Check out our amazing products</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};