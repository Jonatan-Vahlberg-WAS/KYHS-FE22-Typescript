// ThemeToggler.tsx

import React, { useState } from 'react';
import { useTheme } from './ThemeContext';


const webSafeFonts = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Times',
    'Courier New',
    'Courier',
    'Verdana',
    'Georgia',
    'serif',
    'sans-serif',
];

const ThemeToggler = () => {
  const { theme, updateTheme } = useTheme();
  const [newTheme, setNewTheme] = useState(theme);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setNewTheme({ ...newTheme, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateTheme(newTheme);
  };

  return (
    <div>
      <input
        type="text"
        name="primaryColor"
        value={newTheme.primaryColor}
        onChange={handleThemeChange}
      />
      <input
        type="text"
        name="secondaryColor"
        value={newTheme.secondaryColor}
        onChange={handleThemeChange}
      />
      <select
        name="fontFamily"
        value={newTheme.fontFamily}
        onChange={handleThemeChange}
        >
        {webSafeFonts.map((font) => (
            <option key={font} value={font}>
                {font}
            </option>
        ))}
        </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ThemeToggler;