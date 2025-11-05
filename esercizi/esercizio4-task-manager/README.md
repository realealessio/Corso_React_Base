# 🎯 Esercizio 4 - Task Manager TypeScript

## Obiettivo
Questo è l'esercizio finale che integra i concetti avanzati di React appresi nel Giorno 2:
- ✅ **TypeScript** con React - Type safety
- ✅ **Context API** - Stato globale
- ✅ **useReducer** - Logica complessa
- ✅ **Custom hooks** - Riutilizzabilità
- ✅ **Performance** - React.memo

## Setup

```bash
npm install
npm run dev
```

## 📝 TODO da Completare

### 1. TypeScript - Types (`src/types/index.ts`)

**TODO 1-6**: Definire tutti i tipi TypeScript necessari:
- `TaskStatus` enum
- `TaskFilter` type
- `Task` interface
- `TaskStats` interface
- `TaskAction` union type
- `TaskContextType` interface

💡 **Concetto**: Type safety con TypeScript previene errori a compile-time

### 2. Context API - TaskContext (`src/contexts/TaskContext.tsx`)

**TODO 7**: Implementare il **taskReducer**
- Gestire le azioni: ADD_TASK, UPDATE_TASK, DELETE_TASK, TOGGLE_TASK
- Usare switch/case per i diversi action.type

💡 **Concetto**: useReducer per logica di stato complessa

**TODO 8**: Creare il **TaskContext**
- Usare createContext con type TaskContextType

💡 **Concetto**: Context API per evitare prop drilling

**TODO 9**: Implementare il **TaskProvider**
- Usare `useLocalStorage` per persistenza tasks e filter
- Usare `useReducer` per gestire lo stato delle task
- Calcolare `stats` con `useMemo` (performance)
- Calcolare `filteredTasks` con `useMemo` (performance)
- Implementare le funzioni: addTask, updateTask, deleteTask, toggleTask
- Sincronizzare con localStorage usando `useEffect`

💡 **Concetti**: 
- Context Provider per condividere stato
- useMemo per ottimizzare calcoli
- useEffect per side effects

**TODO 10**: Implementare il custom hook **useTasks**
- Consumare il TaskContext con useContext
- Lanciare errore se usato fuori dal TaskProvider

💡 **Concetto**: Custom hook per API pulita

### 3. Performance - TaskItem (`src/components/TaskItem.tsx`)

**TODO 11**: Ottimizzare con **React.memo**
- Avvolgere il componente TaskItem con React.memo
- Il componente si re-renderizzerà solo quando le props cambiano

💡 **Concetto**: React.memo previene re-render inutili

## 🎓 Concetti Chiave

### Context API
```tsx
// 1. Creare il context
const MyContext = createContext<Type | undefined>(undefined);

// 2. Provider
export function MyProvider({ children }: { children: ReactNode }) {
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

// 3. Custom hook per consumare
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) throw new Error('Must be used within Provider');
  return context;
}
```

### useReducer
```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_TYPE':
      return newState;
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'ACTION_TYPE', payload: data });
```

### useMemo per Performance
```tsx
// Ricalcola solo quando dependencies cambiano
const computed = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

### React.memo
```tsx
// Previene re-render se props non cambiano
export const Component = memo(({ prop }) => {
  return <div>{prop}</div>;
});
```

## 📁 Struttura Progetto

```
esercizio4-task-manager/
├── src/
│   ├── types/
│   │   └── index.ts          # TODO 1-6: TypeScript types
│   ├── contexts/
│   │   └── TaskContext.tsx   # TODO 7-10: Context + Reducer
│   ├── hooks/
│   │   └── useLocalStorage.ts # Custom hook (già implementato)
│   ├── components/
│   │   ├── TaskForm.tsx       # Form aggiunta task
│   │   ├── TaskItem.tsx       # TODO 11: React.memo
│   │   ├── TaskList.tsx       # Lista task filtrate
│   │   └── FilterBar.tsx      # Filtri e statistiche
│   ├── App.tsx
│   └── main.tsx
```

## ✅ Come Verificare

1. **TypeScript**: Il codice deve compilare senza errori TypeScript
2. **Context**: Le task devono essere accessibili in tutti i componenti
3. **useReducer**: Tutte le azioni devono funzionare (aggiungi, elimina, toggle, modifica)
4. **localStorage**: Le task devono persistere al refresh della pagina
5. **Filtri**: I filtri "Tutte", "Attive", "Completate" devono funzionare
6. **Performance**: TaskItem non si re-renderizza se task non cambiate

## 🎯 Funzionalità Finali

- ✅ Aggiungere nuove task
- ✅ Marcare task come completate
- ✅ Eliminare task
- ✅ Filtrare task (tutte/attive/completate)
- ✅ Vedere statistiche in tempo reale
- ✅ Persistenza automatica in localStorage
- ✅ Type safety completo con TypeScript

## 💡 Suggerimenti

1. **Inizia dai types**: Definisci prima tutte le interfacce TypeScript
2. **Poi il reducer**: Implementa la logica delle azioni
3. **Context e Provider**: Collega tutto insieme
4. **Custom hook**: Crea l'API per i componenti
5. **Performance**: Aggiungi React.memo alla fine

## 🚀 Bonus (Opzionale)

Se finisci in anticipo, prova ad aggiungere:
- [ ] Modifica task esistenti (modal di edit)
- [ ] Priorità per le task (alta/media/bassa)
- [ ] Ordinamento (per data, titolo, priorità)
- [ ] Ricerca per titolo
- [ ] Categorie/tag per le task
- [ ] Tema chiaro/scuro con Context

## Tempo Stimato

⏱️ **30-45 minuti** (con guida del docente)

## 📚 Riferimenti

- [React Context API](https://react.dev/reference/react/createContext)
- [useReducer Hook](https://react.dev/reference/react/useReducer)
- [TypeScript con React](https://react.dev/learn/typescript)
- [React.memo](https://react.dev/reference/react/memo)
- [useMemo](https://react.dev/reference/react/useMemo)

---

💡 **Nota**: Consulta `SOLUZIONE.md` per il codice completo se hai bisogno di aiuto!
