import React, { useState } from 'react';
import { useThemeClasses } from '../hooks/useTheme';


export const Contact: React.FC = () => {
  const { getThemeClass } = useThemeClasses();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerClasses = getThemeClass(
    'min-h-screen mt-16 pt-4 px-4 transition-all duration-300',
    {
      theme1: 'bg-gray-50',
      theme2: 'bg-gray-900',
      theme3: 'bg-gradient-to-br from-blue-50 to-purple-50'
    }
  );

  const titleClasses = getThemeClass(
    'text-3xl font-bold mb-8',
    {
      theme1: 'text-gray-800',
      theme2: 'text-white',
      theme3: 'text-purple-700'
    }
  );

  const labelClasses = getThemeClass(
    'block mb-1 font-medium',
    {
      theme1: '',
      theme2: 'text-white',
      theme3: ''
    }
  );
  const inputClasses = getThemeClass(
    'w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 transition',
    {
      theme1: 'border-gray-300 focus:ring-blue-500',
      theme2: 'bg-gray-700 border-gray-600 text-white focus:ring-purple-500',
      theme3: 'border-purple-300 focus:ring-purple-500'
    }
  );

  const buttonClasses = getThemeClass(
    'w-full px-6 py-3 rounded-lg font-medium transition-all duration-300',
    {
      theme1: 'bg-blue-600 text-white hover:bg-blue-700',
      theme2: 'bg-purple-600 text-white hover:bg-purple-700',
      theme3: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={containerClasses}>
      <div className="container mx-auto max-w-md">
        <h1 className={titleClasses}>Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className={labelClasses}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClasses}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <button type="submit" className={buttonClasses}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};