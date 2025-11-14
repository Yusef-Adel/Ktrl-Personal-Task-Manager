import type { Task, TaskStats } from '../types';

export const calculateTaskStats = (tasks: Task[]): TaskStats => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const active = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total, completed, active, completionRate };
};

export const exportToJSON = (tasks: Task[], filename = 'control-tasks.json'): void => {
  try {
    if (!tasks || tasks.length === 0) {
      throw new Error('No tasks to export');
    }
    
    const dataStr = JSON.stringify(tasks, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to export JSON:', error);
    throw new Error('Failed to export tasks as JSON');
  }
};

export const exportToCSV = (tasks: Task[], filename = 'control-tasks.csv'): void => {
  try {
    if (!tasks || tasks.length === 0) {
      throw new Error('No tasks to export');
    }
    
    const headers = ['ID', 'Task', 'Completed', 'Category', 'Due Date'];
    const rows = tasks.map(task => [
      task.id,
      `"${task.todo.replace(/"/g, '""')}"`,
      task.completed ? 'Yes' : 'No',
      task.categoryId || 'None',
      task.dueDate || 'None',
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to export CSV:', error);
    throw new Error('Failed to export tasks as CSV');
  }
};

export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
