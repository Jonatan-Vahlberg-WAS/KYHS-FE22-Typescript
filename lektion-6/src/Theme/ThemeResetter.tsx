// ThemeResetter.tsx

import { initialTheme, useTheme } from './ThemeContext';

const ThemeResetter = () => {
  const { updateTheme } = useTheme()

  const handleReset = () => {
    updateTheme(initialTheme);
  };

  return (
    <div>
      <button onClick={handleReset}>Reset Theme</button>
    </div>
  );
};

export default ThemeResetter;