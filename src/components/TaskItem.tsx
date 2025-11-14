import { useState, memo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Check, Trash2, Calendar, GripVertical, Edit2, X } from 'lucide-react';
import { format, isPast, isToday } from 'date-fns';
import type { Task, Category } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  categories: Category[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updates: Partial<Task>) => void;
  disabled?: boolean;
}

export const TaskItem = memo(({
  task,
  categories,
  onToggle,
  onDelete,
  onUpdate,
  disabled,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.todo);
  const [editCategoryId, setEditCategoryId] = useState(task.categoryId || 'none');
  const [editDueDate, setEditDueDate] = useState(task.dueDate || '');

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: task.id,
    transition: {
      duration: 200,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const category = categories.find(c => c.id === task.categoryId);

  const handleSave = async () => {
    if (!editText.trim()) {
      return;
    }

    try {
      await onUpdate(task.id, {
        todo: editText.trim(),
        categoryId: editCategoryId !== 'none' ? editCategoryId : undefined,
        dueDate: editDueDate || undefined,
      });
      setIsEditing(false);
    } catch (err) {
      // Error already handled in useTaskManager
      console.error('Failed to save task:', err);
    }
  };

  const handleCancel = () => {
    setEditText(task.todo);
    setEditCategoryId(task.categoryId || 'none');
    setEditDueDate(task.dueDate || '');
    setIsEditing(false);
  };

  const getDueDateColor = () => {
    if (!task.dueDate) return '';
    const date = new Date(task.dueDate);
    if (isPast(date) && !isToday(date)) return 'text-destructive';
    if (isToday(date)) return 'text-chart-3';
    return 'text-muted-foreground';
  };

  if (isEditing) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-card border border-border rounded-lg p-4 shadow-sm animate-in fade-in-50 slide-in-from-top-2 duration-200"
      >
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            aria-label="Edit task description"
          />
          <div className="flex gap-2">
            <Select value={editCategoryId} onValueChange={setEditCategoryId}>
              <SelectTrigger className="flex-1 text-foreground">
                <SelectValue placeholder="No Category" className="text-foreground" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No Category</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button onClick={handleCancel} variant="outline" size="sm" aria-label="Cancel editing">
              <X className="h-4 w-4" />
            </Button>
            <Button onClick={handleSave} size="sm" aria-label="Save changes">
              <Check className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01]',
        task.completed && 'opacity-60'
      )}
    >
      <div className="flex items-center gap-3">
        <Button
          {...attributes}
          {...listeners}
          disabled={disabled}
          variant="ghost"
          size="icon"
          className="cursor-grab active:cursor-grabbing h-8 w-8"
          aria-label="Drag to reorder task"
        >
          <GripVertical className="h-4 w-4 text-foreground" />
        </Button>

        <Button
          onClick={async () => {
            try {
              await onToggle(task.id);
            } catch (err) {
              console.error('Failed to toggle task:', err);
            }
          }}
          disabled={disabled}
          variant="ghost"
          size="icon"
          className={cn(
            'shrink-0 h-5 w-5 rounded border-2 p-0 transition-all duration-200 hover:scale-110',
            task.completed
              ? 'bg-primary border-primary'
              : 'border-border hover:border-primary'
          )}
          aria-label={task.completed ? 'Mark task as incomplete' : 'Mark task as complete'}
          role="checkbox"
          aria-checked={task.completed}
        >
          {task.completed && <Check className="h-4 w-4 text-primary-foreground animate-in zoom-in-50 duration-200" />}
        </Button>

        <div className="flex-1 flex items-center min-w-0">
          <p
            className={cn(
              'text-foreground wrap-break-word leading-relaxed',
              task.completed && 'line-through text-muted-foreground'
            )}
          >
            {task.todo}
          </p>

          <div className="flex flex-wrap items-center gap-2 pl-2 ">
            {category && (
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${category.color}20`,
                  color: category.color,
                }}
              >
                {category.name}
              </span>
            )}

            {task.dueDate && (
              <span className={cn('flex items-center gap-1 text-xs', getDueDateColor())}>
                <Calendar className="h-3 w-3" />
                Due Date : 
                {format(new Date(task.dueDate), ' MMM d, yyyy')}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-1 text-foreground shrink-0">
          <Button
            onClick={() => setIsEditing(true)}
            disabled={disabled}
            variant="ghost"
            size="icon"
            className="h-8 w-8 transition-all duration-200 hover:scale-110"
            aria-label="Edit task"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            onClick={async () => {
              try {
                await onDelete(task.id);
              } catch (err) {
                console.error('Failed to delete task:', err);
              }
            }}
            disabled={disabled}
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:text-destructive transition-all duration-200 hover:scale-110"
            aria-label="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
});

TaskItem.displayName = 'TaskItem';
