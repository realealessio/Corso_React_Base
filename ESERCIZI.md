# 🎯 Esercizi Pratici - Corso React Base# 🎯 Esercizi Pratici - Corso React Base



> **Nota Importante**: Questi esercizi sono progettati per essere completati durante il corso seguendo l'agenda. Ogni esercizio corrisponde a una demo dal vivo che il docente sviluppa insieme alla classe.> **Nota Importante**: Questi esercizi sono progettati per essere completati durante il corso seguendo l'agenda. Ogni esercizio corrisponde a una demo dal vivo che il docente sviluppa insieme alla classe.



## 📅 Struttura del Corso (14 ore totali)## 📅 Struttura del Corso (14 ore totali)



### **Giorno 1 (9:00-16:00) - 7 ore**### **Giorno 1 (9:00-16:00) - 7 ore**

- ⚛️ Introduzione a React e setup ambiente (60 min)- ⚛️ Introduzione a React e setup ambiente (60 min)

- 🧩 Componenti, JSX e Props (75 min)- 🧩 Componenti, JSX e Props (75 min)

- 🎯 **Esercizio 1:** Demo Contatore interattivo (15 min) ⬅️ PRIMA DELLA PAUSA- 🎯 **Esercizio 1:** Demo Contatore interattivo (15 min) ⬅️ PRIMA DELLA PAUSA

- 🍔 Pausa pranzo (60 min)- 🍔 Pausa pranzo (60 min)

- 🔄 State, eventi e rendering condizionale (60 min)- 🔄 State, eventi e rendering condizionale (60 min)

- 🎯 **Esercizio 2:** Todo List completa (30 min)- 🎯 **Esercizio 2:** Todo List completa (30 min)

- 💬 Q&A (15 min)- 💬 Q&A (15 min)



### **Giorno 2 (9:00-16:00) - 7 ore**### **Giorno 2 (9:00-16:00) - 7 ore**

- 🎣 Hook Avanzati - Panoramica Completa (useState, useEffect, useReducer, useRef, custom hooks) (75 min)- 🎣 Hook Avanzati - Panoramica Completa (useState, useEffect, useReducer, useRef, custom hooks) (75 min)

- 🎯 **Esercizio 3:** Custom Hook useLocalStorage (15 min) ⬅️ PRIMA DELLA PAUSA- 🎯 **Esercizio 3:** Custom Hook useLocalStorage (15 min) ⬅️ PRIMA DELLA PAUSA

- 🌐 Context API e gestione stato globale (45 min)- 🌐 Context API e gestione stato globale (45 min)

- 🏪 Redux Toolkit - panoramica e confronto (45 min)- 🏪 Redux Toolkit - panoramica e confronto (45 min)

- 🍔 Pausa pranzo (60 min)- 🍔 Pausa pranzo (60 min)

- 📘 TypeScript con React - teoria e pratica (75 min)- 📘 TypeScript con React - teoria e pratica (75 min)

- 🚀 Performance, best practices e ecosistema (30 min)- 🚀 Performance, best practices e ecosistema (30 min)

- 🎯 **Esercizio 4:** Task Manager TypeScript Completo (30 min) ⬅️ DEMO FINALE- 🎯 **Esercizio 4:** Task Manager TypeScript Completo (30 min) ⬅️ DEMO FINALE

- 💬 Q&A e troubleshooting finale (15 min)- 💬 Q&A e troubleshooting finale (15 min)



------



## Esercizio 1: Counter Interattivo (Giorno 1 - Pre-Pausa)## Esercizio 1: Counter Interattivo (Giorno 1 - Pre-Pausa)

**Quando**: Giorno 1, prima della pausa pranzo  **Quando**: Giorno 1, prima della pausa pranzo

**Durata**: 15 minuti  **Durata**: 15 minuti

**Obiettivo**: Padroneggiare useState, props, e event handling**Obiettivo**: Padroneggiare useState, props, e event handling



### 🎯 Cosa costruiremo:### 🎬 Cosa costruiremo insieme:

- Counter con valore iniziale personalizzabile- Counter con valore iniziale personalizzabile

- Bottoni per incremento/decremento con step personalizzato- Bottoni per incremento/decremento con step personalizzato

- Validazione per non andare sotto zero- Validazione per non andare sotto zero

- Indicatore visivo per numeri pari/dispari- Indicatore visivo per numeri pari/dispari

- Reset con conferma- Reset con conferma

- TypeScript typing completo

### 📝 Concetti chiave:

- `useState` per gestire lo stato del counter### 📋 Step della Demo Live:

- Event handlers (`onClick`, `onChange`)

- Rendering condizionale#### Step 1: Setup e Types (5 min)

- Props e validazione```tsx

// types/counter.ts - Definiamo i tipi per il nostro counter

**Cartella**: `/esercizi/esercizio1-counter/`export interface CounterState {

  count: number;          // Valore corrente del counter

---  step: number;           // Incremento/decremento personalizzato

  history: number[];      // Storico dei valori (bonus)

## Esercizio 2: Todo List Completa (Giorno 1 - Post-Pausa)}

**Quando**: Giorno 1, dopo la pausa pranzo  

**Durata**: 30 minuti  // Enum per il tipo di operazione (meglio che stringhe magiche!)

**Obiettivo**: useEffect, gestione liste, rendering condizionaleexport enum CounterOperation {

  INCREMENT = 'increment',

### 🎯 Cosa costruiremo:  DECREMENT = 'decrement',

- Todo list con aggiunta, rimozione, toggle  RESET = 'reset',

- Filtri (Tutti, Attivi, Completati)  SET_STEP = 'set_step'

- Contatore task rimanenti}

- Persistenza in localStorage```

- Validazione input

#### Step 2: Componente Base (5 min)

### 📝 Concetti chiave:```tsx

- `useState` per gestione liste// components/Counter.tsx

- `useEffect` per localStorageimport React, { useState } from 'react';

- Array methods (map, filter)import { CounterState, CounterOperation } from '../types/counter';

- Controlled components

// Props del componente - sempre tipizzate!

**Cartella**: `/esercizi/esercizio2-todolist/`interface CounterProps {

  initialValue?: number;      // Valore iniziale (opzionale, default 0)

---  minValue?: number;          // Valore minimo (opzionale, default 0)

  maxValue?: number;          // Valore massimo (opzionale)

## Esercizio 3: Custom Hook useLocalStorage (Giorno 2 - Pre-Pausa)  onValueChange?: (value: number) => void;  // Callback quando cambia (opzionale)

**Quando**: Giorno 2, prima della pausa pranzo  }

**Durata**: 15 minuti  

**Obiettivo**: Custom hooks, useEffect avanzato, persistenza daticonst Counter: React.FC<CounterProps> = ({

  initialValue = 0,

### 🎯 Cosa costruiremo:  minValue = 0,

- Hook personalizzato per localStorage  maxValue,

- Gestione automatica sincronizzazione  onValueChange

- Parsing JSON automatico}) => {

- Gestione errori  // State tipizzato - TypeScript inferisce il tipo automaticamente

- Hook riutilizzabile  const [count, setCount] = useState<number>(initialValue);

  const [step, setStep] = useState<number>(1);

### 📝 Concetti chiave:  

- Custom hooks pattern  // Funzione helper per determinare se un numero è pari

- `useEffect` cleanup  const isEven = (num: number): boolean => num % 2 === 0;

- Error handling  

- Generic types (bonus TypeScript)  // Funzione per gestire l'incremento con validazione

  const handleIncrement = (): void => {

**Cartella**: `/esercizi/esercizio3-custom-hook/`    const newValue = count + step;

    

---    // Validazione del valore massimo (se presente)

    if (maxValue && newValue > maxValue) {

## Esercizio 4: Task Manager TypeScript Completo (Giorno 2 - Demo Finale)      alert(`Valore massimo raggiunto: ${maxValue}`);

**Quando**: Giorno 2, fine giornata        return;

**Durata**: 30 minuti      }

**Obiettivo**: Integrare tutti i concetti - TypeScript, Hooks, Context, Performance    

    setCount(newValue);

### 🎯 Cosa costruiremo:    onValueChange?.(newValue);  // Chiamata sicura con optional chaining

- Task Manager con Context API  };

- TypeScript typing completo

- Filtri e categorie  // Resto dell'implementazione nel prossimo step...

- Performance ottimizzate};

- Sistema di notifiche

- Tema light/darkexport default Counter;

```

### 📝 Concetti chiave:

- Context API e useContext#### Step 3: Event Handlers Completi (5 min)

- TypeScript interfaces e types```tsx

- `useReducer` per stato complesso  // Continuiamo la implementazione del Counter...

- Performance optimization (memo, callback)  

- Best practices architetturali  // Gestione decremento con validazione minimo

  const handleDecrement = (): void => {

**Cartella**: `/esercizi/esercizio4-task-manager/`    const newValue = count - step;

    

---    // Non permettiamo di andare sotto il minimo

    if (newValue < minValue) {

## 🏃‍♂️ Come Affrontare gli Esercizi:      alert(`Valore minimo raggiunto: ${minValue}`);

      return;

### Per i Partecipanti:    }

    

#### 1. **Setup Workspace**:    setCount(newValue);

```bash    onValueChange?.(newValue);

# Navigare nella cartella dell'esercizio  };

cd esercizi/esercizio1-counter

npm install  // Reset con conferma utente

npm run dev  const handleReset = (): void => {

```    const confirmReset = window.confirm('Sei sicuro di voler resettare il counter?');

    if (confirmReset) {

#### 2. **Approccio Step-by-Step**:      setCount(initialValue);

- 🎯 Leggere tutti i commenti nel codice      onValueChange?.(initialValue);

- 🔧 Completare le parti contrassegnate con `// TODO:`    }

- ✅ Testare ogni funzionalità prima di procedere  };

- 📖 Consultare il file SOLUZIONE.md solo se bloccati

  // Gestione cambio step con validazione

#### 3. **Strategie di Apprendimento**:  const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

- ✨ Sperimentare varianti dopo aver completato    const newStep = parseInt(event.target.value);

- 🤔 Capire il "perché" di ogni scelta    

- ❓ Fare domande al docente    // Validazione: step deve essere positivo

- 🔄 Rifare l'esercizio da zero il giorno dopo    if (isNaN(newStep) || newStep <= 0) {

      alert('Lo step deve essere un numero positivo!');

### Gestione Errori Comuni:      return;

    }

```jsx    

// ❌ Errore: State non si aggiorna    setStep(newStep);

setCount(count + 1) // Potrebbe usare valore stale  };

```

// ✅ Soluzione: Usare funzione di aggiornamento

setCount(prev => prev + 1)#### Step 4: UI e Styling (5 min)

```tsx

// ❌ Errore: useEffect loop infinito  // Return del componente con UI completa

useEffect(() => {  return (

  setData(fetchData())    <div className="counter-container">

}) // Mancano le dipendenze!      {/* Header con valore corrente */}

      <div className="counter-display">

// ✅ Soluzione: Specificare dipendenze        <h2>Counter: {count}</h2>

useEffect(() => {        <p className={`number-type ${isEven(count) ? 'even' : 'odd'}`}>

  setData(fetchData())          {isEven(count) ? '📊 Numero Pari' : '🔢 Numero Dispari'}

}, []) // Array vuoto = solo al mount        </p>

      </div>

// ❌ Errore: Modificare state direttamente

items.push(newItem)      {/* Controlli principali */}

setItems(items)      <div className="counter-controls">

        <button 

// ✅ Soluzione: Creare nuovo array          onClick={handleDecrement}

setItems([...items, newItem])          disabled={count <= minValue}

```          className="btn btn-decrement"

          aria-label={`Decrementa di ${step}`}

---        >

          -{step}

## 📊 Obiettivi di Apprendimento:        </button>

        

### Esercizio 1 - Counter:        <button 

- ✅ useState con primitive types          onClick={handleIncrement}

- ✅ Event handlers e event objects          disabled={maxValue ? count >= maxValue : false}

- ✅ Rendering condizionale (if, ternary)          className="btn btn-increment"

- ✅ Props e default values          aria-label={`Incrementa di ${step}`}

- ✅ Validazione input        >

          +{step}

### Esercizio 2 - Todo List:        </button>

- ✅ useState con array e oggetti      </div>

- ✅ useEffect per side effects

- ✅ LocalStorage integration      {/* Configurazione step */}

- ✅ Array immutability      <div className="step-controls">

- ✅ Controlled forms        <label htmlFor="step-input">Step personalizzato:</label>

        <input

### Esercizio 3 - Custom Hook:          id="step-input"

- ✅ Custom hooks pattern          type="number"

- ✅ useEffect cleanup function          value={step}

- ✅ Error handling e try/catch          onChange={handleStepChange}

- ✅ Hook reusability          min="1"

- ✅ Generic types (TypeScript)          max="100"

          className="step-input"

### Esercizio 4 - Task Manager:        />

- ✅ Context API e useContext      </div>

- ✅ useReducer per stato complesso

- ✅ TypeScript interfaces avanzate      {/* Reset e info */}

- ✅ Performance optimization      <div className="counter-actions">

- ✅ Component composition        <button 

- ✅ Real-world architecture          onClick={handleReset}

          className="btn btn-reset"

---          aria-label="Reset counter"

        >

## 🎯 Metriche di Successo:          🔄 Reset

        </button>

### Per Ogni Esercizio:        

- 🎯 Completamento funzionalità base: **100%**        <small className="counter-info">

- 🎯 Zero errori in console: **Obiettivo**          Range: {minValue} - {maxValue || '∞'}

- 🎯 Codice leggibile e commentato: **Importante**        </small>

- 🎯 Test manuale completo: **Essenziale**      </div>

- 🎯 Bonus features implementate: **Extra**    </div>

  );

---```



## 🚀 Prossimi Passi dopo il Corso:### 🎯 Punti di discussione durante la demo:

1. **Perché TypeScript?** - Errori catch a compile time

1. **Ripetere gli esercizi** da zero senza guardare le soluzioni2. **Interface vs Type** - Quando usare cosa

2. **Aggiungere features** personalizzate agli esercizi3. **Optional chaining (?.)** - Chiamate sicure

3. **Combinare concetti** di più esercizi in un progetto unico4. **Enum vs const assertions** - Pro e contro

4. **Studiare codebase** di progetti open source React5. **Event typing** - React.ChangeEvent vs React.MouseEvent

5. **Costruire un progetto personale** applicando tutto6. **Accessibility** - aria-label, semantic HTML



------



## 📚 Risorse Utili:## Demo 2: Todo List Completa con State Management

**Modalità**: 🎯 **Demo dal Vivo** (Docente + Classe insieme)

- [React Docs Ufficiali](https://react.dev)**Durata**: 25 minuti

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)**Obiettivo**: useEffect, gestione liste, rendering condizionale

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

- [Vite Docs](https://vitejs.dev/)### 🎬 Cosa costruiremo insieme:

- Todo list con aggiunta, rimozione, toggle

---- Filtri (Tutti, Attivi, Completati)

- Contatore task rimanenti

**Buon divertimento con gli esercizi! 🚀**- Persistenza in localStorage

- Validazione input

### 📋 Step della Demo Live:

#### Step 1: Tipi e Interfacce (5 min)
```tsx
// types/todo.ts
export interface Todo {
  id: string;                    // UUID per identificazione univoca
  text: string;                  // Testo del todo
  completed: boolean;            // Stato completamento
  createdAt: Date;              // Data creazione
  completedAt?: Date;           // Data completamento (opzionale)
  priority: 'low' | 'medium' | 'high';  // Priorità
}

export type TodoFilter = 'all' | 'active' | 'completed';

// Oggetto per gestire le statistiche
export interface TodoStats {
  total: number;
  active: number;
  completed: number;
}
```

#### Step 2: Custom Hook per Gestione Todo (8 min)
```tsx
// hooks/useTodos.ts
import { useState, useEffect } from 'react';
import { Todo, TodoFilter, TodoStats } from '../types/todo';

export const useTodos = () => {
  // State principale per i todos
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');

  // Caricamento da localStorage all'avvio
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        // Riconvertiamo le date da stringa a Date object
        const todosWithDates = parsedTodos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          completedAt: todo.completedAt ? new Date(todo.completedAt) : undefined
        }));
        setTodos(todosWithDates);
      } catch (error) {
        console.error('Errore nel caricamento todos:', error);
      }
    }
  }, []);

  // Salvataggio automatico ogni volta che cambiano i todos
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  // Funzione per aggiungere un nuovo todo
  const addTodo = (text: string, priority: Todo['priority'] = 'medium'): void => {
    if (text.trim().length === 0) {
      alert('Il testo del todo non può essere vuoto!');
      return;
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(), // Genera UUID unico
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
      priority
    };

    setTodos(prevTodos => [newTodo, ...prevTodos]); // Aggiungiamo in cima
  };

  // Toggle stato completamento
  const toggleTodo = (id: string): void => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? new Date() : undefined
            }
          : todo
      )
    );
  };

  // Rimozione todo
  const deleteTodo = (id: string): void => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Modifica testo todo
  const editTodo = (id: string, newText: string): void => {
    if (newText.trim().length === 0) {
      deleteTodo(id); // Se vuoto, rimuoviamo
      return;
    }

    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  // Calcolo statistiche
  const getStats = (): TodoStats => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;

    return { total, active, completed };
  };

  // Filtro todos basato sul filtro attivo
  const getFilteredTodos = (): Todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  return {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    getStats,
    getFilteredTodos
  };
};
```

#### Step 3: Componente TodoItem (6 min)
```tsx
// components/TodoItem.tsx
import React, { useState } from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Gestione dell'editing
  const handleEditSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleEditCancel = (): void => {
    setEditText(todo.text); // Ripristina testo originale
    setIsEditing(false);
  };

  // Formattazione data per display
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Determina la classe CSS basata sulla priorità
  const getPriorityClass = (priority: Todo['priority']): string => {
    return `priority-${priority}`;
  };

  if (isEditing) {
    return (
      <li className="todo-item editing">
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
            onBlur={handleEditCancel} // Cancella se perde focus
          />
          <div className="edit-actions">
            <button type="submit" className="btn btn-save">💾</button>
            <button type="button" onClick={handleEditCancel} className="btn btn-cancel">❌</button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${getPriorityClass(todo.priority)}`}>
      <div className="todo-content">
        {/* Checkbox per toggle */}
        <label className="todo-checkbox">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span className="checkmark">✓</span>
        </label>

        {/* Testo del todo */}
        <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>

        {/* Badge priorità */}
        <span className={`priority-badge ${todo.priority}`}>
          {todo.priority.toUpperCase()}
        </span>
      </div>

      {/* Metadati */}
      <div className="todo-metadata">
        <small className="todo-date">
          Creato: {formatDate(todo.createdAt)}
          {todo.completedAt && (
            <> • Completato: {formatDate(todo.completedAt)}</>
          )}
        </small>
      </div>

      {/* Azioni */}
      <div className="todo-actions">
        <button
          onClick={() => setIsEditing(true)}
          className="btn btn-edit"
          aria-label="Modifica todo"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="btn btn-delete"
          aria-label="Elimina todo"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};
```

#### Step 4: Componente Principale TodoList (6 min)
```tsx
// components/TodoList.tsx
import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem } from './TodoItem';
import { TodoFilter, Todo } from '../types/todo';

export const TodoList: React.FC = () => {
  const {
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    getStats,
    getFilteredTodos
  } = useTodos();

  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoPriority, setNewTodoPriority] = useState<Todo['priority']>('medium');

  const stats = getStats();
  const filteredTodos = getFilteredTodos();

  // Gestione submit nuovo todo
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText, newTodoPriority);
      setNewTodoText('');
      setNewTodoPriority('medium');
    }
  };

  return (
    <div className="todo-app">
      {/* Header con statistiche */}
      <header className="todo-header">
        <h1>📝 Todo List TypeScript</h1>
        <div className="todo-stats">
          <span className="stat">
            <strong>Totali:</strong> {stats.total}
          </span>
          <span className="stat">
            <strong>Attivi:</strong> {stats.active}
          </span>
          <span className="stat">
            <strong>Completati:</strong> {stats.completed}
          </span>
        </div>
      </header>

      {/* Form aggiunta nuovo todo */}
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-row">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Aggiungi un nuovo todo..."
            className="todo-input"
            maxLength={100}
          />
          
          <select
            value={newTodoPriority}
            onChange={(e) => setNewTodoPriority(e.target.value as Todo['priority'])}
            className="priority-select"
          >
            <option value="low">🟢 Bassa</option>
            <option value="medium">🟡 Media</option>
            <option value="high">🔴 Alta</option>
          </select>

          <button type="submit" className="btn btn-add">
            ➕ Aggiungi
          </button>
        </div>
      </form>

      {/* Filtri */}
      <div className="todo-filters">
        {(['all', 'active', 'completed'] as TodoFilter[]).map(filterType => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`filter-btn ${filter === filterType ? 'active' : ''}`}
          >
            {filterType === 'all' && '📋 Tutti'}
            {filterType === 'active' && '⏳ Attivi'}
            {filterType === 'completed' && '✅ Completati'}
            {filterType === 'all' && ` (${stats.total})`}
            {filterType === 'active' && ` (${stats.active})`}
            {filterType === 'completed' && ` (${stats.completed})`}
          </button>
        ))}
      </div>

      {/* Lista todos */}
      <div className="todo-list-container">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            <p>
              {filter === 'all' && '🎉 Nessun todo! Sei a posto!'}
              {filter === 'active' && '✨ Nessun todo attivo!'}
              {filter === 'completed' && '📝 Nessun todo completato ancora.'}
            </p>
          </div>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
```

### 🎯 Punti di discussione durante la demo:
1. **Custom Hooks** - Separazione logica dalla UI
2. **LocalStorage** - Persistenza dati lato client
3. **UUID vs numeri** - Identifiers sicuri
4. **Immutabilità** - Spread operator e map()
5. **Type Guards** - Validazione runtime
6. **Accessibility** - aria-label, semantic HTML
7. **Performance** - Quando React re-renderizza

---

## Demo 3: Context API e Gestione Stato Globale
**Modalità**: 🎯 **Demo dal Vivo** (Docente + Classe insieme)
**Durata**: 25 minuti
**Obiettivo**: Context API, Provider pattern, stato globale

### 🎬 Cosa costruiremo insieme:
- Context per tema dell'applicazione (light/dark)
- Context per notifiche globali
- Context per carrello shopping (con persistenza)
- Hook personalizzati per consumare i context
- Pattern Provider composition

### 📋 Step della Demo Live:

#### Step 1: Theme Context con TypeScript (8 min)
```tsx
// contexts/ThemeContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Tipi per il tema
export type Theme = 'light' | 'dark' | 'auto';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
}

// Definizione dei colori per ogni tema
const themes: Record<Theme, ThemeColors> = {
  light: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)'
  },
  dark: {
    primary: '#0d6efd',
    secondary: '#adb5bd',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#adb5bd',
    border: '#343a40',
    shadow: 'rgba(0, 0, 0, 0.3)'
  },
  auto: {
    // Auto rileva dal sistema - per ora uguale a light
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)'
  }
};

// State del tema
interface ThemeState {
  currentTheme: Theme;
  colors: ThemeColors;
  isDark: boolean;
}

// Actions per il reducer
type ThemeAction = 
  | { type: 'SET_THEME'; payload: Theme }
  | { type: 'TOGGLE_THEME' }
  | { type: 'DETECT_SYSTEM_THEME' };

// Reducer per gestire i cambiamenti di tema
const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'SET_THEME':
      const newTheme = action.payload;
      return {
        currentTheme: newTheme,
        colors: themes[newTheme],
        isDark: newTheme === 'dark' || (newTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      };
    
    case 'TOGGLE_THEME':
      const toggledTheme: Theme = state.currentTheme === 'light' ? 'dark' : 'light';
      return {
        currentTheme: toggledTheme,
        colors: themes[toggledTheme],
        isDark: toggledTheme === 'dark'
      };
    
    case 'DETECT_SYSTEM_THEME':
      if (state.currentTheme === 'auto') {
        const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return {
          ...state,
          colors: themes[systemIsDark ? 'dark' : 'light'],
          isDark: systemIsDark
        };
      }
      return state;
    
    default:
      return state;
  }
};

// Context type
interface ThemeContextType {
  theme: ThemeState;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  applyThemeToDocument: () => void;
}

// Creazione del Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider props
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

// Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'light' 
}) => {
  // Inizializzazione stato dal localStorage o default
  const getInitialTheme = (): Theme => {
    const saved = localStorage.getItem('app-theme');
    if (saved && ['light', 'dark', 'auto'].includes(saved)) {
      return saved as Theme;
    }
    return defaultTheme;
  };

  const initialTheme = getInitialTheme();
  const initialState: ThemeState = {
    currentTheme: initialTheme,
    colors: themes[initialTheme],
    isDark: initialTheme === 'dark' || (initialTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  };

  const [theme, dispatch] = useReducer(themeReducer, initialState);

  // Funzioni per manipolare il tema
  const setTheme = (newTheme: Theme): void => {
    dispatch({ type: 'SET_THEME', payload: newTheme });
    localStorage.setItem('app-theme', newTheme);
  };

  const toggleTheme = (): void => {
    dispatch({ type: 'TOGGLE_THEME' });
    const newTheme = theme.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('app-theme', newTheme);
  };

  // Applica il tema al documento (CSS variables)
  const applyThemeToDocument = (): void => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });
    root.setAttribute('data-theme', theme.currentTheme);
  };

  // Effect per applicare il tema quando cambia
  React.useEffect(() => {
    applyThemeToDocument();
  }, [theme]);

  // Listener per cambiamenti del tema di sistema
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme.currentTheme === 'auto') {
        dispatch({ type: 'DETECT_SYSTEM_THEME' });
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme.currentTheme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    applyThemeToDocument
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook per usare il tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve essere usato all\'interno di un ThemeProvider');
  }
  return context;
};
```

#### Step 2: Notification Context (8 min)
```tsx
// contexts/NotificationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipi per le notifiche
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number; // in millisecondi, undefined = non auto-dismiss
  action?: {
    label: string;
    handler: () => void;
  };
}

// Context type
interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

// Context creation
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Provider props
interface NotificationProviderProps {
  children: ReactNode;
  maxNotifications?: number;
}

// Provider component
export const NotificationProvider: React.FC<NotificationProviderProps> = ({ 
  children, 
  maxNotifications = 5 
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Aggiunge una nuova notifica
  const addNotification = (notificationData: Omit<Notification, 'id'>): void => {
    const id = crypto.randomUUID();
    const notification: Notification = {
      id,
      duration: 5000, // Default 5 secondi
      ...notificationData
    };

    setNotifications(prev => {
      // Limitiamo il numero di notifiche
      const newNotifications = [notification, ...prev].slice(0, maxNotifications);
      return newNotifications;
    });

    // Auto-dismiss se ha duration
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
    }
  };

  // Rimuove una notifica specifica
  const removeNotification = (id: string): void => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Pulisce tutte le notifiche
  const clearAllNotifications = (): void => {
    setNotifications([]);
  };

  const value: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
    clearAllNotifications
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook
export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications deve essere usato all\'interno di un NotificationProvider');
  }
  return context;
};

// Hook di convenienza per tipi specifici di notifica
export const useNotificationHelpers = () => {
  const { addNotification } = useNotifications();

  return {
    showSuccess: (title: string, message: string) => 
      addNotification({ type: 'success', title, message }),
    
    showError: (title: string, message: string) => 
      addNotification({ type: 'error', title, message, duration: 8000 }),
    
    showWarning: (title: string, message: string) => 
      addNotification({ type: 'warning', title, message }),
    
    showInfo: (title: string, message: string) => 
      addNotification({ type: 'info', title, message })
  };
};
```

#### Step 3: Shopping Cart Context (9 min)
```tsx
// contexts/ShoppingCartContext.tsx
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// Tipi per il carrello
export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  addedAt: Date;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  isOpen: boolean;
}

// Actions per il reducer
type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity?: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'LOAD_FROM_STORAGE'; payload: CartItem[] };

// Reducer per gestire lo stato del carrello
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.product.id === product.id);

      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        // Prodotto già nel carrello - incrementiamo quantità
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Nuovo prodotto
        const newItem: CartItem = {
          product,
          quantity,
          addedAt: new Date()
        };
        newItems = [...state.items, newItem];
      }

      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.product.id !== action.payload.productId);
      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Se quantità <= 0, rimuoviamo l'item
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { productId } });
      }

      const newItems = state.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      );

      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
        itemCount: 0
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case 'LOAD_FROM_STORAGE':
      return {
        ...state,
        items: action.payload,
        total: calculateTotal(action.payload),
        itemCount: calculateItemCount(action.payload)
      };

    default:
      return state;
  }
};

// Funzioni helper per calcoli
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

// Context type
interface CartContextType {
  cart: CartState;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getItemQuantity: (productId: string) => number;
  isInCart: (productId: string) => boolean;
}

// Context creation
const ShoppingCartContext = createContext<CartContextType | undefined>(undefined);

// Initial state
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false
};

// Provider props
interface ShoppingCartProviderProps {
  children: ReactNode;
}

// Provider component
export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Caricamento dal localStorage all'avvio
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(savedCart);
        // Riconvertiamo le date
        const cartWithDates = parsedCart.map(item => ({
          ...item,
          addedAt: new Date(item.addedAt)
        }));
        dispatch({ type: 'LOAD_FROM_STORAGE', payload: cartWithDates });
      } catch (error) {
        console.error('Errore nel caricamento carrello:', error);
      }
    }
  }, []);

  // Salvataggio automatico quando cambia il carrello
  useEffect(() => {
    if (cart.items.length >= 0) { // Anche carrello vuoto va salvato
      localStorage.setItem('shopping-cart', JSON.stringify(cart.items));
    }
  }, [cart.items]);

  // Funzioni del carrello
  const addToCart = (product: Product, quantity: number = 1): void => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
  };

  const removeFromCart = (productId: string): void => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  };

  const updateQuantity = (productId: string, quantity: number): void => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = (): void => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = (): void => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const getItemQuantity = (productId: string): number => {
    const item = cart.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const isInCart = (productId: string): boolean => {
    return cart.items.some(item => item.product.id === productId);
  };

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    getItemQuantity,
    isInCart
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook
export const useShoppingCart = (): CartContextType => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart deve essere usato all\'interno di un ShoppingCartProvider');
  }
  return context;
};
```

### 🎯 Punti di discussione durante la demo:
1. **Provider Composition** - Come combinare multiple Context
2. **Performance** - Quando i Context causano re-render
3. **Context vs Redux** - Quando usare cosa
4. **LocalStorage** - Persistenza cross-session
5. **Error Boundaries** - Gestione errori nei Provider
6. **TypeScript Generics** - Context tipizzati
7. **Custom Hooks** - Astrazione della logica di business

---

## Demo 4: App E-commerce Completa con TypeScript
**Modalità**: 🎯 **Demo dal Vivo** (Docente + Classe insieme)
**Durata**: 35 minuti
**Obiettivo**: Integrare tutti i concetti - TypeScript, Hooks, Context, Performance

### 🎬 Cosa costruiremo insieme:
- E-commerce completo con catalogo prodotti
- Carrello con Context API tipizzato
- Sistema di notifiche
- Filtri e ricerca prodotti
- Checkout con validazione form
- Tema light/dark
- Performance ottimizzate

### 📋 Step della Demo Live:

#### Step 1: Types e Interfaces Globali (5 min)
```tsx
// types/index.ts - Tutti i tipi dell'applicazione

// Prodotto nel catalogo
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;      // Prezzo originale se in sconto
  image: string;
  category: ProductCategory;
  brand: string;
  rating: number;              // Da 1 a 5
  reviewsCount: number;
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Categorie prodotti
export type ProductCategory = 
  | 'electronics' 
  | 'clothing' 
  | 'home' 
  | 'books' 
  | 'sports' 
  | 'toys';

// Filtri per la ricerca
export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  minRating?: number;
  searchQuery?: string;
  sortBy?: 'name' | 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

// Ordine/checkout
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  customer: CustomerInfo;
  shippingAddress: Address;
  billingAddress?: Address;
  status: OrderStatus;
  createdAt: Date;
  estimatedDelivery: Date;
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled';

// Informazioni cliente
export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// Indirizzo
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Form checkout con validazione
export interface CheckoutFormData {
  customer: CustomerInfo;
  shippingAddress: Address;
  billingAddress?: Address;
  sameAsShipping: boolean;
  paymentMethod: 'card' | 'paypal' | 'bank_transfer';
  cardInfo?: {
    number: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    holderName: string;
  };
  newsletter: boolean;
  terms: boolean;
}

// Stato di validazione per i form
export interface ValidationState<T> {
  data: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isValid: boolean;
  isSubmitting: boolean;
}
```

#### Step 2: Service Layer e Mock Data (8 min)
```tsx
// services/productService.ts
import { Product, ProductCategory, ProductFilters } from '../types';

// Mock products - in una app reale verrebbero da API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    description: 'Potente laptop per professionisti con chip M2 Pro',
    price: 2499,
    originalPrice: 2899,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    category: 'electronics',
    brand: 'Apple',
    rating: 4.8,
    reviewsCount: 1247,
    inStock: true,
    stockQuantity: 15,
    tags: ['laptop', 'professional', 'high-performance'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-10-20')
  },
  {
    id: '2',
    name: 'Nike Air Max 270',
    description: 'Scarpe sportive comode per running e lifestyle',
    price: 149,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'sports',
    brand: 'Nike',
    rating: 4.5,
    reviewsCount: 892,
    inStock: true,
    stockQuantity: 45,
    tags: ['shoes', 'running', 'lifestyle'],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-10-15')
  },
  {
    id: '3',
    name: 'Instant Pot Duo 7-in-1',
    description: 'Pentola a pressione elettrica multifunzione',
    price: 89,
    originalPrice: 129,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
    category: 'home',
    brand: 'Instant Pot',
    rating: 4.7,
    reviewsCount: 2105,
    inStock: false,
    stockQuantity: 0,
    tags: ['kitchen', 'cooking', 'appliance'],
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-10-25')
  },
  // ... altri prodotti mock
];

// Simulazione API con delay
const simulateApiDelay = (ms: number = 800): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Service per gestire i prodotti
export class ProductService {
  // Ottiene tutti i prodotti con filtri opzionali
  static async getProducts(filters?: ProductFilters): Promise<Product[]> {
    await simulateApiDelay();
    
    let filteredProducts = [...mockProducts];

    if (filters) {
      // Filtro per categoria
      if (filters.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filters.category);
      }

      // Filtro per prezzo
      if (filters.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!);
      }
      if (filters.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!);
      }

      // Filtro per stock
      if (filters.inStock !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.inStock === filters.inStock);
      }

      // Filtro per rating minimo
      if (filters.minRating !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.rating >= filters.minRating!);
      }

      // Ricerca testuale
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      // Ordinamento
      if (filters.sortBy) {
        filteredProducts.sort((a, b) => {
          let comparison = 0;
          
          switch (filters.sortBy) {
            case 'name':
              comparison = a.name.localeCompare(b.name);
              break;
            case 'price':
              comparison = a.price - b.price;
              break;
            case 'rating':
              comparison = a.rating - b.rating;
              break;
            case 'newest':
              comparison = b.createdAt.getTime() - a.createdAt.getTime();
              break;
          }

          return filters.sortOrder === 'desc' ? -comparison : comparison;
        });
      }
    }

    return filteredProducts;
  }

  // Ottiene un prodotto per ID
  static async getProductById(id: string): Promise<Product | null> {
    await simulateApiDelay(300);
    return mockProducts.find(p => p.id === id) || null;
  }

  // Ottiene prodotti correlati/suggeriti
  static async getRelatedProducts(productId: string, limit: number = 4): Promise<Product[]> {
    await simulateApiDelay(500);
    
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return [];

    // Prodotti della stessa categoria, escludendo quello corrente
    const related = mockProducts
      .filter(p => p.id !== productId && p.category === product.category)
      .slice(0, limit);

    return related;
  }

  // Simula ricerca con suggerimenti
  static async searchSuggestions(query: string): Promise<string[]> {
    await simulateApiDelay(200);
    
    if (!query || query.length < 2) return [];

    const suggestions = new Set<string>();
    const queryLower = query.toLowerCase();

    mockProducts.forEach(product => {
      // Suggerimenti dai nomi prodotti
      if (product.name.toLowerCase().includes(queryLower)) {
        suggestions.add(product.name);
      }
      
      // Suggerimenti dai tag
      product.tags.forEach(tag => {
        if (tag.toLowerCase().includes(queryLower)) {
          suggestions.add(tag);
        }
      });
    });

    return Array.from(suggestions).slice(0, 8);
  }

  // Ottiene categorie con conteggio prodotti
  static async getCategories(): Promise<Array<{category: ProductCategory, count: number}>> {
    await simulateApiDelay(300);
    
    const categoryCounts = mockProducts.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {} as Record<ProductCategory, number>);

    return Object.entries(categoryCounts).map(([category, count]) => ({
      category: category as ProductCategory,
      count
    }));
  }
}
```

#### Step 3: Custom Hook per Product Management (8 min)
```tsx
// hooks/useProducts.ts
import { useState, useEffect, useCallback } from 'react';
import { Product, ProductFilters } from '../types';
import { ProductService } from '../services/productService';
import { useNotificationHelpers } from '../contexts/NotificationContext';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  filters: ProductFilters;
  updateFilters: (newFilters: Partial<ProductFilters>) => void;
  resetFilters: () => void;
  refetch: () => Promise<void>;
  searchSuggestions: string[];
  isSearching: boolean;
  searchProducts: (query: string) => Promise<void>;
}

const defaultFilters: ProductFilters = {
  sortBy: 'newest',
  sortOrder: 'desc'
};

export const useProducts = (initialFilters: ProductFilters = {}): UseProductsReturn => {
  // State
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ProductFilters>({
    ...defaultFilters,
    ...initialFilters
  });
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Notifications
  const { showError } = useNotificationHelpers();

  // Fetch dei prodotti
  const fetchProducts = useCallback(async (filtersToUse: ProductFilters = filters) => {
    try {
      setLoading(true);
      setError(null);
      
      const fetchedProducts = await ProductService.getProducts(filtersToUse);
      setProducts(fetchedProducts);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento prodotti';
      setError(errorMessage);
      showError('Errore', errorMessage);
      
    } finally {
      setLoading(false);
    }
  }, [filters, showError]);

  // Effect per caricare prodotti quando cambiano i filtri
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Aggiorna filtri
  const updateFilters = useCallback((newFilters: Partial<ProductFilters>) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  }, []);

  // Reset filtri
  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  // Refetch manuale
  const refetch = useCallback(async () => {
    await fetchProducts();
  }, [fetchProducts]);

  // Ricerca con suggerimenti
  const searchProducts = useCallback(async (query: string) => {
    try {
      setIsSearching(true);
      
      // Ottieni suggerimenti se la query è abbastanza lunga
      if (query.length >= 2) {
        const suggestions = await ProductService.searchSuggestions(query);
        setSearchSuggestions(suggestions);
      } else {
        setSearchSuggestions([]);
      }

      // Aggiorna filtri per la ricerca
      updateFilters({ searchQuery: query });
      
    } catch (err) {
      showError('Errore', 'Errore durante la ricerca');
      
    } finally {
      setIsSearching(false);
    }
  }, [updateFilters, showError]);

  return {
    products,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters,
    refetch,
    searchSuggestions,
    isSearching,
    searchProducts
  };
};

// Hook per singolo prodotto
export const useProduct = (productId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const { showError } = useNotificationHelpers();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch prodotto principale e prodotti correlati in parallelo
        const [fetchedProduct, related] = await Promise.all([
          ProductService.getProductById(productId),
          ProductService.getRelatedProducts(productId)
        ]);

        if (!fetchedProduct) {
          throw new Error('Prodotto non trovato');
        }

        setProduct(fetchedProduct);
        setRelatedProducts(related);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Errore nel caricamento prodotto';
        setError(errorMessage);
        showError('Errore', errorMessage);

      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId, showError]);

  return {
    product,
    loading,
    error,
    relatedProducts
  };
};
```

#### Step 4: Componenti UI Principali (14 min)
```tsx
// components/ProductCard.tsx
import React from 'react';
import { Product } from '../types';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { useNotificationHelpers } from '../contexts/NotificationContext';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onViewDetails 
}) => {
  const { addToCart, isInCart, getItemQuantity } = useShoppingCart();
  const { showSuccess } = useNotificationHelpers();
  const { theme } = useTheme();

  // Calcola sconto se presente
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Handler per aggiunta al carrello
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita di triggerare onViewDetails
    
    if (!product.inStock) {
      return;
    }

    addToCart(product);
    showSuccess(
      'Prodotto aggiunto!', 
      `${product.name} è stato aggiunto al carrello`
    );
  };

  // Handler per visualizzazione dettagli
  const handleViewDetails = () => {
    onViewDetails?.(product);
  };

  // Genera stelle per rating
  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < Math.floor(rating) ? 'filled' : ''}`}
      >
        ⭐
      </span>
    ));
  };

  const isItemInCart = isInCart(product.id);
  const itemQuantity = getItemQuantity(product.id);

  return (
    <div 
      className={`product-card ${!product.inStock ? 'out-of-stock' : ''} ${theme.isDark ? 'dark' : ''}`}
      onClick={handleViewDetails}
    >
      {/* Badge sconto */}
      {discountPercentage > 0 && (
        <div className="discount-badge">
          -{discountPercentage}%
        </div>
      )}

      {/* Immagine prodotto */}
      <div className="product-image">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            // Fallback image se non carica
            e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image';
          }}
        />
        
        {/* Overlay per out of stock */}
        {!product.inStock && (
          <div className="stock-overlay">
            <span>Esaurito</span>
          </div>
        )}
      </div>

      {/* Contenuto card */}
      <div className="product-content">
        {/* Brand e categoria */}
        <div className="product-meta">
          <span className="product-brand">{product.brand}</span>
          <span className="product-category">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
        </div>

        {/* Nome prodotto */}
        <h3 className="product-name" title={product.name}>
          {product.name}
        </h3>

        {/* Descrizione troncata */}
        <p className="product-description">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...`
            : product.description
          }
        </p>

        {/* Rating e recensioni */}
        <div className="product-rating">
          <div className="stars">
            {renderStars(product.rating)}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviewsCount} recensioni)
          </span>
        </div>

        {/* Prezzo */}
        <div className="product-pricing">
          <span className="current-price">
            €{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="original-price">
              €{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock info */}
        <div className="stock-info">
          {product.inStock ? (
            <span className="in-stock">
              ✅ {product.stockQuantity} disponibili
            </span>
          ) : (
            <span className="out-of-stock">
              ❌ Non disponibile
            </span>
          )}
        </div>

        {/* Azioni */}
        <div className="product-actions">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`btn btn-primary ${isItemInCart ? 'in-cart' : ''}`}
            aria-label={`Aggiungi ${product.name} al carrello`}
          >
            {isItemInCart ? (
              <>🛒 Nel carrello ({itemQuantity})</>
            ) : (
              <>🛒 Aggiungi al carrello</>
            )}
          </button>

          <button
            onClick={handleViewDetails}
            className="btn btn-secondary"
            aria-label={`Visualizza dettagli ${product.name}`}
          >
            👁️ Dettagli
          </button>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="product-tags">
            {product.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
```

### 🎯 Punti di discussione durante la demo:
1. **TypeScript Avanzato** - Union types, generic constraints, utility types
2. **Service Layer** - Separazione logica business dalla UI
3. **Custom Hooks Complessi** - Gestione stato complesso con hooks
4. **Performance** - React.memo, useMemo, useCallback ottimizzazioni
5. **Error Handling** - Gestione errori a tutti i livelli
6. **Accessibility** - ARIA labels, keyboard navigation
7. **SEO** - Meta tags, structured data, performance
8. **Testing Strategy** - Unit tests, integration tests, E2E

---

## 🏃‍♂️ Come Condurre le Demo Live:

### 🎯 Per il Docente - Metodologia Live Coding:

#### 1. **Preparazione Demo (5 min prima)**:
```tsx
// Checklist pre-demo:
// ✅ VS Code con estensioni TypeScript
// ✅ React Developer Tools installati
// ✅ Progetto base setup (Vite + TypeScript)
// ✅ File structure preparata
// ✅ Snippets pronti per velocizzare coding
// ✅ Browser con DevTools aperti
```

#### 2. **Metodologia Step-by-Step**:
- 🔴 **Spiegare prima di scrivere** - "Ora creeremo un interface per..."
- 🔴 **Scrivere insieme** - "Seguitem passo passo"
- 🔴 **Testare subito** - Ogni step deve funzionare
- 🔴 **Debugging live** - Mostrare errori e come risolverli
- 🔴 **Domande frequenti** - Anticipare dubbi comuni

#### 3. **Gestione della Classe**:
```tsx
// Pattern per coinvolgimento:
🗣️ "Chi mi sa dire che tipo dovremmo usare qui?"
🗣️ "Cosa succede se non mettiamo optional chaining?"
🗣️ "Prevedete errori in questo codice?"
🗣️ "Come ottimizzereste questa funzione?"
```

#### 4. **Trucchi Live Coding**:
- 📝 **Snippets VS Code** per template veloci
- 🧪 **Console.log strategici** per debug live
- 🔧 **Hot reload** sempre attivo
- 📱 **Screen secondario** per documentazione
- 🎯 **Timer visibile** per gestire tempi

### 👥 Per i Partecipanti - Come Seguire Efficacemente:

#### 1. **Setup Workspace**:
```bash
# Preparazione ambiente identico al docente
git clone [repo-corso]
cd corso-react-base
npm install
code . # Aprire in VS Code
npm run dev # Server di sviluppo sempre attivo
```

#### 2. **Strategie di Apprendimento**:
- 🎯 **Non copiare ciecamente** - capire ogni riga
- 🤔 **Predire il prossimo step** - sviluppare intuito
- ❓ **Domande immediate** - non accumolare dubbi
- 🔄 **Sperimentare varianti** - dopo ogni demo
- 📝 **Prendere appunti** su pattern e best practices

#### 3. **Gestione Errori durante Live Coding**:
```tsx
// Errori comuni e soluzioni rapide:
❌ TypeScript errors -> Controllare imports e types
❌ Build errors -> Verificare syntax JSX
❌ Runtime errors -> Console browser per stack trace
❌ State non updates -> Verificare immutabilità
❌ Props not passed -> React DevTools per debug
```

### 🛠️ File Structure per Demo Live:

```
/demo-live
  /01-counter-typescript
    ├── types/
    │   └── counter.ts
    ├── components/
    │   └── Counter.tsx
    ├── hooks/
    │   └── useCounter.ts
    └── styles/
        └── Counter.css
  
  /02-todo-advanced
    ├── types/
    │   └── todo.ts
    ├── components/
    │   ├── TodoList.tsx
    │   ├── TodoItem.tsx
    │   └── TodoForm.tsx
    ├── hooks/
    │   └── useTodos.ts
    └── utils/
        └── todoHelpers.ts
  
  /03-context-global-state
    ├── contexts/
    │   ├── ThemeContext.tsx
    │   ├── NotificationContext.tsx
    │   └── ShoppingCartContext.tsx
    ├── components/
    │   ├── ThemeToggle.tsx
    │   ├── NotificationCenter.tsx
    │   └── CartSidebar.tsx
    └── providers/
        └── AppProviders.tsx
  
  /04-ecommerce-complete
    ├── types/
    │   └── index.ts
    ├── services/
    │   └── productService.ts
    ├── hooks/
    │   ├── useProducts.ts
    │   ├── useCheckout.ts
    │   └── useFormValidation.ts
    ├── components/
    │   ├── ProductCard.tsx
    │   ├── ProductGrid.tsx
    │   ├── SearchBar.tsx
    │   ├── FilterPanel.tsx
    │   └── CheckoutForm.tsx
    └── pages/
        ├── HomePage.tsx
        ├── ProductPage.tsx
        └── CheckoutPage.tsx
```

### 🎯 Obiettivi di Apprendimento per Demo:

#### Demo 1 - Counter TypeScript:
- ✅ **Interface definition** e props typing
- ✅ **Event handlers** tipizzati
- ✅ **useState** con TypeScript
- ✅ **Conditional rendering** e accessibility
- ✅ **CSS modules** e styling componentizzato

#### Demo 2 - Todo List Avanzata:
- ✅ **Custom hooks** per business logic
- ✅ **LocalStorage** integration con TypeScript
- ✅ **Array manipulation** immutabile
- ✅ **Form handling** e validazione
- ✅ **Component composition** e reusabilità

#### Demo 3 - Context API Mastery:
- ✅ **Multiple contexts** e provider composition
- ✅ **useReducer** per stato complesso
- ✅ **Performance optimization** con Context
- ✅ **Custom hooks** per context consumption
- ✅ **Error boundaries** e fallback UI

#### Demo 4 - E-commerce Completo:
- ✅ **Service layer** pattern e API simulation
- ✅ **Advanced TypeScript** (generics, utility types)
- ✅ **Performance optimization** (memo, callback, memo)
- ✅ **Real-world patterns** (loading, error, success states)
- ✅ **Full app architecture** con routing e state management

### 📊 Metriche di Successo:

#### Per i Partecipanti:
- 🎯 **90%+ concetti compresi** durante la demo
- 🎯 **Capacità di replicare** la demo autonomamente
- 🎯 **Varianti creative** post-demo
- 🎯 **Debugging indipendente** degli errori comuni
- 🎯 **Applicazione immediata** ai propri progetti

#### Per il Docente:
- 🎯 **Engagement alto** (domande, partecipazione)
- 🎯 **Ritmo appropriato** (nessuno rimane indietro)
- 🎯 **Concetti chiari** (no confusione al Q&A)
- 🎯 **Pratica immediata** post-demo
- 🎯 **Feedback positivo** su metodologia

### 🚀 Pro Tips per Demo di Successo:

1. **Inizia sempre con il "Perché"** - Motiva ogni scelta tecnica
2. **Codice che funziona sempre** - Test ogni step prima di continuare
3. **Errori come opportunità** - Spiega debugging real-time
4. **Velocità adattiva** - Rallenta sui concetti complessi
5. **Ricap frequenti** - "Cosa abbiamo fatto finora?"
6. **Connessioni esplicite** - "Questo richiama il concetto di..."
7. **Pratica immediata** - "Ora provate voi a..."
8. **Celebrare successi** - Riconoscere progressi dei partecipanti