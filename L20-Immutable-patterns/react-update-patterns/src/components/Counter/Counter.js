import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(5);

  const decreaseCounter = () => {
    // setCounter(counter - 1);
    setCounter((prev) => {
      return prev - 1;
    })
  }

  const increaseCounter = () => {
    // setCounter(counter - 1);
    setCounter((prev) => {
      return prev + 1;
    })
  }

  return (
    <div style={{
      width: '180px',
      padding: '20px',
      border: '2px solid black'
    }}>
      <button onClick={decreaseCounter}>
        Decrease
      </button>
      <span
        style={{ margin: '0 10px' }}>
          { counter }
      </span>
      <button onClick={increaseCounter}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
