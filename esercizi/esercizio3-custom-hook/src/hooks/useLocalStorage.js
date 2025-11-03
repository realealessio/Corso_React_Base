import { useState, useEffect } from 'react'

/**
 * Custom Hook: useLocalStorage
 * 
 * Sincronizza automaticamente uno state React con localStorage.
 * Funziona esattamente come useState, ma persiste i dati nel browser.
 * 
 * TODO: Completare l'implementazione seguendo i commenti
 * 
 * @param {string} key - Chiave per localStorage
 * @param {any} initialValue - Valore iniziale se non c'è nulla in localStorage
 * @returns {[any, Function]} - [valore, setter] come useState
 */
export function useLocalStorage(key, initialValue) {
  // TODO 1: Creare una funzione per leggere il valore iniziale
  // Questa funzione verrà chiamata solo la prima volta (lazy initialization)
  const readValue = () => {
    // COMPLETARE:
    // 1. Controlla se siamo nel browser (typeof window !== 'undefined')
    // 2. Prova a recuperare il valore da localStorage.getItem(key)
    // 3. Se esiste, fai il parsing JSON
    // 4. Se non esiste o c'è un errore, usa initialValue
    // 5. Gestisci gli errori con try/catch
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // TODO: Implementa la logica qui
      
      // Suggerimento:
      // const item = window.localStorage.getItem(key)
      // return item ? JSON.parse(item) : initialValue
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
      
    } catch (error) {
      console.warn(`Errore nel leggere localStorage key "${key}":`, error)
      return initialValue
    }
  }

  // TODO 2: Creare lo state usando la funzione readValue
  // Suggerimento: useState può accettare una funzione per lazy initialization
  const [storedValue, setStoredValue] = useState(readValue)

  // TODO 3: Creare una funzione setValue che aggiorna sia lo state che localStorage
  const setValue = (value) => {
    try {
      // COMPLETARE:
      // 1. Gestisci il caso in cui value sia una funzione (come setState)
      // 2. Aggiorna lo state React
      // 3. Salva in localStorage con JSON.stringify
      
      // Suggerimento per gestire funzioni:
      // const valueToStore = value instanceof Function ? value(storedValue) : value
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // TODO: Aggiorna storedValue
      setStoredValue(valueToStore);
      
      // TODO: Salva in localStorage
      // window.localStorage.setItem(key, JSON.stringify(valueToStore))
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      
    } catch (error) {
      console.warn(`Errore nel salvare localStorage key "${key}":`, error)
    }
  }

  // TODO 4 (BONUS): Aggiungi un useEffect per sincronizzare con altre tab/finestre
  // Questo è opzionale ma molto utile!
  useEffect(() => {
    // COMPLETARE (OPZIONALE):
    // Ascolta l'evento 'storage' per sincronizzare cambiamenti da altre tab
    
    // const handleStorageChange = (e) => {
    //   if (e.key === key && e.newValue !== null) {
    //     setStoredValue(JSON.parse(e.newValue))
    //   }
    // }
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== null) {
        setStoredValue(JSON.parse(e.newValue))
      }
    
      // window.addEventListener('storage', handleStorageChange)
      // return () => window.removeEventListener('storage', handleStorageChange)
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, [key])

  // TODO 5: Ritorna l'array [valore, setter] come useState
  return [storedValue, setValue]
}

/* 
  ESEMPIO D'USO:
  
  function MyComponent() {
    const [name, setName] = useLocalStorage('user-name', 'Guest')
    const [count, setCount] = useLocalStorage('counter', 0)
    const [settings, setSettings] = useLocalStorage('settings', { theme: 'dark' })
    
    return (
      <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(c => c + 1)}>{count}</button>
        <button onClick={() => setSettings({ ...settings, theme: 'light' })}>
          Change Theme
        </button>
      </div>
    )
  }
*/
