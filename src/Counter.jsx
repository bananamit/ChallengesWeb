import React from 'react';
import useCounter from './UseCounter';

export const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0); 
  
    return (
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={increment}>Aumentar</button>
        <button onClick={decrement}>Disminuir</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  };