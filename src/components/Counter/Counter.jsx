import { Button } from '../Buttons/Button';
import { useState } from 'react';
import style from './style.module.scss';

export const Counter = (prop) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className={style.root}>
      <div className={style.counter}>
        <Button
          className={style.button}
          title="-"
          onClick={() => setAmount(amount - 1)}
          disabled={amount === 0}
        />
        <span className={style.amount}>{amount}</span>
        <Button
          className={style.button}
          title="+"
          onClick={() => setAmount(amount + 1)}
          disabled={amount === 5}
        />
      </div>
    </div>
  );
};
