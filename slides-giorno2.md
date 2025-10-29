---
marp: true
theme: default
paginate: true
backgroundColor: white
color: #333
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
    padding: 30px;
    overflow: hidden;
  }
  h1 {
    color: #0066cc;
    font-size: 44px;
    text-align: center;
    margin-bottom: 25px;
  }
  h2 {
    color: #0066cc;
    font-size: 36px;
    border-bottom: 3px solid #0066cc;
    padding-bottom: 8px;
    margin-bottom: 20px;
  }
  h3 {
    color: #004499;
    font-size: 28px;
    margin-bottom: 15px;
  }
  .title-slide {
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  .title-slide h1 {
    color: white;
    font-size: 60px;
    margin-bottom: 20px;
  }
  .agenda-slide {
    background-color: #f8f9fa;
  }
  code {
    background-color: #f4f4f4;
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'Consolas', 'Monaco', monospace;
  }
  pre {
    background-color: #7f98c3ff;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    font-size: 18px;
    overflow-x: auto;
    margin: 10px 0;
    max-height: 400px;
    overflow-y: auto;
  }
  .highlight {
    background-color: #fff3cd;
    padding: 12px;
    border-left: 5px solid #ffc107;
    margin: 15px 0;
    font-size: 22px;
  }
  .center {
    text-align: center;
  }
  ul, ol {
    font-size: 22px;
    line-height: 1.4;
  }
  .two-columns {
    display: flex;
    gap: 40px;
  }
  .column {
    flex: 1;
  }
  .small-code pre {
    font-size: 14px !important;
    padding: 10px !important;
    line-height: 1.3;
  }
  .small-code code {
    font-size: 14px !important;
  }
  .tiny-code pre {
    font-size: 12px !important;
    padding: 8px !important;
    line-height: 1.2;
  }
  .tiny-code code {
    font-size: 12px !important;
  }
  .ultra-compact pre {
    font-size: 10px !important;
    padding: 6px !important;
    line-height: 1.1;
  }
  .ultra-compact code {
    font-size: 10px !important;
  }
---

<!-- _class: title-slide -->

# Corso React Base
## Giorno 2 - Hook Avanzati e TypeScript

**Data:** 5 Novembre 2025
**Orario:** 9:00-16:00 (7 ore)
**Docente:** Alessio Reale

---

<!-- _class: agenda-slide -->

## 📋 Agenda Giorno 2

### **9:00-16:00 (7 ore totali)**

- 🎣 **Hook avanzati** - teoria completa (useState, useEffect, useReducer, useRef, custom hooks) (75 min)
- 🎯 **Demo dal vivo:** Custom hook useLocalStorage (15 min)
- 🌐 **Context API** e gestione stato globale (45 min)
- 🏪 **Redux Toolkit** - panoramica e confronto (45 min)
- 🍔 **Pausa pranzo** (60 min)
- 📘 **TypeScript con React** - teoria e pratica (75 min)
- 🚀 **Performance, best practices e ecosistema** (30 min)
- 🎯 **Demo dal vivo:** Task Manager TypeScript completo (30 min)
- 🎯 **Q&A e troubleshooting finale** (15 min)

---

## 🎯 Obiettivi Giorno 2

### **Cosa imparerai oggi:**

- ✅ Padroneggiare **tutti i React Hooks** (useReducer, useRef, custom hooks)
- ✅ Gestire **stato globale** con Context API
- ✅ Conoscere **Redux Toolkit** e quando usarlo
- ✅ Integrare **TypeScript** con React
- ✅ Applicare **best practices** e ottimizzazioni
- ✅ Costruire un **Task Manager completo** con TypeScript

---

## 🌅 Benvenuti al Giorno 2!

### **Recap veloce Giorno 1:**

- ✅ Componenti funzionali e JSX
- ✅ Props e destructuring
- ✅ useState - gestione stato locale
- ✅ useEffect - side effects
- ✅ Eventi e form controllati
- ✅ Rendering condizionale e liste
- ✅ Demo: Contatore e Todo List

<div class="center">

**Oggi andiamo più in profondità! 🚀**

</div>

---

## 🎣 Hook Avanzati - Panoramica (75 min)

### **Gli Hook principali di React:**

| Hook | Scopo | Quando usarlo |
|---|---|---|
| **useState** | Stato locale semplice | Primitive, oggetti piccoli |
| **useEffect** | Side effects | API, subscriptions, DOM |
| **useReducer** | Stato complesso | Logica complessa, transizioni |
| **useRef** | Riferimenti persistenti | DOM, valori non-render |
| **useCallback** | Memorizza funzioni | Ottimizzazione performance |
| **useMemo** | Memorizza valori | Calcoli costosi |
| **useContext** | Consuma context | Stato globale |
| **Custom Hooks** | Logica riutilizzabile | Astrarre comportamenti |

---

## 🎣 useState Avanzato

### **Con oggetti complessi:**

<div class="ultra-compact">

```jsx
function FormUtente() {
  const [utente, setUtente] = useState({
    nome: '',
    email: '',
    eta: 0,
    indirizzo: {
      via: '',
      citta: ''
    }
  });

  const handleChange = (campo, valore) => {
    setUtente(prev => ({
      ...prev,
      [campo]: valore
    }));
  };

  const handleIndirizzoChange = (campo, valore) => {
    setUtente(prev => ({
      ...prev,
      indirizzo: {
        ...prev.indirizzo,
        [campo]: valore
      }
    }));
  };
}
```

</div>

---

## 🎣 useState: Array State

### **Gestire array nello state:**

```jsx
function ListaTasks() {
  const [tasks, setTasks] = useState([]);

  const aggiungiTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  const rimuoviTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const aggiornaTask = (id, updates) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, ...updates } : t
    ));
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, completato: !t.completato } : t
    ));
  };
}
```

---

## 🔄 useReducer: Quando Usarlo

### **useState vs useReducer:**

<div class="highlight">
useReducer è preferibile quando hai logica di stato complessa con transizioni multiple
</div>

**Quando preferire useReducer:**
- 📊 Stato con **logica complessa**
- 🔄 **Transizioni multiple** di stato
- 🧩 Stato con **sub-valori correlati**
- 🛠️ **Testing** più semplice
- 📝 **Prevedibilità** - tutte le modifiche in un posto

---

## 🔄 useReducer: Anatomia

### **Struttura del reducer:**

<div class="small-code">

```jsx
// 1. Definisci lo stato iniziale
const initialState = {
  loading: false,
  data: null,
  error: null
};

// 2. Definisci il reducer
function dataReducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null };
    
    case 'SUCCESS':
      return { loading: false, data: action.payload, error: null };
    
    case 'ERROR':
      return { loading: false, data: null, error: action.payload };
    
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}
```

</div>

---

## 🔄 useReducer: Utilizzo

### **Nel componente:**

```jsx
function UserProfile({ userId }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SUCCESS', payload: data });
      })
      .catch(err => {
        dispatch({ type: 'ERROR', payload: err.message });
      });
  }, [userId]);

  if (state.loading) return <div>Caricamento...</div>;
  if (state.error) return <div>Errore: {state.error}</div>;
  if (!state.data) return null;

  return <div>{state.data.name}</div>;
}
```

---

## 🔄 useReducer: Todo List Example

<div class="ultra-compact">

```jsx
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completato: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completato: !todo.completato } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completato);
    default:
      return state;
  }
};

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };
}
```

</div>

---

## 🎯 useRef: Riferimenti DOM

### **Accesso diretto agli elementi:**

```jsx
function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const scrollToInput = () => {
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Input con focus"
      />
      <button onClick={focusInput}>Focus</button>
      <button onClick={scrollToInput}>Scroll</button>
    </div>
  );
}
```

---

## 🎯 useRef: Valori Persistenti

### **Mantieni valori senza re-render:**

<div class="small-code">

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
    console.log('Render numero:', renderCountRef.current);
  });

  const startTimer = () => {
    if (intervalRef.current) return; // Già in esecuzione
    
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  return (
    <div>
      <p>Timer: {count}</p>
      <p>Render count: {renderCountRef.current}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
```

</div>

---

## 🔧 Custom Hooks: Introduzione

### **Cosa sono:**

<div class="highlight">
I Custom Hooks permettono di estrarre e riutilizzare logica con stato tra più componenti
</div>

**Regole:**
- Inizia sempre con `use` (es: `useLocalStorage`)
- Può usare altri hooks al suo interno
- Può avere parametri e restituire valori
- Può essere testato indipendentemente

---

## 🔧 Custom Hook: useLocalStorage

<div class="ultra-tiny-code">

```jsx
function useLocalStorage(key, initialValue) {
  // Funzione per leggere dal localStorage
  const readValue = () => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // State con lazy initialization
  const [storedValue, setStoredValue] = useState(readValue);

  // Funzione per salvare nel localStorage
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
```

</div>

---

## 🔧 Custom Hook: Utilizzo

### **Come si usa:**

```jsx
function App() {
  const [nome, setNome] = useLocalStorage('nome', '');
  const [tema, setTema] = useLocalStorage('tema', 'chiaro');
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <div className={`app tema-${tema}`}>
      <input 
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Il tuo nome"
      />
      <p>Ciao, {nome || 'Ospite'}!</p>
      
      <button onClick={() => setTema(t => t === 'chiaro' ? 'scuro' : 'chiaro')}>
        Cambia tema
      </button>
      
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
```

---

## 🔧 Custom Hook: useFetch

<div class="ultra-tiny-code">

```jsx
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
```

</div>

---

## 🔧 Custom Hook: useFetch - Utilizzo

```jsx
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    userId ? `/api/users/${userId}` : null
  );

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error}</div>;
  if (!user) return <div>Nessun utente</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## 🎯 Demo dal Vivo: Custom Hook useLocalStorage (15 min)

### **Costruiamo insieme:**

- Hook che gestisce localStorage automaticamente
- Sincronizzazione bidirezionale (state ↔ localStorage)
- Parsing JSON automatico
- Gestione errori e valori di fallback
- Support SSR (Server-Side Rendering)
- Hook testabile e riutilizzabile

<div class="center">

**🎬 Live Coding Session!**

</div>

---

## 🌐 Context API (45 min)

### **Il problema: Props Drilling**

<div class="small-code">

```jsx
// ❌ Problema: passare user attraverso molti livelli
function App() {
  const [user, setUser] = useState(null);
  return <Header user={user} setUser={setUser} />;
}

function Header({ user, setUser }) {
  return <Navigation user={user} setUser={setUser} />;
}

function Navigation({ user, setUser }) {
  return <UserMenu user={user} setUser={setUser} />;
}

function UserMenu({ user, setUser }) {
  return <div>{user?.nome}</div>;
}
```

</div>

---

## 🌐 Context API: Soluzione

### **Creazione del Context:**

<div class="ultra-compact">

```jsx
// context/UserContext.jsx
import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = { user, login, logout, isAuthenticated: !!user };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Custom hook per consumare il context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve essere usato dentro UserProvider');
  }
  return context;
};
```

</div>

---

## 🌐 Context API: Utilizzo

<div class="two-columns">
<div class="column">

**Provider nell'App:**
```jsx
function App() {
  return (
    <UserProvider>
      <div className="app">
        <Header />
        <Content />
      </div>
    </UserProvider>
  );
}
```

</div>
<div class="column">

**Consumo ovunque:**
```jsx
function UserMenu() {
  const { 
    user, 
    logout, 
    isAuthenticated 
  } = useUser();

  if (!isAuthenticated) {
    return <LoginButton />;
  }

  return (
    <div>
      <p>Ciao, {user.name}!</p>
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}
```

</div>
</div>

---

## 🌐 Context con useReducer

### **Per stato complesso:**

<div class="ultra-tiny-code">

```jsx
// context/TaskContext.jsx
import { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext(null);

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'TOGGLE_TASK':
      return state.map(task => 
        task.id === action.id ? { ...task, completato: !task.completato } : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: task });
  const toggleTask = (id) => dispatch({ type: 'TOGGLE_TASK', id });
  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', id });

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
```

</div>

---

## 🏪 Redux Toolkit (45 min)

### **Cos'è Redux?**

<div class="highlight">
Redux è una libreria per la gestione dello stato globale più strutturata e potente del Context API
</div>

**Quando usare Redux:**
- 📊 Stato **molto complesso** con molte interconnessioni
- 🔄 **Aggiornamenti frequenti** da molte parti dell'app
- 🛠️ **Debug avanzato** con Redux DevTools
- 📈 **App di grandi dimensioni** con team multipli
- ⏱️ **Time-travel debugging** necessario

---

## 🏪 Redux: Concetti Chiave

### **Architettura Redux:**

```
┌─────────────┐
│   Store     │ ← Contenitore unico dello stato
└──────┬──────┘
       │
       ├──> State (dati)
       │
       ├──> Reducers (come cambiano i dati)
       │
       └──> Actions (cosa è successo)
              │
              └──> Dispatch (invia actions)
```

**Flusso unidirezionale:**
1. UI → Dispatch Action
2. Store → Reducer processa action
3. Reducer → Aggiorna state
4. State → UI si re-renderizza

---

## 🏪 Redux Toolkit: Setup

### **Installazione:**

```bash
npm install @reduxjs/toolkit react-redux
```

### **Store setup:**

<div class="small-code">

```jsx
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer,
  },
});
```

</div>

---

## 🏪 Redux Toolkit: Slice

<div class="ultra-compact">

```jsx
// store/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      // Redux Toolkit usa Immer, quindi possiamo "mutare" lo state
      state.push({ id: Date.now(), ...action.payload, completato: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) { task.completato = !task.completato; }
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, updates } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) { Object.assign(task, updates); }
    },
  },
});

export const { addTask, toggleTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
```

</div>

---

## 🏪 Redux: Provider

### **App setup:**

```jsx
// main.jsx
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
```

---

## 🏪 Redux: Utilizzo nei Componenti

<div class="small-code">

```jsx
// components/TaskList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask } from '../store/taskSlice';

function TaskList() {
  // Leggi dallo state
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    dispatch(addTask({ text }));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <button onClick={() => handleAddTask('Nuova task')}>
        Aggiungi
      </button>
      {tasks.map(task => (
        <div key={task.id}>
          <span 
            onClick={() => handleToggle(task.id)}
            style={{ 
              textDecoration: task.completato ? 'line-through' : 'none' 
            }}
          >
            {task.text}
          </span>
          <button onClick={() => handleDelete(task.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
```

</div>

---

## ⚖️ Context API vs Redux

| Aspetto | Context API | Redux Toolkit |
|---|---|---|
| **Setup** | Semplice | Più complesso |
| **Boilerplate** | Minimo | Ridotto (con RTK) |
| **Bundle size** | 0KB (built-in) | ~8KB gzipped |
| **Performance** | Buona per stato semplice | Ottimizzata |
| **DevTools** | Limitate | Redux DevTools |
| **Middleware** | Non supportato | Supportato |
| **Testing** | Più difficile | Più facile |
| **Learning curve** | Bassa | Media |
| **Quando usare** | App piccole/medie | App grandi/complesse |

---

## ⚖️ Quando Usare Cosa?

### **Context API quando:**
- ✅ App piccola o media
- ✅ Stato relativamente semplice
- ✅ Poche parti dell'app aggiornano lo stato
- ✅ Non serve debugging avanzato
- ✅ Team piccolo

### **Redux quando:**
- ✅ App grande e complessa
- ✅ Stato con molte interconnessioni
- ✅ Molte parti aggiornano lo stato frequentemente
- ✅ Serve time-travel debugging
- ✅ Team grande, serve prevedibilità

---

## 🍔 Pausa Pranzo (60 min)

<div class="center">

### **Pausa meritata! 🍕**

**Cosa abbiamo fatto stamattina:**
- ✅ Hook avanzati (useState, useEffect, useReducer, useRef)
- ✅ Custom hooks (useLocalStorage, useFetch)
- ✅ Context API per stato globale
- ✅ Redux Toolkit panoramica

**Nel pomeriggio:**
- 📘 TypeScript con React
- 🚀 Performance e best practices
- 🎯 Demo finale Task Manager TypeScript

**Ci vediamo alle [orario]!**

</div>

---

## 📘 TypeScript con React (75 min)

### **Perché TypeScript?**

<div class="highlight">
TypeScript aggiunge type safety a JavaScript, catturando errori a compile time invece che runtime
</div>

**Vantaggi:**
- 🛡️ **Type Safety** - Previene errori comuni
- 🧠 **IntelliSense** - Autocompletamento migliore
- 🔧 **Refactoring sicuro** - Cambiamenti tracciati
- 📚 **Documentazione** - Tipi come documentazione
- 👥 **Team development** - Contratti chiari

---

## 📘 TypeScript: Setup

### **Nuovo progetto:**

```bash
# Con Vite (raccomandato)
npm create vite@latest my-app -- --template react-ts

# Con Create React App
npx create-react-app my-app --template typescript
```

### **Progetto esistente:**

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

---

## 📘 Props Tipizzate

<div class="small-code">

```tsx
// Definizione interfaccia
interface ProfiloUtenteProps {
  nome: string;
  eta: number;
  email: string;
  attivo?: boolean; // Opzionale
  hobbies: string[];
  avatar?: string;
  onEdit: (id: number) => void;
}

// Componente tipizzato
function ProfiloUtente({ 
  nome, 
  eta, 
  email, 
  attivo = true,
  hobbies,
  avatar,
  onEdit 
}: ProfiloUtenteProps) {
  return (
    <div className="profilo">
      {avatar && <img src={avatar} alt={nome} />}
      <h2>{nome}</h2>
      <p>Età: {eta}</p>
      <p>Email: {email}</p>
      <p>Stato: {attivo ? 'Attivo' : 'Inattivo'}</p>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
      <button onClick={() => onEdit(123)}>Modifica</button>
    </div>
  );
}
```

</div>

---

## 📘 State Tipizzato

<div class="small-code">

```tsx
// Type inference automatico
const [count, setCount] = useState(0); // number

// Type esplicito
const [user, setUser] = useState<User | null>(null);

// Array tipizzato
const [tasks, setTasks] = useState<Task[]>([]);

// Oggetto complesso
interface FormData {
  nome: string;
  email: string;
  eta: number;
  accettaTermini: boolean;
}

const [formData, setFormData] = useState<FormData>({
  nome: '',
  email: '',
  eta: 0,
  accettaTermini: false
});
```

</div>

---

## 📘 Eventi Tipizzati

<div class="small-code">

```tsx
function FormComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // string
    console.log(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked', e.currentTarget);
  };

  const focusInput = () => {
    inputRef.current?.focus(); // Safe navigation
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" onChange={handleChange} />
      <button type="submit" onClick={handleClick}>Invia</button>
      <button type="button" onClick={focusInput}>Focus</button>
    </form>
  );
}
```

</div>

---

## 📘 useRef Tipizzato

```tsx
function VideoPlayer() {
  // Ref per elemento video
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Ref per valore (non DOM)
  const renderCount = useRef<number>(0);

  const play = () => {
    videoRef.current?.play();
  };

  const pause = () => {
    videoRef.current?.pause();
  };

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <video ref={videoRef} src="video.mp4" />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <p>Render: {renderCount.current}</p>
    </div>
  );
}
```

---

## 📘 Context Tipizzato

<div class="ultra-compact">

```tsx
// Definisci i tipi
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// Crea il context con tipo
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => { setUser(userData); };
  const logout = () => { setUser(null); };

  const value: UserContextType = { user, login, logout, isAuthenticated: !!user };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Hook tipizzato
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve essere usato dentro UserProvider');
  }
  return context;
};
```

</div>

---

## 📘 Tipi Utili

<div class="small-code">

```tsx
// Union types
type Status = 'idle' | 'loading' | 'success' | 'error';
type Theme = 'light' | 'dark';

// Type per eventi
type ClickHandler = (e: React.MouseEvent) => void;
type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

// Generics per componenti riutilizzabili
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

// Utilizzo
<List<User>
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
  keyExtractor={(user) => user.id}
/>
```

</div>

---

## 📘 Custom Hook Tipizzato

<div class="ultra-compact">

```tsx
// Hook generico
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(error);
    }
  };

  return [storedValue, setValue] as const;
}

// Utilizzo
const [user, setUser] = useLocalStorage<User | null>('user', null);
const [count, setCount] = useLocalStorage<number>('count', 0);
```

</div>

---

## 🚀 Performance e Best Practices (30 min)

### **React.memo - Evita re-render inutili:**

```tsx
interface ExpensiveProps {
  data: string[];
  filter: string;
}

const ExpensiveComponent = React.memo(({ data, filter }: ExpensiveProps) => {
  console.log('Rendering costoso...');
  
  const filtered = data.filter(item => item.includes(filter));
  
  return (
    <ul>
      {filtered.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
});

// Si re-renderizza solo se data o filter cambiano
```

---

## 🚀 useCallback

### **Memorizza funzioni:**

```tsx
function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState('');

  // ❌ Senza useCallback: nuova funzione ad ogni render
  const handleClickBad = () => {
    console.log('Clicked');
  };

  // ✅ Con useCallback: funzione memorizzata
  const handleClickGood = useCallback(() => {
    console.log('Clicked');
  }, []); // Ricreata solo se cambiano le dipendenze

  return (
    <div>
      <ExpensiveChild onClick={handleClickGood} />
      <button onClick={() => setOtherState('x')}>
        Update other state
      </button>
    </div>
  );
}
```

---

## 🚀 useMemo

### **Memorizza calcoli costosi:**

<div class="small-code">

```tsx
interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
}

function ProductList({ items, filter }: { items: Item[]; filter: string }) {
  // ❌ Senza useMemo: ricalcola ad ogni render
  const filteredItems = items
    .filter(item => item.category === filter)
    .sort((a, b) => b.price - a.price);

  // ✅ Con useMemo: ricalcola solo se cambiano items o filter
  const filteredItemsMemo = useMemo(() => {
    console.log('Calcolo costoso...');
    return items
      .filter(item => item.category === filter)
      .sort((a, b) => b.price - a.price);
  }, [items, filter]);

  return (
    <ul>
      {filteredItemsMemo.map(item => (
        <li key={item.id}>{item.name} - €{item.price}</li>
      ))}
    </ul>
  );
}
```

</div>

---

## 🚀 Best Practices

### **✅ Do:**

- Usa **componenti funzionali** e hooks
- **Destructuring** delle props
- **Key univoche** nei `.map()`
- **useEffect cleanup** per subscriptions
- **TypeScript** per type safety
- **ESLint** e **Prettier** per code quality
- Separa **logica** da **presentazione**
- Mantieni componenti **sotto 300 righe**

### **❌ Don't:**

- Non mutare direttamente lo state
- Non chiamare hooks dentro condizioni/loop
- Non abusare di inline functions
- Non lasciare `console.log` in produzione
- Non creare componenti troppo grandi

---

## 📁 Struttura Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── ui/             # Componenti base (Button, Input)
│   └── layout/         # Header, Footer, Sidebar
├── pages/              # Componenti pagina
├── hooks/              # Custom hooks
├── context/            # Context providers
├── store/              # Redux slices (se usi Redux)
├── services/           # API calls
├── utils/              # Utility functions
├── types/              # TypeScript types/interfaces
├── assets/             # Immagini, fonts
└── styles/             # CSS/SCSS files
```

---

## 🎯 Demo dal Vivo: Task Manager TypeScript (30 min)

### **Applicazione completa con:**

- 📝 TypeScript per type safety
- 🌐 Context API + useReducer
- 💾 Persistenza localStorage
- 🎨 Tema chiaro/scuro
- 📊 Filtri e statistiche
- 🏷️ Categorie e priorità
- ✅ Form validation
- 🎭 Error boundaries

<div class="center">

**🎬 Demo Finale Completa!**

</div>

---

## 📚 Ecosistema React

### **Librerie essenziali:**

| Categoria | Libreria | Uso |
|---|---|---|
| **Routing** | React Router | Navigazione SPA |
| **State** | Redux, Zustand | Stato globale |
| **Forms** | React Hook Form | Gestione form |
| **UI** | Material-UI, Chakra UI | Componenti |
| **Animation** | Framer Motion | Animazioni |
| **Testing** | Testing Library, Vitest | Test |
| **Build** | Vite, Next.js | Build e SSR |
| **Data Fetching** | TanStack Query | Cache e sync |

---

## 🎯 Q&A e Troubleshooting (15 min)

<div class="center">

### **Le vostre domande!**

🤔 **Concetti da chiarire?**
🐛 **Problemi da risolvere?**
💡 **Idee per progetti?**
📚 **Risorse da consigliare?**

**Gli ultimi minuti sono vostri!**

</div>

---

## 🎉 Recap Completo Corso

### **Giorno 1:**
- ✅ Fondamenti React (Componenti, JSX, Props, State)
- ✅ useState e useEffect
- ✅ Eventi e form controllati
- ✅ Rendering condizionale e liste
- ✅ Demo: Contatore e Todo List

### **Giorno 2:**
- ✅ Hook avanzati (useReducer, useRef, custom hooks)
- ✅ Context API e Redux Toolkit
- ✅ TypeScript con React
- ✅ Performance (memo, useCallback, useMemo)
- ✅ Best practices e architettura
- ✅ Demo: Task Manager TypeScript

---

## 🚀 Prossimi Passi

### **Come continuare:**

1. **Pratica** - Costruisci progetti reali
2. **Approfondisci** - React Router, TanStack Query
3. **Esplora** - Next.js per SSR, Remix
4. **Contribuisci** - Open source React
5. **Resta aggiornato** - Blog ufficiale React

### **Progetti consigliati:**
- 🛒 E-commerce con carrello
- 📝 Blog con markdown editor
- 📊 Dashboard con grafici
- 💬 Chat real-time
- 🎮 Gioco interattivo

---

## 📚 Risorse Utili

### **Documentazione:**
- [React Docs](https://react.dev) - Documentazione ufficiale
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org)

### **Community:**
- [React Discord](https://discord.gg/react)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)
- [Reddit r/reactjs](https://reddit.com/r/reactjs)

### **Newsletter/Blog:**
- [React Status](https://react.statuscode.com)
- [This Week In React](https://thisweekinreact.com)

---

## 🤝 Ringraziamenti

<div class="center">

### **Grazie per la partecipazione!**

🎓 **Avete imparato tanto in 14 ore!**
💪 **Siete pronti per costruire app React!**
🚀 **Il viaggio continua...**

📧 **Email:** a.reale@teamsystem.com
🐙 **GitHub:** https://github.com/realealessio/Corso_React_Base

**Happy Coding! 🎉**

</div>

---

<!-- _class: title-slide -->

# Fine Corso
## Continuate a Sperimentare! 🌟

**Il futuro è React! 🚀**
