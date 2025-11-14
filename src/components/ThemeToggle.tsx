import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { getTheme, setTheme } from '../utils/storage';
import { Button } from './ui/button';

export const ThemeToggle = () => {
  const [theme, setThemeState] = useState<'light' | 'dark'>(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="secondary"
      size="icon"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="transition-all duration-200 hover:scale-110 hover:rotate-12"
    >
      {theme === 'light' ? 
        <Moon className="h-5 w-5 transition-transform duration-300" /> : 
        <Sun className="h-5 w-5 transition-transform duration-300" />
      }
    </Button>
  );
};
