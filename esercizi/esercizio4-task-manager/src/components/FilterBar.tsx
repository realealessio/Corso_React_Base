import { useTasks } from '../contexts/TaskContext';
import { TaskFilter } from '../types';

export function FilterBar() {
  const { filter, setFilter, stats } = useTasks();

  const filters: { value: TaskFilter; label: string; count: number }[] = [
    { value: 'all', label: 'Tutte', count: stats.total },
    { value: 'active', label: 'Attive', count: stats.active },
    { value: 'completed', label: 'Completate', count: stats.completed }
  ];

  return (
    <div className="filter-bar">
      <h3>📊 Filtri</h3>
      
      <div className="filter-buttons">
        {filters.map(({ value, label, count }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`filter-btn ${filter === value ? 'active' : ''}`}
          >
            {label} <span className="badge">{count}</span>
          </button>
        ))}
      </div>

      <div className="stats-summary">
        <div className="stat">
          <span className="stat-label">Totali:</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Attive:</span>
          <span className="stat-value active">{stats.active}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Completate:</span>
          <span className="stat-value completed">{stats.completed}</span>
        </div>
      </div>
    </div>
  );
}
