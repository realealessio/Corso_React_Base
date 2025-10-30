import { TaskProvider } from './contexts/TaskContext';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { FilterBar } from './components/FilterBar';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <header className="app-header">
          <h1>📝 Task Manager TypeScript</h1>
          <p>Esercizio 4 - Corso React Base</p>
        </header>

        <div className="app-container">
          <aside className="sidebar">
            <TaskForm />
            <FilterBar />
          </aside>

          <main className="main-content">
            <TaskList />
          </main>
        </div>

        <footer className="app-footer">
          <p>
            💡 <strong>Concetti applicati:</strong> TypeScript, Context API, useReducer, 
            Custom Hooks, React.memo, localStorage
          </p>
        </footer>
      </div>
    </TaskProvider>
  );
}

export default App;
