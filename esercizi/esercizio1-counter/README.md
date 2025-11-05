# 🎯 Esercizio 1 - Counter Interattivo

## Obiettivo
Creare un **componente Counter** interattivo con funzionalità avanzate. Questo è il primo esercizio pratico per familiarizzare con React!

- ✅ **useState** - Gestione stato del componente
- ✅ **Event Handlers** - onClick, onChange
- ✅ **Props** - Passaggio parametri al componente
- ✅ **Validazione** - Controllo limiti min/max
- ✅ **Rendering Condizionale** - Classi CSS dinamiche

## Setup

```bash
npm install
npm run dev
```

## 📂 File da Modificare

**Il file da completare è:**
```
src/components/Counter.jsx
```

Apri questo file e completa gli 8 TODO seguendo le istruzioni nei commenti.

## 📝 TODO da Completare

### TODO 1: State del Counter

Creare lo state per memorizzare il valore corrente del counter.

```javascript
const [count, setCount] = useState(/* COMPLETARE */);
```

💡 **Concetto**: `useState` è l'hook fondamentale di React per gestire lo stato. Accetta un valore iniziale e ritorna un array `[valore, setter]`.

---

### TODO 2: State dello Step

Creare lo state per lo step (valore di incremento/decremento).

```javascript
const [step, setStep] = useState(/* COMPLETARE */);
```

💡 **Suggerimento**: Inizializza con `1` come valore di default.

---

### TODO 3: Funzione Helper isEven

Creare una funzione che verifica se un numero è pari.

```javascript
const isEven = (num) => {
  // COMPLETARE: ritorna true se num è pari, false altrimenti
};
```

💡 **Concetto**: Usa l'operatore modulo `%`. Se `num % 2 === 0`, il numero è pari.

---

### TODO 4: Funzione di Incremento

Implementare la funzione che incrementa il counter.

**Requisiti**:
- Calcolare nuovo valore: `count + step`
- Validare che non superi `maxValue` (se definito)
- Mostrare alert se supera il limite
- Aggiornare lo state solo se valido

```javascript
const handleIncrement = () => {
  // COMPLETARE
};
```

💡 **Pattern**: Calcola prima, valida, poi aggiorna lo state.

---

### TODO 5: Funzione di Decremento

Implementare la funzione che decrementa il counter.

**Requisiti**:
- Calcolare nuovo valore: `count - step`
- Validare che non scenda sotto `minValue`
- Mostrare alert se scende sotto il limite
- Aggiornare lo state solo se valido

```javascript
const handleDecrement = () => {
  // COMPLETARE
};
```

---

### TODO 6: Funzione di Reset

Implementare la funzione che resetta il counter al valore iniziale.

**Requisiti**:
- Chiedere conferma con `window.confirm()`
- Resettare a `initialValue` solo se confermato

```javascript
const handleReset = () => {
  // COMPLETARE
};
```

💡 **API**: `window.confirm()` ritorna `true` se l'utente clicca OK, `false` se clicca Annulla.

---

### TODO 7: Gestione Cambio Step

Implementare la funzione che gestisce il cambio del valore dello step.

**Requisiti**:
- Estrarre valore da `event.target.value`
- Convertire in numero con `parseInt()`
- Validare che sia un numero valido e > 0
- Aggiornare lo state dello step

```javascript
const handleStepChange = (event) => {
  // COMPLETARE
};
```

💡 **Validazione**: Usa `isNaN()` per verificare che sia un numero valido.

---

### TODO 8: Bottone Reset nel JSX

Aggiungere il bottone reset nel componente.

```jsx
{/* TODO: Aggiungi bottone reset */}
```

**Specifiche**:
- `className="btn btn-reset"`
- `onClick={handleReset}`
- Testo: `🔄 Reset`

---

### BONUS: Rendering Condizionale

Aggiungere classi CSS dinamiche e testo condizionale:

```jsx
{/* TODO: aggiungi classe 'even' se pari, 'odd' se dispari */}
<div className="counter-display">
  <span className="counter-value">{count}</span>
  <span className="counter-label">
    {/* TODO: mostra "PARI" o "DISPARI" */}
    NUMERO
  </span>
</div>
```

💡 **Pattern**: Usa template literals e operatore ternario:
```jsx
className={`counter-display ${isEven(count) ? 'even' : 'odd'}`}
{isEven(count) ? 'PARI' : 'DISPARI'}
```

---

## 🎓 Concetti Chiave

### useState Hook
```javascript
const [state, setState] = useState(initialValue);

// Aggiornamento diretto
setState(newValue);

// Aggiornamento con funzione
setState(prevState => prevState + 1);
```

### Event Handlers
```javascript
// onClick
<button onClick={handleClick}>Click</button>

// onChange
<input onChange={(e) => setValue(e.target.value)} />

// onSubmit
<form onSubmit={handleSubmit}>...</form>
```

### Rendering Condizionale
```javascript
// Operatore ternario
{condition ? <ComponentA /> : <ComponentB />}

// Classi condizionali
className={`base ${condition ? 'active' : ''}`}

// && operator
{condition && <Component />}
```

### Props
```javascript
// Passaggio props
<Counter initialValue={10} minValue={0} maxValue={100} />

// Ricezione con destructuring
function Counter({ initialValue, minValue, maxValue }) {
  // ...
}

// Default values
function Counter({ initialValue = 0, minValue = 0, maxValue }) {
  // ...
}
```

## 📁 Struttura File

```
esercizio1-counter/
├── src/
│   ├── components/
│   │   ├── Counter.jsx         # TODO: Implementare qui
│   │   └── Counter.css          # Stili (già pronti)
│   ├── App.jsx                  # Componente principale
│   └── main.jsx
├── README.md                     # Questo file
└── SOLUZIONE.md                  # Soluzione completa
```

## ✅ Come Verificare

### Test Funzionalità Base
- [ ] Cliccando ➕ il counter aumenta
- [ ] Cliccando ➖ il counter diminuisce
- [ ] Il testo mostra "PARI" o "DISPARI" correttamente
- [ ] Il colore cambia in base a pari/dispari

### Test Validazione
- [ ] Non posso scendere sotto minValue (0)
- [ ] Non posso superare maxValue (se impostato)
- [ ] Viene mostrato un alert quando supero i limiti

### Test Step
- [ ] Cambiando lo step, l'incremento/decremento cambia
- [ ] Non posso impostare step < 1
- [ ] Inserendo un valore non valido, lo step non cambia

### Test Reset
- [ ] Cliccando Reset viene chiesta conferma
- [ ] Confermando, il counter torna al valore iniziale
- [ ] Annullando, il counter rimane invariato

## 💡 Suggerimenti

### Ordine Consigliato
1. **Inizia da TODO 1-2**: State del counter e dello step
2. **Poi TODO 3**: Funzione helper isEven (semplice)
3. **Poi TODO 4-5**: Incremento e decremento (simili)
4. **Poi TODO 6-7**: Reset e gestione step
5. **Poi TODO 8**: Bottone reset nel JSX
6. **Infine**: Rendering condizionale (bonus)

### Debug
- Usa `console.log(count)` per vedere il valore corrente
- Controlla nella console del browser eventuali errori
- Verifica che le props siano passate correttamente in App.jsx

### Errori Comuni
- ❌ Dimenticare `e.preventDefault()` nei form
- ❌ Confrontare stringhe invece di numeri
- ❌ Non validare l'input dell'utente
- ❌ Mutare direttamente lo state invece di usare il setter

## 🚀 Esempi d'Uso

Una volta completato, il componente funzionerà così:

```jsx
// In App.jsx
function App() {
  return (
    <div>
      <h1>Counter Semplice</h1>
      <Counter initialValue={0} minValue={0} maxValue={10} />
      
      <h1>Counter da -100 a 100</h1>
      <Counter initialValue={0} minValue={-100} maxValue={100} />
      
      <h1>Counter senza limiti superiori</h1>
      <Counter initialValue={0} minValue={0} />
    </div>
  );
}
```

## 🎯 Funzionalità Finali

- ✅ Incremento/decremento con pulsanti
- ✅ Step personalizzato
- ✅ Validazione min/max
- ✅ Reset con conferma
- ✅ Indicatore pari/dispari
- ✅ Stile dinamico basato su stato
- ✅ Accessibilità (aria-label)

## 🌟 Bonus (Opzionale)

Se finisci in anticipo, prova ad aggiungere:

### 1. Controlli da Tastiera
```javascript
useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') handleIncrement();
    if (e.key === 'ArrowDown') handleDecrement();
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [count, step]);
```

### 2. Animazioni
Aggiungi transizioni CSS per cambiamenti di valore smooth.

### 3. Cronologia
Tieni traccia degli ultimi 10 valori in un array.

### 4. Persistenza
Salva il valore corrente in localStorage (anticipo esercizio 3!).

## 📚 Riferimenti

- [React useState](https://react.dev/reference/react/useState)
- [Handling Events](https://react.dev/learn/responding-to-events)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Components and Props](https://react.dev/learn/passing-props-to-a-component)

## Tempo Stimato

⏱️ **15-25 minuti**
- TODO 1-3: 5 min
- TODO 4-5: 5 min
- TODO 6-7: 5 min
- TODO 8 + Bonus: 5-10 min

---

💡 **Nota**: Questo è il tuo primo componente React interattivo! Prenditi il tempo necessario per capire bene i concetti.

Consulta `SOLUZIONE.md` per il codice completo se hai bisogno di aiuto!
