import type { Task, ApiResponse } from '../types';

const BASE_URL = 'https://dummyjson.com';

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new ApiError(
      response.status,
      `API request failed: ${response.statusText}`
    );
  }
  return response.json();
};

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await handleResponse<ApiResponse<Task>>(response);
    return data.todos || [];
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new Error('Failed to fetch tasks. Please check your connection.');
  }
};

export const fetchTask = async (id: number): Promise<Task> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`);
    return await handleResponse<Task>(response);
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new Error(`Failed to fetch task ${id}.`);
  }
};

export const createTask = async (taskData: { todo: string; completed: boolean; userId: number }): Promise<Task> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    return await handleResponse<Task>(response);
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new Error('Failed to create task.');
  }
};

export const updateTask = async (id: number, taskData: Partial<Task>): Promise<Task> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    return await handleResponse<Task>(response);
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new Error(`Failed to update task ${id}.`);
  }
};

export const deleteTask = async (id: number): Promise<Task> => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE',
    });
    return await handleResponse<Task>(response);
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new Error(`Failed to delete task ${id}.`);
  }
};
