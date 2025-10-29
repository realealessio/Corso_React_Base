import { useTheme } from '../contexts/ThemeContext'
import { HeaderProps } from '../types/Task'

/**
 * 🎯 COMPONENTE HEADER
 * 
 * Concetti mostrati:
 * ✅ Props typing
 * ✅ Context usage
 * ✅ Event handling
 * ✅ Conditional rendering
 */

function Header({ onToggleTheme }: HeaderProps) {
  const { theme } = useTheme()
  
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="app-title">
          📝 Task Manager Pro
          <span className="subtitle">Demo Corso React</span>
        </h1>
        
        <div className="header-actions">
          <button 
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label={`Cambia a tema ${theme === 'light' ? 'scuro' : 'chiaro'}`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header