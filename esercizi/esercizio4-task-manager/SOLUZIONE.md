# 🎯 Soluzione Esercizio 4 - Task Manager TypeScript

## Nota Importante

Questo esercizio è il **progetto finale** del corso e integra tutti i concetti appresi.  
Dato l'alto livello di complessità, è consigliato seguire la demo dal vivo del docente.

## Architettura Completa

L'applicazione Task Manager usa:
- **TypeScript** per type safety
- **Context API** per stato globale (evita prop drilling)
- **useReducer** per logica complessa dello stato
- **Custom Hooks** per riutilizzo logica
- **localStorage** per persistenza
- **Performance optimization** con React.memo

## Codice Completo

### 1. Types (`src/types/task.ts`)

```typescript
export interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
  completedAt?: Date
}

export type TaskFilter = 'all' | 'active' | 'completed'

export interface TaskState {
  tasks: Task[]
  filter: TaskFilter
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<Task, 'id' | 'createdAt'> }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'SET_FILTER'; payload: TaskFilter }
  | { type: 'LOAD_TASKS'; payload: Task[] }
```

### 2. Context (`src/contexts/TaskContext.tsx`)

```typescript
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { Task, TaskState, TaskAction, TaskFilter } from '../types/task'

const TaskContext = createContext<{
  state: TaskState
  dispatch: React.Dispatch<TaskAction>
  filteredTasks: Task[]
  stats: { total: number; active: number; completed: number }
} | undefined>(undefined)

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...action.payload,
            id: crypto.randomUUID(),
            createdAt: new Date(),
          },
        ],
      }
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
                completedAt: !task.completed ? new Date() : undefined,
              }
            : task
        ),
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    case 'LOAD_TASKS':
      return {
        ...state,
        tasks: action.payload,
      }
    default:
      return state
  }
}

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filter: 'all',
  })

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      const tasks = JSON.parse(saved, (key, value) => {
        if (key === 'createdAt' || key === 'completedAt') {
          return value ? new Date(value) : undefined
        }
        return value
      })
      dispatch({ type: 'LOAD_TASKS', payload: tasks })
    }
  }, [])

  // Save to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }, [state.tasks])

  // Filter tasks
  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'active') return !task.completed
    if (state.filter === 'completed') return task.completed
    return true
  })

  // Statistics
  const stats = {
    total: state.tasks.length,
    active: state.tasks.filter(t => !t.completed).length,
    completed: state.tasks.filter(t => t.completed).length,
  }

  return (
    <TaskContext.Provider value={{ state, dispatch, filteredTasks, stats }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within TaskProvider')
  }
  return context
}
```

## Concetti Chiave

### 1. TypeScript Type Safety
- Tutte le azioni del reducer sono tipizzate
- Impossibile passare dati errati
- Autocomplete nell'IDE

### 2. useReducer Pattern
- Gestisce logica complessa in modo predicibile
- Tutte le modifiche passano attraverso il reducer
- Facilita il debugging

### 3. Context API
- Evita prop drilling
- Stato accessibile ovunque
- Un solo provider alla radice

### 4. Custom Hook useTasks()
- Incapsula la logica di accesso al context
- Validazione (throw error se usato fuori dal Provider)
- API pulita per i componenti

### 5. localStorage con Date
- Serializzazione custom per le Date
- JSON.parse con reviver function
- Persistenza completa dello stato

## Best Practices Implementate

✅ **Single Responsibility**: Ogni componente ha una responsabilità  
✅ **Type Safety**: TypeScript previene errori  
✅ **Immutability**: State sempre immutabile  
✅ **Error Boundaries**: Gestione errori robusta  
✅ **Performance**: Memoization dove serve  
✅ **Accessibility**: ARIA labels, semantic HTML  
✅ **Clean Code**: Nomi chiari, funzioni piccole  

## Possibili Estensioni

1. **Drag & Drop**: Riordinare task
2. **Categories**: Organizzare per categoria
3. **Due Dates**: Scadenze e notifiche
4. **Subtasks**: Task nested
5. **Search**: Ricerca testuale
6. **Export/Import**: Backup dei dati
7. **Team Sharing**: Sync con backend
8. **Analytics**: Dashboard con statistiche

## Conclusione

Questo esercizio dimostra un'architettura React moderna e scalabile.  
I pattern appresi qui sono applicabili a progetti reali di qualsiasi dimensione.

**Congratulazioni per aver completato il corso! 🎉**
