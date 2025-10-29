import { useTasks } from '../contexts/TaskContext'

/**
 * 🎯 COMPONENTE TASK STATS
 * 
 * Concetti mostrati:
 * ✅ Computed values da Context
 * ✅ Conditional rendering
 * ✅ Number formatting
 * ✅ CSS Grid/Flexbox layout
 */

function TaskStats() {
  const { getStats } = useTasks()
  const stats = getStats()
  
  // 🎯 Computed values
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0
  
  return (
    <div className="task-stats">
      <h3>📊 Statistiche</h3>
      
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Totali</div>
          </div>
        </div>
        
        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-number">{stats.completed}</div>
            <div className="stat-label">Completati</div>
          </div>
        </div>
        
        <div className="stat-card pending">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <div className="stat-number">{stats.pending}</div>
            <div className="stat-label">Da fare</div>
          </div>
        </div>
        
        <div className="stat-card high-priority">
          <div className="stat-icon">🔴</div>
          <div className="stat-content">
            <div className="stat-number">{stats.high_priority}</div>
            <div className="stat-label">Alta priorità</div>
          </div>
        </div>
      </div>
      
      {/* 🎯 Progress bar */}
      {stats.total > 0 && (
        <div className="progress-section">
          <div className="progress-header">
            <span>Progresso completamento</span>
            <span className="progress-percentage">{completionRate}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
      
      {/* 🎯 Conditional motivational message */}
      <div className="motivation-message">
        {completionRate === 100 && stats.total > 0 && (
          <div className="success-message">
            🎉 Fantastico! Hai completato tutti i task!
          </div>
        )}
        {completionRate >= 75 && completionRate < 100 && (
          <div className="good-progress">
            💪 Ottimo lavoro! Sei quasi alla fine!
          </div>
        )}
        {completionRate >= 50 && completionRate < 75 && (
          <div className="medium-progress">
            👍 Buon progresso! Continua così!
          </div>
        )}
        {completionRate < 50 && stats.total > 0 && (
          <div className="start-message">
            🚀 Inizia a completare i tuoi task!
          </div>
        )}
        {stats.total === 0 && (
          <div className="empty-message">
            📝 Aggiungi il tuo primo task per iniziare!
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskStats