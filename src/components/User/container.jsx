import { LoadingOutlined } from '@ant-design/icons';
import { useGetUsersQuery } from '../../redux/services/api';
import { User } from './component';

export const UserContainer = ({ userId }) => {
  return <User userId={userId} />;
};
