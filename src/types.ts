export type Priority = 'low' | 'medium' | 'high';
export type Status = 'todo' | 'in-progress' | 'review' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  assignee: string;
  dependencies: string[];
  createdAt: string;
}

export interface User {
  username: string;
  password: string;
}