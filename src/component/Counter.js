import React, { useReducer } from 'react';

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

  return (
    <div>
      <h1>Count - {count.counter}</h1>
      <button type="button" onClick={() => func('increment')}>
        increament
      </button>
      <button type="button" onClick={() => func('decrement')}>
        decreament
      </button>
    </div>
  );
}

export default Counter;
