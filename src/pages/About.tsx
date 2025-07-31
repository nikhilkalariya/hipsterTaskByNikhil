import React from 'react';
import { useThemeClasses } from '../hooks/useTheme';

export const About: React.FC = () => {
  const { getThemeClass } = useThemeClasses();

  const containerClasses = getThemeClass(
    'min-h-screen mt-20 px-4 transition-all duration-300',
    {
      theme1: 'bg-gray-50',
      theme2: 'bg-gray-900',
      theme3: 'bg-gradient-to-br from-blue-50 to-purple-50'
    }
  );

  const titleClasses = getThemeClass(
    'text-3xl font-bold mb-6',
    {
      theme1: 'text-gray-800',
      theme2: 'text-white',
      theme3: 'text-purple-700'
    }
  );

  const textClasses = getThemeClass(
    'mb-4',
    {
      theme1: 'text-gray-700',
      theme2: 'text-gray-200',
      theme3: 'text-gray-800'
    }
  );

  const buttonClasses = getThemeClass(
    'px-6 py-2 rounded-lg font-medium transition-all duration-300',
    {
      theme1: 'bg-blue-600 text-white hover:bg-blue-700',
      theme2: 'bg-purple-600 text-white hover:bg-purple-700',
      theme3: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
    }
  );

  return (
    <div className={containerClasses}>
      <div className="container mx-auto max-w-3xl">
        <h1 className={titleClasses}>About Us</h1>
        <div className="space-y-4">
          <p className={textClasses}>
            We are a company dedicated to providing the best products with the best quality.
            Our mission is to make your shopping experience enjoyable and hassle-free.
          </p>
          <p className={textClasses}>
            Founded in 2023, we have grown from a small startup to a leading e-commerce platform.
            Our team consists of passionate individuals who care about customer satisfaction.
          </p>
          <button className={`${buttonClasses} mt-6`}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};