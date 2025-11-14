import { CheckCircle2, Circle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import type { TaskStats } from '../types';

interface TaskStatsProps {
  stats: TaskStats;
}

export const TaskStatsCard = ({ stats }: TaskStatsProps) => {
  return (
    <Card className="animate-in fade-in-50 duration-300">
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-col items-center p-2 sm:p-3 bg-card border border-border    rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
            <Circle className="text-muted-foreground mb-1 sm:mb-2" size={20} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">{stats.total}</span>
            <span className="text-xs text-muted-foreground">Total</span>
          </div>
          
          <div className="flex flex-col items-center p-2 sm:p-3 bg-card border border-border    rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
            <Circle className="text-primary mb-1 sm:mb-2" size={20} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">{stats.active}</span>
            <span className="text-xs text-muted-foreground">Active</span>
          </div>
          
          <div className="flex flex-col items-center p-2 sm:p-3 bg-card border border-border    rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
            <CheckCircle2 className="text-chart-2 mb-1 sm:mb-2" size={20} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">{stats.completed}</span>
            <span className="text-xs text-muted-foreground">Completed</span>
          </div>
          
          <div className="flex flex-col items-center p-2 sm:p-3 bg-card border border-border    rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default">
            <TrendingUp className="text-chart-3 mb-1 sm:mb-2" size={20} />
            <span className="text-xl sm:text-2xl font-bold text-foreground">{stats.completionRate}%</span>
            <span className="text-xs text-muted-foreground">Rate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
