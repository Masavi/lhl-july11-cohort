import { useEffect, useState } from 'react';

function IntervalTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const idInterval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(idInterval);
  }, [timer])

  return (
    <>
      <h2>Time moves slow... {timer}</h2>
    </>
  );
}

export default IntervalTimer;