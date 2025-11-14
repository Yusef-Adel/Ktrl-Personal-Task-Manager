import { Skeleton } from './ui/skeleton';

export const TaskSkeleton = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm animate-in fade-in-50 duration-300">
      <div className="flex items-start gap-2 sm:gap-3">
        {/* Drag handle skeleton */}
        <Skeleton className="h-6 w-6 sm:h-8 sm:w-8 shrink-0 mt-0.5" />
        
        {/* Checkbox skeleton */}
        <Skeleton className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 rounded-sm mt-1" />
        
        {/* Content skeleton */}
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4 animate-pulse" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-20 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
            <Skeleton className="h-5 w-24 animate-pulse" style={{ animationDelay: '200ms' }} />
          </div>
        </div>
        
        {/* Action buttons skeleton */}
        <div className="flex gap-0.5 sm:gap-1">
          <Skeleton className="h-7 w-7 sm:h-8 sm:w-8 animate-pulse" style={{ animationDelay: '150ms' }} />
          <Skeleton className="h-7 w-7 sm:h-8 sm:w-8 animate-pulse" style={{ animationDelay: '250ms' }} />
        </div>
      </div>
    </div>
  );
};

export const TaskListSkeleton = ({ count = 5 }: { count?: number }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i}
          style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'backwards' }}
        >
          <TaskSkeleton />
        </div>
      ))}
    </div>
  );
};
