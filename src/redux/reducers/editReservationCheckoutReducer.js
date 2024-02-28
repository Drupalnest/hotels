import omit from 'lodash/omit';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_EDIT_CHECKOUT':
      return action.payload;
    case 'UPDATE_RESERVATION_ROOM':
      return {
        ...state,
        Rooms: {...state.Rooms, [action.payload.id]: action.payload}
      };
    case 'REMOVE_RESERVATION_ROOM':
      return {
        ...state,
        Rooms: omit(state.Rooms, action.payload.id)
      }
    default:
      return state;
  }
};
