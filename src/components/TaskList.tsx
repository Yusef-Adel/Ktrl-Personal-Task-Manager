import { memo } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { TaskItem } from './TaskItem';
import type { Task, Category } from '../types';

interface TaskListProps {
  tasks: Task[];
  categories: Category[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updates: Partial<Task>) => void;
  onReorder: (tasks: Task[]) => void;
  loading?: boolean;
}

export const TaskList = memo(({
  tasks,
  categories,
  onToggle,
  onDelete,
  onUpdate,
  onReorder,
  loading,
}: TaskListProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const activeTaskId = typeof event.active.id === 'string' ? Number(event.active.id) : event.active.id;
    setActiveId(activeTaskId as number);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      const activeTaskId = typeof active.id === 'string' ? Number(active.id) : active.id;
      const overTaskId = typeof over.id === 'string' ? Number(over.id) : over.id;
      const oldIndex = tasks.findIndex((task) => task.id === activeTaskId);
      const newIndex = tasks.findIndex((task) => task.id === overTaskId);

      const newTasks = [...tasks];
      const [movedTask] = newTasks.splice(oldIndex, 1);
      newTasks.splice(newIndex, 0, movedTask);

      onReorder(newTasks);
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <p className="text-muted-foreground text-base sm:text-lg">No tasks found</p>
        <p className="text-muted-foreground text-xs sm:text-sm mt-2">
          Add a task to get started!
        </p>
      </div>
    );
  }

  const activeTask = tasks.find((task) => task.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext
        items={tasks.map((task) => String(task.id))}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2 sm:space-y-3">
          {tasks.map((task, index) => (
            <div
              key={String(task.id)}
              className="animate-in fade-in-50 slide-in-from-bottom-2"
              style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'backwards' }}
            >
              <TaskItem
                task={task}
                categories={categories}
                onToggle={onToggle}
                onDelete={onDelete}
                onUpdate={onUpdate}
                disabled={loading}
              />
            </div>
          ))}
        </div>
      </SortableContext>
      <DragOverlay dropAnimation={null}>
        {activeTask ? (
          <div className="bg-card border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-2xl opacity-80 rotate-3 scale-105">
            <TaskItem
              task={activeTask}
              categories={categories}
              onToggle={() => {}}
              onDelete={() => {}}
              onUpdate={() => {}}
              disabled
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
});

TaskList.displayName = 'TaskList';
