# 🎯 Soluzione Esercizio 1 - Counter Interattivo

## Codice Completo

```jsx
import { useState } from 'react'
import './Counter.css'

function Counter({ initialValue = 0, minValue = 0, maxValue }) {
  // SOLUZIONE 1: State per il valore del counter
  const [count, setCount] = useState(initialValue)
  
  // SOLUZIONE 2: State per lo step
  const [step, setStep] = useState(1)

  // SOLUZIONE 3: Funzione helper per verificare se un numero è pari
  const isEven = (num) => {
    return num % 2 === 0
  }

  // SOLUZIONE 4: Funzione di incremento
  const handleIncrement = () => {
    const newValue = count + step
    
    // Controlla se supera il valore massimo
    if (maxValue !== undefined && newValue > maxValue) {
      alert(`Non puoi superare il valore massimo di ${maxValue}!`)
      return
    }
    
    setCount(newValue)
  }

  // SOLUZIONE 5: Funzione di decremento
  const handleDecrement = () => {
    const newValue = count - step
    
    // Controlla se scende sotto il valore minimo
    if (newValue < minValue) {
      alert(`Non puoi scendere sotto il valore minimo di ${minValue}!`)
      return
    }
    
    setCount(newValue)
  }

  // SOLUZIONE 6: Funzione di reset con conferma
  const handleReset = () => {
    const confirmed = window.confirm('Sei sicuro di voler resettare il counter?')
    
    if (confirmed) {
      setCount(initialValue)
    }
  }

  // SOLUZIONE 7: Gestione cambio step
  const handleStepChange = (event) => {
    const newStep = parseInt(event.target.value)
    
    // Valida che sia un numero valido e maggiore di 0
    if (!isNaN(newStep) && newStep > 0) {
      setStep(newStep)
    }
  }

  return (
    <div className="counter-container">
      {/* Display con classe condizionale per pari/dispari */}
      <div className={`counter-display ${isEven(count) ? 'even' : 'odd'}`}>
        <span className="counter-value">{count}</span>
        <span className="counter-label">
          {isEven(count) ? 'PARI' : 'DISPARI'}
        </span>
      </div>

      {/* Controlli principali */}
      <div className="counter-controls">
        <button 
          onClick={handleDecrement}
          className="btn btn-decrement"
          aria-label="Decrementa"
        >
          -
        </button>
        
        <button 
          onClick={handleIncrement}
          className="btn btn-increment"
          aria-label="Incrementa"
        >
          +
        </button>
      </div>

      {/* Controllo dello step */}
      <div className="step-control">
        <label htmlFor="step-input">
          Step: 
          <input 
            id="step-input"
            type="number" 
            value={step}
            onChange={handleStepChange}
            min="1"
            className="step-input"
          />
        </label>
      </div>

      {/* SOLUZIONE 8: Bottone reset */}
      <button 
        onClick={handleReset}
        className="btn btn-reset"
      >
        🔄 Reset
      </button>

      {/* Informazioni sui limiti */}
      <div className="counter-info">
        <span>Min: {minValue}</span>
        <span>Max: {maxValue || '∞'}</span>
      </div>
    </div>
  )
}

export default Counter
```

## Spiegazione delle Soluzioni

### 1. State del Counter
```jsx
const [count, setCount] = useState(initialValue)
```
- Usiamo `useState` per creare uno state reattivo
- Inizializziamo con `initialValue` ricevuto dalle props
- `count` è il valore corrente, `setCount` è la funzione per aggiornarlo

### 2. State dello Step
```jsx
const [step, setStep] = useState(1)
```
- Permette di personalizzare l'incremento/decremento
- Iniziamo con step=1 come default

### 3. Funzione Helper isEven
```jsx
const isEven = (num) => num % 2 === 0
```
- L'operatore `%` (modulo) restituisce il resto della divisione
- Se `num % 2 === 0`, il numero è pari
- Altrimenti è dispari

### 4-5. Incremento e Decremento con Validazione
```jsx
const newValue = count + step
if (maxValue !== undefined && newValue > maxValue) {
  alert(`Non puoi superare ${maxValue}!`)
  return
}
setCount(newValue)
```
- Calcoliamo il nuovo valore PRIMA di aggiornare lo state
- Controlliamo i limiti min/max
- Mostriamo un alert se la validazione fallisce
- Usiamo `return` per uscire senza aggiornare lo state

### 6. Reset con Conferma
```jsx
const confirmed = window.confirm('Sei sicuro?')
if (confirmed) {
  setCount(initialValue)
}
```
- `window.confirm()` mostra un dialog con OK/Annulla
- Ritorna `true` se l'utente clicca OK
- Reset al valore iniziale solo se confermato

### 7. Gestione Step
```jsx
const newStep = parseInt(event.target.value)
if (!isNaN(newStep) && newStep > 0) {
  setStep(newStep)
}
```
- `parseInt()` converte la stringa in numero
- `isNaN()` verifica che sia un numero valido
- Validiamo che sia maggiore di 0

### 8. Rendering Condizionale
```jsx
className={`counter-display ${isEven(count) ? 'even' : 'odd'}`}
{isEven(count) ? 'PARI' : 'DISPARI'}
```
- Template literals (\` \`) per combinare stringhe e espressioni
- Operatore ternario: `condizione ? vero : falso`
- CSS dinamico in base allo stato

## Concetti Chiave Appresi

✅ **useState**: Gestione stato locale del componente  
✅ **Event Handlers**: onClick, onChange  
✅ **Props**: Passaggio dati ai componenti  
✅ **Validazione**: Controllo input utente  
✅ **Rendering Condizionale**: Mostrare UI diversa in base allo stato  
✅ **Template Literals**: Concatenazione stringhe moderna  
✅ **Operatore Ternario**: if/else inline per JSX  

## Possibili Miglioramenti

1. **Keyboard Support**: Aggiungere controlli da tastiera (frecce su/giù)
2. **Animazioni**: Transizioni smooth sui cambi di valore
3. **History**: Tenere traccia della cronologia dei valori
4. **Persistence**: Salvare il valore in localStorage
5. **Custom Events**: Emettere eventi quando il valore cambia
