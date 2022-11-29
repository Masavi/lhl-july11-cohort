import {
  Switch,
  Route,
} from "react-router-dom";

import { useTheme } from './contexts/ThemeContext';

const RouterSwitch = () => {
  const { toggleTheme } = useTheme();
  return (
    <Switch>
      {/* <Route path="/my-path" element={<MyComponent />} /> */}
      <Route exact path="/">
        <h2>This is the HOME</h2>
        <button onClick={toggleTheme}>Toggle theme!</button>
        {/* <YourOwnComponent /> */}
      </Route>
      <Route exact path="/about">
        <h2>This is the about section!</h2>
      </Route>
      <Route exact path="/login">
        <h2>LOG IN TO THE APPLICATION</h2>
      </Route>

      {/* 404 Not Found */}
      <Route path="*">
        <h3>THERE IS NOTHING TO LOOK AT HERE! go to the home page 🤨</h3>
      </Route>
    </Switch>
  );
}
 
export default RouterSwitch;