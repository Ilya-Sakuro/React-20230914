import classNames from 'classnames';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { REQUEST_STATUS } from '../../constants/statusConfig';
import { RestaurantContext } from '../../contexts/RestaurantContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import {
  selectRestaurantIds,
  selectRestaurantLoadingStatus,
} from '../../redux/entities/restaurant/selectors';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/get-restaurant';
import { Tab } from '../Tab/component';
import { ThemeButton } from '../ThemeButton/component';
import style from './style.module.scss';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const RestaurantTabs = () => {
  const restaurantIds = useSelector((state) => selectRestaurantIds(state));
  const { activeRestaurantId, setActiveRestaurantId } = useContext(RestaurantContext);
  const { theme } = useContext(ThemeContext);

  const loadingStatus = useSelector(selectRestaurantLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <nav
      className={classNames(style.root, {
        [style.rootDark]: theme === 'dark',
      })}
    >
      {loadingStatus === REQUEST_STATUS.pending || loadingStatus === REQUEST_STATUS.rejected ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 33, color: 'black' }} spin />} />
      ) : (
        restaurantIds.map((id) => (
          <Tab
            key={id}
            tabId={id}
            setActiveRestaurantId={setActiveRestaurantId}
            activeTab={activeRestaurantId}
          />
        ))
      )}

      {loadingStatus === REQUEST_STATUS.pending || loadingStatus === REQUEST_STATUS.rejected ? (
        ''
      ) : (
        <ThemeButton />
      )}
    </nav>
  );
};
