# 🎯 Soluzione Esercizio 4 - Task Manager TypeScript

## Introduzione

Questo esercizio integra i concetti avanzati del **Giorno 2**:
- ✅ **TypeScript** con React
- ✅ **Context API** per stato globale
- ✅ **useReducer** per logica complessa
- ✅ **Custom Hooks** (useLocalStorage)
- ✅ **Performance** con React.memo, useMemo

---

## 📝 Soluzioni Complete

### TODO 1-6: TypeScript Types (`src/types/index.ts`)

```typescript
// TypeScript Types e Interfaces

// TODO 1: Definire l'enum TaskStatus
export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done'
}

// TODO 2: Definire il type TaskFilter
export type TaskFilter = 'all' | 'active' | 'completed';

// TODO 3: Definire l'interface Task
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  completed: boolean;
}

// TODO 4: Definire l'interface TaskStats
export interface TaskStats {
  total: number;
  active: number;
  completed: number;
}

// TODO 5: Definire TaskAction come union type
export type TaskAction =
  | { type: 'ADD_TASK'; payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string };

// TODO 6: Definire l'interface TaskContextType
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
```

**📚 Spiegazione:**

- **Enum TaskStatus**: Valori predefiniti per lo stato delle task
- **Union Type TaskFilter**: Solo 3 valori possibili
- **Interface Task**: Struttura completa di una task
- **Interface TaskStats**: Statistiche calcolate
- **Union Type TaskAction**: Tutte le azioni possibili del reducer (discriminated union)
- **Interface TaskContextType**: API completa del context

**💡 Concetto TypeScript**: 
- `Omit<Type, Keys>` - Rimuove proprietà da un tipo
- `Partial<Type>` - Rende tutte le proprietà opzionali
- Union types con discriminanti (`type`) aiutano TypeScript a inferire i tipi

---

### TODO 7: Reducer (`src/contexts/TaskContext.tsx`)

```typescript
import { createContext, useContext, useReducer, useMemo, useEffect, ReactNode } from 'react';
import { Task, TaskAction, TaskContextType, TaskFilter, TaskStats, TaskStatus } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

// TODO 7: Implementare il taskReducer
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
    
    default:
      return state;
  }
}
```

**📚 Spiegazione:**

- **ADD_TASK**: Crea nuova task con id univoco (crypto.randomUUID()), date automatiche
- **UPDATE_TASK**: Aggiorna task esistente mantenendo immutabilità con `.map()`
- **DELETE_TASK**: Rimuove task con `.filter()`
- **TOGGLE_TASK**: Inverte completed e aggiorna status di conseguenza

**💡 Concetto useReducer**:
- Il reducer riceve `state` attuale e `action`
- Ritorna SEMPRE un nuovo state (immutabilità)
- Switch/case per gestire diverse azioni
- TypeScript garantisce che action.payload sia del tipo corretto

---

### TODO 8-10: Context, Provider, Hook

```typescript
// TODO 8: Creare il TaskContext
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// TODO 9: Implementare il TaskProvider
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

// TODO 10: Implementare il custom hook useTasks
export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
```

**📚 Spiegazione dettagliata:**

1. **createContext**: Crea il context con tipo `TaskContextType | undefined`
   - `undefined` permette di controllare se siamo dentro il Provider

2. **TaskProvider**:
   - `useLocalStorage` per tasks e filter → persistenza automatica
   - `useReducer` con stato iniziale da localStorage
   - `useEffect` per sincronizzare tasks → localStorage quando cambiano
   - `useMemo` per stats → ricalcola solo se tasks cambia (performance!)
   - `useMemo` per filteredTasks → ricalcola solo se tasks o filter cambiano
   - Funzioni helper che wrappano il dispatch

3. **useTasks hook**:
   - Consuma il context
   - Lancia errore se usato fuori dal Provider (fail-fast)
   - API pulita per i componenti

**💡 Concetti chiave**:

- **Context API**: Evita prop drilling, stato accessibile ovunque
- **useMemo**: Ottimizza performance, evita ricalcoli inutili
- **useEffect**: Sincronizza state → localStorage (side effect)
- **Custom Hook**: Astrae logica, API riutilizzabile

---

### TODO 11: React.memo (`src/components/TaskItem.tsx`)

```typescript
import { memo } from 'react';
import { Task } from '../types';
import { useTasks } from '../contexts/TaskContext';

interface TaskItemProps {
  task: Task;
}

// TODO 11: Avvolgere con React.memo
export const TaskItem = memo(({ task }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`Completa task: ${task.title}`}
        />
        
        <div className="task-details">
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <div className="task-meta">
            <span className={`status-badge ${task.status}`}>
              {task.status}
            </span>
            <span className="task-date">
              Creata: {new Date(task.createdAt).toLocaleDateString('it-IT')}
            </span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-danger btn-sm"
          aria-label={`Elimina task: ${task.title}`}
        >
          🗑️ Elimina
        </button>
      </div>
    </div>
  );
});

TaskItem.displayName = 'TaskItem';
```

**📚 Spiegazione:**

- **React.memo**: HOC (Higher-Order Component) che memorizza il risultato del render
- Il componente si re-renderizza SOLO se le props cambiano
- Confronto shallow (===) delle props
- Ottimizzazione importante per liste lunghe

**💡 Quando usare React.memo**:
- ✅ Componenti che renderizzano spesso ma props cambiano raramente
- ✅ Componenti in liste (come TaskItem)
- ✅ Componenti con rendering "pesante"
- ❌ Componenti semplici/piccoli (overhead inutile)
- ❌ Props che cambiano sempre (no beneficio)

**Esempio senza memo**:
```typescript
// Senza memo: si re-renderizza anche se task non cambia
export const TaskItem = ({ task }: TaskItemProps) => { ... }
```

**Esempio con memo**:
```typescript
// Con memo: si re-renderizza SOLO se task cambia
export const TaskItem = memo(({ task }: TaskItemProps) => { ... })
```

---

## 🎓 Concetti Avanzati Applicati

### 1. TypeScript Type Safety

**Vantaggi**:
- ✅ Errori a compile-time invece che runtime
- ✅ Autocomplete intelligente
- ✅ Refactoring sicuro
- ✅ Documentazione inline

**Esempio**:
```typescript
// TypeScript previene errori
const task: Task = {
  id: '1',
  title: 'Test',
  // ❌ Errore: mancano proprietà obbligatorie
}

// Autocomplete suggerisce action.type
dispatch({ type: 'AD' }) // Suggerisce: 'ADD_TASK'
```

### 2. Context API Pattern

**Struttura**:
```
1. createContext<Type>()
2. Provider con value
3. Custom hook con useContext + validazione
4. Componenti consumano tramite hook
```

**Vantaggi**:
- ✅ Evita prop drilling
- ✅ Stato condiviso semplice
- ✅ Un solo provider alla radice

**Quando usare**:
- ✅ Tema, autenticazione, locale
- ✅ App piccole/medie
- ❌ Stato complesso → Redux

### 3. useReducer Pattern

**Quando preferire useReducer a useState**:
- ✅ Logica di stato complessa
- ✅ Transizioni di stato multiple
- ✅ Stato con sub-valori correlati
- ✅ Testing più facile
- ✅ Modifiche tracciabili (Redux DevTools)

**Struttura**:
```typescript
// State
type State = T[]

// Actions (discriminated union)
type Action = 
  | { type: 'ACTION_1'; payload: Data1 }
  | { type: 'ACTION_2'; payload: Data2 }

// Reducer (pure function)
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ACTION_1': return newState
    default: return state
  }
}

// Uso
const [state, dispatch] = useReducer(reducer, initialState)
dispatch({ type: 'ACTION_1', payload: data })
```

### 4. Performance Optimization

**useMemo**:
```typescript
// ❌ Senza useMemo: ricalcola ad ogni render
const stats = {
  total: tasks.length,
  active: tasks.filter(t => !t.completed).length,
  completed: tasks.filter(t => t.completed).length
}

// ✅ Con useMemo: ricalcola solo se tasks cambia
const stats = useMemo(() => ({
  total: tasks.length,
  active: tasks.filter(t => !t.completed).length,
  completed: tasks.filter(t => t.completed).length
}), [tasks])
```

**React.memo**:
```typescript
// Lista di 100 task
// Quando aggiungi 1 task, solo quella nuova si renderizza
// Le altre 99 usano il render memorizzato (performance!)
export const TaskItem = memo(({ task }) => { ... })
```

### 5. Custom Hook Pattern

**useLocalStorage**:
```typescript
// Astrae logica complessa
// Riutilizzabile in tutta l'app
// API identica a useState

const [tasks, setTasks] = useLocalStorage('tasks', [])
const [theme, setTheme] = useLocalStorage('theme', 'light')

// Semplice da usare, potente sotto il cofano
```

---

## ✅ Checklist Verifica

### Funzionalità
- [ ] Aggiungere task
- [ ] Marcare task come completata
- [ ] Eliminare task
- [ ] Filtrare per: tutte/attive/completate
- [ ] Statistiche aggiornate in real-time
- [ ] Persistenza con localStorage
- [ ] Task sopravvivono al refresh

### TypeScript
- [ ] Nessun errore TypeScript
- [ ] Autocomplete funziona
- [ ] Tipi corretti per tutti i componenti
- [ ] Union types per actions

### Performance
- [ ] TaskItem con React.memo
- [ ] Stats con useMemo
- [ ] FilteredTasks con useMemo
- [ ] Nessun re-render inutile

### Code Quality
- [ ] Context ben strutturato
- [ ] Reducer puro (no side effects)
- [ ] Custom hook con validazione
- [ ] Naming chiaro e consistente

---

## 🚀 Bonus: Possibili Estensioni

1. **Modifica Task**
```typescript
// Aggiungere action EDIT_TASK
// Modal per editing inline
const [editingId, setEditingId] = useState<string | null>(null)
```

2. **Priorità**
```typescript
type Priority = 'low' | 'medium' | 'high'
// Aggiungere ordinamento per priorità
```

3. **Categorie**
```typescript
interface Task {
  // ... existing
  category: 'work' | 'personal' | 'shopping'
}
// Filtro per categoria
```

4. **Ricerca**
```typescript
const [searchQuery, setSearchQuery] = useState('')
const searchedTasks = useMemo(() => 
  filteredTasks.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  ), [filteredTasks, searchQuery]
)
```

5. **Tema Chiaro/Scuro**
```typescript
// Nuovo context ThemeContext
const [theme, setTheme] = useLocalStorage('theme', 'light')
```

---

## 📚 Riferimenti

### Documentazione Ufficiale
- [React Context](https://react.dev/reference/react/createContext)
- [useReducer](https://react.dev/reference/react/useReducer)
- [useMemo](https://react.dev/reference/react/useMemo)
- [React.memo](https://react.dev/reference/react/memo)
- [TypeScript + React](https://react.dev/learn/typescript)

### Pattern Avanzati
- [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Context Best Practices](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

---

## 🎉 Congratulazioni!

Hai completato l'esercizio più complesso del corso!

**Cosa hai imparato**:
- ✅ TypeScript type-safe React
- ✅ Context API per stato globale
- ✅ useReducer per logica complessa
- ✅ Performance optimization
- ✅ Best practices architetturali

**Questi pattern sono usati in produzione** in app React di qualsiasi dimensione!

🚀 **Sei pronto per costruire app React professionali!**
