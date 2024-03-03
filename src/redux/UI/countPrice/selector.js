const selectCountPriceModule = state => state?.countPrice;
export const selectCountPriceById = (state, dishId, price) =>
    selectCountPriceModule(state)[dishId] || price;
