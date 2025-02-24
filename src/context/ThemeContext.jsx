import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const theme = {
    nav: 'bg-white shadow-md relative',
    text: 'text-gray-800',
    button: 'bg-[#004d00] text-white',
    buttonHover: 'hover:bg-[#006600]',
    link: 'text-[#004d00] hover:text-[#006600]',
    card: 'bg-white relative overflow-hidden rounded-lg shadow-lg',
    section: 'relative overflow-hidden'
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
} 