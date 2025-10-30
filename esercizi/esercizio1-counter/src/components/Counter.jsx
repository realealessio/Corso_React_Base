import { useState } from 'react'
import './Counter.css'

/**
 * Componente Counter Interattivo
 * 
 * TODO: Completare le funzionalità mancanti seguendo i commenti
 * 
 * Funzionalità da implementare:
 * 1. Incremento/decremento del counter
 * 2. Validazione min/max
 * 3. Step personalizzato
 * 4. Indicatore pari/dispari
 * 5. Reset con conferma
 */
function Counter({ initialValue = 0, minValue = 0, maxValue }) {
  // TODO 1: Definire lo state per il valore del counter
  // Suggerimento: usa useState() con initialValue
  const [count, setCount] = useState(initialValue);
  
  // TODO 2: Definire lo state per lo step (incremento/decremento personalizzato)
  // Suggerimento: inizializza con 1
  const [step, setStep] = useState(1)

  // TODO 3: Creare una funzione helper per verificare se un numero è pari
  // Suggerimento: usa l'operatore modulo (%)
  const isEven = (num) => {
    return (num % 2) === 0
  }

  // TODO 4: Implementare la funzione di incremento
  const handleIncrement = () => {
    // COMPLETARE:
    // - Calcola il nuovo valore (count + step)
    // - Controlla se supera maxValue (se definito)
    // - Aggiorna lo state solo se la validazione passa
    // - Se supera maxValue, mostra un alert
    const newValue = count + step;
    if (maxValue != null && newValue > maxValue) {
      alert(`Il valore non può superare il massimo di ${maxValue}.`);
      return;
    }
    return setCount(newValue);
  }

  // TODO 5: Implementare la funzione di decremento
  const handleDecrement = () => {
    // COMPLETARE:
    // - Calcola il nuovo valore (count - step)
    // - Controlla se scende sotto minValue
    // - Aggiorna lo state solo se la validazione passa
    // - Se scende sotto minValue, mostra un alert
    const newValue = count - step;
    if (newValue < minValue) {
      alert(`Il valore non può essere inferiore di ${minValue}`);
      return;
    }
    return setCount(newValue);
  }

  // TODO 6: Implementare la funzione di reset
  const handleReset = () => {
    // COMPLETARE:
    // - Chiedi conferma all'utente usando window.confirm()
    // - Se confermato, reimposta count a initialValue
    const mustContinue = window.confirm('Vuoi resettare il contatore?');
    if (mustContinue) {
      setCount(initialValue);
    }
  }

  // TODO 7: Implementare la gestione del cambio step
  const handleStepChange = (event) => {
    // COMPLETARE:
    // - Estrai il valore dall'input (event.target.value)
    // - Convertilo in numero con parseInt()
    // - Valida che sia un numero valido e maggiore di 0
    // - Aggiorna lo state dello step
    if (event && event.target) {
      const value = event.target.value;
      if (!isNaN(value)) {
        const convertedValue = parseInt(value);
        if (convertedValue > 0) {
          setStep(convertedValue);
        }
      }
    }
  }

  return (
    <div className="counter-container">
      {/* Display principale del counter */}
      {/* TODO: aggiungi classe 'even' se è pari, 'odd' se è dispari */}
      <div className={`counter-display ${isEven(count) ? 'even' : 'odd'}`}>
        <span className="counter-value">{count}</span>
        <span className="counter-label">
          {/* TODO: mostra "PARI" se il numero è pari, "DISPARI" altrimenti */}
          NUMERO {isEven(count) ? 'PARI': 'DISPARI'}
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

      {/* TODO 8: Aggiungi un bottone per il reset */}
      {/* Suggerimenti:
        - Usa className="btn btn-reset"
        - onClick deve chiamare handleReset
        - Testo del bottone: "🔄 Reset"
      */}
      <button className='btn btn-reset' onClick={() => handleReset()}>
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
