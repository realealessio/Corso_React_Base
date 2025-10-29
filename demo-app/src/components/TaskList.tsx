import { useState } from 'react'
import { useTasks } from '../contexts/TaskContext'
import { Task } from '../types/Task'
import TaskItem from './TaskItem'

/**
 * 🎯 COMPONENTE TASK LIST
 * 
 * Concetti mostrati:
 * ✅ Rendering liste
 * ✅ Keys in React
 * ✅ Conditional rendering
 * ✅ Filter state
 * ✅ Component composition
 * ✅ Props drilling vs Context
 */

function TaskList() {
  const { tasks } = useTasks()
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all')
  
  // 🎯 Filtro i task in base alla selezione
  const filteredTasks = filter === 'all' 
    ? tasks 
    : filter === 'completed'
    ? tasks.filter(t => t.completed)
    : tasks.filter(t => !t.completed)
  
  // 🎯 Event handler per cambio filtro
  const handleFilterChange = (newFilter: 'all' | 'completed' | 'pending') => {
    setFilter(newFilter)
  }
  
  return (
    <div className="task-list">
      {/* 🎯 Filtri */}
      <div className="task-filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => handleFilterChange('all')}
        >
          📋 Tutti ({tasks.length})
        </button>
        <button 
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => handleFilterChange('pending')}
        >
          ⏳ Da fare ({tasks.filter(t => !t.completed).length})
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => handleFilterChange('completed')}
        >
          ✅ Completati ({tasks.filter(t => t.completed).length})
        </button>
      </div>
      
      {/* 🎯 Conditional rendering */}
      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          {filter === 'all' && '📝 Nessun task ancora. Inizia aggiungendone uno!'}
          {filter === 'pending' && '🎉 Tutti i task sono completati!'}
          {filter === 'completed' && '⏳ Nessun task completato ancora.'}
        </div>
      ) : (
        <div className="task-grid">
          {/* 🎯 Rendering lista con map() e key */}
          {filteredTasks.map((task: Task) => (
            <TaskItem 
              key={task.id}
              task={task}
            />
          ))}
        </div>
      )}
      
      {/* 🎯 Info aggiuntive */}
      <div className="task-list-footer">
        <small>
          Mostrando {filteredTasks.length} di {tasks.length} task
        </small>
      </div>
    </div>
  )
}

export default TaskList