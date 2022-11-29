import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import RouterSwitch from "./RouterSwitch";

// contexts
import { useTheme } from './contexts/ThemeContext';

import './App.css';

function App() {
  const { theme } = useTheme();

  return (
    
      <div className="App" style={{
        backgroundColor: theme === 'light' ? 'white' : 'gray'
      }}>
        <BrowserRouter>
            <Navbar/>
            <RouterSwitch/>
        </BrowserRouter>
      </div>
  );
}

export default App;
