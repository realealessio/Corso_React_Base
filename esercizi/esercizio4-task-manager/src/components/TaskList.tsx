import { useTasks } from '../contexts/TaskContext';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const { filteredTasks, stats, filter } = useTasks();

  if (filteredTasks.length === 0) {
    return (
      <div className="empty-state">
        <p>
          {filter === 'all' && '📝 Nessuna task presente. Inizia aggiungendone una!'}
          {filter === 'active' && '✨ Nessuna task attiva!'}
          {filter === 'completed' && '🎯 Nessuna task completata ancora.'}
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>
          {filter === 'all' && `📋 Tutte le Task (${stats.total})`}
          {filter === 'active' && `⏳ Task Attive (${stats.active})`}
          {filter === 'completed' && `✅ Task Completate (${stats.completed})`}
        </h2>
      </div>

      <div className="tasks">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
