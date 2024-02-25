import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Drawer } from 'antd';
import { FloatButton } from 'antd';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selectDishAmountById } from '../../redux/UI/cart/selector';
import { DishContainer } from '../Dish/container';
import style from './style.module.scss';

export const Menu = ({ menu }) => {
    const { theme } = useContext(ThemeContext);
    const amount = useSelector(state => state?.cart);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <h2 className={classNames(style.subtitle, { [style.subtitleDark]: theme === 'dark' })}>
                Menu
            </h2>
            <ul className={style.list}>
                {menu?.map(id => (
                    <li
                        key={id}
                        className={classNames(style.item, { [style.itemDark]: theme === 'dark' })}
                    >
                        <DishContainer dishId={id} />
                    </li>
                ))}
            </ul>
            <Drawer
                zIndex={99999}
                closable={false}
                title='Cart'
                onClose={onClose}
                open={open}
                placement={'left'}
            >
                {Object.keys(amount)?.map(id => (
                    <li
                        key={id}
                        className={classNames(style.item, {
                            [style.itemDark]: theme === 'dark',
                        })}
                    >
                        <DishContainer dishId={id} />
                    </li>
                ))}
                <Button
                    type='primary'
                    onClick={() => console.log(JSON.stringify({ Order: 'Success' }))}
                >
                    Send order
                </Button>
            </Drawer>
            {Object.values(amount).find(e => e !== 0) && (
                <FloatButton
                    style={{ top: '13px', right: '84px', zIndex: 9999 }}
                    badge={{
                        count: Object.values(amount).reduce((pre, num) => {
                            return pre + num;
                        }),
                    }}
                    icon={<ShoppingCartOutlined />}
                    onClick={showDrawer}
                />
            )}
        </>
    );
};
