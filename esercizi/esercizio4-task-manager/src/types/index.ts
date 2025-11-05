// TypeScript Types e Interfaces

// TODO 1: Definire l'enum TaskStatus con i valori: 'todo', 'in-progress', 'done'
export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done'
}

// TODO 2: Definire il type TaskFilter come union type: 'all' | 'active' | 'completed'
export type TaskFilter = 'all' | 'active' | 'completed';

// TODO 3: Definire l'interface Task con le seguenti proprietà:
// - id: string
// - title: string
// - description: string
// - status: TaskStatus
// - createdAt: Date
// - updatedAt: Date
// - completed: boolean
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}

// TODO 4: Definire l'interface TaskStats con: total, active, completed (tutti number)
export interface TaskStats {
  total: number;
  active: number;
  completed: number;
}

// TODO 5: Definire TaskAction come union type per le azioni del reducer:
// - ADD_TASK: payload con Task senza id, createdAt, updatedAt
// - UPDATE_TASK: payload con id e updates (parziale di Task)
// - DELETE_TASK: payload con id (string)
// - TOGGLE_TASK: payload con id (string)
export type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: { id: string } }
  | { type: 'TOGGLE_TASK'; payload: { id: string } };

// TODO 6: Definire l'interface TaskContextType con tutti i metodi e proprietà del context:
// tasks, filter, stats, addTask, updateTask, deleteTask, toggleTask, setFilter, filteredTasks
export interface TaskContextType {
  tasks: Task[];
  filter: TaskFilter;
  stats: TaskStats;
  filteredTasks: Task[];
  addTask: (payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (payload: Extract<TaskAction, { type: 'UPDATE_TASK' }>['payload']) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  setFilter: (filter: TaskFilter) => void;
}
