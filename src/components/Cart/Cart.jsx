import { ShoppingCartOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DrawerCart } from '../DrawerCart/DrawerCart';

const Cart = () => {
    const amount = useSelector(state => state?.cart);
    const countPrice = useSelector(state => state?.countPrice);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <DrawerCart countPrice={countPrice} open={open} onClose={onClose} setOpen={setOpen} />

            <FloatButton
                className='!right-28 top-3'
                style={{ zIndex: 9999 }}
                badge={
                    Object.values(amount).find(e => e !== 0) && {
                        count: Object.values(amount).reduce((pre, num) => {
                            return pre + num;
                        }),
                    }
                }
                icon={<ShoppingCartOutlined />}
                onClick={showDrawer}
            />
        </>
    );
};

export { Cart };
