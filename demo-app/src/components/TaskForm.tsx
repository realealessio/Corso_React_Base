import React, { useState } from 'react'
import { useTasks } from '../contexts/TaskContext'
import { TaskFormProps, TaskPriority, TaskCategory } from '../types/Task'

/**
 * 🎯 COMPONENTE TASK FORM
 * 
 * Concetti mostrati:
 * ✅ Controlled components
 * ✅ useState per form state
 * ✅ Event handling (onChange, onSubmit)
 * ✅ Form validation
 * ✅ Context usage
 * ✅ TypeScript event types
 */

function TaskForm(props: TaskFormProps = {}) {
  const { onSubmit } = props
  const { addTask } = useTasks()
  
  // 🎯 useState per gestire lo stato del form
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as const,
    category: 'work' as const,
    dueDate: ''
  })
  
  // 🎯 Event handler per input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // 🎯 Event handler per form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validazione base
    if (!formData.title.trim()) {
      alert('Il titolo è obbligatorio!')
      return
    }
    
    // Crea il task
    const newTask = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority as TaskPriority,
      category: formData.category as TaskCategory,
      dueDate: formData.dueDate ? new Date(formData.dueDate) : undefined
    }
    
    // Usa il context o la prop onSubmit
    if (onSubmit) {
      onSubmit(newTask)
    } else {
      addTask(newTask)
    }
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      priority: 'medium' as const,
      category: 'work' as const,
      dueDate: ''
    })
  }
  
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label htmlFor="title">
          📝 Titolo *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Es: Completare il progetto React"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">
          📄 Descrizione
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Dettagli del task..."
          rows={3}
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">
            ⚡ Priorità
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
          >
            <option value="low">🟢 Bassa</option>
            <option value="medium">🟡 Media</option>
            <option value="high">🔴 Alta</option>
            <option value="urgent">🚨 Urgente</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="category">
            🏷️ Categoria
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="work">💼 Lavoro</option>
            <option value="personal">🏠 Personale</option>
            <option value="shopping">🛒 Shopping</option>
            <option value="health">🏥 Salute</option>
            <option value="finance">💰 Finanze</option>
            <option value="education">📚 Studio</option>
            <option value="travel">✈️ Viaggio</option>
            <option value="other">📋 Altro</option>
          </select>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="dueDate">
          📅 Scadenza (opzionale)
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleInputChange}
        />
      </div>
      
      <button type="submit" className="submit-btn">
        ➕ Aggiungi Task
      </button>
    </form>
  )
}

export default TaskForm