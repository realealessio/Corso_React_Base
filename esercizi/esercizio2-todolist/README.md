# 🎯 Esercizio 2 - Todo List Completa

## Obiettivo
Creare una **Todo List** completa con tutte le funzionalità classiche. Questo esercizio integra i concetti base di React con pattern più avanzati!

- ✅ **useState con Array** - Gestione liste di oggetti
- ✅ **useEffect** - Side effects e ciclo di vita
- ✅ **localStorage** - Persistenza dati
- ✅ **Array Methods** - map, filter per immutabilità
- ✅ **Forms** - Gestione input controllati
- ✅ **Conditional Rendering** - UI dinamica

## Setup

```bash
npm install
npm run dev
```

## 📂 File da Modificare

**Il file da completare è:**
```
src/components/TodoList.jsx
```

Apri questo file e completa gli 11 TODO seguendo le istruzioni nei commenti.

## 📝 TODO da Completare

### TODO 1-3: State Management

Definire i tre state necessari per la todo list.

```javascript
// TODO 1: Array di todos
const [todos, setTodos] = useState([]);

// TODO 2: Filtro corrente ('all', 'active', 'completed')
const [filter, setFilter] = useState(/* COMPLETARE */);

// TODO 3: Testo dell'input per nuovo todo
const [newTodoText, setNewTodoText] = useState(/* COMPLETARE */);
```

💡 **Struttura Todo**: Ogni todo è un oggetto `{ id, text, completed }`

---

### TODO 4: Caricamento da localStorage (Mount)

Usare `useEffect` per caricare i todos salvati all'avvio.

```javascript
useEffect(() => {
  // COMPLETARE:
  // 1. Recupera 'todos' dal localStorage
  // 2. Fai il parsing JSON
  // 3. Se esistono, aggiorna lo state
  // 4. Gestisci errori con try/catch
}, []); // Array vuoto = solo al mount
```

💡 **Concetto**: `useEffect` con dipendenze vuote `[]` si esegue **una sola volta** quando il componente monta.

---

### TODO 5: Salvataggio in localStorage (Ogni Cambio)

Usare `useEffect` per salvare automaticamente quando i todos cambiano.

```javascript
useEffect(() => {
  // COMPLETARE:
  // localStorage.setItem('todos', JSON.stringify(todos))
}, [/* COMPLETARE: quale dipendenza? */]);
```

💡 **Concetto**: `useEffect` con `[todos]` si esegue **ogni volta** che `todos` cambia.

---

### TODO 6: Aggiungere Nuovo Todo

Implementare la funzione per aggiungere un todo.

**Requisiti**:
- Validare che il testo non sia vuoto (usa `trim()`)
- Creare oggetto todo con:
  - `id`: `Date.now()` o `crypto.randomUUID()`
  - `text`: testo trimmed
  - `completed`: `false`
- Aggiungere al array usando spread operator
- Resettare l'input

```javascript
const handleAddTodo = (e) => {
  e.preventDefault();
  // COMPLETARE
};
```

💡 **Pattern Immutabilità**: `setTodos([...todos, newTodo])` crea un nuovo array.

---

### TODO 7: Toggle Completamento

Implementare la funzione che inverte lo stato completed di un todo.

**Requisiti**:
- Usare `map()` per creare nuovo array
- Trovare todo con l'id corrispondente
- Invertire solo `completed` di quel todo
- Tutti gli altri todos rimangono invariati

```javascript
const handleToggleTodo = (id) => {
  // COMPLETARE:
  // setTodos(todos.map(todo => 
  //   todo.id === id 
  //     ? { ...todo, completed: !todo.completed } 
  //     : todo
  // ))
};
```

💡 **Pattern**: `map()` è perfetto per "aggiornare un elemento" in modo immutabile.

---

### TODO 8: Eliminare Todo

Implementare la funzione che rimuove un todo.

**Requisiti**:
- Usare `filter()` per escludere il todo con l'id specificato
- Aggiornare lo state con il nuovo array

```javascript
const handleDeleteTodo = (id) => {
  // COMPLETARE:
  // setTodos(todos.filter(todo => todo.id !== id))
};
```

💡 **Pattern**: `filter()` è perfetto per "rimuovere un elemento" in modo immutabile.

---

### TODO 9: Filtrare Todos

Implementare la funzione che filtra i todos in base al filtro corrente.

**Requisiti**:
- Se `filter === 'all'`: ritorna tutti
- Se `filter === 'active'`: solo non completati
- Se `filter === 'completed'`: solo completati

```javascript
const getFilteredTodos = () => {
  switch (filter) {
    case 'active':
      // COMPLETARE: return todos.filter(...)
    case 'completed':
      // COMPLETARE: return todos.filter(...)
    default:
      return todos;
  }
};
```

---

### TODO 10: Contatore Task Rimanenti

Calcolare quanti task non sono ancora completati.

```javascript
const remainingCount = 0; // COMPLETARE: todos.filter(...).length
```

💡 **Derivazione State**: Questo valore è "derivato" da `todos`, non serve uno state separato!

---

### TODO 11: Mostrare Contatore

Il contatore è già nel JSX, assicurati che `remainingCount` sia corretto!

```jsx
<span className="counter">
  {remainingCount} {remainingCount === 1 ? 'task rimanente' : 'task rimanenti'}
</span>
```

---

## 🎓 Concetti Chiave

### useState con Array di Oggetti
```javascript
const [todos, setTodos] = useState([
  { id: 1, text: 'Primo todo', completed: false },
  { id: 2, text: 'Secondo todo', completed: true }
]);
```

### useEffect - Ciclo di Vita
```javascript
// Solo al mount (componentDidMount)
useEffect(() => {
  console.log('Component mounted');
}, []);

// Ad ogni render
useEffect(() => {
  console.log('Component rendered');
});

// Quando 'count' cambia
useEffect(() => {
  console.log('Count changed:', count);
}, [count]);

// Cleanup (componentWillUnmount)
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  
  return () => {
    clearInterval(timer); // Cleanup
  };
}, []);
```

### localStorage API
```javascript
// Salvare
localStorage.setItem('key', JSON.stringify(data));

// Leggere
const data = JSON.parse(localStorage.getItem('key'));

// Rimuovere
localStorage.removeItem('key');

// Cancellare tutto
localStorage.clear();
```

### Array Immutability Patterns
```javascript
// Aggiungere elemento
setArray([...array, newItem]);
setArray([newItem, ...array]); // All'inizio

// Rimuovere elemento
setArray(array.filter(item => item.id !== idToRemove));

// Aggiornare elemento
setArray(array.map(item => 
  item.id === idToUpdate 
    ? { ...item, property: newValue }
    : item
));

// Ordinare
setArray([...array].sort((a, b) => a.value - b.value));
```

### Controlled Components
```javascript
// Input controllato
<input 
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>

// Checkbox controllato
<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>
```

## 📁 Struttura File

```
esercizio2-todolist/
├── src/
│   ├── components/
│   │   ├── TodoList.jsx        # TODO: Implementare qui
│   │   └── TodoList.css         # Stili (già pronti)
│   ├── App.jsx                  # Componente principale
│   └── main.jsx
├── README.md                     # Questo file
└── SOLUZIONE.md                  # Soluzione completa
```

## ✅ Come Verificare

### Test Funzionalità CRUD
- [ ] Posso aggiungere un nuovo todo
- [ ] Non posso aggiungere todo vuoti
- [ ] Posso marcare un todo come completato
- [ ] Posso eliminare un todo
- [ ] L'input si svuota dopo l'aggiunta

### Test Filtri
- [ ] "Tutti" mostra tutti i todos
- [ ] "Attivi" mostra solo i non completati
- [ ] "Completati" mostra solo i completati
- [ ] Il bottone del filtro attivo è evidenziato

### Test Persistenza
- [ ] Ricaricando la pagina (F5), i todos rimangono
- [ ] I todos sono salvati in localStorage
- [ ] Il filtro selezionato NON persiste (torna a "Tutti")

### Test Contatore
- [ ] Il contatore mostra il numero corretto
- [ ] Cambia quando completo/elimino todos
- [ ] Plurale corretto ("1 task rimanente" vs "2 task rimanenti")

### Test Edge Cases
- [ ] Lista vuota mostra messaggio appropriato
- [ ] Completando tutti i todos, "Attivi" mostra messaggio vuoto
- [ ] Senza todos completati, "Completati" mostra messaggio vuoto

## 💡 Suggerimenti

### Ordine Consigliato
1. **TODO 1-3**: State (fondamentale)
2. **TODO 6**: Aggiungere todo (prima funzionalità visibile)
3. **TODO 7-8**: Toggle e delete (interattività)
4. **TODO 9-10**: Filtri e contatore (completezza)
5. **TODO 4-5**: localStorage (persistenza, alla fine)

### Debug
- **Console DevTools**: Controlla errori JavaScript
- **Application Tab**: Verifica localStorage
- **React DevTools**: Ispeziona state in tempo reale
- `console.log(todos)`: Stampa array per debug

### Errori Comuni
- ❌ Mutare l'array direttamente: `todos.push(newTodo)` ❌
- ✅ Creare nuovo array: `setTodos([...todos, newTodo])` ✅
- ❌ Dimenticare `e.preventDefault()` nel form
- ❌ Non fare parsing JSON dal localStorage
- ❌ Non gestire il caso `item === null` da localStorage

## 🚀 Esempi d'Uso

### Struttura Todo
```javascript
const todo = {
  id: 1699876543210,           // Timestamp univoco
  text: 'Imparare React',       // Descrizione
  completed: false              // Stato completamento
};
```

### Flow Completo
```javascript
// 1. Mount component
useEffect(() => {
  // Carica da localStorage
  const saved = localStorage.getItem('todos');
  if (saved) setTodos(JSON.parse(saved));
}, []);

// 2. Aggiungi todo
const handleAddTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: newTodoText.trim(),
    completed: false
  };
  setTodos([...todos, newTodo]); // Trigger useEffect sotto
};

// 3. Salva automaticamente
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]); // Ogni volta che todos cambia
```

## 🎯 Funzionalità Finali

- ✅ Aggiungere nuovi todos
- ✅ Marcare come completati/non completati
- ✅ Eliminare todos
- ✅ Filtrare per stato (tutti/attivi/completati)
- ✅ Contatore task rimanenti
- ✅ Persistenza automatica in localStorage
- ✅ Validazione input (no todos vuoti)
- ✅ UI responsive con feedback visivo
- ✅ Stato vuoto gestito con messaggi

## 🌟 Bonus (Opzionale)

Se finisci in anticipo, prova ad aggiungere:

### 1. Edit Mode
Permettere modifica del testo di un todo esistente.

```javascript
const [editingId, setEditingId] = useState(null);
const [editText, setEditText] = useState('');

const handleEdit = (id, text) => {
  setEditingId(id);
  setEditText(text);
};

const handleSaveEdit = () => {
  setTodos(todos.map(todo =>
    todo.id === editingId ? { ...todo, text: editText } : todo
  ));
  setEditingId(null);
};
```

### 2. Clear Completed
Bottone per eliminare tutti i todos completati.

```javascript
const handleClearCompleted = () => {
  setTodos(todos.filter(todo => !todo.completed));
};
```

### 3. Select All
Checkbox per completare/decompletare tutti i todos.

```javascript
const allCompleted = todos.length > 0 && todos.every(t => t.completed);

const handleToggleAll = () => {
  setTodos(todos.map(todo => ({ ...todo, completed: !allCompleted })));
};
```

### 4. Priorità con Colori
Aggiungere livelli di priorità (bassa, media, alta).

```javascript
const todo = {
  id: Date.now(),
  text: 'Todo importante',
  completed: false,
  priority: 'high' // 'low', 'medium', 'high'
};
```

### 5. Data di Scadenza
Aggiungere e mostrare date di scadenza.

```javascript
const todo = {
  id: Date.now(),
  text: 'Todo con scadenza',
  completed: false,
  dueDate: new Date('2025-12-31')
};
```

## 📚 Riferimenti

- [React useState](https://react.dev/reference/react/useState)
- [React useEffect](https://react.dev/reference/react/useEffect)
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Forms in React](https://react.dev/learn/reacting-to-input-with-state)

## Tempo Stimato

⏱️ **25-35 minuti**
- TODO 1-3: 5 min (state setup)
- TODO 6: 5 min (add todo)
- TODO 7-8: 8 min (toggle, delete)
- TODO 9-10: 5 min (filters, counter)
- TODO 4-5: 7-12 min (localStorage)

---

💡 **Nota**: Questa è un'applicazione completa con pattern che userai in progetti reali! La persistenza con localStorage è un pattern molto comune.

Consulta `SOLUZIONE.md` per il codice completo se hai bisogno di aiuto!
