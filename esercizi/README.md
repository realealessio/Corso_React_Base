# 📁 Cartella Esercizi - Corso React Base

Questa cartella contiene 4 esercizi pratici da completare durante il corso.

## 🚀 Setup Iniziale

Per ogni esercizio:

```bash
cd esercizio1-counter  # o esercizio2-todolist, etc.
npm install
npm run dev
```

## 📚 Esercizi Disponibili

### ✅ Esercizio 1: Counter Interattivo (Giorno 1 - Pre-Pausa) - COMPLETO
**Cartella**: `esercizio1-counter/`  
**Durata**: 15 minuti  
**Concetti**: useState, event handling, props, rendering condizionale  
**Stato**: ✅ Mini-app funzionante con 8 TODO da completare

**File principali**:
- `src/components/Counter.jsx` - Componente con TODO
- `SOLUZIONE.md` - Soluzione completa con spiegazioni

### ✅ Esercizio 2: Todo List (Giorno 1 - Post-Pausa) - COMPLETO
**Cartella**: `esercizio2-todolist/`  
**Durata**: 30 minuti  
**Concetti**: useState con array, useEffect, localStorage, controlled forms  
**Stato**: ✅ Mini-app funzionante con 11 TODO da completare

**File principali**:
- `src/components/TodoList.jsx` - Componente con TODO
- `SOLUZIONE.md` - Soluzione completa con spiegazioni

### ✅ Esercizio 3: Custom Hook (Giorno 2 - Pre-Pausa) - COMPLETO
**Cartella**: `esercizio3-custom-hook/`  
**Durata**: 15 minuti  
**Concetti**: Custom hooks, useEffect cleanup, error handling  
**Stato**: ✅ Mini-app funzionante con 5 TODO da completare

**File principali**:
- `src/hooks/useLocalStorage.js` - Custom hook con TODO
- `src/App.jsx` - Demo d'uso del hook
- `SOLUZIONE.md` - Soluzione completa + versione TypeScript

### ✅ Esercizio 4: Task Manager (Giorno 2 - Demo Finale) - COMPLETO
**Cartella**: `esercizio4-task-manager/`  
**Durata**: 30 minuti  
**Concetti**: Context API, useReducer, TypeScript, performance optimization  
**Stato**: ✅ Guida completa + soluzione dettagliata

**File principali**:
- `README.md` - Guida all'esercizio
- `SOLUZIONE.md` - Architettura completa con TypeScript

## 💡 Come Completare

### Approccio Consigliato:

1. **Leggi README.md** dell'esercizio
2. **Apri i file** con commenti `// TODO:`
3. **Segui il docente** durante il live coding
4. **Completa i TODO** passo passo
5. **Testa** ogni funzionalità implementata
6. **Consulta SOLUZIONE.md** se necessario

### Workflow Tipico:

```bash
# 1. Entra nella cartella
cd esercizio1-counter

# 2. Installa dipendenze (solo la prima volta)
npm install

# 3. Avvia dev server
npm run dev

# 4. Apri http://localhost:5173

# 5. Modifica i file in src/
# 6. Vedi i cambiamenti live nel browser
# 7. Consulta SOLUZIONE.md se bloccato
```

## 📖 Struttura di Ogni Esercizio

```
esercizioX-nome/
├── src/
│   ├── components/      # Componenti con TODO
│   ├── hooks/           # Custom hooks (esercizio 3)
│   ├── App.jsx/tsx      # App principale
│   └── index.css        # Stili
├── package.json
├── vite.config.js
├── README.md            # Guida (esercizio 4)
└── SOLUZIONE.md         # ✅ Soluzione completa
```

## 🎯 Obiettivi di Apprendimento

### Dopo l'Esercizio 1:
- ✅ useState con primitive types
- ✅ Event handlers (onClick, onChange)
- ✅ Props e default values
- ✅ Rendering condizionale
- ✅ Validazione input

### Dopo l'Esercizio 2:
- ✅ useState con array e oggetti
- ✅ useEffect per side effects
- ✅ localStorage API
- ✅ Array methods (map, filter)
- ✅ Controlled components

### Dopo l'Esercizio 3:
- ✅ Custom hooks pattern
- ✅ useEffect cleanup
- ✅ Error handling
- ✅ Hook reusability
- ✅ API design

### Dopo l'Esercizio 4:
- ✅ Context API e Provider pattern
- ✅ useReducer per stato complesso
- ✅ TypeScript con React
- ✅ Performance optimization
- ✅ Architettura scalabile

## 🐛 Troubleshooting

### Problema: `npm install` fallisce
```bash
# Soluzione: Cancella cache e riprova
rm -rf node_modules package-lock.json
npm install
```

### Problema: Porta 5173 già in uso
```bash
# Soluzione: Usa porta diversa
npm run dev --port 3000
```

### Problema: Modifiche non si vedono
```bash
# Soluzione: Hard refresh
# Chrome/Edge: Ctrl + Shift + R
# Firefox: Ctrl + F5
```

### Problema: Errori TypeScript (esercizio 4)
```bash
# Soluzione: Ricompila
npm run build
```

## 📚 File SOLUZIONE.md

Ogni esercizio ha un file `SOLUZIONE.md` che include:

✅ Codice completo funzionante  
✅ Spiegazione linea per linea  
✅ Concetti chiave appresi  
✅ Pattern e best practices  
✅ Possibili miglioramenti  
✅ Errori comuni da evitare  

**Quando consultarlo?**
- ⏸️ Sei bloccato su un TODO
- ❓ Non capisci come procedere
- ✅ Vuoi verificare la tua soluzione
- 📖 Vuoi approfondire i concetti

## 🚀 Dopo il Corso

### Pratica Consigliata:

1. **Ripeti gli esercizi** da zero senza guardare le soluzioni
2. **Aggiungi features** personalizzate a ogni esercizio
3. **Combina esercizi** in un progetto unico
4. **Converti in TypeScript** gli esercizi 1-3
5. **Aggiungi test** con Vitest/Jest

### Progetti Pratici Suggeriti:

- 🛒 **E-commerce Mini**: Catalogo + Carrello (usa esercizi 2+3)
- 📝 **Note App**: Editor markdown con preview (usa esercizio 3)
- 📊 **Dashboard**: Statistiche e grafici (usa esercizio 4)
- 🎮 **Quiz App**: Domande e punteggio (usa esercizi 1+2)

## 📖 Risorse Extra

- [React Docs](https://react.dev) - Documentazione ufficiale
- [TypeScript Handbook](https://www.typescriptlang.org/docs) - Guida TypeScript
- [Vite Guide](https://vitejs.dev/guide) - Setup e configurazione

## ✨ Tips per il Successo

💡 **Non copiare ciecamente** - Capire è meglio che completare velocemente  
🤔 **Fai domande** - Il docente è lì per aiutarti  
🔄 **Ripeti i concetti** - La pratica rende perfetti  
🚀 **Sperimenta** - Prova varianti e modifiche  
📝 **Prendi appunti** - Scrivi i concetti chiave  

---

**Buon lavoro con gli esercizi! 🎯**

*Se hai domande, chiedi al docente durante il corso!*
