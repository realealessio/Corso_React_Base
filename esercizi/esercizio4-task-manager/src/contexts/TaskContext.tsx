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
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask: Task = {
        id: crypto.randomUUID(),
        status: TaskStatus.TODO,
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false,
        title: action.payload.title || '',
        description: action.payload.description || ''
      };
      return [...state, newTask]; // ✅ Immutabile
    }
    
    case 'UPDATE_TASK': {
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updates, updatedAt: new Date() }
          : task
      ); // ✅ Immutabile
    }
    
    case 'DELETE_TASK': {
      return state.filter(task => task.id !== action.payload.id); // ✅ Immutabile
    }
    
    case 'TOGGLE_TASK': {
      return state.map(task =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: !task.completed,
              status: !task.completed ? TaskStatus.DONE : TaskStatus.TODO,
              updatedAt: new Date()
            }
          : task
      ); // ✅ Immutabile
    }
    
    default:
      return state;
  }
}

// TODO 8: Creare il TaskContext usando createContext
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// TODO 9: Implementare il TaskProvider
export function TaskProvider({ children }: { children: ReactNode }) {
  // Usare useLocalStorage per tasks e filter
  // Usare useReducer per gestire lo stato
  // Calcolare stats con useMemo
  // Calcolare filteredTasks con useMemo
  // Implementare le funzioni: addTask, updateTask, deleteTask, toggleTask
  // Sincronizzare tasks con localStorage usando useEffect
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks', []);
  const [storedFilter, setStoredFilter] = useLocalStorage<TaskFilter>('filter', 'all'); 
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  const stats: TaskStats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;
    return { total, active, completed };
  }, [tasks]);

  const filteredTasks: Task[] = useMemo(() => {
    switch (storedFilter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'all':
      default:
        return tasks;
    }
  }, [tasks, storedFilter]);

  const addTask = (payload: Extract<TaskAction, {type: 'ADD_TASK'}>['payload']) => {
    dispatch({ type: 'ADD_TASK', payload });
  }
  const updateTask = (payload: Extract<TaskAction, { type: 'UPDATE_TASK' }>['payload']) => {
    dispatch({ type: 'UPDATE_TASK', payload });
  }
  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } });
  }
  const toggleTask = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK', payload: { id } });
  }

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setStoredFilter(storedFilter);
  }, [storedFilter]);

  const value: TaskContextType = {
    tasks,
    filter: storedFilter,
    stats,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    setFilter: setStoredFilter,
    filteredTasks
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

// TODO 10: Implementare il custom hook useTasks
// Deve restituire il context e lanciare errore se usato fuori dal provider
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}