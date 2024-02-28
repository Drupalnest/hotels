export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_RESERVATIONCHECKOUT_TOTAL':
      return action.payload;
    default:
      return state;
  }
};
