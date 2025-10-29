# 🎯 Esercizio 4 - Task Manager TypeScript Completo

## Obiettivo
Questo è l'esercizio finale che integra tutti i concetti appresi:
- ✅ TypeScript con React
- ✅ Context API per stato globale
- ✅ useReducer per logica complessa
- ✅ Custom hooks
- ✅ Performance optimization
- ✅ Best practices architetturali

## Struttura del Progetto

```
esercizio4-task-manager/
├── src/
│   ├── types/           # TypeScript interfaces e types
│   ├── contexts/        # Context API providers
│   ├── hooks/           # Custom hooks
│   ├── components/      # Componenti React
│   ├── App.tsx          # App principale
│   └── main.tsx
├── package.json
├── tsconfig.json
└── SOLUZIONE.md         # Soluzione completa
```

## Setup

```bash
npm install
npm run dev
```

## Funzionalità da Implementare

### 1. Types (TypeScript)
- `Task` interface
- `TaskFilter` type
- `TaskStatus` enum
- `TaskContext` type

### 2. Context API
- `TaskContext` per stato globale
- `TaskProvider` componente
- Custom hook `useTasks()`

### 3. Componenti
- `TaskList` - Lista task con filtri
- `TaskItem` - Singolo task
- `TaskForm` - Form per aggiungereedit
- `FilterBar` - Barra filtri

### 4. Features
- ✅ Aggiungere task
- ✅ Modificare task
- ✅ Eliminare task  
- ✅ Marcare come completato
- ✅ Filtri (tutti, attivi, completati)
- ✅ Persistenza localStorage
- ✅ Contatori e statistiche

## Concetti Avanzati

- **useReducer**: Per gestire lo state complesso delle task
- **Context**: Per evitare prop drilling
- **TypeScript**: Type safety completo
- **Performance**: React.memo, useCallback, useMemo
- **Custom Hooks**: Logica riutilizzabile

## Note

Questo esercizio è il più complesso ed è pensato come **demo finale del corso**.  
Il docente guiderà lo sviluppo step-by-step durante la sessione.

Consulta `SOLUZIONE.md` per il codice completo con spiegazioni dettagliate.

## Tempo Stimato

⏱️ 30 minuti (con guida del docente)
