import { Button } from './Button';
import { useState } from 'react';

export const MenuButton = (prop) => {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <Button title="-" onClick={() => setAmount(amount - 1)} disabled={amount === 0} />
      {amount}
      <Button title="+" onClick={() => setAmount(amount + 1)} disabled={amount === 5} />
    </>
  );
};
