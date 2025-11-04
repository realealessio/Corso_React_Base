import { memo } from 'react';
import { Task } from '../types';
import { useTasks } from '../contexts/TaskContext';

interface TaskItemProps {
  task: Task;
}

// TODO 11: Avvolgere il componente con React.memo per ottimizzare le performance
// Il componente si re-renderizza solo quando le props cambiano
export const TaskItem = memo(({ task }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`Completa task: ${task.title}`}
        />

        <div className="task-details">
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <div className="task-meta">
            <span className={`status-badge ${task.status}`}>
              {task.status}
            </span>
            <span className="task-date">
              Creata: {new Date(task.createdAt).toLocaleDateString('it-IT')}
            </span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-danger btn-sm"
          aria-label={`Elimina task: ${task.title}`}
        >
          🗑️ Elimina
        </button>
      </div>
    </div>
  );
});

TaskItem.displayName = 'TaskItem';
