import { Button } from '../Buttons/Button';
import { useState } from 'react';

export const Counter = (prop) => {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <Button title="-" onClick={() => setAmount(amount - 1)} disabled={amount === 0} />
      <span>{amount}</span>
      <Button title="+" onClick={() => setAmount(amount + 1)} disabled={amount === 5} />
    </>
  );
};
