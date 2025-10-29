/**
 * 🎯 TASK CONTEXT - GESTIONE STATO GLOBALE COMPLETA
 * 
 * Questo Context dimostra TUTTI i pattern avanzati:
 * ✅ useReducer per operazioni complesse
 * ✅ TypeScript con discriminated unions
 * ✅ Async operations con error handling
 * ✅ localStorage integration con serializzazione
 * ✅ Performance optimization con useMemo
 * ✅ Custom hooks per business logic
 * ✅ Bulk operations sui dati
 * ✅ Advanced filtering e sorting
 * ✅ Statistics calcolate dinamicamente
 * ✅ Import/Export functionality
 */

import { 
  createContext, 
  useContext, 
  useReducer, 
  ReactNode, 
  useEffect, 
  useMemo, 
  useCallback 
} from 'react';
import { 
  Task, 
  TaskContextType, 
  CreateTaskInput, 
  UpdateTaskInput, 
  TaskFilters, 
  TaskStats, 
  TaskCategory, 
  TaskPriority,
  ApiError
} from '../types/Task';
import { useLocalStorage } from '../hooks/useLocalStorage';
// import { useNotification } from '../contexts/NotificationContext';

// 🔄 ========== REDUCER ACTIONS ==========

/**
 * Discriminated Union per le actions del TaskReducer
 * Ogni action ha un tipo specifico e payload tipizzato
 */
type TaskAction = 
  // Data Operations
  | { type: 'SET_TASKS'; payload: Task[] }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'DELETE_MULTIPLE'; payload: string[] }
  | { type: 'DUPLICATE_TASK'; payload: Task }
  
  // State Operations
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'MARK_ALL_COMPLETED' }
  | { type: 'DELETE_ALL_COMPLETED' }
  | { type: 'CLEAR_ALL_TASKS' }
  
  // Filter Operations
  | { type: 'SET_FILTERS'; payload: Partial<TaskFilters> }
  | { type: 'RESET_FILTERS' }
  
  // Async State
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

/**
 * State completo del TaskContext
 * Include task, filtri, loading e error states
 */
interface TaskState {
  tasks: Task[];
  filters: TaskFilters;
  loading: boolean;
  error: string | null;
}

// 🏭 ========== UTILITY FUNCTIONS ==========

/**
 * Genera un UUID semplice per i task
 * In produzione usare crypto.randomUUID() o libreria uuid
 */
const generateTaskId = (): string => {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Valida i dati di input per un nuovo task
 * Ritorna array di errori se presenti
 */
const validateTaskInput = (input: CreateTaskInput): string[] => {
  const errors: string[] = [];
  
  if (!input.title || input.title.trim().length === 0) {
    errors.push('Il titolo è obbligatorio');
  }
  
  if (input.title && input.title.length > 100) {
    errors.push('Il titolo non può superare 100 caratteri');
  }
  
  if (input.dueDate && input.dueDate < new Date()) {
    errors.push('La data di scadenza non può essere nel passato');
  }
  
  if (input.estimatedTime && input.estimatedTime <= 0) {
    errors.push('I minuti stimati devono essere positivi');
  }
  
  return errors;
};

/**
 * Applica i filtri a una lista di task
 */
const applyFilters = (tasks: Task[], filters: TaskFilters): Task[] => {
  let filtered = [...tasks];
  
  // Filtro per categoria
  if (filters.category) {
    filtered = filtered.filter(task => task.category === filters.category);
  }
  
  // Filtro per priorità
  if (filters.priority) {
    filtered = filtered.filter(task => task.priority === filters.priority);
  }
  
  // Filtro per stato completamento
  if (filters.completed !== undefined) {
    filtered = filtered.filter(task => task.completed === filters.completed);
  }
  
  // Ricerca testuale
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(task => 
      task.title.toLowerCase().includes(query) ||
      task.description?.toLowerCase().includes(query) ||
      task.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  // Filtro per tags
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(task =>
      filters.tags!.some(tag => task.tags.includes(tag))
    );
  }
  
  // Filtro per range date scadenza
  if (filters.dueDateRange) {
    const { from, to } = filters.dueDateRange;
    filtered = filtered.filter(task => {
      if (!task.dueDate) return false;
      
      if (from && task.dueDate < from) return false;
      if (to && task.dueDate > to) return false;
      
      return true;
    });
  }
  
  // Ordinamento
  if (filters.sortBy) {
    filtered.sort((a, b) => {
      const field = filters.sortBy!;
      const order = filters.sortOrder === 'desc' ? -1 : 1;
      
      let comparison = 0;
      
      switch (field) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'createdAt':
          comparison = a.createdAt.getTime() - b.createdAt.getTime();
          break;
        case 'dueDate':
          const aDate = a.dueDate?.getTime() || 0;
          const bDate = b.dueDate?.getTime() || 0;
          comparison = aDate - bDate;
          break;
        case 'priority':
          const priorityOrder = { low: 1, medium: 2, high: 3, urgent: 4 };
          comparison = priorityOrder[a.priority] - priorityOrder[b.priority];
          break;
        case 'category':
          comparison = a.category.localeCompare(b.category);
          break;
        case 'completedAt':
          const aCompleted = a.completedAt?.getTime() || 0;
          const bCompleted = b.completedAt?.getTime() || 0;
          comparison = aCompleted - bCompleted;
          break;
      }
      
      return comparison * order;
    });
  }
  
  return filtered;
};

/**
 * Calcola statistiche dai task
 */
const calculateStats = (tasks: Task[]): TaskStats => {
  const now = new Date();
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;
  const overdue = tasks.filter(task => 
    !task.completed && task.dueDate && task.dueDate < now
  ).length;
  const high_priority = tasks.filter(task => 
    task.priority === TaskPriority.HIGH || task.priority === TaskPriority.URGENT
  ).length;
  
  // Conteggio per categoria
  const byCategory = tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1;
    return acc;
  }, {} as Record<TaskCategory, number>);
  
  // Percentuale completamento
  const completionRate = total > 0 ? (completed / total) * 100 : 0;
  
  // Tempo medio completamento (solo task completati)
  const completedTasks = tasks.filter(task => task.completed && task.completedAt);
  const averageCompletionTime = completedTasks.length > 0
    ? completedTasks.reduce((sum, task) => {
        const days = (task.completedAt!.getTime() - task.createdAt.getTime()) / (1000 * 60 * 60 * 24);
        return sum + days;
      }, 0) / completedTasks.length
    : undefined;
  
  return {
    total,
    completed,
    pending,
    overdue,
    high_priority,
    byCategory,
    completionRate,
    averageCompletionTime
  };
};

// 🔧 ========== TASK REDUCER ==========

/**
 * Stato iniziale del reducer
 */
const initialState: TaskState = {
  tasks: [],
  filters: {
    sortBy: 'createdAt',
    sortOrder: 'desc'
  },
  loading: false,
  error: null
};

/**
 * Reducer principale per gestire tutte le operazioni sui task
 * Implementa pattern immutabile per performance ottimali
 */
function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    // ========== DATA OPERATIONS ==========
    
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: null
      };
    
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks], // Nuovo in cima
        error: null
      };
    
    case 'UPDATE_TASK': {
      const { id, updates } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === id 
            ? { 
                ...task, 
                ...updates, 
                updatedAt: new Date() // Auto-update timestamp
              }
            : task
        ),
        error: null
      };
    }
    
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        error: null
      };
    
    case 'DELETE_MULTIPLE':
      return {
        ...state,
        tasks: state.tasks.filter(task => !action.payload.includes(task.id)),
        error: null
      };
    
    case 'DUPLICATE_TASK':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        error: null
      };
    
    // ========== STATE OPERATIONS ==========
    
    case 'TOGGLE_TASK': {
      const taskId = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === taskId 
            ? { 
                ...task, 
                completed: !task.completed,
                completedAt: !task.completed ? new Date() : undefined,
                updatedAt: new Date()
              }
            : task
        ),
        error: null
      };
    }
    
    case 'MARK_ALL_COMPLETED': {
      const now = new Date();
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.completed 
            ? task 
            : { 
                ...task, 
                completed: true, 
                completedAt: now,
                updatedAt: now
              }
        ),
        error: null
      };
    }
    
    case 'DELETE_ALL_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed),
        error: null
      };
    
    case 'CLEAR_ALL_TASKS':
      return {
        ...state,
        tasks: [],
        error: null
      };
    
    // ========== FILTER OPERATIONS ==========
    
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    
    case 'RESET_FILTERS':
      return {
        ...state,
        filters: initialState.filters
      };
    
    // ========== ASYNC STATE ==========
    
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    
    default:
      return state;
  }
}

// 🎯 ========== CONTEXT CREATION ==========

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

/**
 * TaskProvider - Provider principale del Context
 * Gestisce tutto lo stato dell'applicazione dei task
 */
export function TaskProvider({ children }: TaskProviderProps) {
  // Reducer per stato complesso
  const [state, dispatch] = useReducer(taskReducer, initialState);
  
  // localStorage hook per persistenza
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>('tasks-v2', []);
  
  // Simulazione notifiche (in una vera app useremo il NotificationContext)
  const addNotification = (notification: { type: string; title: string; message: string; duration?: number }) => {
    console.log(`📢 ${notification.type.toUpperCase()}: ${notification.title} - ${notification.message}`);
  };
  
  // 🚀 ========== EFFECTS ==========
  
  /**
   * Effect per caricare task da localStorage all'avvio
   * Converte le date serializzate in oggetti Date
   */
  useEffect(() => {
    if (storedTasks.length > 0) {
      try {
        const tasksWithDates = storedTasks.map(task => ({
          ...task,
          createdAt: new Date(task.createdAt),
          dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
          updatedAt: task.updatedAt ? new Date(task.updatedAt) : undefined,
          completedAt: task.completedAt ? new Date(task.completedAt) : undefined
        }));
        
        dispatch({ type: 'SET_TASKS', payload: tasksWithDates });
        
        addNotification({
          type: 'info',
          title: 'Dati caricati',
          message: `Caricati ${tasksWithDates.length} task da localStorage`,
          duration: 3000
        });
      } catch (error) {
        console.error('Errore nel caricamento task:', error);
        dispatch({ 
          type: 'SET_ERROR', 
          payload: 'Errore nel caricamento dei task salvati' 
        });
      }
    }
  }, [storedTasks, addNotification]);
  
  /**
   * Effect per salvare task in localStorage quando cambiano
   * Debounced per evitare troppi salvataggi
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (state.tasks.length >= 0) { // Include array vuoto
        setStoredTasks(state.tasks);
      }
    }, 500); // Debounce di 500ms
    
    return () => clearTimeout(timeoutId);
  }, [state.tasks, setStoredTasks]);
  
  // 🎯 ========== TASK OPERATIONS ==========
  
  /**
   * Aggiunge un nuovo task con validazione
   */
  const addTask = useCallback(async (taskData: CreateTaskInput): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Validazione input
      const errors = validateTaskInput(taskData);
      if (errors.length > 0) {
        throw new ApiError(
          'VALIDATION_ERROR',
          `Errori di validazione: ${errors.join(', ')}`,
          errors,
          new Date()
        );
      }
      
      // Creazione task con dati auto-generati
      const newTask: Task = {
        ...taskData,
        id: generateTaskId(),
        createdAt: new Date(),
        completed: false,
        tags: taskData.tags || [],
        description: taskData.description || ''
      };
      
      dispatch({ type: 'ADD_TASK', payload: newTask });
      
      addNotification({
        type: 'success',
        title: 'Task aggiunto',
        message: `"${newTask.title}" è stato aggiunto con successo`,
        duration: 4000
      });
      
    } catch (error) {
      const errorMessage = error instanceof ApiError 
        ? error.message 
        : 'Errore durante l\'aggiunta del task';
      
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      
      addNotification({
        type: 'error',
        title: 'Errore',
        message: errorMessage,
        duration: 6000
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [addNotification]);
  
  /**
   * Aggiorna un task esistente
   */
  const updateTask = useCallback(async (id: string, updates: UpdateTaskInput): Promise<void> => {
    try {
      const existingTask = state.tasks.find(task => task.id === id);
      if (!existingTask) {
        throw new ApiError(
          'TASK_NOT_FOUND',
          `Task con ID ${id} non trovato`,
          { id },
          new Date()
        );
      }
      
      dispatch({ type: 'UPDATE_TASK', payload: { id, updates } });
      
      addNotification({
        type: 'success',
        title: 'Task aggiornato',
        message: `"${existingTask.title}" è stato aggiornato`,
        duration: 3000
      });
      
    } catch (error) {
      const errorMessage = error instanceof ApiError 
        ? error.message 
        : 'Errore durante l\'aggiornamento del task';
      
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      
      addNotification({
        type: 'error',
        title: 'Errore',
        message: errorMessage,
        duration: 5000
      });
    }
  }, [state.tasks, addNotification]);
  
  /**
   * Elimina un task
   */
  const deleteTask = useCallback(async (id: string): Promise<void> => {
    try {
      const taskToDelete = state.tasks.find(task => task.id === id);
      if (!taskToDelete) {
        throw new ApiError(
          'TASK_NOT_FOUND',
          `Task con ID ${id} non trovato`,
          { id },
          new Date()
        );
      }
      
      dispatch({ type: 'DELETE_TASK', payload: id });
      
        addNotification({
          type: 'success',
          title: 'Task eliminato',
          message: `"${taskToDelete.title}" è stato eliminato`,
          duration: 4000
        });    } catch (error) {
      const errorMessage = error instanceof ApiError 
        ? error.message 
        : 'Errore durante l\'eliminazione del task';
      
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      
      addNotification({
        type: 'error',
        title: 'Errore',
        message: errorMessage,
        duration: 5000
      });
    }
  }, [state.tasks, addNotification]);
  
  /**
   * Toggle stato completamento task
   */
  const toggleTask = useCallback(async (id: string): Promise<void> => {
    try {
      const task = state.tasks.find(t => t.id === id);
      if (!task) {
        throw new ApiError(
          'TASK_NOT_FOUND',
          `Task con ID ${id} non trovato`,
          { id },
          new Date()
        );
      }
      
      dispatch({ type: 'TOGGLE_TASK', payload: id });
      
      const action = task.completed ? 'riaperto' : 'completato';
      addNotification({
        type: 'success',
        title: `Task ${action}`,
        message: `"${task.title}" è stato ${action}`,
        duration: 2000
      });
      
    } catch (error) {
      const errorMessage = error instanceof ApiError 
        ? error.message 
        : 'Errore durante l\'aggiornamento del task';
      
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
    }
  }, [state.tasks, addNotification]);
  
  /**
   * Duplica un task esistente
   */
  const duplicateTask = useCallback(async (id: string): Promise<void> => {
    try {
      const originalTask = state.tasks.find(task => task.id === id);
      if (!originalTask) {
        throw new ApiError(
          'TASK_NOT_FOUND',
          `Task con ID ${id} non trovato`,
          { id },
          new Date()
        );
      }
      
      const duplicatedTask: Task = {
        ...originalTask,
        id: generateTaskId(),
        title: `${originalTask.title} (copia)`,
        completed: false,
        createdAt: new Date(),
        completedAt: undefined,
        updatedAt: undefined
      };
      
      dispatch({ type: 'DUPLICATE_TASK', payload: duplicatedTask });
      
      addNotification({
        type: 'success',
        title: 'Task duplicato',
        message: `"${originalTask.title}" è stato duplicato`,
        duration: 3000
      });
      
    } catch (error) {
      const errorMessage = error instanceof ApiError 
        ? error.message 
        : 'Errore durante la duplicazione del task';
      
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
    }
  }, [state.tasks, addNotification]);
  
  // 🎯 ========== BULK OPERATIONS ==========
  
  /**
   * Elimina tutti i task completati
   */
  const deleteAllCompleted = useCallback(async (): Promise<void> => {
    try {
      const completedTasks = state.tasks.filter(task => task.completed);
      
      if (completedTasks.length === 0) {
        addNotification({
          type: 'info',
          title: 'Nessun task completato',
          message: 'Non ci sono task completati da eliminare',
          duration: 3000
        });
        return;
      }
      
      dispatch({ type: 'DELETE_ALL_COMPLETED' });
      
      addNotification({
        type: 'success',
        title: 'Task completati eliminati',
        message: `Eliminati ${completedTasks.length} task completati`,
        duration: 4000
      });
      
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Errore durante l\'eliminazione dei task completati' });
    }
  }, [state.tasks, addNotification]);
  
  /**
   * Marca tutti i task come completati
   */
  const markAllAsCompleted = useCallback(async (): Promise<void> => {
    try {
      const pendingTasks = state.tasks.filter(task => !task.completed);
      
      if (pendingTasks.length === 0) {
        addNotification({
          type: 'info',
          title: 'Tutti i task sono già completati',
          message: 'Non ci sono task da completare',
          duration: 3000
        });
        return;
      }
      
      dispatch({ type: 'MARK_ALL_COMPLETED' });
      
      addNotification({
        type: 'success',
        title: 'Tutti i task completati',
        message: `Completati ${pendingTasks.length} task`,
        duration: 4000
      });
      
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Errore durante il completamento dei task' });
    }
  }, [state.tasks, addNotification]);
  
  /**
   * Elimina tutti i task
   */
  const deleteAllTasks = useCallback(async (): Promise<void> => {
    try {
      const taskCount = state.tasks.length;
      
      if (taskCount === 0) {
        addNotification({
          type: 'info',
          title: 'Nessun task da eliminare',
          message: 'La lista è già vuota',
          duration: 3000
        });
        return;
      }
      
      // Salva backup per eventuale ripristino (removed per ora)
      // const backup = [...state.tasks];
      
      dispatch({ type: 'CLEAR_ALL_TASKS' });
      
        addNotification({
          type: 'warning',
          title: 'Tutti i task eliminati',
          message: `Eliminati ${taskCount} task`,
          duration: 6000
        });    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Errore durante l\'eliminazione di tutti i task' });
    }
  }, [state.tasks, addNotification]);
  
  // 🔍 ========== FILTERING & SORTING ==========
  
  /**
   * Aggiorna i filtri
   */
  const updateFilters = useCallback((filters: Partial<TaskFilters>): void => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  }, []);
  
  /**
   * Reset filtri a default
   */
  const resetFilters = useCallback((): void => {
    dispatch({ type: 'RESET_FILTERS' });
  }, []);
  
  /**
   * Ottieni task filtrati con memoization per performance
   */
  const getFilteredTasks = useCallback((): Task[] => {
    return applyFilters(state.tasks, state.filters);
  }, [state.tasks, state.filters]);
  
  // 📊 ========== STATISTICS & ANALYTICS ==========
  
  /**
   * Calcola statistiche con memoization
   */
  const getStats = useMemo((): TaskStats => {
    return calculateStats(state.tasks);
  }, [state.tasks]);
  
  /**
   * Raggruppa task per categoria
   */
  const getTasksByCategory = useMemo((): Record<TaskCategory, Task[]> => {
    return state.tasks.reduce((acc, task) => {
      if (!acc[task.category]) {
        acc[task.category] = [];
      }
      acc[task.category].push(task);
      return acc;
    }, {} as Record<TaskCategory, Task[]>);
  }, [state.tasks]);
  
  /**
   * Ottieni task scaduti
   */
  const getOverdueTasks = useMemo((): Task[] => {
    const now = new Date();
    return state.tasks.filter(task => 
      !task.completed && 
      task.dueDate && 
      task.dueDate < now
    );
  }, [state.tasks]);
  
  /**
   * Ottieni task in scadenza nei prossimi N giorni
   */
  const getUpcomingTasks = useCallback((days: number = 7): Task[] => {
    const now = new Date();
    const futureDate = new Date(now.getTime() + (days * 24 * 60 * 60 * 1000));
    
    return state.tasks.filter(task =>
      !task.completed &&
      task.dueDate &&
      task.dueDate >= now &&
      task.dueDate <= futureDate
    );
  }, [state.tasks]);
  
  // 🔍 ========== SEARCH ==========
  
  /**
   * Ricerca task con query testuale
   */
  const searchTasks = useCallback((query: string): Task[] => {
    if (!query.trim()) return state.tasks;
    
    const searchQuery = query.toLowerCase();
    return state.tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery) ||
      task.description?.toLowerCase().includes(searchQuery) ||
      task.tags.some(tag => tag.toLowerCase().includes(searchQuery)) ||
      task.category.toLowerCase().includes(searchQuery)
    );
  }, [state.tasks]);
  
  // 💾 ========== IMPORT/EXPORT ==========
  
  /**
   * Esporta task in formato JSON o CSV
   */
  const exportTasks = useCallback(async (format: 'json' | 'csv'): Promise<string> => {
    try {
      if (format === 'json') {
        return JSON.stringify(state.tasks, null, 2);
      } else {
        // CSV export
        const headers = ['ID', 'Title', 'Description', 'Completed', 'Priority', 'Category', 'Created', 'Due Date'];
        const rows = state.tasks.map(task => [
          task.id,
          task.title,
          task.description || '',
          task.completed.toString(),
          task.priority,
          task.category,
          task.createdAt.toISOString(),
          task.dueDate?.toISOString() || ''
        ]);
        
        return [headers, ...rows].map(row => row.join(',')).join('\n');
      }
    } catch (error) {
      throw new ApiError(
        'EXPORT_ERROR',
        'Errore durante l\'esportazione',
        error,
        new Date()
      );
    }
  }, [state.tasks]);
  
  /**
   * Importa task da dati esterni
   */
  const importTasks = useCallback(async (data: string, format: 'json' | 'csv'): Promise<void> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      let importedTasks: Task[];
      
      if (format === 'json') {
        const parsed = JSON.parse(data);
        importedTasks = Array.isArray(parsed) ? parsed : [parsed];
      } else {
        // CSV import - implementazione semplificata
        const lines = data.split('\n');
        // const headers = lines[0].split(','); // Headers per future use
        
        importedTasks = lines.slice(1).map((line, index) => {
          const values = line.split(',');
          return {
            id: values[0] || generateTaskId(),
            title: values[1] || `Imported Task ${index + 1}`,
            description: values[2] || '',
            completed: values[3] === 'true',
            priority: values[4] as TaskPriority || TaskPriority.MEDIUM,
            category: values[5] as TaskCategory || 'other',
            createdAt: values[6] ? new Date(values[6]) : new Date(),
            dueDate: values[7] ? new Date(values[7]) : undefined,
            tags: [],
            estimatedMinutes: undefined
          };
        });
      }
      
      // Validazione e merge
      const validTasks = importedTasks.filter(task => {
        const errors = validateTaskInput(task);
        return errors.length === 0;
      });
      
      dispatch({ type: 'SET_TASKS', payload: [...validTasks, ...state.tasks] });
      
      addNotification({
        type: 'success',
        title: 'Import completato',
        message: `Importati ${validTasks.length} task`,
        duration: 4000
      });
      
    } catch (error) {
      const errorMessage = 'Errore durante l\'importazione dei task';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      
      addNotification({
        type: 'error',
        title: 'Errore Import',
        message: errorMessage,
        duration: 5000
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [state.tasks, addNotification]);
  
  // 🎯 ========== CONTEXT VALUE ==========
  
  /**
   * Valore del context con memoization per evitare re-render inutili
   */
  const contextValue = useMemo((): TaskContextType => ({
    // State
    tasks: state.tasks,
    filters: state.filters,
    loading: state.loading,
    error: state.error,
    
    // Task Operations
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    duplicateTask,
    
    // Bulk Operations
    deleteAllCompleted,
    markAllAsCompleted,
    deleteAllTasks,
    
    // Filtering & Sorting
    updateFilters,
    resetFilters,
    getFilteredTasks,
    
    // Statistics
    getStats: () => getStats,
    getTasksByCategory: () => getTasksByCategory,
    getOverdueTasks: () => getOverdueTasks,
    getUpcomingTasks,
    
    // Import/Export
    exportTasks,
    importTasks,
    
    // Search
    searchTasks
  }), [
    state,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    duplicateTask,
    deleteAllCompleted,
    markAllAsCompleted,
    deleteAllTasks,
    updateFilters,
    resetFilters,
    getFilteredTasks,
    getStats,
    getTasksByCategory,
    getOverdueTasks,
    getUpcomingTasks,
    exportTasks,
    importTasks,
    searchTasks
  ]);
  
  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
}

// 🪝 ========== CUSTOM HOOK ==========

/**
 * Custom hook per utilizzare il TaskContext
 * Include controllo di sicurezza per uso fuori dal Provider
 */
export function useTasks(): TaskContextType {
  const context = useContext(TaskContext);
  
  if (context === undefined) {
    throw new Error(
      'useTasks deve essere utilizzato all\'interno di un TaskProvider. ' +
      'Assicurati che il componente sia wrappato in un <TaskProvider>.'
    );
  }
  
  return context;
}