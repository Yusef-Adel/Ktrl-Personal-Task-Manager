import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void | Promise<void>;
}

export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  const handleRetry = async () => {
    if (onRetry) {
      try {
        await onRetry();
      } catch (err) {
        console.error('Retry failed:', err);
      }
    }
  };
  return (
    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 text-center">
      <AlertCircle className="mx-auto mb-4 text-destructive" size={48} />
      <h3 className="text-lg font-semibold text-destructive mb-2">Error</h3>
      <p className="text-foreground mb-4">{message}</p>
      {onRetry && (
        <Button
          onClick={handleRetry}
          variant="default"
          className="inline-flex items-center gap-2"
          aria-label="Retry loading tasks"
        >
          <RefreshCw size={18} />
          <span>Retry</span>
        </Button>
      )}
    </div>
  );
};
