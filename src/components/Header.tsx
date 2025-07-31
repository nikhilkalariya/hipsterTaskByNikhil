import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeClasses } from '../hooks/useTheme';
import { useTheme } from '../context/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Bars3Icon, CogIcon, XMarkIcon } from '@heroicons/react/20/solid';

export const Header: React.FC = () => {
  const { theme} = useTheme();
  const { getThemeClass } = useThemeClasses();
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const headerClasses = getThemeClass(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    {
      theme1: 'bg-gray-100 shadow-md',
      theme2: 'bg-gray-800 border-b border-gray-700',
      theme3: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
    }
  );

  const logoClasses = getThemeClass(
    'flex gap-2 items-center text-xl font-bold',
    {
      theme1: 'text-gray-800',
      theme2: 'text-white',
      theme3: 'text-white'
    }
  );

  const logoIConClasses = getThemeClass(
    'h-7 w-7',
    {
      theme1: 'text-gray-800',
      theme2: 'text-white',
      theme3: 'text-white'
    }
  );
  const navLinkClasses = getThemeClass(
    'hover:underline px-4 py-2 rounded transition',
    {
      theme1: 'text-gray-700 hover:bg-gray-200',
      theme2: 'text-gray-300 hover:bg-gray-700',
      theme3: 'text-white hover:bg-white hover:bg-opacity-20'
    }
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto p-3 flex justify-between items-center relative">
          <Link to="/" className={logoClasses}>
            <CogIcon className={logoIConClasses}/>
            ThemeSwitch
          </Link>
          
          {theme === 'theme2' ? (
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSidebar}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {sidebarOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          ) : (
            <nav>
              <ul className="flex space-x-2 items-center">
                <li>
                  <Link to="/" className={navLinkClasses}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className={navLinkClasses}>About</Link>
                </li>
                <li>
                  <Link to="/contact" className={navLinkClasses}>Contact</Link>
                </li>
                <li className="theme-switcher">
                  <ThemeSwitcher />
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Sidebar for Theme 2 */}
      {theme === 'theme2' && (
        <div className={`fixed inset-0 z-40 transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleSidebar}
          ></div>
          <aside className="fixed right-0 top-0 bottom-0 w-64 bg-gray-800 text-white z-50 border-r border-gray-700 shadow-lg transform transition-transform duration-300">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <Link to="/" className="text-xl font-bold text-white" onClick={toggleSidebar}>
                  ThemeSwitch
                </Link>
                <button 
                  onClick={toggleSidebar}
                  className="text-white focus:outline-none"
                  aria-label="Close menu"
                >
                  <Bars3Icon/>
                </button>
              </div>
              
              <nav className="space-y-2">
                <Link 
                  to="/" 
                  className="block py-2 px-4 rounded hover:bg-gray-700 text-gray-300"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="block py-2 px-4 rounded hover:bg-gray-700 text-gray-300"
                  onClick={toggleSidebar}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-2 px-4 rounded hover:bg-gray-700 text-gray-300"
                  onClick={toggleSidebar}
                >
                  Contact
                </Link>
              </nav>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <ThemeSwitcher/>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};