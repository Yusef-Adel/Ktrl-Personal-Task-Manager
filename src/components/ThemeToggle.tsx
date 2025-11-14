import { AnimatedThemeToggler } from './ui/animated-theme-toggler';

export const ThemeToggle = () => {
  return (
    <AnimatedThemeToggler 
      duration={400}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground transition-all duration-200 hover:scale-110 hover:rotate-12 hover:bg-secondary/80 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:transition-transform [&_svg]:duration-300"
    />
  );
};
