# 🎯 Soluzione Esercizio 2 - Todo List Completa

## Codice Completo

```jsx
import { useState, useEffect } from 'react'
import './TodoList.css'

function TodoList() {
  // SOLUZIONE 1: State per l'array di todos
  const [todos, setTodos] = useState([])
  
  // SOLUZIONE 2: State per il filtro corrente
  const [filter, setFilter] = useState('all')
  
  // SOLUZIONE 3: State per l'input del nuovo todo
  const [newTodoText, setNewTodoText] = useState('')

  // SOLUZIONE 4: Caricamento dal localStorage al mount
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem('todos')
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos))
      }
    } catch (error) {
      console.error('Errore nel caricamento dei todos:', error)
    }
  }, [])

  // SOLUZIONE 5: Salvataggio nel localStorage quando i todos cambiano
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // SOLUZIONE 6: Aggiungere un nuovo todo
  const handleAddTodo = (e) => {
    e.preventDefault()
    
    const trimmedText = newTodoText.trim()
    
    if (trimmedText === '') {
      alert('Il todo non può essere vuoto!')
      return
    }
    
    const newTodo = {
      id: Date.now(), // o crypto.randomUUID() nei browser moderni
      text: trimmedText,
      completed: false
    }
    
    setTodos([...todos, newTodo])
    setNewTodoText('')
  }

  // SOLUZIONE 7: Toggle completamento
  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo
    ))
  }

  // SOLUZIONE 8: Eliminare un todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // SOLUZIONE 9: Filtrare i todos
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  // SOLUZIONE 10: Contatore task rimanenti
  const remainingCount = todos.filter(todo => !todo.completed).length

  const filteredTodos = getFilteredTodos()

  return (
    <div className="todo-container">
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Cosa devi fare oggi?"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          ➕ Aggiungi
        </button>
      </form>

      <div className="filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Tutti
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Attivi
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completati
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.length === 0 ? (
          <li className="empty-state">
            {filter === 'all' 
              ? '🎉 Nessun task! Aggiungine uno sopra.' 
              : `Nessun task ${filter === 'active' ? 'attivo' : 'completato'}.`}
          </li>
        ) : (
          filteredTodos.map(todo => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-button"
                aria-label="Elimina todo"
              >
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="todo-footer">
        <span className="counter">
          {remainingCount} {remainingCount === 1 ? 'task rimanente' : 'task rimanenti'}
        </span>
      </div>
    </div>
  )
}

export default TodoList
```

## Spiegazione delle Soluzioni

### 1-3. State Management
```jsx
const [todos, setTodos] = useState([])
const [filter, setFilter] = useState('all')
const [newTodoText, setNewTodoText] = useState('')
```
- **todos**: Array di oggetti, ogni todo ha `{ id, text, completed }`
- **filter**: Stringa che indica il filtro corrente ('all', 'active', 'completed')
- **newTodoText**: Stringa dell'input per il nuovo todo

### 4. Caricamento da localStorage (Mount)
```jsx
useEffect(() => {
  try {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  } catch (error) {
    console.error('Errore nel caricamento:', error)
  }
}, [])
```
- **Dipendenze vuote `[]`**: Si esegue solo una volta al mount
- **try/catch**: Gestisce errori di parsing JSON
- **localStorage.getItem()**: Recupera la stringa dal browser
- **JSON.parse()**: Converte stringa JSON in oggetto JavaScript

### 5. Salvataggio in localStorage (Ogni Cambio)
```jsx
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
```
- **Dipendenza `[todos]`**: Si esegue ogni volta che `todos` cambia
- **JSON.stringify()**: Converte l'array in stringa JSON
- **localStorage.setItem()**: Salva nel browser

### 6. Aggiungere Todo
```jsx
const handleAddTodo = (e) => {
  e.preventDefault()
  
  const trimmedText = newTodoText.trim()
  
  if (trimmedText === '') {
    alert('Il todo non può essere vuoto!')
    return
  }
  
  const newTodo = {
    id: Date.now(),
    text: trimmedText,
    completed: false
  }
  
  setTodos([...todos, newTodo])
  setNewTodoText('')
}
```
- **e.preventDefault()**: Previene il refresh della pagina
- **trim()**: Rimuove spazi all'inizio e alla fine
- **Date.now()**: Genera un ID univoco (timestamp)
- **Spread operator `[...todos, newTodo]`**: Crea nuovo array con il todo aggiunto
- **Reset input**: Svuota il campo dopo l'aggiunta

### 7. Toggle Completamento
```jsx
const handleToggleTodo = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id 
      ? { ...todo, completed: !todo.completed } 
      : todo
  ))
}
```
- **map()**: Crea un nuovo array (immutabilità)
- **Ternario**: Se l'id corrisponde, inverte `completed`, altrimenti ritorna il todo invariato
- **Spread `{ ...todo, completed: !todo.completed }`**: Copia il todo e modifica solo `completed`

### 8. Eliminare Todo
```jsx
const handleDeleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}
```
- **filter()**: Crea un nuovo array escludendo l'elemento con l'id specificato
- **Immutabilità**: Non modifichiamo l'array originale

### 9. Filtrare Todos
```jsx
const getFilteredTodos = () => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}
```
- **switch**: Gestisce i 3 casi possibili
- **filter()**: Ritorna solo i todos che soddisfano la condizione
- **!todo.completed**: Negazione per trovare quelli non completati

### 10. Contatore Task Rimanenti
```jsx
const remainingCount = todos.filter(todo => !todo.completed).length
```
- Filtra solo i todos non completati e conta la lunghezza
- Viene ricalcolato ad ogni render (derivato dallo state)

## Concetti Chiave Appresi

✅ **useState con Array**: Gestione liste di oggetti  
✅ **useEffect per Side Effects**: localStorage, API calls  
✅ **Dipendenze di useEffect**: `[]` vs `[todos]`  
✅ **localStorage**: Persistenza dati lato client  
✅ **Array Methods**: map, filter per immutabilità  
✅ **Controlled Components**: Input sincronizzato con state  
✅ **Event Handling**: preventDefault, onChange, onClick  
✅ **Conditional Rendering**: Gestione stato vuoto  
✅ **Key Prop**: Identificatori univoci per liste  

## Possibili Miglioramenti

1. **Edit Mode**: Permettere modifica testo todo esistente
2. **Priority**: Aggiungere livelli di priorità con colori
3. **Date**: Aggiungere data di scadenza e ordinamento
4. **Categories**: Organizzare todos per categorie
5. **Search**: Barra di ricerca per filtrare per testo
6. **Drag & Drop**: Riordinare todos trascinandoli
7. **Bulk Actions**: Selezionare e eliminare/completare multipli
8. **Animation**: Transizioni smooth per add/delete
9. **Error Handling**: Gestione errori più robusta
10. **Custom Hook**: Estrarre logica in `useTodos()`
