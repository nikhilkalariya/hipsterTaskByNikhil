import { useTheme } from '../context/ThemeContext';

export const useThemeClasses = () => {
  const { theme } = useTheme();
  
  const getThemeClass = (baseClasses: string, themeClasses: {
    theme1: string;
    theme2: string;
    theme3: string;
  }) => {
    return `${baseClasses} ${themeClasses[theme]}`;
  };

  return { getThemeClass };
};