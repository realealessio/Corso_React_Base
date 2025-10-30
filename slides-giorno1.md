---
marp: true
theme: default
paginate: true
backgroundColor: white
color: #333
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
    padding: 30px;
    overflow: hidden;
  }
  h1 {
    color: #0066cc;
    font-size: 44px;
    text-align: center;
    margin-bottom: 25px;
  }
  h2 {
    color: #0066cc;
    font-size: 36px;
    border-bottom: 3px solid #0066cc;
    padding-bottom: 8px;
    margin-bottom: 20px;
  }
  h3 {
    color: #004499;
    font-size: 28px;
    margin-bottom: 15px;
  }
  .title-slide {
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  .title-slide h1 {
    color: white;
    font-size: 60px;
    margin-bottom: 20px;
  }
  .agenda-slide {
    background-color: #f8f9fa;
  }
  code {
    background-color: #f4f4f4;
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'Consolas', 'Monaco', monospace;
  }
  pre {
    background-color: #7f98c3ff;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    font-size: 18px;
    overflow-x: auto;
    margin: 10px 0;
    max-height: 400px;
    overflow-y: auto;
  }
  .highlight {
    background-color: #fff3cd;
    padding: 12px;
    border-left: 5px solid #ffc107;
    margin: 15px 0;
    font-size: 22px;
  }
  .center {
    text-align: center;
  }
  ul, ol {
    font-size: 22px;
    line-height: 1.4;
  }
  .two-columns {
    display: flex;
    gap: 40px;
  }
  .column {
    flex: 1;
  }
  .small-code pre {
    font-size: 14px !important;
    padding: 10px !important;
    line-height: 1.3;
  }
  .small-code code {
    font-size: 14px !important;
  }
  .tiny-code pre {
    font-size: 12px !important;
    padding: 8px !important;
    line-height: 1.2;
  }
  .tiny-code code {
    font-size: 12px !important;
  }
  .ultra-compact pre {
    font-size: 10px !important;
    padding: 6px !important;
    line-height: 1.1;
  }
  .ultra-compact code {
    font-size: 10px !important;
  }
---

<!-- _class: title-slide -->

# Corso React Base
## Giorno 1 - Fondamenti

**Data:** 4 Novembre 2025
**Orario:** 10:00-17:00 (7 ore)
**Docente:** Alessio Reale

---

<!-- _class: agenda-slide -->

## 📋 Agenda Giorno 1

### **10:00-17:00 (7 ore totali)**

- 🌟 **Introduzione a React** e setup ambiente (30 min)
- 🧩 **Componenti funzionali e JSX** (40 min)
- 📤 **Props e destructuring** (30 min)
- ☕ **Pausa** (10 min)
- 🔄 **State e useState hook** (40 min)
- 🎯 **Gestione eventi e form** (30 min)
- 🍔 **Pausa pranzo** (60 min)
- 🎯 **Demo dal vivo:** Contatore interattivo (15 min)
- 🔗 **Hook useEffect** (45 min)
- ☕ **Pausa** (15 min)
- 💡 **Rendering condizionale e liste** (45 min)
- 🎯 **Demo dal vivo:** Todo List completa (45 min)

---

## 🎯 Obiettivi Giorno 1

### **Cosa imparerai oggi:**

- ✅ Comprendere i **concetti fondamentali** di React
- ✅ Creare **componenti funzionali** con JSX
- ✅ Gestire **props** e **state** nei componenti
- ✅ Utilizzare gli hook **useState** e **useEffect**
- ✅ Gestire **eventi** e **form**
- ✅ Implementare **rendering condizionale** e **liste**
- ✅ Costruire una **Todo List completa**

---

## 👥 A Chi è Rivolto

<div class="two-columns">
<div class="column">

### **Prerequisiti:**
- JavaScript ES6+ base
- HTML e CSS
- Concetti di programmazione
- Familiarità con npm/yarn

</div>
<div class="column">

### **Livello:**
- **Principiante**
- Hands-on e pratico
- Esempi reali
- Q&A continuo

</div>
</div>

---

## 🌟 Introduzione a React

### **Cosa è React?**

<div class="highlight">
React è una libreria JavaScript per costruire interfacce utente interattive e riutilizzabili
</div>

**Caratteristiche principali:**
- 🧩 **Componenti riutilizzabili** - Ogni parte dell'UI è un componente indipendente
- 🔄 **Virtual DOM** - Ottimizzazione automatica degli aggiornamenti
- 📱 **Reactive programming** - L'UI si aggiorna automaticamente con i dati

---

## 🌟 React: Perché è Popolare?

### **Vantaggi:**
- ⚡ **Performance elevate** - Virtual DOM minimizza manipolazioni
- 🔧 **Manutenibilità** - Componenti isolati e testabili
- 📈 **Scalabilità** - Architettura modulare
- 👥 **Community** - Oltre 200k stars su GitHub
- 🏢 **Adozione** - Meta, Netflix, Airbnb, Uber

### **Statistiche:**
- **40.14%** degli sviluppatori lo usa (Stack Overflow 2024)
- **20+ milioni** download/settimana su npm

---

## 📊 React vs Altri Framework

| Caratteristica | React | Angular | Vue.js |
|---|---|---|---|
| **Curva apprendimento** | Media | Alta | Bassa |
| **Performance** | Alta | Alta | Alta |
| **Bundle size** | Media | Grande | Piccola |
| **Flessibilità** | Alta | Media | Alta |
| **Ecosistema** | Vasto | Completo | In crescita |

---

## 🛠️ Setup Ambiente di Sviluppo

### **Prerequisiti:**
```bash
# Verifica versioni installate
node --version    # v18.0.0 o superiore
npm --version     # v8.0.0 o superiore
```

### **Opzione 1: Vite (Raccomandato)**
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev  # http://localhost:5173
```

**Perché Vite?**
- ⚡ **10x più veloce** nel cold start
- 🔥 **Hot reload** istantaneo
- 📦 **Bundle più leggero**

---

## 🧩 Componenti Funzionali e JSX

### **Il Primo Componente:**

```jsx
// App.jsx
function App() {
  return (
    <div className="App">
      <h1>Benvenuto in React!</h1>
      <p>Il mio primo componente</p>
    </div>
  );
}

export default App;
```

<div class="highlight">
JSX = JavaScript + XML - Scrivere HTML nel JavaScript
</div>

---

## 🧩 Anatomia di un Componente

### **Componente funzionale:**

```jsx
// Metodo 1: Function declaration
function Benvenuto(props) {
  return <h1>Ciao, {props.nome}!</h1>;
}

// Metodo 2: Arrow function
const Benvenuto = (props) => {
  return <h1>Ciao, {props.nome}!</h1>;
};

// Metodo 3: Arrow function con return implicito
const Benvenuto = (props) => <h1>Ciao, {props.nome}!</h1>;
```

---

## 🧩 Composizione Componenti

### **Utilizzo:**

<div class="two-columns">
<div class="column">

```jsx
function App() {
  return (
    <div>
      <Benvenuto nome="Mario" />
      <Benvenuto nome="Luigi" />
      <Benvenuto nome="Peach" />
    </div>
  );
}
```

</div>
<div class="column">

**Risultato:**
```html
<div>
  <h1>Ciao, Mario!</h1>
  <h1>Ciao, Luigi!</h1>
  <h1>Ciao, Peach!</h1>
</div>
```

</div>
</div>

---

## 🔧 JSX: Regole Fondamentali

### **Regole essenziali:**

1. **Un solo elemento padre** (o Fragment)
2. **Chiudere sempre i tag** autochiudenti
3. **className** invece di class
4. **camelCase** per attributi ed eventi

```jsx
// ✅ Corretto
return (
  <div>
    <h1>Titolo</h1>
    <img src="image.jpg" alt="Foto" />
  </div>
);

// ✅ Con Fragment
return (
  <>
    <h1>Titolo</h1>
    <p>Testo</p>
  </>
);
```

---

## 🔧 JSX: Espressioni JavaScript

### **Inserire JavaScript in JSX:**

```jsx
function Saluto() {
  const nome = "Mario";
  const ora = new Date().getHours();
  const saluto = ora < 12 ? "Buongiorno" : "Buonasera";
  
  return (
    <div>
      <h1>{saluto}, {nome}!</h1>
      <p>Sono le ore {ora}</p>
      <p>Risultato: {2 + 2}</p>
    </div>
  );
}
```

---

## 📤 Props e Destructuring

### **Passaggio di Props:**

<div class="two-columns">
<div class="column">

**Componente Genitore:**
```jsx
function App() {
  return (
    <ProfiloUtente 
      nome="Mario Rossi"
      eta={30}
      email="mario@email.com"
      attivo={true}
    />
  );
}
```

</div>
<div class="column">

**Componente Figlio:**
```jsx
function ProfiloUtente(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Età: {props.eta}</p>
      <p>{props.email}</p>
      <p>
        {props.attivo ? '✅' : '❌'}
      </p>
    </div>
  );
}
```

</div>
</div>

---

## 📤 Destructuring delle Props

### **Semplifica l'accesso:**

<div class="two-columns">
<div class="column">

**Senza destructuring:**
```jsx
function Profilo(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>{props.eta}</p>
      <p>{props.email}</p>
    </div>
  );
}
```

</div>
<div class="column">

**Con destructuring:**
```jsx
function Profilo({ nome, eta, email }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{eta}</p>
      <p>{email}</p>
    </div>
  );
}
```

</div>
</div>

---

## 📤 Props: Valori di Default

### **Valori predefiniti:**

```jsx
function Saluto({ 
  nome = "Ospite", 
  messaggio = "Benvenuto",
  tema = "chiaro" 
}) {
  return (
    <div className={`saluto saluto--${tema}`}>
      <h1>{messaggio}, {nome}!</h1>
    </div>
  );
}

// Utilizzo
<Saluto />  // "Benvenuto, Ospite!" tema chiaro
<Saluto nome="Mario" tema="scuro" />
```

---

## ☕ Pausa (10 min)

<div class="center">

### **Piccola pausa caffè!**

🔄 **Riprendiamo tra 10 minuti**

**Prossimo argomento:** State e useState Hook

</div>

---

## 🔄 State e useState Hook

### **Introduzione allo State:**

<div class="highlight">
Lo State rappresenta dati che possono cambiare nel tempo e causano il re-rendering del componente
</div>

```jsx
import { useState } from 'react';

function Contatore() {
  // [valore, funzioneAggiornamento] = useState(valoreIniziale)
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Hai cliccato {count} volte</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
```

---

## 🔄 useState: Regole Importanti

### **⚠️ Lo state è IMMUTABILE:**

```jsx
// ❌ SBAGLIATO - Non modificare direttamente
count++; 
count = count + 1;

// ✅ CORRETTO - Usa sempre la funzione setter
setCount(count + 1);
```

### **Aggiornamento con funzione:**

```jsx
// Se il nuovo valore dipende dal precedente
setCount(prevCount => prevCount + 1);

// Utile per aggiornamenti multipli
const incrementa = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1); // Funziona!
};
```

---

## 🔄 useState con Oggetti

### **State complesso:**

<div class="ultra-compact">

```jsx
function FormUtente() {
  const [utente, setUtente] = useState({
    nome: '',
    email: '',
    eta: 0
  });

  const handleChange = (campo, valore) => {
    setUtente(prevUtente => ({
      ...prevUtente,  // Mantieni gli altri campi
      [campo]: valore // Aggiorna solo il campo specifico
    }));
  };

  return (
    <div>
      <input value={utente.nome} onChange={(e) => handleChange('nome', e.target.value)} />
      <input value={utente.email} onChange={(e) => handleChange('email', e.target.value)} />
    </div>
  );
}
```

</div>

---

## 🎯 Gestione Eventi e Form

### **Eventi in React:**

<div class="ultra-compact">

```jsx
function EventiExample() {
  const [testo, setTesto] = useState('');

  const handleClick = (event) => {
    console.log('Cliccato!', event.target);
    alert('Messaggio: ' + testo);
  };

  const handleChange = (evento) => {
    setTesto(evento.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick(event);
    }
  };

  return (
    <div>
      <input 
        value={testo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Scrivi..."
      />
      <button onClick={handleClick}>
        Invia
      </button>
    </div>
  );
}
```

</div>

---

## 🎯 Eventi Comuni

### **I più utilizzati:**

- **onClick, onDoubleClick** - Clic mouse
- **onChange, onInput** - Input testo
- **onSubmit** - Invio form
- **onFocus, onBlur** - Focus elementi
- **onKeyDown, onKeyUp** - Tastiera
- **onMouseEnter, onMouseLeave** - Hover

```jsx
<button onClick={handleClick}>Clicca</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit}>...</form>
```

---

## 🎯 Form Controllati

### **Controlled Components:**

<div class="ultra-compact">

```jsx
function FormControllato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Previeni reload della pagina
    console.log('Dati inviati:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Invia</button>
    </form>
  );
}
```

</div>

---

## 🍔 Pausa Pranzo (60 min)

<div class="center">

### **Ci rivediamo alle 14:00!**

🍕 **Buon appetito!**

📱 **Domande?** Approfittiamo della pausa

</div>

---

## 🎯 Demo dal Vivo: Contatore Interattivo

### **Costruiamo insieme:**

- Valore corrente visualizzato
- Bottone incrementa (+1)
- Bottone decrementa (-1)
- Bottone reset (0)
- Step personalizzabile
- Validazione (no numeri negativi)

<div class="center">

**🎬 Live Coding Session!**

</div>

---

## 🔗 Hook useEffect

### **Introduzione a useEffect:**

<div class="highlight">
useEffect gestisce "side effects" - operazioni che vanno oltre il rendering (API calls, timer, subscriptions)
</div>

```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [secondi, setSecondi] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondi(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // [] = esegui solo al mount

  return <div>Secondi: {secondi}</div>;
}
```

---

## 🔗 useEffect: Array di Dipendenze

### **Controllo dell'esecuzione:**

```jsx
// 1. Esegui solo al mount
useEffect(() => {
  console.log('Componente montato');
}, []);

// 2. Esegui ad ogni render
useEffect(() => {
  console.log('Componente aggiornato');
});

// 3. Esegui quando cambia count
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);

// 4. Dipendenze multiple
useEffect(() => {
  console.log('Nome o email cambiati');
}, [nome, email]);
```

---

## 🔗 useEffect: Cleanup Function

### **Pulizia risorse:**

<div class="small-code">

```jsx
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Setup: connetti alla chat room
    const connection = connectToChatRoom(roomId);
    connection.on('message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
    // Cleanup: disconnetti quando il componente smonta
    // o quando roomId cambia
    return () => {
      connection.disconnect();
      console.log('Disconnesso da', roomId);
    };
  }, [roomId]); // Riesegui se cambia roomId
  return (
    <div>
      {messages.map(msg => <p key={msg.id}>{msg.text}</p>)}
    </div>
  );
}
```

</div>

---

## 🔗 useEffect: Fetch API

### **Caricamento dati:**

<div class="ultra-compact">

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Errore di rete');
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Esegui solo una volta

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

</div>

---

## ☕ Pausa (15 min)

<div class="center">

### **Pausa meritata!**

🔄 **Ci rivediamo tra 15 minuti**

**Prossimo argomento:** Rendering Condizionale e Liste

</div>

---

## 💡 Rendering Condizionale

### **Metodo 1: Operatore Ternario**

```jsx
function Messaggio({ utente }) {
  return (
    <div>
      {utente ? (
        <div>
          <h1>Benvenuto, {utente.nome}!</h1>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Effettua il login</h1>
          <button>Login</button>
        </div>
      )}
    </div>
  );
}
```

---

## 💡 Rendering Condizionale: AND Logico

### **Metodo 2: Operatore &&**

```jsx
function Notifiche({ errore, successo, caricamento }) {
  return (
    <div>
      {errore && (
        <div className="alert alert-error">
          ❌ {errore}
        </div>
      )}
      
      {successo && (
        <div className="alert alert-success">
          ✅ {successo}
        </div>
      )}
      
      {caricamento && (
        <div className="spinner">
          🔄 Caricamento...
        </div>
      )}
    </div>
  );
}
```

---

## 💡 Rendering Condizionale: Early Return

### **Metodo 3: Guard Clauses**

```jsx
function ComponenteConGuardie({ dati, errore, caricamento }) {
  if (caricamento) {
    return <div>Caricamento...</div>;
  }
  
  if (errore) {
    return <div>Errore: {errore}</div>;
  }
  
  if (!dati || dati.length === 0) {
    return <div>Nessun dato disponibile</div>;
  }
  
  // Rendering normale
  return (
    <div>
      <h1>Dati caricati!</h1>
      {/* Contenuto principale */}
    </div>
  );
}
```

---

## 📃 Rendering di Liste

### **Metodo .map():**

<div class="ultra-compact">

```jsx
function ListaTasks() {
  const tasks = [
    { id: 1, titolo: 'Imparare React', completato: false },
    { id: 2, titolo: 'Creare progetto', completato: true },
    { id: 3, titolo: 'Fare deploy', completato: false }
  ];

  return (
    <div>
      <h2>Le mie tasks ({tasks.length})</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completato ? 'completato' : 'in-corso'}>
            {task.titolo} - {task.completato ? '✅' : '⏳'}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

</div>

<div class="highlight">
⚠️ La prop "key" è OBBLIGATORIA e deve essere univoca!
</div>

---

## 📃 Liste: Filtraggio

### **Filtrare e trasformare:**

```jsx
function ListaFiltrata({ tasks, filtro }) {
  const tasksFiltrate = tasks
    .filter(task => {
      if (filtro === 'tutte') return true;
      if (filtro === 'completate') return task.completato;
      if (filtro === 'attive') return !task.completato;
      return true;
    })
    .sort((a, b) => a.titolo.localeCompare(b.titolo));

  return (
    <ul>
      {tasksFiltrate.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
```

---

## 📃 Liste: Gestione Vuote

### **Lista vuota:**

```jsx
function ListaConMessaggio({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 Nessun elemento da mostrare</p>
        <button>Aggiungi il primo elemento</button>
      </div>
    );
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  );
}
```

---

## 🎯 Demo dal Vivo: Todo List Completa

### **Funzionalità da implementare:**

- ✅ Input per aggiungere todo
- ✅ Lista dei todo con icone
- ✅ Toggle completato/attivo
- ✅ Eliminazione singoli todo
- ✅ Contatore todo rimanenti
- ✅ Filtri (Tutti, Attivi, Completati)
- ✅ Persistenza con localStorage

<div class="center">

**🎬 Coding Session Interattiva!**

</div>

---

## 🎉 Recap Giorno 1

### **Cosa abbiamo imparato oggi:**

- ✅ **Fondamenti React** - Componenti, JSX, Virtual DOM
- ✅ **Props** - Passaggio dati e destructuring
- ✅ **State** - useState e gestione stato locale
- ✅ **Eventi** - onClick, onChange, onSubmit
- ✅ **useEffect** - Side effects e cleanup
- ✅ **Rendering** - Condizionale e liste
- ✅ **Progetti** - Contatore e Todo List

---

## 🌅 Domani: Giorno 2

### **Cosa vedremo:**

- 🎣 **Hook avanzati** (useReducer, useRef, custom hooks)
- 🌐 **Context API** - Stato globale
- 🏪 **Redux Toolkit** - Panoramica
- 📘 **TypeScript** con React
- 🚀 **Performance** e best practices
- 🎯 **Demo finale** - Task Manager TypeScript

<div class="center">

**Ci vediamo domani alle 9:00! 🚀**

</div>

---

<!-- _class: title-slide -->

# Fine Giorno 1
## Ottimo Lavoro! 👏

**A domani per il Giorno 2!**
