import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Todo List</h1>
        <p className="subtitle">Esercizio 2 - useEffect, localStorage e gestione liste</p>
      </header>
      
      <TodoList />
    </div>
  )
}

export default App
