
import React from 'react';

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

export const initialTheme: Theme = {
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
    theme: initialTheme,
    updateTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>(initialTheme);
  return (
    <ThemeContext.Provider value={{ 
        theme, 
        updateTheme: setTheme
    }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}