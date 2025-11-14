import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import type { Task, Category, FilterType, SortType } from '../types';
import * as api from '../services/api';
import {
  getCategories,
  setCategories,
  getTaskOrder,
  setTaskOrder,
  setTaskMeta,
  removeTaskMeta,
  getAllTaskMeta,
  getTasks,
  setTasks as saveTasksToStorage,
  addTaskToStorage,
  updateTaskInStorage,
  removeTaskFromStorage,
} from '../utils/storage';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategoriesState] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState<SortType>('default');

  useEffect(() => {
    setCategoriesState(getCategories());
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      // First, load from localStorage
      const localTasks = getTasks();
      
      if (localTasks.length > 0) {
        // Use local tasks if available
        setTasks(localTasks);
        setLoading(false);
        return;
      }

      // Otherwise, fetch from API
      const fetchedTasks = await api.fetchTasks();
      const taskMeta = getAllTaskMeta();
      const savedOrder = getTaskOrder();

      const enrichedTasks = fetchedTasks.map(task => ({
        ...task,
        ...taskMeta[task.id],
      }));

      if (savedOrder.length > 0) {
        const orderedTasks = savedOrder
          .map(id => enrichedTasks.find(task => task.id === id))
          .filter(Boolean) as Task[];
        const newTasks = enrichedTasks.filter(
          task => !savedOrder.includes(task.id)
        );
        const finalTasks = [...orderedTasks, ...newTasks];
        setTasks(finalTasks);
        saveTasksToStorage(finalTasks);
      } else {
        setTasks(enrichedTasks);
        setTaskOrder(enrichedTasks.map(task => task.id));
        saveTasksToStorage(enrichedTasks);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load tasks';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (todo: string, categoryId?: string, dueDate?: string) => {
    setError(null);
    try {
      const newTask = await api.createTask({
        todo,
        completed: false,
        userId: 1,
      });

      const enrichedTask = { ...newTask, categoryId, dueDate };
      
      if (categoryId || dueDate) {
        setTaskMeta(newTask.id, { categoryId, dueDate });
      }

      // Add to localStorage
      addTaskToStorage(enrichedTask);

      setTasks(prev => {
        const updated = [enrichedTask, ...prev];
        setTaskOrder(updated.map(t => t.id));
        saveTasksToStorage(updated);
        return updated;
      });

      toast.success('Task added successfully');

      return enrichedTask;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add task';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    }
  };

  const updateTask = async (id: number, updates: Partial<Task>) => {
    setError(null);
    try {
      // Try to update via API, but don't fail if it doesn't work
      let updatedTask;
      try {
        updatedTask = await api.updateTask(id, updates);
      } catch (apiError) {
        // If API fails (e.g., 404 for newly created tasks), just use the updates
        console.warn('API update failed, updating locally only:', apiError);
        updatedTask = updates;
      }

      if (updates.categoryId !== undefined || updates.dueDate !== undefined) {
        setTaskMeta(id, {
          categoryId: updates.categoryId,
          dueDate: updates.dueDate,
        });
      }

      // Update in localStorage
      updateTaskInStorage(id, { ...updatedTask, ...updates });

      setTasks(prev => {
        const updated = prev.map(task =>
          task.id === id ? { ...task, ...updatedTask, ...updates } : task
        );
        saveTasksToStorage(updated);
        return updated;
      });

      if (updates.completed !== undefined) {
        toast.success(updates.completed ? 'Task completed! 🎉' : 'Task marked as active');
      } else {
        toast.success('Task updated successfully');
      }

      return updatedTask;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update task';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    }
  };

  const deleteTask = async (id: number) => {
    setError(null);
    try {
      // Try to delete via API, but don't fail if it doesn't work
      try {
        await api.deleteTask(id);
      } catch (apiError) {
        // If API fails, just delete locally
        console.warn('API delete failed, deleting locally only:', apiError);
      }
      
      removeTaskMeta(id);

      // Remove from localStorage
      removeTaskFromStorage(id);

      setTasks(prev => {
        const updated = prev.filter(task => task.id !== id);
        setTaskOrder(updated.map(t => t.id));
        saveTasksToStorage(updated);
        return updated;
      });

      toast.success('Task deleted successfully');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete task';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    }
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find(t => t.id === id);
    if (!task) {
      toast.error('Task not found');
      return;
    }
    
    try {
      await updateTask(id, { completed: !task.completed });
    } catch (err) {
      // Error already handled in updateTask
      console.error('Failed to toggle task:', err);
    }
  };

  const reorderTasks = useCallback((newOrder: Task[]) => {
    setTasks(newOrder);
    setTaskOrder(newOrder.map(task => task.id));
    saveTasksToStorage(newOrder);
  }, []);

  const addCategory = useCallback((category: Category) => {
    setCategoriesState(prev => {
      const updated = [...prev, category];
      setCategories(updated);
      return updated;
    });
    toast.success(`Category "${category.name}" created`);
  }, []);

  const updateCategory = useCallback((id: string, updates: Partial<Category>) => {
    setCategoriesState(prev => {
      const updated = prev.map(cat =>
        cat.id === id ? { ...cat, ...updates } : cat
      );
      setCategories(updated);
      return updated;
    });
    toast.success('Category updated successfully');
  }, []);

  const deleteCategory = useCallback((id: string) => {
    setCategoriesState(prev => {
      const updated = prev.filter(cat => cat.id !== id);
      setCategories(updated);
      return updated;
    });

    setTasks(prev =>
      prev.map(task =>
        task.categoryId === id ? { ...task, categoryId: undefined } : task
      )
    );

    toast.success('Category deleted successfully');
  }, []);

  const getFilteredAndSortedTasks = useCallback(() => {
    let filtered = tasks;

    if (filter === 'active') {
      filtered = tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
      filtered = tasks.filter(task => task.completed);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(task =>
        task.todo.toLowerCase().includes(query)
      );
    }

    const sorted = [...filtered];

    switch (sortType) {
      case 'alphabetical':
        sorted.sort((a, b) => a.todo.localeCompare(b.todo));
        break;
      case 'dueDate':
        sorted.sort((a, b) => {
          if (!a.dueDate && !b.dueDate) return 0;
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        });
        break;
      case 'category':
        sorted.sort((a, b) => {
          if (!a.categoryId && !b.categoryId) return 0;
          if (!a.categoryId) return 1;
          if (!b.categoryId) return -1;
          return a.categoryId.localeCompare(b.categoryId);
        });
        break;
    }

    return sorted;
  }, [tasks, filter, searchQuery, sortType]);

  return {
    tasks: getFilteredAndSortedTasks(),
    allTasks: tasks,
    categories,
    loading,
    error,
    filter,
    searchQuery,
    sortType,
    setFilter,
    setSearchQuery,
    setSortType,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    reorderTasks,
    addCategory,
    updateCategory,
    deleteCategory,
    refreshTasks: loadTasks,
  };
};
