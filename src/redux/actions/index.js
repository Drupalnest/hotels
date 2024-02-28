import Axios from "axios";
import addMinutes from "date-fns/addMinutes";
import { coreGet } from "../../apis/core";
import { convertArrayToObject } from "../../apis/helpers";
import {
  fetchContact,
  updateContact,
  updateLoginTime,
  revokeToken,
} from "../../apis/crm";
import { cancelReservationAPI } from "../../apis/crs";
import { auth } from "../../utils/auth";
import { Storage } from "../../utils/storage";
import isPast from "date-fns/isPast";
import { parseDate, parseDateFormat, formatDate } from "../../apis/dates";

export const setMember = (state) => {
  return {
    type: "SET_MEMBER",
    payload: state,
  };
};
export const clearMember = (state) => {
  return {
    type: "CLEAR_MEMBER",
    payload: state,
  };
};
export const setSearch = (state) => {
  return {
    type: "SET_SEARCH",
    payload: state,
  };
};
export const setSearchedHotelBrand = (state) => {
  return {
    type: "SET_SEARCHED_HOTEL_BRAND",
    payload: state || null,
  };
};
export const setDistance = (distance) => {
  return {
    type: "SET_DISTANCE",
    payload: distance,
  };
};
// Checkout actions.
export const setCheckout = (state) => {
  return {
    type: "SET_CHECKOUT",
    payload: state,
  };
};
export const addRoom = (room) => {
  return {
    type: "ADD_ROOM",
    payload: room,
  };
};
export const updateRoom = (room) => {
  return {
    type: "UPDATE_ROOM",
    payload: room,
  };
};
export const removeRoom = (room) => {
  return {
    type: "REMOVE_ROOM",
    payload: room,
  };
};
export const addCheckoutTotal = (state) => {
  return {
    type: "ADD_CHECKOUT_TOTAL",
    payload: state,
  };
};
export const addReservationEditCheckoutTotal = (state) => {
  return {
    type: "ADD_RESERVATIONCHECKOUT_TOTAL",
    payload: state,
  };
};
export const setEditReservationCheckout = (state) => {
  return {
    type: "SET_EDIT_CHECKOUT",
    payload: state,
  };
};
export const updateReservationRoom = (room) => {
  return {
    type: "UPDATE_RESERVATION_ROOM",
    payload: room,
  };
};
export const removeReservationRoom = (room) => {
  return {
    type: "REMOVE_RESERVATION_ROOM",
    payload: room,
  };
};
// Special Pricing actions.
export const unlockPricing = (state) => {
  Storage.SetLocalStorageValue("HR-discount-unlocked", true);
  return {
    type: "UNLOCK_SPECIAL_PRICING",
    payload: state,
  };
};
// Amenity Filters
export const addAmenity = (amenity) => {
  return {
    type: "ADD_AMENITY",
    payload: amenity,
  };
};
export const deleteAmenity = (amenity) => {
  return {
    type: "DELETE_AMENITY",
    payload: amenity,
  };
};
// Brand Filters
export const addBrand = (brand) => {
  return {
    type: "ADD_BRAND",
    payload: brand,
  };
};
export const deleteBrand = (brand) => {
  return {
    type: "DELETE_BRAND",
    payload: brand,
  };
};

export const clearError = (state) => {
  return {
    type: "CLEAR_ERROR",
  };
};

export const updateProfileModalStatus = (status) => {
  return {
    type: "UPDATE_PROFILE_MODAL_STATUS",
    payload: status,
  };
};

export const updateRequestStatus = (status) => {
  return {
    type: "UPDATE_REQUEST_STATUS",
    payload: status,
  };
};

export const clearUpdateRequestStatus = (state) => {
  return {
    type: "CLEAR_UPDATE_REQUEST_STATUS",
  };
};

export const addBrandLogo = (brand) => {
  return {
    type: "ADD_BRAND_LOGO",
    payload: brand,
  };
};

export const fetchHotels = (
  distance,
  latitude,
  longitude,
  siteId = 1,
  source = null
) => async (dispatch) => {
  let hotels = {};
  let apiUrl = `/hotel-proximity?_format=json&site_id=${siteId}`;
  apiUrl += `&coordinates[value]=${distance}`;
  apiUrl += `&coordinates[source_configuration][origin][lat]=${latitude}`;
  apiUrl += `&coordinates[source_configuration][origin][lon]=${longitude}`;
  let data = await coreGet(apiUrl, source);
  if (data !== null) {
    hotels = convertArrayToObject(data, "crs_code");
  }
  await dispatch({
    type: "ADD_HOTELS",
    payload: hotels,
  });
};

export const addRates = (crsCode, apiUrl, source = null) => async (
  dispatch
) => {
  let config = {
    headers: {
      "api-key": process.env.GATSBY_CORE_API_KEY,
    },
  };
  if (source !== null) {
    config.cancelToken = source.token;
  }
  let rates = null;
  try {
    const response = await Axios.get(apiUrl, config);
    if (response.status === 200) {
      const data = Object.values(response.data);
      rates = data[0];
    }
  } catch (error) {
    console.log(error);
  }
  await dispatch({
    type: "ADD_RATES",
    crsCode: crsCode,
    payload: {
      ...rates,
      expireCache: rates !== null ? addMinutes(new Date(), 5) : null,
      searchQuery: rates !== null ? apiUrl : null,
    },
  });
};

export const addCRMProfile = (source) => async (dispatch, getState) => {
  let memberId = getState().member.profile.id;
  if (memberId) {
    const profile = await fetchContact(memberId, source);
    if (profile.contact) {
      if (profile.contact.date_of_birth) {
        let dob = parseDate(profile.contact.date_of_birth, "MM-dd-yyyy");
        let updatedDob = formatDate(dob, "MM/dd/yyyy");
        profile.contact.date_of_birth = updatedDob;
      }
      dispatch({
        type: "ADD_CRM_PROFILE",
        payload: profile.contact,
      });
    } else {
      dispatch({
        type: "SET_ERROR",
        status: profile.error,
      });
    }
  }
};

export const updateCRMProfile = (data, source) => async (
  dispatch,
  getState
) => {
  let memberId = getState().member.profile.id;
  let crmProfile = getState().member.crmProfile;
  if (memberId) {
    let token = await auth.getIdToken();
    let apiData;

    apiData = {
      rlhc_firstname: data.first_name,
      rlhc_lastname: data.last_name || crmProfile.last_name,
      rlhc_address1: data.address1 || crmProfile.address1,
      rlhc_address2: data.address2 || crmProfile.address2,
      rlhc_city: data.city || crmProfile.city,
      rlhc_state: data.state || crmProfile.state,
      rlhc_zipcode: data.zip || crmProfile.zip,
      rlhc_country: data.country_code || crmProfile.country_code,
      rlhc_phonenumber: data.phone || crmProfile.phone,
      rlhc_email: data.email || crmProfile.email,
      rlhc_dateofbirth: data.date_of_birth || null,
      rlhc_gender: data.gender || crmProfile.gender,
      rlhc_donotemail: data.doNotEmail,
      rlhc_donotphone: data.doNotCall,
      rlhc_donotallowsms: false,
    };

    let contactPostData = {
      token: token,
      profile: {
        rlhc_oktaid: memberId,
        ...apiData,
      },
    };

    let reqType = "edit-profile";
    let response = await updateContact(contactPostData, source);
    if (response && !response.error) {
      dispatch({
        type: "UPDATE_CRM_PROFILE",
        payload: data,
      });
      dispatch(
        updateRequestStatus({
          type: reqType,
          status: "success",
        })
      );
    } else {
      dispatch(
        updateRequestStatus({
          type: reqType,
          status: "error",
        })
      );
    }
  }
};

export const addReservations = (source) => async (dispatch, getState) => {
  let profile = getState().member.crmProfile;
  if (profile) {
    // let resObj = profile.reservations;
    let reservations = profile.reservations && profile.reservations.data;
    let stays = profile.stays && profile.stays.data;

    if (reservations || stays) {
      let upcomingRes = [],
        cancelledRes = [],
        recentStays = [];
      reservations.forEach((res, key) => {
        if (!isPast(parseDate(res.arrival, parseDateFormat))) {
          if (
            res.reservationstatus == "Reserved" ||
            res.reservationstatus == "In House"
          ) {
            upcomingRes.push(res);
          } else {
            cancelledRes.push(res);
          }
        } else {
          // if arrival date is in past and still status is reserved or in house then it should go in recent stays
          if (
            res.reservationstatus == "Reserved" ||
            res.reservationstatus == "In House"
          ) {
            recentStays.push(res);
          }
        }
      });
      stays.forEach((stay, key) => {
        if (isPast(parseDate(stay.arrival, parseDateFormat))) {
          if (
            stay.reservationstatus == "Reserved" ||
            stay.reservationstatus === "Checked out" ||
            stay.reservationstatus == "In House"
          ) {
            recentStays.push(stay);
          } else {
            cancelledRes.push(stay);
          }
        }
      });

      upcomingRes = convertArrayToObject(upcomingRes, "crs_reservation_id");
      recentStays = convertArrayToObject(recentStays, "crs_reservation_id");
      cancelledRes = convertArrayToObject(cancelledRes, "crs_reservation_id");

      dispatch({
        type: "ADD_UPCOMING_RESERVATION",
        payload: upcomingRes,
      });
      dispatch({
        type: "ADD_CANCELLED_RESERVATION",
        payload: cancelledRes,
      });
      dispatch({
        type: "ADD_RECENT_STAYS",
        payload: recentStays,
      });
    }
  }
};

export const cancelReservation = (params, source) => async (
  dispatch,
  getState
) => {
  const cancelledResponse = await cancelReservationAPI(params, source);
  if (cancelledResponse.cancelID) {
    dispatch({
      type: "CANCEL_RESERVATION",
      payload: {
        resId: params.resId,
        cancelId: cancelledResponse.cancelID,
      },
    });
    dispatch(
      updateRequestStatus({
        type: "cancel-reservation",
        cancelID: cancelledResponse.cancelID,
        status: "success",
      })
    );
  } else {
    dispatch(
      updateRequestStatus({
        type: "cancel-reservation",
        status: "error",
      })
    );
  }
};

export const login = (data) => async (dispatch, getstate) => {
  await auth.handleAuthentication(data);
  const guest = {
    id: data.user.id,
    firstName: data.user.profile.firstName,
    lastName: data.user.profile.lastName,
    email: data.user.profile.login,
    sessionToken: data.sessionToken,
  };
  updateLoginTime(data.user.profile.login);
  dispatch(setMember({ profile: guest, isLoggedIn: true }));
  auth.startRefreshSessionTimer();
};

export const logout = () => async (dispatch, getstate) => {
  await revokeToken();
  await auth.logout();
  dispatch(clearMember());
};
