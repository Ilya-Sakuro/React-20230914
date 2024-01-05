import { REQUEST_STATUS } from '../../../constants/statusConfig';

export const selectDishModule = (state) => state?.dish;

export const selectDishById = (state, id) => selectDishModule(state)?.entities[id];

export const selectDishIds = (state) => selectDishModule(state)?.ids;

export const selectDishLoadingStatus = (state) => selectDishModule(state)?.status;

export const selectIsDishesLoading = (state) => selectDishLoadingStatus(state) === REQUEST_STATUS.loading;

export const selectIsDishLoadingFailed = (state) => selectDishLoadingStatus(state) === REQUEST_STATUS.failed;
