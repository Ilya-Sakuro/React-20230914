import { Button } from '../Buttons/Button';
import { useState } from 'react';
import style from './style.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import classNames from 'classnames';

export const Counter = (prop) => {
  const [amount, setAmount] = useState(0);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.root}>
      <div className={style.counter}>
        <Button theme={theme} title="-" onClick={() => setAmount(amount - 1)} disabled={amount === 0} />
        <span className={classNames(style.amount, { [style.amountDark]: theme === 'dark' })}>{amount}</span>
        <Button theme={theme} title="+" onClick={() => setAmount(amount + 1)} disabled={amount === 5} />
      </div>
    </div>
  );
};
