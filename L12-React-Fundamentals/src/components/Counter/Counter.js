// Hooks
import { useState } from 'react';
import './Counter.css';

function Counter(props) {
  // const state = {
  //   title: props.title || 'default',
  //   counter: props.counter || 0,
  // }
  const [title, setTitle] = useState(props.title || 'Default Title');
  const [counter, setCounter] = useState(props.counter || 0);

  const handleIncrement = () => {
    // counter = (counter + 1);
    setCounter(counter + 1);
    console.log('Increment! 🎃', counter);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
    console.log('Decrement! 🎁', counter);
  }

  const getSpanColor = () => {
    if (counter > 0) return 'green';
    if (counter < 0) return 'red';
    return 'yellow';
  }
  
  return (
    <article className="counter-container">
        <h3 onDoubleClick={
          () => console.log('i was double clicked!')
        }>
          This is the {title} component!
        </h3>

        <span style={{
          backgroundColor: `${getSpanColor()}`
        }}>Counter: {counter}</span>
        <div>
          <button onClick={handleDecrement}>
            Decrement
          </button>
          <button onClick={handleIncrement}>
            Increment
          </button>
        </div>
    </article>
  );
}

export default Counter;