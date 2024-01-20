import { LoadingOutlined } from '@ant-design/icons';
import { useGetReviewsQuery, useGetUsersQuery } from '../../redux/services/api';
import { UserContainer } from '../User/container';

export const Review = ({ reviewIds }) => {
    const { data, isFetching } = useGetReviewsQuery(undefined, {
        selectFromResult: result => {
            return {
                ...result,
                data: result?.data?.find(({ id }) => id === reviewIds),
            };
        },
    });
    if (isFetching) {
        return (
            <LoadingOutlined
                style={{
                    fontSize: 24,
                    color: '#fa6400',
                }}
                spin
            />
        );
    }
    return (
        <>
            <UserContainer userId={data?.userId} />
            <span> {data?.text}</span>
        </>
    );
};
