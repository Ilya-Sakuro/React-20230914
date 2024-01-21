import { LoadingOutlined } from '@ant-design/icons';
import { useGetProductsQuery } from '../../redux/services/api';
import { Counter } from '../Counter/Counter';

export const Dish = ({ dishId }) => {
    const { data, isLoading } = useGetProductsQuery(undefined, {
        selectFromResult: result => {
            return { ...result, data: result?.data?.find(({ id }) => id === dishId) };
        },
    });

    if (isLoading) {
        return (
            <LoadingOutlined
                style={{
                    fontSize: 24,
                    color: '#fa6400',
                }}
            />
        );
    }

    return (
        <>
            {data?.name} <Counter dishId={data?.id} />
        </>
    );
};
