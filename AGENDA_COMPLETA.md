# Agenda Corso React Base - 4-5 Novembre 2025

## 📅 Programma Dettagliato (16 ore totali)

### GIORNO 1 (10:00 - 17:00) - 7 ore

#### 10:00 - 10:15 | Benvenuto e Introduzione
- Presentazioni e logistica
- Obiettivi del corso
- Setup canali comunicazione

#### 10:15 - 11:00 | Fondamenti JavaScript per React
- **Ripasso ES6 essenziale**: let/const, arrow functions, template literals, destructuring
- **Array methods**: map, filter, reduce (fondamentali per React)
- **Modules**: import/export
- 🔧 **Esercizio**: Trasformare codice ES5 in ES6

#### 11:00 - 11:15 | ☕ Pausa

#### 11:15 - 12:30 | Introduzione a React & Setup
- **Cos'è React**: libreria UI, virtual DOM, componenti
- **Setup ambiente**: Node, Vite, VSCode + estensioni
- **Primo progetto**: create con Vite (React + TypeScript)
- **JSX**: sintassi e regole base
- 🔧 **Esercizio**: Primo componente funzionale con props

#### 12:30 - 13:30 | 🍽️ Pranzo

#### 13:30 - 14:45 | Props & Composizione
- **Props**: passaggio dati, default props, children
- **Composizione**: container/presentational pattern
- **Lists & Keys**: rendering liste
- 🔧 **Esercizio**: Lista di card prodotti con props

#### 14:45 - 15:00 | ☕ Pausa

#### 15:00 - 16:15 | Gestione Stato con useState
- **useState Hook**: dichiarazione, aggiornamento, best practices
- **Stato immutabile**: oggetti e array
- **Controlled components**: input controllati
- 🔧 **Esercizio**: Todo app base (add/remove/toggle)

#### 16:15 - 16:45 | Gestione Eventi
- **Event handling**: onClick, onChange, onSubmit
- **Event object**: preventDefault, stopPropagation
- **Passare parametri** agli event handlers
- 🔧 **Esercizio**: Migliorare todo con filtri

#### 16:45 - 17:00 | Wrap-up Giorno 1
- Recap concetti principali
- Q&A veloce
- Preview giorno 2

---

### GIORNO 2 (09:00 - 16:00) - 7 ore

#### 09:00 - 09:15 | Apertura Giorno 2
- Recap giorno 1
- Obiettivi giornata

#### 09:15 - 10:30 | useEffect & Side Effects
- **useEffect Hook**: when, why, how
- **Dependency array**: [], [deps], undefined
- **Cleanup function**: avoiding memory leaks
- **Data fetching**: API calls con fetch
- 🔧 **Esercizio**: Caricare dati da API mock

#### 10:30 - 10:45 | ☕ Pausa

#### 10:45 - 11:45 | Hooks Avanzati & Custom Hooks
- **useRef**: referenze DOM, valori persistenti
- **useMemo & useCallback**: ottimizzazione performance
- **Custom Hooks**: pattern riutilizzo logica
- 🔧 **Esercizio**: Custom hook useFetch

#### 11:45 - 12:45 | Gestione Stato Centralizzato
- **Context API**: createContext, Provider, useContext
- **Quando usare Context**: vs prop drilling
- **Redux (cenni)**: store, actions, reducers
- **Confronto**: Context vs Redux vs Zustand
- 🔧 **Esercizio**: Theme context per dark/light mode

#### 12:45 - 13:45 | 🍽️ Pranzo

#### 13:45 - 14:45 | TypeScript con React
- **Setup TypeScript**: tipi base
- **Component typing**: FC, props interfaces
- **Hook typing**: useState<T>, custom hooks
- **Event typing**: onClick, onChange handlers
- 🔧 **Esercizio**: Convertire componente in TypeScript

#### 14:45 - 15:00 | ☕ Pausa

#### 15:00 - 15:30 | Progetto Finale
- **Integrazione**: tutti i concetti insieme
- **Best practices**: file structure, naming
- **Performance tips**: memo, useMemo, useCallback quando serve

#### 15:30 - 15:50 | Q&A Session Estesa
- Domande aperte
- Troubleshooting
- Consigli apprendimento post-corso

#### 15:50 - 16:00 | Conclusioni
- Feedback corso
- Risorse extra
- Next steps

---

## 🎯 Esercizi del Corso

### Esercizio Completo Demo: "Task Manager Pro"
App completa che include tutti i concetti:
- Componenti con props e composizione
- useState per stato locale
- useEffect per persistenza e API
- Context per tema e user
- Custom hooks per logica riutilizzabile
- TypeScript typing
- Event handling completo

### Mini-Esercizi Mirati:
1. **Props & Lists**: Gallery di immagini
2. **useState**: Counter con step personalizzabile  
3. **useEffect**: Weather widget con API
4. **Custom Hook**: useLocalStorage
5. **Context**: Shopping cart globale
6. **TypeScript**: Form validation tipizzato

---

## 📚 Materiali Necessari

### Setup Partecipanti (PRE-CORSO):
- Node.js 18+ LTS
- Git 
- VSCode + estensioni:
  - ES7+ React/Redux/React-Native snippets
  - Prettier
  - ESLint
  - Thunder Client (optional)

### Repository Forniti:
- `corso-react-starter`: template Vite + React + TS
- `corso-react-solutions`: soluzioni complete
- `corso-react-demo`: Task Manager Pro completo

---

## 🔄 Confronto Tecnologie

### React vs JavaScript Puro
- **Astrazione**: Virtual DOM vs DOM manipulation
- **Organizzazione**: Component-driven vs procedural
- **Riutilizzo**: Components vs functions/classes
- **Ecosystem**: NPM packages vs vanilla libraries

### React vs Python (per Python developers)
- **Ambiente**: Browser vs Server
- **Paradigmi**: Declarative UI vs Imperative logic  
- **Integrazione**: Frontend + Backend APIs
- **Tooling**: npm/yarn vs pip/poetry

### Context vs Redux
- **Complessità**: Simple vs Structured
- **DevTools**: Basic vs Advanced debugging
- **Performance**: Re-renders vs Optimized updates
- **Learning curve**: Immediate vs Steep
