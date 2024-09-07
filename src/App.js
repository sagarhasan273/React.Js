import React, { useState } from 'react';
import Button from './component/Button';
import ShowCount from './component/ShowCount';
import Title from './component/Title';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increamentByOne = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const increamentByFive = () => {
    setCount2((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={increamentByOne}>Increament By One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={increamentByFive}>Increament By Five</Button>
    </div>
  );
}
