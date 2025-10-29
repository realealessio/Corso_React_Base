import { TaskProvider } from './contexts/TaskContext'
import { useTheme } from './contexts/ThemeContext'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import './App.css'

/**
 * 🎯 APP PRINCIPALE DEL CORSO REACT
 * 
 * Questa app dimostra TUTTI i concetti del corso:
 * ✅ Componenti funzionali e composizione
 * ✅ Props e children
 * ✅ useState per stato locale
 * ✅ useEffect per side effects
 * ✅ Context API per stato globale
 * ✅ Custom hooks
 * ✅ Event handling
 * ✅ TypeScript typing
 * ✅ Conditional rendering
 * ✅ Lists e keys
 */

function App() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className={`app ${theme}`}>
      <TaskProvider>
        <div className="container">
          <Header onToggleTheme={toggleTheme} />
          
          <main className="main-content">
            <section className="task-input-section">
              <h2>➕ Aggiungi Nuovo Task</h2>
              <TaskForm />
            </section>
            
            <section className="stats-section">
              <TaskStats />
            </section>
            
            <section className="task-list-section">
              <h2>📋 I Tuoi Tasks</h2>
              <TaskList />
            </section>
          </main>
        </div>
      </TaskProvider>
    </div>
  )
}

export default App