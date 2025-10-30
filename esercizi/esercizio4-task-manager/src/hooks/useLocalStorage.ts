import { useState, useEffect } from 'react';

/**
 * Custom Hook per sincronizzare state con localStorage
 * Supporta TypeScript generics per type safety
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // State per memorizzare il valore
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Cerca valore esistente in localStorage
      const item = window.localStorage.getItem(key);
      // Parsea il JSON o ritorna initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Wrapper per setValue che sincronizza con localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permette value come funzione (come useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Salva nello state
      setStoredValue(valueToStore);
      
      // Salva in localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
