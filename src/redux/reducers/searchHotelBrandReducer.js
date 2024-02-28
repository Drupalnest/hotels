export default (state = null, action) => {
  switch (action.type) {
    case 'SET_SEARCHED_HOTEL_BRAND':
      return action.payload;
    default:
      return state;
  }
};
