import omit from "lodash/omit";
import { formatDate, searchDateFormat } from "../../apis/dates";
import addDays from "date-fns/addDays";
import { Room } from "../../models/room";

const INITIAL_STATE = {
  checkin: formatDate(new Date(), searchDateFormat),
  checkout: formatDate(addDays(new Date(), 1), searchDateFormat),
  latitude: null,
  longitude: null,
  searchString: "",
  searchType: "",
  distance: 50,
  discount: null,
  rooms: [new Room()],
  promotionCode: null,
  groupCode: null,
  priceFilter: null,
  amenities: {},
  brands: {},
  showSubform: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        ...action.payload,
        showSubform: true,
      };
    case "SET_DISTANCE":
      return { ...state, distance: action.payload };
    case "ADD_ROOM":
      return {
        ...state,
        rooms: { ...state.rooms, [action.payload.id]: action.payload },
      };
    case "ADD_AMENITY":
      return {
        ...state,
        amenities: {
          ...state.amenities,
          [action.payload.key]: action.payload.value,
        },
      };
    case "DELETE_AMENITY":
      return {
        ...state,
        amenities: omit(state.amenities, action.payload.key),
      };
    case "ADD_BRAND":
      return {
        ...state,
        brands: { ...state.brands, [action.payload.key]: action.payload.value },
      };
    case "DELETE_BRAND":
      return {
        ...state,
        brands: omit(state.brands, action.payload.key),
      };
    default:
      return state;
  }
};
