import { createContext, useContext, useReducer, useMemo, useEffect, ReactNode } from 'react';
import { Task, TaskAction, TaskContextType, TaskFilter, TaskStats, TaskStatus } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

// TODO 7: Implementare il taskReducer
// Gestire i seguenti casi:
// - 'ADD_TASK': creare nuova task con id (crypto.randomUUID()), date, completed=false, status=TODO
// - 'UPDATE_TASK': aggiornare task per id con updatedAt = new Date()
// - 'DELETE_TASK': filtrare le task rimuovendo quella con l'id specificato
// - 'TOGGLE_TASK': invertire completed e aggiornare status (DONE se completed, TODO altrimenti)
function taskReducer(state: Task[], action: TaskAction): Task[] {
  // Completare qui
  return state;
}

// TODO 8: Creare il TaskContext usando createContext
// const TaskContext = createContext<TaskContextType | undefined>(undefined);

// TODO 9: Implementare il TaskProvider
// export function TaskProvider({ children }: { children: ReactNode }) {
//   // Usare useLocalStorage per tasks e filter
//   // Usare useReducer per gestire lo stato
//   // Calcolare stats con useMemo
//   // Calcolare filteredTasks con useMemo
//   // Implementare le funzioni: addTask, updateTask, deleteTask, toggleTask
//   // Sincronizzare tasks con localStorage usando useEffect
// }

// TODO 10: Implementare il custom hook useTasks
// Deve restituire il context e lanciare errore se usato fuori dal provider
// export function useTasks() {
//   ...
// }
