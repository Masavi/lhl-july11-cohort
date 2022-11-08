import './App.css';
import DocumentTitle from './components/DocumentTitle';
import IntervalTimer from './components/IntervalTimer';
import RandomCatImage from './components/RandomCatImage';

function App() {
  return (
    <div className="App">
      <h1>Data Fetching & Other Side Effects</h1>
      <DocumentTitle />
      <IntervalTimer />
      <RandomCatImage />
    </div>
  );
}

export default App;
