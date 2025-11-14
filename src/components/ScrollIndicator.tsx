import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show indicator if there's more content below (at least 100px)
      const hasMoreContent = documentHeight - (scrollTop + windowHeight) > 100;
      setShowIndicator(hasMoreContent && scrollTop < 100);
    };

    // Check on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!showIndicator) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-muted-foreground font-medium mb-2">More tasks below</p>
        <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-full p-2 shadow-lg animate-bounce">
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
