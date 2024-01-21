import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useGetUsersQuery } from '../../redux/services/api';
import style from './style.module.scss';

export const User = ({ userId }) => {
    const { data, isLoading } = useGetUsersQuery(undefined, {
        selectFromResult: result => {
            return {
                ...result,
                data: result?.data?.find(({ id }) => id === userId),
            };
        },
    });

    const { theme } = useContext(ThemeContext);

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
        <div
            className={classNames(style.name, {
                [style.nameDark]: theme === 'dark',
            })}
        >
            {data?.name ? data?.name : userId}
        </div>
    );
};
