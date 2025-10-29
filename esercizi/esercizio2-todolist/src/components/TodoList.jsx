import { useState, useEffect } from 'react'
import './TodoList.css'

/**
 * Componente TodoList Completa
 * 
 * TODO: Completare le funzionalità mancanti seguendo i commenti
 * 
 * Funzionalità da implementare:
 * 1. Aggiungere nuovi todo
 * 2. Togglere completamento
 * 3. Eliminare todo
 * 4. Filtrare (Tutti, Attivi, Completati)
 * 5. Persistenza in localStorage
 * 6. Contatore task rimanenti
 */
function TodoList() {
  // TODO 1: Definire lo state per l'array di todos
  // Suggerimento: ogni todo è un oggetto { id, text, completed }
  const [todos, setTodos] = useState([])
  
  // TODO 2: Definire lo state per il filtro corrente
  // Suggerimento: può essere 'all', 'active', o 'completed'
  const [filter, setFilter] = useState(/* COMPLETARE */)
  
  // TODO 3: Definire lo state per l'input del nuovo todo
  const [newTodoText, setNewTodoText] = useState(/* COMPLETARE */)

  // TODO 4: useEffect per caricare i todos dal localStorage all'avvio
  // Suggerimento: usa localStorage.getItem('todos') e JSON.parse()
  useEffect(() => {
    // COMPLETARE:
    // - Recupera 'todos' dal localStorage
    // - Fai il parsing JSON
    // - Se esistono, aggiorna lo state
    // - Gestisci eventuali errori con try/catch
  }, []) // Array vuoto = esegue solo al mount

  // TODO 5: useEffect per salvare i todos nel localStorage quando cambiano
  useEffect(() => {
    // COMPLETARE:
    // - Salva todos nel localStorage come stringa JSON
    // - Usa localStorage.setItem('todos', JSON.stringify(todos))
  }, [/* COMPLETARE: quale dipendenza? */])

  // TODO 6: Funzione per aggiungere un nuovo todo
  const handleAddTodo = (e) => {
    e.preventDefault()
    
    // COMPLETARE:
    // - Valida che newTodoText non sia vuoto (trim())
    // - Crea un nuovo oggetto todo con:
    //   * id: Date.now() (o crypto.randomUUID() se disponibile)
    //   * text: newTodoText.trim()
    //   * completed: false
    // - Aggiungi il nuovo todo all'array (usando spread operator)
    // - Resetta newTodoText a stringa vuota
  }

  // TODO 7: Funzione per togglere il completamento di un todo
  const handleToggleTodo = (id) => {
    // COMPLETARE:
    // - Usa map() per creare un nuovo array
    // - Trova il todo con l'id corrispondente
    // - Inverti il suo valore 'completed'
    // - Ritorna il nuovo array
    // Esempio: setTodos(todos.map(todo => 
    //   todo.id === id ? { ...todo, completed: !todo.completed } : todo
    // ))
  }

  // TODO 8: Funzione per eliminare un todo
  const handleDeleteTodo = (id) => {
    // COMPLETARE:
    // - Usa filter() per creare un nuovo array senza il todo da eliminare
    // - Aggiorna lo state
  }

  // TODO 9: Funzione per filtrare i todos in base al filtro corrente
  const getFilteredTodos = () => {
    // COMPLETARE:
    // - Se filter === 'all', ritorna tutti i todos
    // - Se filter === 'active', ritorna solo quelli con completed: false
    // - Se filter === 'completed', ritorna solo quelli con completed: true
    // Suggerimento: usa switch o if/else
    
    switch (filter) {
      case 'active':
        // COMPLETARE: filtra solo i todos attivi
      case 'completed':
        // COMPLETARE: filtra solo i todos completati
      default:
        return todos
    }
  }

  // TODO 10: Calcolare il numero di task rimanenti (non completati)
  const remainingCount = 0 // COMPLETARE: usa filter().length

  const filteredTodos = getFilteredTodos()

  return (
    <div className="todo-container">
      {/* Form per aggiungere nuovo todo */}
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

      {/* Filtri */}
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

      {/* Lista dei todos */}
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

      {/* Footer con contatore */}
      <div className="todo-footer">
        <span className="counter">
          {/* TODO 11: Mostra il contatore corretto */}
          {remainingCount} {remainingCount === 1 ? 'task rimanente' : 'task rimanenti'}
        </span>
      </div>
    </div>
  )
}

export default TodoList
