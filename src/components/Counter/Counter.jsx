import { Button } from '../Buttons/Button';
import style from './style.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { selectDishAmountById } from '../../redux/UI/cart/selector';
import { cartActions } from '../../redux/UI/cart';

import { decrementCountPrice, incrementCountPrice } from '../../redux/UI/countPrice';
import { selectCountPriceById } from '../../redux/UI/countPrice/selector';

export const Counter = ({ dishId, price }) => {
    const amount = useSelector(state => selectDishAmountById(state, dishId));
    const countPrice = useSelector(state => selectCountPriceById(state, dishId, price));
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(cartActions.increment(dishId));
        dispatch(incrementCountPrice({ dishId, amount, price }));
    };
    const decrement = () => {
        dispatch(cartActions.decrement(dishId));
        dispatch(decrementCountPrice({ dishId, amount, price }));
    };

    return (
        <div className={style.root}>
            <div className='flex flex-col items-center justify-center bg-lime-300 w-9 text-sm text-lime-600 rounded-lg'>
                {countPrice}$
            </div>
            <div className={style.counter}>
                <Button title='-' onClick={decrement} disabled={amount === 0} />
                <span
                    className={classNames(style.amount, { [style.amountDark]: theme === 'dark' })}
                >
                    {amount}
                </span>
                <Button title='+' onClick={increment} disabled={amount === 5} />
            </div>
        </div>
    );
};
