export default (state = false, action) => {
  switch (action.type) {
    case 'UNLOCK_SPECIAL_PRICING':
      return action.payload;
    default:
      return state;
  }
};