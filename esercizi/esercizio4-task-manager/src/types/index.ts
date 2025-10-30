// TypeScript Types e Interfaces

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done'
}

export type TaskFilter = 'all' | 'active' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}

export interface TaskStats {
  total: number;
  active: number;
  completed: number;
}

// Context Types
export type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'LOAD_TASKS'; payload: Task[] };

export interface TaskContextType {
  tasks: Task[];
  filter: TaskFilter;
  stats: TaskStats;
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completed'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  setFilter: (filter: TaskFilter) => void;
  filteredTasks: Task[];
}
