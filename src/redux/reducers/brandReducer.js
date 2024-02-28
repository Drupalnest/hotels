export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BRAND_LOGO':
      return action.payload;
    default:
      return state;
  }
};
