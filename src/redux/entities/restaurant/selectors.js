const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state)?.ids;

export const selectRestaurantLoadingStatus = (state) => selectRestaurantModule(state)?.status;

export const selectRestaurantById = (state, id) => selectRestaurantModule(state).entities[id];
