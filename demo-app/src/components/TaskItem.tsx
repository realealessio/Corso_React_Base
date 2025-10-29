import { useState } from 'react'
import { useTasks } from '../contexts/TaskContext'
import { Task } from '../types/Task'

/**
 * 🎯 COMPONENTE TASK ITEM
 * 
 * Concetti mostrati:
 * ✅ Props destructuring
 * ✅ Conditional CSS classes
 * ✅ Event handling con parametri
 * ✅ Local state per editing
 * ✅ Date formatting
 * ✅ Component reusability
 */

interface TaskItemProps {
  task: Task
}

function TaskItem({ task }: TaskItemProps) {
  const { toggleTask, deleteTask, updateTask } = useTasks()
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  
  // 🎯 Event handlers
  const handleToggle = () => {
    toggleTask(task.id)
  }
  
  const handleDelete = () => {
    if (window.confirm('Sei sicuro di voler eliminare questo task?')) {
      deleteTask(task.id)
    }
  }
  
  const handleEdit = () => {
    setIsEditing(true)
    setEditTitle(task.title)
  }
  
  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      updateTask(task.id, { title: editTitle.trim() })
      setIsEditing(false)
    }
  }
  
  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditTitle(task.title)
  }
  
  // 🎯 Utility functions
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date)
  }
  
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴'
      case 'medium': return '🟡'
      case 'low': return '🟢'
      default: return '⚪'
    }
  }
  
  const isOverdue = task.dueDate && new Date() > task.dueDate && !task.completed
  
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      {/* 🎯 Task Header */}
      <div className="task-header">
        <button 
          className={`task-toggle ${task.completed ? 'checked' : ''}`}
          onClick={handleToggle}
          aria-label={task.completed ? 'Segna come non completato' : 'Segna come completato'}
        >
          {task.completed ? '✅' : '⬜'}
        </button>
        
        <div className="task-priority">
          {getPriorityIcon(task.priority)}
        </div>
        
        <div className="task-actions">
          <button onClick={handleEdit} title="Modifica">
            ✏️
          </button>
          <button onClick={handleDelete} title="Elimina" className="delete-btn">
            🗑️
          </button>
        </div>
      </div>
      
      {/* 🎯 Task Content */}
      <div className="task-content">
        {isEditing ? (
          // 🎯 Edit mode
          <div className="task-edit">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSaveEdit()
                if (e.key === 'Escape') handleCancelEdit()
              }}
              autoFocus
            />
            <div className="edit-actions">
              <button onClick={handleSaveEdit}>💾</button>
              <button onClick={handleCancelEdit}>❌</button>
            </div>
          </div>
        ) : (
          // 🎯 View mode
          <>
            <h3 className="task-title">{task.title}</h3>
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
          </>
        )}
        
        {/* 🎯 Task Meta */}
        <div className="task-meta">
          <span className="task-category">🏷️ {task.category}</span>
          
          {task.dueDate && (
            <span className={`task-due-date ${isOverdue ? 'overdue' : ''}`}>
              📅 {formatDate(task.dueDate)}
              {isOverdue && ' (Scaduto)'}
            </span>
          )}
          
          <span className="task-created">
            ➕ {formatDate(task.createdAt)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TaskItem