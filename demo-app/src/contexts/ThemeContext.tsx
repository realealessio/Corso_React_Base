import { createContext, useContext, ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ThemeContextType } from '../types/Task'

/**
 * 🎯 CONTEXT API DEMO - TEMA GLOBALE
 * 
 * Concetti mostrati:
 * ✅ createContext
 * ✅ Provider pattern
 * ✅ useContext hook
 * ✅ Custom hook per Context
 * ✅ TypeScript typing per Context
 */

const ThemeContext = createContext<ThemeContextType | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // 🎯 Uso del custom hook useLocalStorage
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light')
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }
  
  const value: ThemeContextType = {
    theme,
    toggleTheme
  }
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// 🎯 Custom hook per usare il ThemeContext
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  
  if (!context) {
    throw new Error('useTheme deve essere usato dentro un ThemeProvider')
  }
  
  return context
}