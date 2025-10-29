import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>🔢 Counter Interattivo</h1>
      <p className="subtitle">Esercizio 1 - useState, props e event handling</p>
      
      <Counter 
        initialValue={0}
        minValue={0}
        maxValue={100}
      />
    </div>
  )
}

export default App
