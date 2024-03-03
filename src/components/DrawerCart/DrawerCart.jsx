import { Typography } from 'antd';
import { Empty } from 'antd';
import { Button } from 'antd';
import { Tag } from 'antd';
import { Drawer } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { cartActions } from '../../redux/UI/cart';
import { deleteCountPrice } from '../../redux/UI/countPrice';
import { DishContainer } from '../Dish/container';
import style from './style.module.scss';

export const DrawerCart = ({ open, onClose, setOpen }) => {
    const { theme } = useContext(ThemeContext);
    const amount = useSelector(state => state?.cart);
    const countPrice = useSelector(state => state?.countPrice);
    const [send, setSend] = useState(false);
    const dispatch = useDispatch();
    const amountId = [];

    for (const key in amount) {
        if (Object.hasOwnProperty.call(amount, key)) {
            if (send) {
                break;
            }
            if (amount[key] !== 0) {
                amountId.push(key);
            }
        }
    }
    const sendOrder = () => {
        setOpen(false),
            setSend(true),
            dispatch(cartActions.deleteAmount(amountId)),
            dispatch(deleteCountPrice(amountId));
    };

    return (
        <Drawer zIndex={99999} closable={false} title='Cart' onClose={onClose} open={open}>
            {amountId?.map(id => (
                <li
                    key={id}
                    className={classNames(style.item, {
                        [style.itemDark]: theme === 'dark',
                    })}
                >
                    <DishContainer dishId={id} />
                </li>
            ))}
            {!amountId.length ? (
                <Empty />
            ) : (
                <div className='flex flex-col items-end justify-between min-h-24 mt-5'>
                    <Tag className='flex justify-around items-center w-full m-0 p-0' color='orange'>
                        <Typography className='inline-block text-orange-700 font-semibold '>
                            Total price:
                        </Typography>
                        <span className='font-semibold text-lg'>
                            {Object.values(countPrice).length &&
                                Object.values(countPrice).reduce((prePrice, price) => {
                                    return prePrice + price;
                                })}
                            $
                        </span>
                    </Tag>
                    <Link to={'/restaurants/successfully'}>
                        <Button
                            type='primary'
                            className=' bg-orange-500 hover:!bg-orange-600 w-24'
                            onClick={sendOrder}
                        >
                            Send order
                        </Button>
                    </Link>
                </div>
            )}
        </Drawer>
    );
};
