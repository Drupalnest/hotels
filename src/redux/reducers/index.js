import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import ratesReducer from "./ratesReducer";
import memberReducer from "./memberReducer";
import hotelsReducer from "./hotelsReducer";
import checkoutReducer from "./checkoutReducer";
import editReservationCheckoutReducer from "./editReservationCheckoutReducer";

import brandReducer from "./brandReducer";
import specialPricingReducer from "./specialPricingReducer";
import searchHotelBrandReducer from "./searchHotelBrandReducer";

import checkoutTotalReducer from "./checkoutTotalReducer";
import reservationCheckoutTotalReducer from "./reservationCheckoutTotalReducer";

import { reducer as formReducer } from "redux-form";
import { persistReducer } from "redux-persist";
import localforage from "localforage";

const rootPersistConfig = {
  key: 'root',
  storage: localforage,
  blacklist: ['form']
};

const rootReducer = combineReducers({
  search: searchReducer,
  checkout: checkoutReducer,
  editReservationCheckout: editReservationCheckoutReducer,
  hotels: hotelsReducer,
  rates: ratesReducer,
  member: memberReducer,
  form: formReducer,
  brand: brandReducer,
  show_special_pricing: specialPricingReducer,
  searched_hotel_brand_id: searchHotelBrandReducer,
  checkoutTotal: checkoutTotalReducer,
  editReservationCheckoutTotal: reservationCheckoutTotalReducer
});
export default persistReducer(rootPersistConfig, rootReducer);
