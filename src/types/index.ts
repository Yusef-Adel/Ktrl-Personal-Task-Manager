export interface Task {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  categoryId?: string;
  dueDate?: string;
  order?: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface ApiResponse<T> {
  todos?: T[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface TaskFormData {
  todo: string;
  categoryId?: string;
  dueDate?: string;
}

export type FilterType = 'all' | 'active' | 'completed';

export type SortType = 'default' | 'alphabetical' | 'dueDate' | 'category';

export interface TaskStats {
  total: number;
  completed: number;
  active: number;
  completionRate: number;
}
