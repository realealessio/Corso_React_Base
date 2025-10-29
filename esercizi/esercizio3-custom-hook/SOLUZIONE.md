# 🎯 Soluzione Esercizio 3 - Custom Hook useLocalStorage

## Codice Completo

```javascript
import { useState, useEffect } from 'react'

/**
 * Custom Hook: useLocalStorage
 * Sincronizza automaticamente uno state React con localStorage
 */
export function useLocalStorage(key, initialValue) {
  // SOLUZIONE 1: Funzione per leggere il valore iniziale
  const readValue = () => {
    // Verifica se siamo nel browser (SSR compatibility)
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      // Recupera il valore da localStorage
      const item = window.localStorage.getItem(key)
      
      // Parsing JSON se esiste, altrimenti usa initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Errore nel leggere localStorage key "${key}":`, error)
      return initialValue
    }
  }

  // SOLUZIONE 2: State con lazy initialization
  const [storedValue, setStoredValue] = useState(readValue)

  // SOLUZIONE 3: Setter che aggiorna sia state che localStorage
  const setValue = (value) => {
    try {
      // Gestisce sia valori diretti che funzioni (come setState)
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value

      // Aggiorna lo state React
      setStoredValue(valueToStore)

      // Salva in localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Errore nel salvare localStorage key "${key}":`, error)
    }
  }

  // SOLUZIONE 4 (BONUS): Sincronizzazione tra tab/finestre
  useEffect(() => {
    const handleStorageChange = (e) => {
      // Aggiorna solo se la chiave corrisponde
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue))
        } catch (error) {
          console.warn('Errore nel sincronizzare storage:', error)
        }
      }
    }

    // Ascolta cambiamenti da altre tab
    window.addEventListener('storage', handleStorageChange)

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [key])

  // SOLUZIONE 5: Ritorna come useState
  return [storedValue, setValue]
}
```

## Spiegazione delle Soluzioni

### 1. Lazy Initialization con readValue()
```javascript
const readValue = () => {
  if (typeof window === 'undefined') {
    return initialValue
  }

  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
    console.warn(`Errore:`, error)
    return initialValue
  }
}
```

**Perché usare una funzione?**
- **Performance**: La funzione viene eseguita solo al primo render
- **SSR Safe**: Controlla che `window` esista (per Next.js, Gatsby, etc.)
- **Error Handling**: Gestisce errori di parsing JSON
- **Fallback**: Usa `initialValue` se qualcosa va storto

### 2. useState con Lazy Initialization
```javascript
const [storedValue, setStoredValue] = useState(readValue)
```

**Importante**:
- Passiamo la **funzione** `readValue`, non `readValue()`
- React chiamerà questa funzione solo al primo render
- Se avessimo scritto `useState(readValue())`, verrebbe chiamata ad ogni render

### 3. setValue - Aggiornamento Intelligente
```javascript
const setValue = (value) => {
  // Gestisce sia valori che funzioni
  const valueToStore = value instanceof Function 
    ? value(storedValue) 
    : value

  setStoredValue(valueToStore)
  window.localStorage.setItem(key, JSON.stringify(valueToStore))
}
```

**Gestione Funzioni**:
```javascript
// Entrambi questi pattern funzionano:
setName('Mario')              // Valore diretto
setCount(prev => prev + 1)    // Funzione di aggiornamento
```

**Perché `value instanceof Function`?**
- Permette di usare l'hook esattamente come `useState`
- Supporta aggiornamenti basati sul valore precedente

### 4. Sincronizzazione Tra Tab (Bonus)
```javascript
useEffect(() => {
  const handleStorageChange = (e) => {
    if (e.key === key && e.newValue !== null) {
      setStoredValue(JSON.parse(e.newValue))
    }
  }

  window.addEventListener('storage', handleStorageChange)
  return () => window.removeEventListener('storage', handleStorageChange)
}, [key])
```

**Come Funziona**:
1. L'evento `storage` si attiva quando un'altra tab modifica localStorage
2. Controlliamo che la `key` corrisponda a quella del nostro hook
3. Aggiorniamo lo state con il nuovo valore
4. **Cleanup**: Rimuoviamo il listener quando il componente unmounts

**Test**:
- Apri l'app in due tab
- Modifica un valore in una tab
- Vedi l'aggiornamento automatico nell'altra!

### 5. Return Value
```javascript
return [storedValue, setValue]
```

**API Identica a useState**:
```javascript
// useState
const [count, setCount] = useState(0)

// useLocalStorage
const [count, setCount] = useLocalStorage('count', 0)
```

## Concetti Chiave Appresi

✅ **Custom Hooks**: Pattern per riutilizzare logica stateful  
✅ **Lazy Initialization**: Ottimizzazione performance  
✅ **Function vs Value**: Gestire entrambi i pattern di aggiornamento  
✅ **localStorage API**: getItem, setItem, removeItem  
✅ **JSON Serialization**: stringify e parse  
✅ **Error Handling**: try/catch per robustezza  
✅ **Storage Event**: Sincronizzazione cross-tab  
✅ **SSR Compatibility**: Controlli typeof window  
✅ **Cleanup Functions**: Rimozione event listeners  

## Pattern Avanzati

### Versione con TypeScript
```typescript
export function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value

      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue) as T)
        } catch (error) {
          console.warn('Error syncing storage:', error)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key])

  return [storedValue, setValue]
}
```

### Aggiungere Funzione di Rimozione
```javascript
export function useLocalStorage(key, initialValue) {
  // ... codice esistente ...

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue, removeValue]
}

// Uso:
const [user, setUser, removeUser] = useLocalStorage('user', null)
```

### Validazione Schema con Zod (Avanzato)
```javascript
import { z } from 'zod'

export function useLocalStorage(key, initialValue, schema) {
  const readValue = () => {
    try {
      const item = window.localStorage.getItem(key)
      if (!item) return initialValue

      const parsed = JSON.parse(item)
      
      // Valida con Zod se fornito uno schema
      if (schema) {
        return schema.parse(parsed)
      }
      
      return parsed
    } catch (error) {
      console.warn('Validation error:', error)
      return initialValue
    }
  }

  // ... resto del codice
}

// Uso con validazione:
const userSchema = z.object({
  name: z.string(),
  age: z.number().min(0)
})

const [user, setUser] = useLocalStorage(
  'user', 
  { name: '', age: 0 },
  userSchema
)
```

## Casi d'Uso Reali

1. **Form State Persistence**: Salva bozze automaticamente
2. **User Preferences**: Tema, lingua, layout
3. **Shopping Cart**: Carrello che persiste tra sessioni
4. **Authentication**: Token di accesso
5. **App Settings**: Configurazioni utente
6. **Recently Viewed**: Cronologia visualizzazioni
7. **Draft Content**: Auto-save di contenuti

## Testing

```javascript
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('should use initial value when no stored value', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-key', 'initial')
    )
    expect(result.current[0]).toBe('initial')
  })

  test('should update localStorage when value changes', () => {
    const { result } = renderHook(() => 
      useLocalStorage('test-key', 'initial')
    )

    act(() => {
      result.current[1]('updated')
    })

    expect(localStorage.getItem('test-key')).toBe('"updated"')
    expect(result.current[0]).toBe('updated')
  })

  test('should handle function updates', () => {
    const { result } = renderHook(() => 
      useLocalStorage('counter', 0)
    )

    act(() => {
      result.current[1](prev => prev + 1)
    })

    expect(result.current[0]).toBe(1)
  })
})
```

## Possibili Miglioramenti

1. **Compression**: Comprimere dati grandi prima di salvare
2. **Encryption**: Criptare dati sensibili
3. **Expiration**: Aggiungere TTL (Time To Live)
4. **Size Limits**: Gestire quota exceeded errors
5. **Migration**: Versioning e migrazioni di schema
6. **Debouncing**: Ritardare scritture per performance
7. **Namespace**: Prefissi automatici per evitare collisioni
