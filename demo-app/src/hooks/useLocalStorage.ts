import { useState, useEffect } from 'react'

/**
 * 🎯 CUSTOM HOOK - useLocalStorage
 * 
 * Concetti mostrati:
 * ✅ Custom hook pattern
 * ✅ Generics in TypeScript
 * ✅ localStorage API
 * ✅ Error handling
 * ✅ useEffect per sincronizzazione
 */

export function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  
  // 🎯 useState con lazy initialization
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Errore nel leggere localStorage key "${key}":`, error)
      return initialValue
    }
  })
  
  // 🎯 Funzione per aggiornare il valore
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      // Supporta sia valori diretti che funzioni updater
      const valueToStore = value instanceof Function ? value(storedValue) : value
      
      setStoredValue(valueToStore)
      
      // Salva in localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.warn(`Errore nel salvare in localStorage key "${key}":`, error)
    }
  }
  
  return [storedValue, setValue]
}

/**
 * 🎯 CUSTOM HOOK - useFetch (bonus)
 * Hook per gestire chiamate API con loading e error states
 */
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore sconosciuto')
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [url])
  
  return { data, loading, error }
}