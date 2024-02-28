export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HOTELS':
      return action.payload;
    default:
      return state;
  }
};
