# 🎯 Esercizio 3 - Custom Hook useLocalStorage

## Obiettivo
Creare un **Custom Hook** riutilizzabile che sincronizza automaticamente lo state di React con il localStorage del browser. Questo è uno dei pattern più comuni e utili in React!

- ✅ **Custom Hooks** - Riutilizzo logica con stato
- ✅ **localStorage API** - Persistenza dati nel browser
- ✅ **useEffect** - Side effects e cleanup
- ✅ **useState** - Lazy initialization
- ✅ **Error Handling** - Gestione errori robusta

## Setup

```bash
npm install
npm run dev
```

## � File da Modificare

**Il file da completare è:**
```
src/hooks/useLocalStorage.js
```

Apri questo file e completa i 5 TODO seguendo le istruzioni nei commenti.

## �📝 TODO da Completare

### TODO 1: Funzione readValue (Lazy Initialization)

Creare una funzione che legge il valore iniziale da localStorage.

**Requisiti**:
- Controllare se `window` esiste (SSR compatibility)
- Leggere da `localStorage.getItem(key)`
- Parsare il JSON con `JSON.parse()`
- Gestire errori con try/catch
- Ritornare `initialValue` come fallback

```javascript
const readValue = () => {
  // TODO: Implementare qui
  // 1. Check if window exists
  // 2. Try to get and parse item from localStorage
  // 3. Return initialValue if anything goes wrong
};
```

💡 **Concetto**: Lazy initialization migliora le performance eseguendo la funzione solo al primo render.

---

### TODO 2: State con Lazy Initialization

Inizializzare lo state usando la funzione `readValue`.

```javascript
const [storedValue, setStoredValue] = useState(/* TODO: passa readValue */);
```

💡 **Importante**: Passare la **funzione** `readValue`, non `readValue()` (chiamata).

---

### TODO 3: Funzione setValue

Creare una funzione che aggiorna sia lo state React che il localStorage.

**Requisiti**:
- Supportare sia valori diretti che funzioni (come `setState`)
- Aggiornare lo state con `setStoredValue`
- Salvare in localStorage con `localStorage.setItem`
- Serializzare con `JSON.stringify`
- Gestire errori

```javascript
const setValue = (value) => {
  // TODO: Implementare qui
  // 1. Handle both value and function (value instanceof Function)
  // 2. Update React state
  // 3. Save to localStorage
};
```

💡 **Pattern**: `setValue(5)` o `setValue(prev => prev + 1)` - Entrambi devono funzionare!

---

### TODO 4 (BONUS): Sincronizzazione tra Tab

Usare `useEffect` per ascoltare l'evento `storage` e sincronizzare il valore tra diverse tab/finestre.

**Requisiti**:
- Aggiungere event listener per `storage`
- Controllare che `e.key` corrisponda
- Aggiornare lo state quando cambia in altra tab
- Rimuovere listener nel cleanup

```javascript
useEffect(() => {
  // TODO: Implementare qui
  // 1. Create handleStorageChange function
  // 2. Add event listener
  // 3. Return cleanup function
}, [key]);
```

💡 **Test**: Apri l'app in due tab e modifica un valore - dovrebbe aggiornarsi in entrambe!

---

### TODO 5: Return Value

Ritornare l'hook API come array (come useState).

```javascript
return [storedValue, setValue];
```

---

## 🎓 Concetti Chiave

### Custom Hooks
```javascript
// Pattern: funzione che inizia con "use"
function useMyHook(param) {
  // Può usare altri hooks
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, []);
  
  // Ritorna valori/funzioni
  return [state, setState];
}
```

### Lazy Initialization
```javascript
// ❌ Eseguito ad ogni render
useState(expensiveFunction())

// ✅ Eseguito solo al primo render
useState(expensiveFunction)
```

### localStorage API
```javascript
// Salvare
localStorage.setItem('key', JSON.stringify(value));

// Leggere
const value = JSON.parse(localStorage.getItem('key'));

// Rimuovere
localStorage.removeItem('key');
```

### Storage Event
```javascript
// Si attiva quando localStorage cambia in ALTRA tab
window.addEventListener('storage', (e) => {
  console.log('Key changed:', e.key);
  console.log('New value:', e.newValue);
});
```

## 📁 Struttura File

```
esercizio3-custom-hook/
├── src/
│   ├── hooks/
│   │   └── useLocalStorage.js  # TODO: Implementare qui
│   ├── App.jsx                  # Demo dell'hook
│   └── main.jsx
├── README.md                     # Questo file
└── SOLUZIONE.md                  # Soluzione completa
```

## ✅ Come Verificare

### Test Funzionalità Base
1. Inserisci un nome nell'input
2. Ricarica la pagina (F5)
3. ✅ Il nome deve essere ancora presente

### Test Sincronizzazione Tab (Bonus)
1. Apri l'app in due tab
2. Modifica un valore in una tab
3. ✅ Dovrebbe aggiornarsi automaticamente nell'altra tab

### Test DevTools
1. Apri DevTools → Application → Local Storage
2. Modifica i valori
3. ✅ Verifica che siano salvati correttamente

## 💡 Suggerimenti

### Ordine Consigliato
1. **Inizia da TODO 1**: readValue è la base
2. **Poi TODO 2**: Collega readValue a useState
3. **Poi TODO 3**: setValue è il cuore dell'hook
4. **Poi TODO 5**: Return per completare l'API
5. **Infine TODO 4**: Bonus per sincronizzazione tab

### Debug
- Usa `console.log()` per vedere cosa viene salvato/letto
- Controlla localStorage nei DevTools
- Verifica che JSON.parse/stringify funzionino correttamente

### Errori Comuni
- ❌ Chiamare `readValue()` invece di passare `readValue` a useState
- ❌ Dimenticare `JSON.stringify` quando salvi
- ❌ Dimenticare `JSON.parse` quando leggi
- ❌ Non gestire il caso `item === null`

## 🚀 Esempi d'Uso

Una volta completato, il tuo hook funzionerà così:

```javascript
// In qualsiasi componente
function App() {
  // Come useState, ma con persistenza automatica!
  const [name, setName] = useLocalStorage('userName', 'Guest');
  const [count, setCount] = useLocalStorage('counter', 0);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
      
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Theme: {theme}
      </button>
    </div>
  );
}
```

## 🎯 Funzionalità Finali

- ✅ Sincronizzazione automatica React state ↔ localStorage
- ✅ API identica a useState (facile da usare!)
- ✅ Persistenza dati tra sessioni
- ✅ Supporto funzioni di aggiornamento
- ✅ Error handling robusto
- ✅ SSR compatible
- ✅ Sincronizzazione cross-tab (bonus)

## 🌟 Bonus (Opzionale)

Se finisci in anticipo, prova ad aggiungere:

### 1. Funzione removeValue
```javascript
const removeValue = () => {
  localStorage.removeItem(key);
  setStoredValue(initialValue);
};

return [storedValue, setValue, removeValue];
```

### 2. TypeScript Support
```typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  // ... implementation
  return [storedValue, setValue] as const;
}
```

### 3. Serializer Personalizzato
```javascript
function useLocalStorage(key, initialValue, {
  serializer = JSON.stringify,
  deserializer = JSON.parse
} = {}) {
  // Usa serializer/deserializer personalizzati
}
```

## 📚 Riferimenti

- [React Hooks](https://react.dev/reference/react)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Storage Event](https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)

## Tempo Stimato

⏱️ **20-30 minuti**
- TODO 1-3, 5: 15-20 min
- TODO 4 (Bonus): 5-10 min

---

💡 **Nota**: Questo è uno dei custom hooks più utili in React! Lo riutilizzerai in molti progetti reali.

Consulta `SOLUZIONE.md` per il codice completo se hai bisogno di aiuto!
