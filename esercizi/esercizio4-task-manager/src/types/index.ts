// TypeScript Types e Interfaces

// TODO 1: Definire l'enum TaskStatus con i valori: 'todo', 'in-progress', 'done'
// export enum TaskStatus {
//   TODO = 'todo',
//   IN_PROGRESS = 'in-progress',
//   DONE = 'done'
// }

// TODO 2: Definire il type TaskFilter come union type: 'all' | 'active' | 'completed'
// export type TaskFilter = ...

// TODO 3: Definire l'interface Task con le seguenti proprietà:
// - id: string
// - title: string
// - description: string
// - status: TaskStatus
// - createdAt: Date
// - updatedAt: Date
// - completed: boolean
// export interface Task {
//   ...
// }

// TODO 4: Definire l'interface TaskStats con: total, active, completed (tutti number)
// export interface TaskStats {
//   ...
// }

// TODO 5: Definire TaskAction come union type per le azioni del reducer:
// - ADD_TASK: payload con Task senza id, createdAt, updatedAt
// - UPDATE_TASK: payload con id e updates (parziale di Task)
// - DELETE_TASK: payload con id (string)
// - TOGGLE_TASK: payload con id (string)
// export type TaskAction =
//   | { type: 'ADD_TASK'; payload: ... }
//   | ...

// TODO 6: Definire l'interface TaskContextType con tutti i metodi e proprietà del context:
// tasks, filter, stats, addTask, updateTask, deleteTask, toggleTask, setFilter, filteredTasks
// export interface TaskContextType {
//   ...
// }
