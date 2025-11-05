---
marp: true
theme: default
paginate: true
color: #333
backgroundColor: white
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


# Class Components vs Function Components
## React - Guida Rapida

---

## Cos'è un Class Component?

Un **Class Component** è un componente React scritto usando classi ES6.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- Eredita da `React.Component`
- Deve implementare il metodo `render()`
- Utilizza `this` per accedere a props e state

---

## Come si scrive un Class Component

<div class="tiny-code">

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
```
</div>

---

## Punti Importanti - Class Components

1. **Constructor**: inizializza lo state e bind dei metodi
2. **this.state**: oggetto che contiene lo state del componente
3. **this.setState()**: metodo per aggiornare lo state
4. **Lifecycle Methods**: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`
5. **this**: riferimento all'istanza della classe (attenzione al binding!)

---

## Lifecycle Methods

<div class="small-code">

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // Eseguito dopo il primo render
  }

  componentDidUpdate(prevProps, prevState) {
    // Eseguito dopo ogni aggiornamento
  }

  componentWillUnmount() {
    // Cleanup prima della rimozione del componente
  }

  render() {
    return <div>My Component</div>;
  }
}
```
</div>

---

## Function Component (Moderno)

<div class="small-code">

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidMount + componentDidUpdate
    return () => {
      // componentWillUnmount
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```
</div>

---

## Differenze Principali

| Class Components | Function Components |
|-----------------|---------------------|
| Sintassi verbosa | Sintassi concisa |
| `this.state` e `this.setState()` | `useState` Hook |
| Lifecycle methods | `useEffect` Hook |
| Binding necessario | No binding |
| Più complessi da testare | Più facili da testare |
| Performance leggermente inferiore | Performance ottimizzate |

---

## Perché preferire Function Components?

✅ **Codice più pulito e leggibile**
✅ **Hooks** permettono riutilizzo della logica
✅ **Meno boilerplate** (no constructor, no this, no bind)
✅ **Migliori performance** (bundle più piccolo)
✅ **Trend moderno** - React 16.8+ (2019)
✅ **Migliore composizione** della logica con custom hooks

---

## Confronto Pratico

<div class="small-code">

**Class Component** (12 righe)
```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'React' };
  }
  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}
```
</div>
<div class="small-code">

**Function Component** (4 righe)
```jsx
function Welcome() {
  const [name, setName] = useState('React');
  return <h1>Hello, {name}</h1>;
}
```
</div>

---

## Quando usare Class Components?

⚠️ **Solo in casi specifici:**

- Codice legacy esistente
- Error Boundaries (ancora non supportate da hooks)
- Dipendenze da librerie che richiedono classi

💡 **Raccomandazione**: Usa **sempre Function Components** nei nuovi progetti!

---

## Conclusioni

- I **Class Components** sono il vecchio approccio (pre-2019)
- I **Function Components** con Hooks sono lo standard moderno
- La community React ha abbracciato completamente i Function Components
- React ufficialmente raccomanda Function Components per tutto il nuovo codice

🎯 **Best Practice**: Scrivi Function Components + Hooks!

---

## Risorse

- [React Docs - Components and Props](https://react.dev/learn/your-first-component)
- [React Docs - Hooks](https://react.dev/reference/react)
- [Migrating from Classes to Functions](https://react.dev/reference/react/Component#alternatives)

---

# Grazie!
## Domande?

