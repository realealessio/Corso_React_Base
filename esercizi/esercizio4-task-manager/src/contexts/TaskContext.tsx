import { createContext, useContext, useReducer, useMemo, useEffect, ReactNode } from 'react';
import { Task, TaskAction, TaskContextType, TaskFilter, TaskStats, TaskStatus } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Reducer per gestire le azioni sulle task
function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask: Task = {
        ...action.payload,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false,
        status: TaskStatus.TODO
      };
      return [...state, newTask];
    }
    
    case 'UPDATE_TASK': {
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updates, updatedAt: new Date() }
          : task
      );
    }
    
    case 'DELETE_TASK': {
      return state.filter(task => task.id !== action.payload);
    }
    
    case 'TOGGLE_TASK': {
      return state.map(task =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
              status: !task.completed ? TaskStatus.DONE : TaskStatus.TODO,
              updatedAt: new Date()
            }
          : task
      );
    }
    
    case 'LOAD_TASKS': {
      return action.payload;
    }
    
    default:
      return state;
  }
}

// Crea il Context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provider Component
export function TaskProvider({ children }: { children: ReactNode }) {
  // localStorage per persistenza
  const [savedTasks, setSavedTasks] = useLocalStorage<Task[]>('tasks', []);
  
  // Reducer per gestire lo stato
  const [tasks, dispatch] = useReducer(taskReducer, savedTasks);
  
  // Filter state
  const [filter, setFilter] = useLocalStorage<TaskFilter>('taskFilter', 'all');

  // Sincronizza tasks con localStorage ogni volta che cambiano
  useEffect(() => {
    setSavedTasks(tasks);
  }, [tasks, setSavedTasks]);

  // Calcola statistiche con useMemo
  const stats: TaskStats = useMemo(() => {
    return {
      total: tasks.length,
      active: tasks.filter(t => !t.completed).length,
      completed: tasks.filter(t => t.completed).length
    };
  }, [tasks]);

  // Tasks filtrate
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(t => !t.completed);
      case 'completed':
        return tasks.filter(t => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Actions
  const addTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'completed'>) => {
    dispatch({ type: 'ADD_TASK', payload: taskData });
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, updates } });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleTask = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const value: TaskContextType = {
    tasks,
    filter,
    stats,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    setFilter,
    filteredTasks
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

// Custom Hook per usare il TaskContext
export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
