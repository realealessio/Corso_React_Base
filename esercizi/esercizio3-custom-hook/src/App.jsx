import { useLocalStorage } from './hooks/useLocalStorage'
import './App.css'

function App() {
  // Utilizziamo il custom hook useLocalStorage
  // TODO: Una volta completato l'hook, questi funzioneranno!
  const [name, setName] = useLocalStorage('user-name', '')
  const [age, setAge] = useLocalStorage('user-age', 0)
  const [theme, setTheme] = useLocalStorage('app-theme', 'light')
  const [preferences, setPreferences] = useLocalStorage('preferences', {
    notifications: true,
    emailUpdates: false
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎣 Custom Hook Demo</h1>
        <p className="subtitle">Esercizio 3 - useLocalStorage Hook</p>
      </header>

      <div className="demo-container">
        {/* Demo 1: String */}
        <div className="demo-section">
          <h2>📝 Nome Utente</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Inserisci il tuo nome"
            className="input"
          />
          <p className="info">
            Valore salvato in localStorage: <strong>{name || '(vuoto)'}</strong>
          </p>
        </div>

        {/* Demo 2: Number */}
        <div className="demo-section">
          <h2>🎂 Età</h2>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Inserisci la tua età"
            className="input"
          />
          <p className="info">
            Valore salvato: <strong>{age}</strong> anni
          </p>
        </div>

        {/* Demo 3: String (Tema) */}
        <div className="demo-section">
          <h2>🎨 Tema</h2>
          <div className="button-group">
            <button 
              onClick={() => setTheme('light')}
              className={`btn ${theme === 'light' ? 'active' : ''}`}
            >
              ☀️ Chiaro
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`btn ${theme === 'dark' ? 'active' : ''}`}
            >
              🌙 Scuro
            </button>
          </div>
          <p className="info">
            Tema corrente: <strong>{theme}</strong>
          </p>
        </div>

        {/* Demo 4: Object */}
        <div className="demo-section">
          <h2>⚙️ Preferenze</h2>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={(e) => setPreferences({
                ...preferences,
                notifications: e.target.checked
              })}
            />
            Notifiche attive
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={preferences.emailUpdates}
              onChange={(e) => setPreferences({
                ...preferences,
                emailUpdates: e.target.checked
              })}
            />
            Email updates
          </label>
          <p className="info">
            Preferenze: <code>{JSON.stringify(preferences, null, 2)}</code>
          </p>
        </div>

        {/* Istruzioni */}
        <div className="instructions">
          <h3>📖 Istruzioni</h3>
          <ol>
            <li>Completa il custom hook <code>useLocalStorage.js</code></li>
            <li>Modifica i valori sopra</li>
            <li>Ricarica la pagina (F5) per vedere la persistenza!</li>
            <li>Apri DevTools → Application → Local Storage per vedere i dati salvati</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
