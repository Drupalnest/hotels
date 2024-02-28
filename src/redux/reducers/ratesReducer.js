export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_RATES':
      return { ...state, [action.crsCode]: action.payload };
    default:
      return state;
  }
};
