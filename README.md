# 🚀 Setup e Istruzioni per il Corso React

## 📋 Pre-requisiti (da installare PRIMA del corso)

### Software Obbligatori:
1. **Node.js 18+ LTS**
   - Download: https://nodejs.org/
   - Verifica: `node --version` (deve essere 18+)
   - Verifica npm: `npm --version`

2. **Git**
   - Download: https://git-scm.com/
   - Verifica: `git --version`

3. **VS Code**
   - Download: https://code.visualstudio.com/
   - Estensioni consigliate (installare):
     - ES7+ React/Redux/React-Native snippets
     - Prettier - Code formatter
     - ESLint
     - Auto Rename Tag
     - Bracket Pair Colorizer
     - Thunder Client (per API testing)

### Browser:
- Chrome/Edge/Firefox aggiornato
- React Developer Tools (estensione browser)

---

## 🏗️ Setup Progetto

### 1. Clona il Repository
```bash
git clone https://github.com/realealessio/Corso_React_Base.git
cd Corso_React_Base
```

### 2. Setup Demo App
```bash
cd demo-app
npm install
npm run dev
```
Dovrebbe aprirsi http://localhost:3000

### 3. Setup Esercizi (Opzionale - durante il corso)
```bash
cd esercizi/esercizio1-counter
npm install
npm run dev
```
Ogni esercizio è una mini-app React indipendente.

### 4. Test Installazione
Se vedi la Task Manager App funzionante, tutto è pronto! 🎉

---

## 📁 Struttura Repository

```
Corso_React_Base/
├── ESERCIZI.md                 # Guida completa agli esercizi pratici
├── README.md                   # Questo file
├── slides-giorno1.md           # Slide Giorno 1 - Fondamenti (Marp format)
├── slides-giorno2.md           # Slide Giorno 2 - Hook Avanzati e TypeScript (Marp format)
├── demo-app/                   # App completa dimostrativa
│   ├── src/
│   │   ├── components/         # Componenti React
│   │   ├── contexts/          # Context API examples
│   │   ├── hooks/             # Custom hooks
│   │   ├── types/             # TypeScript types
│   │   └── App.tsx            # App principale
│   ├── package.json
│   └── vite.config.ts
└── esercizi/                   # Esercizi pratici del corso
    ├── README.md               # Guida agli esercizi
    ├── esercizio1-counter/     # Counter interattivo (Giorno 1)
    ├── esercizio2-todolist/    # Todo List completa (Giorno 1)
    ├── esercizio3-custom-hook/ # Custom Hook useLocalStorage (Giorno 2)
    └── esercizio4-task-manager/# Task Manager finale (Giorno 2)
```

---

## 📅 Agenda del Corso (14 ore totali)

### **Giorno 1 (9:00-16:00) - 7 ore**
- ⚛️ Introduzione a React e setup ambiente (60 min)
- 🧩 Componenti, JSX e Props (75 min)
- 🎯 **Esercizio 1:** Demo Contatore interattivo (15 min)
- 🍔 Pausa pranzo (60 min)
- 🔄 State, eventi e rendering condizionale (60 min)
- 🎯 **Esercizio 2:** Todo List completa (30 min)
- 💬 Q&A (15 min)

### **Giorno 2 (9:00-16:00) - 7 ore**
- 🎣 Hook Avanzati - Panoramica Completa (useState, useEffect, useReducer, useRef, custom hooks) (75 min)
- 🎯 **Esercizio 3:** Custom Hook useLocalStorage (15 min)
- 🌐 Context API e gestione stato globale (45 min)
- 🏪 Redux Toolkit - panoramica e confronto (45 min)
- 🍔 Pausa pranzo (60 min)
- 📘 TypeScript con React - teoria e pratica (75 min)
- 🚀 Performance, best practices e ecosistema (30 min)
- 🎯 **Esercizio 4:** Task Manager TypeScript Completo (30 min)
- 💬 Q&A e troubleshooting finale (15 min)

---

## 🎯 Durante il Corso

### Esercizi Pratici:
Ogni giorno include esercizi live-coding:
1. **Esercizio 1** (Giorno 1): Counter interattivo - useState e props
2. **Esercizio 2** (Giorno 1): Todo List - useEffect e localStorage
3. **Esercizio 3** (Giorno 2): Custom Hook - useLocalStorage
4. **Esercizio 4** (Giorno 2): Task Manager completo - integrazione finale

Consulta `ESERCIZI.md` per i dettagli completi.

### Comandi Utili:
```bash
# Avvia app demo
npm run dev

# Build per produzione
npm run build

# Lint code
npm run lint
```

### Slide del Corso:
Le slide sono divise per giorno:
- **Giorno 1**: `slides-giorno1.md` (Fondamenti React)
- **Giorno 2**: `slides-giorno2.md` (Hook Avanzati e TypeScript)

Formato Markdown editabile con [Marp](https://marp.app/)

Per generare PowerPoint:
```bash
# Giorno 1
marp slides-giorno1.md --pptx -o slides-giorno1.pptx

# Giorno 2
marp slides-giorno2.md --pptx -o slides-giorno2.pptx
```

### Comandi Esercizi:

### Comandi Esercizi:
```bash
# Navigare in un esercizio
cd esercizi/esercizio1-counter

# Installare dipendenze
npm install

# Avviare dev server
npm run dev

# Consultare la soluzione
cat SOLUZIONE.md  # o aprire con VS Code
```

### Hot Keys VS Code:
- `Ctrl+Shift+P`: Command Palette
- `Ctrl+``: Terminal integrato
- `Alt+Shift+F`: Format document
- `Ctrl+D`: Select next occurrence
- `Ctrl+Shift+L`: Select all occurrences

---

## 🐛 Troubleshooting

### Errore: "Cannot find module 'react'"
```bash
cd demo-app
npm install
```

### Errore: "Port 3000 already in use"
```bash
# Termina processo e riprova
npm run dev -- --port 3001
```

### Errore TypeScript
```bash
# Resetta cache TypeScript
npm run build -- --force
```

### VS Code non riconosce TypeScript
1. Apri Command Palette (`Ctrl+Shift+P`)
2. Digita "TypeScript: Restart TS Server"

---

## 📚 Risorse Extra

### Documentazione Ufficiale:
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

### Cheat Sheets:
- [React Hooks](https://react.dev/reference/react)
- [TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react)
- [ES6+ Features](https://github.com/lukehoban/es6features)

### Tools Online:
- [CodeSandbox](https://codesandbox.io/) - Playground React
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [JSON Placeholder](https://jsonplaceholder.typicode.com/) - API mock

---

## 🤝 Durante il Corso

### Supporto:
- Alza la mano per domande
- Usa la chat per link e risorse
- Pair programming incoraggiato

### Best Practices:
- Salva spesso (`Ctrl+S`)
- Usa Git per versioning
- Commenta il codice quando necessario
- Testa ogni nuovo feature

### Dopo il Corso:
- Completa gli esercizi bonus
- Esplora le risorse extra
- Unisciti alla community React italiana
- Considera progetti pratici per consolidare

---

## 🎉 Obiettivi Finali

Alla fine del corso sarai in grado di:
- ✅ Creare componenti React funzionali
- ✅ Gestire stato con hooks (useState, useEffect)
- ✅ Implementare Context API per stato globale
- ✅ Gestire eventi e form
- ✅ Integrare TypeScript con React
- ✅ Utilizzare custom hooks
- ✅ Strutturare un progetto React professionale
- ✅ Debuggare app React con DevTools

**Buon corso! 🚀**
