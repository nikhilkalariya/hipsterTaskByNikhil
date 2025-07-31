import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useThemeClasses } from '../hooks/useTheme';


export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { getThemeClass } = useThemeClasses();

  const selectClasses = getThemeClass(
    'p-1 rounded cursor-pointer transition-all duration-300 focus:outline-none',
    {
      theme1: 'bg-white border border-gray-300 text-gray-800',
      theme2: 'bg-gray-700 border border-gray-600 text-white',
      theme3: 'bg-white border border-purple-300 text-purple-800'
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'theme1' | 'theme2' | 'theme3');
  };

  return (
    <div className="theme-switcher">
      <select 
        value={theme} 
        onChange={handleChange} 
        className={selectClasses}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </div>
  );
};