import { Link } from "react-router-dom";
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();

  return ( 
    <>
      <h1 style={{
        color: theme === 'light' ? 'black' : 'white'
      }}>Real World React</h1>
      <ul>
        <li>
          <Link style={{
        color: theme === 'light' ? 'black' : 'white'
      }} to="/">Home</Link>
        </li>
        <li>
          <Link style={{
        color: theme === 'light' ? 'black' : 'white'
      }} to="/about">About</Link>
        </li>
        <li>
          <Link style={{
        color: theme === 'light' ? 'black' : 'white'
      }} to="/login">Login</Link>
        </li>
      </ul>
    </>
   );
}
 
export default Navbar;