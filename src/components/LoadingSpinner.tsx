import { Loader2 } from 'lucide-react';

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="animate-spin text-primary mb-4" size={48} />
      <p className="text-muted-foreground">Loading tasks...</p>
    </div>
  );
};
