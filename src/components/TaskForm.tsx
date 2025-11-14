import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Plus, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import type { Category } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { cn } from '@/lib/utils';

interface TaskFormProps {
  onSubmit: (todo: string, categoryId?: string, dueDate?: string) => Promise<unknown>;
  categories: Category[];
  loading?: boolean;
}

export const TaskForm = ({ onSubmit, categories, loading }: TaskFormProps) => {
  const [todo, setTodo] = useState('');
  const [categoryId, setCategoryId] = useState<string>('none');
  const [date, setDate] = useState<Date>();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!todo.trim() || submitting) return;

    setSubmitting(true);
    try {
      await onSubmit(
        todo.trim(),
        categoryId !== 'none' ? categoryId : undefined,
        date ? format(date, 'yyyy-MM-dd') : undefined
      );
      setTodo('');
      setCategoryId('none');
      setDate(undefined);
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-3 sm:p-4 shadow-sm animate-in fade-in-50 duration-300">
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="flex gap-2 flex-col sm:flex-row">
          <Input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            disabled={loading || submitting}
            className="flex-1 text-foreground transition-all duration-200 hover:border-ring/50"
            aria-label="Task description"
          />
          <Button
            onClick={handleSubmit}
            disabled={loading || submitting}
            size="default"
            variant="default"
            aria-label="Add new task"
            className="transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Add Task</span>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={categoryId} onValueChange={setCategoryId} disabled={loading || submitting}>
            <SelectTrigger className="sm:w-[180px] text-foreground" aria-label="Select task category">
              <SelectValue placeholder="No Category" className="text-foreground" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No Category</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {category.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger className='text-foreground' asChild>
              <Button
                variant="outline"
                className={cn(
                  'justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
                disabled={loading || submitting}
                aria-label="Select due date"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 text-popover-foreground" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
