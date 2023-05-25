
import React from 'react';

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

const initialState: Theme = {
    primaryColor: '#343889',
    secondaryColor: '#f5f5f5',
    fontFamily: 'sans-serif',
}

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<{
    theme: Theme;
    updateTheme: React.Dispatch<React.SetStateAction<Theme>>;
}>({
    theme: initialState,
    updateTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(initialState);
  return (
    <ThemeContext.Provider value={{ 
        theme, 
        updateTheme: setTheme
    }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;