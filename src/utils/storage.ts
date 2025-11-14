import type { Category } from '../types';

const STORAGE_KEYS = {
  THEME: 'control_theme',
  CATEGORIES: 'control_categories',
  TASK_ORDER: 'control_task_order',
  TASK_META: 'control_task_meta',
} as const;

export const getTheme = (): 'light' | 'dark' => {
  const theme = localStorage.getItem(STORAGE_KEYS.THEME);
  if (theme === 'light' || theme === 'dark') return theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setTheme = (theme: 'light' | 'dark'): void => {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

export const getCategories = (): Category[] => {
  const categories = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
  if (categories) {
    try {
      return JSON.parse(categories);
    } catch {
      return getDefaultCategories();
    }
  }
  return getDefaultCategories();
};

export const setCategories = (categories: Category[]): void => {
  localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
};

export const getDefaultCategories = (): Category[] => [
  { id: '1', name: 'Personal', color: '#8B5CF6' },
  { id: '2', name: 'Work', color: '#3B82F6' },
  { id: '3', name: 'Shopping', color: '#10B981' },
  { id: '4', name: 'Health', color: '#EF4444' },
];

export const getTaskOrder = (): number[] => {
  const order = localStorage.getItem(STORAGE_KEYS.TASK_ORDER);
  if (order) {
    try {
      return JSON.parse(order);
    } catch {
      return [];
    }
  }
  return [];
};

export const setTaskOrder = (order: number[]): void => {
  localStorage.setItem(STORAGE_KEYS.TASK_ORDER, JSON.stringify(order));
};

interface TaskMeta {
  categoryId?: string;
  dueDate?: string;
}

export const getTaskMeta = (taskId: number): TaskMeta => {
  const metaStr = localStorage.getItem(STORAGE_KEYS.TASK_META);
  if (metaStr) {
    try {
      const allMeta = JSON.parse(metaStr);
      return allMeta[taskId] || {};
    } catch {
      return {};
    }
  }
  return {};
};

export const setTaskMeta = (taskId: number, meta: TaskMeta): void => {
  const metaStr = localStorage.getItem(STORAGE_KEYS.TASK_META);
  let allMeta: Record<number, TaskMeta> = {};
  
  if (metaStr) {
    try {
      allMeta = JSON.parse(metaStr);
    } catch {
      allMeta = {};
    }
  }
  
  allMeta[taskId] = { ...allMeta[taskId], ...meta };
  localStorage.setItem(STORAGE_KEYS.TASK_META, JSON.stringify(allMeta));
};

export const removeTaskMeta = (taskId: number): void => {
  const metaStr = localStorage.getItem(STORAGE_KEYS.TASK_META);
  if (metaStr) {
    try {
      const allMeta = JSON.parse(metaStr);
      delete allMeta[taskId];
      localStorage.setItem(STORAGE_KEYS.TASK_META, JSON.stringify(allMeta));
    } catch {
      return;
    }
  }
};

export const getAllTaskMeta = (): Record<number, TaskMeta> => {
  const metaStr = localStorage.getItem(STORAGE_KEYS.TASK_META);
  if (metaStr) {
    try {
      return JSON.parse(metaStr);
    } catch {
      return {};
    }
  }
  return {};
};
