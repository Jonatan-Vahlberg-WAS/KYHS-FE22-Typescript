import {useTheme} from './ThemeContext';

const ThemeDisplay = () => {
  const { theme } = useTheme()

  return (
    <div>
      <p style={{ color: theme.primaryColor }}>This is the primary color</p>
      <p style={{ color: theme.secondaryColor }}>This is the secondary color</p>
      <p style={{ fontFamily: theme.fontFamily }}>This is the font family</p>
    </div>
  );
};

export default ThemeDisplay;