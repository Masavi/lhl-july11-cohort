import './App.css';

// My components
import Counter from './components/Counter/Counter';

function App() {
  // THIS IS JAVASCRIPT XML or... JSX
  return (
      <div className="App">
        <h1>Hello July 11th Cohort! 🎈</h1>
        <h2>This is the App.js component</h2>

        <Counter counter={10} title={"Alpha"} />
        <Counter counter={-5} title={"Beta"} />
        <Counter counter={15} title={"Charlie"} />
        <Counter />
      </div>
  );
}

export default App;
