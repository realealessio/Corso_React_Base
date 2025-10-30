import { useState, FormEvent } from 'react';
import { useTasks } from '../contexts/TaskContext';
import { TaskStatus } from '../types';

export function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!title.trim()) return;

    addTask({
      title: title.trim(),
      description: description.trim(),
      status: TaskStatus.TODO
    });

    // Reset form
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>➕ Nuova Task</h2>
      
      <div className="form-group">
        <label htmlFor="title">Titolo *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Inserisci titolo task..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descrizione</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrizione opzionale..."
          rows={3}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Aggiungi Task
      </button>
    </form>
  );
}
