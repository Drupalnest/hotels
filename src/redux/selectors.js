import {createSelector} from "reselect";

const selectAllRates = state => state.rates;

export const selectHotelRates = (codes) => createSelector(
  selectAllRates,
  (rates) => {
    const filtered = codes.reduce((obj, key) => ({ ...obj, [key]: rates[key] }), {});
    return filtered
  }
);
