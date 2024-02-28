const INITIAL_STATE = {
  isLoggedIn           : false,
  profile              : {},
  crmProfile           : {},
  upcomingReservations : {},
  recentStays          : {},
  cancelledReservations: {},
  error                : null,
  updateRequestStatus  : null,
  profileModal         : false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_MEMBER':
      return {
        ...state,
        ...action.payload,
        error: null
      };
    case 'CLEAR_MEMBER':
      return INITIAL_STATE;
    case 'ADD_CRM_PROFILE':
      return {
        ...state,
        crmProfile: {...state.crmProfile , ...action.payload},
        error: null
      };
    case 'UPDATE_CRM_PROFILE':
      return {
        ...state,
        crmProfile: {
          ...state.crmProfile ,
          ...action.payload
        },
        error: null
      };
    case 'ADD_UPCOMING_RESERVATION':
      return {
        ...state,
        upcomingReservations : action.payload,
        error: null
    };
    case 'ADD_RECENT_STAYS':
      return {
        ...state,
        recentStays : action.payload,
        error: null
    };
    case 'ADD_CANCELLED_RESERVATION':
      return {
        ...state,
        cancelledReservations : action.payload,
        error: null
    };
    case 'CANCEL_RESERVATION':
      let resId = action.payload.resId;
      let cancelID = action.payload.cancelId;
      let {[resId]: changedRes, ...rest} = state.upcomingReservations;
      let cancelledRes = changedRes ? {[resId]: {...changedRes, cancelID: cancelID}} : {};
      return {
        ...state,
        upcomingReservations : rest ,
        cancelledReservations: {...state.cancelledReservations, ...cancelledRes},
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error : action.payload || true,
        // updateRequestStatus: 'error'
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error : null
      };
    case 'UPDATE_PROFILE_MODAL_STATUS':
      return {
        ...state,
        profileModal : action.payload.profileModal || false
      };
    case 'UPDATE_REQUEST_STATUS':
      return {
        ...state,
        updateRequestStatus: {
          type: action.payload.type,
          status: action.payload.status,
          cancelID: action.payload.cancelID
        }
        // error : null
      };
    case 'CLEAR_UPDATE_REQUEST_STATUS':
      return {
        ...state,
        updateRequestStatus: {},
        // error : null
      };
    default:
      return state;
  }
};
