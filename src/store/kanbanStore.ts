import { create } from 'zustand';
import { Task, Status, Priority } from '../types';

interface KanbanStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  moveTask: (taskId: string, status: Status) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
}

export const useKanbanStore = create<KanbanStore>((set) => ({
  tasks: [
    {
      id: '1',
      title: 'Implement Authentication',
      description: 'Add user authentication flow using OAuth',
      priority: 'high',
      status: 'todo',
      assignee: 'John Doe',
      dependencies: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Design Dashboard',
      description: 'Create wireframes for main dashboard',
      priority: 'medium',
      status: 'in-progress',
      assignee: 'Jane Smith',
      dependencies: ['1'],
      createdAt: new Date().toISOString(),
    },
  ],

  addTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...task,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString(),
        },
      ],
    })),

  moveTask: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      ),
    })),

  updateTask: (taskId, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task
      ),
    })),

  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));