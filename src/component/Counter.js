import React, { useReducer, useState } from 'react';
import { useSaga } from './useSaga';

const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

function Counter() {
  const [count, func] = useReducer(reducer, initialState);
  const [countTest, setCountTest] = useState(0);

  useSaga(() => {
    console.log('saga');
  }, [count?.counter]);

  return (
    <div>
      <h1>Count - {count.counter}</h1>
      <h1>Count Test - {countTest}</h1>
      <button
        type="button"
        onClick={() => {
          setCountTest((prev) => prev + 1);
        }}
      >
        increament
      </button>
      <button type="button" onClick={() => func('decrement')}>
        decreament
      </button>
    </div>
  );
}

export default Counter;
