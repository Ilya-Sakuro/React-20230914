import { Button } from '../Buttons/Button';
import style from './style.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { selectDishAmountById } from '../../redux/UI/cart/selector';
import { cartActions } from '../../redux/UI/cart';

export const Counter = ({ dishId }) => {
  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <div className={style.root}>
      <div className={style.counter}>
        <Button title="-" onClick={() => dispatch(cartActions.decrement(dishId))} disabled={amount === 0} />
        <span className={classNames(style.amount, { [style.amountDark]: theme === 'dark' })}>{amount}</span>
        <Button title="+" onClick={() => dispatch(cartActions.increment(dishId))} disabled={amount === 5} />
      </div>
    </div>
  );
};
