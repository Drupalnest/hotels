// import Axios from "axios";
import {
  coreGet,
  coreRequest,
  coreGetContent
} from "./core";

export const fetchReservationDetails = async (params, source = null) => {
  let resId = params.resId.toUpperCase();
  let lastName = params.lastName.trim().toLowerCase();
  let crs           = getCrsFromId(resId);
  let hotelCode     = !params.hotelCode ? getHotelCodeFromId(resId, crs) : params.hotelCode;

  const queryString = `ID=${resId}&HotelCode=${hotelCode}&Surname=${lastName}`;
  const apiUrl      = encodeURI(`/${crs}/reservation?${queryString}`);
  let returnData;
  try {
    const response = await coreGet(apiUrl, source);
    if (response.error) {
      returnData = {
        error: true,
        errorSummary: response.message
      }
    } else {
      returnData = {
        error: false,
        value: {...response, Crs: crs}
      };
    }
  } catch (error) {
    console.log(error);
    returnData = {
      error: true,
      errorSummary: 'Oops!! Something went wrong, please try again.'
    };
  }
  return returnData;
};

export const fetchHotelDetails = async (params, source = null) => {
  let crs           = params.crs || getCrsFromId(params.resId);
  let hotelCode     = !params.hotelCode ? getHotelCodeFromId(params.resId, crs) : params.hotelCode;

  const queryString = `HotelCode=${hotelCode}`;
  const apiUrl      = encodeURI(`/${crs}/details?${queryString}`);
  let returnData;
  try {
    const response = await coreGet(apiUrl, source);
    if (response.error) {
      returnData = {
        error: true,
        errorSummary: response.message
      }
    } else {
      returnData = {
        error: false,
        value: response
      };
    }
  } catch (error) {
    console.log(error);
    returnData = {
      error: true,
      errorSummary: 'Oops!! Something went wrong, please try again.'
    };
  }
  return returnData;
};

export const fetchHotelDetailsFromCore = async (hotelCode, source) => {
  const apiUrl = `/hotels?filter[status][value]=1&filter[hotel_code][value]=${hotelCode}&include=brand_id`;
  const data = await coreGetContent(apiUrl, source);

  return data;
}

export const createReservation = async (data, source = null) => {
  // let response = null;
  // let config = {
  //   headers: {
  //     'api-key': process.env.GATSBY_CORE_API_KEY
  //   }
  // };
  // if (source !== null) {
  //   config.cancelToken = source.token;
  // }
  // try {
  //   const apiResponse = await Axios.post(
  //     'https://rlhcorestg.prod.acquia-sites.com/api/billing?_format=json',
  //     data,
  //     config
  //   );
  //   if (apiResponse.status === 200) {
  //     response = await apiResponse.data;
  //   }
  // } catch (error) {
  //   console.log(error)
  // }

  const apiUrl = `/billing`;
  const response = await coreRequest({
    url    : apiUrl,
    data   : data,
    source : source
  });


  return response;

};

export const updateReservation = async (data, source = null) => {
  // let response = null;
  // let config = {
  //   headers: {
  //     'api-key': process.env.GATSBY_CORE_API_KEY
  //   }
  // };
  // if (source !== null) {
  //   config.cancelToken = source.token;
  // }
  // try {
  //   const apiResponse = await Axios.put(
  //     'https://rlhcorestg.prod.acquia-sites.com/api/billing?_format=json',
  //     data,
  //     config
  //   );
  //   if (apiResponse.status === 200) {
  //     response = await apiResponse.data;
  //   }
  // } catch (error) {
  //   console.log(error)
  // }

  const apiUrl = `/billing`;
  const response = await coreRequest({
    url    : apiUrl,
    data   : data,
    source : source,
    method: 'put'
  });
  return response;

};

export const cancelReservationAPI = async (params, source = null) => {
  let crs       = getCrsFromId(params.resId);
  let hotelCode = !params.hotelCode ? getHotelCodeFromId(params.resId, crs) : params.hotelCode;

  const queryData = {
    ID: params.resId,
    HotelCode: hotelCode
  };
  const apiUrl = `/${crs}/reservation?_format=json`;
  try {
    const response = await coreRequest({
      url    : apiUrl,
      data   : queryData,
      method : 'patch',
      source : source
    });

    let refundResponse = null;
    if(response.ID) {
      refundResponse = await refundOrder(params.resId, source);
    }
    return {
      cancelID: response.ID,
      refundResponse: refundResponse
    };
  } catch(e) {
    return null;
  }


};

export const refundOrder = async (resId, source = null) => {

  const queryData = {
    reservationId: resId
  };
  const apiUrl = `/hello-rewards/refundorder`;

  const response = await coreRequest({
    url    : apiUrl,
    data   : queryData,
    source : source
  });
  return response;
};


function getHotelCodeFromId (id, crs) {
  if (crs === 'synxis') {
    var charArray = [];
    for (var i = 0; i < id.length; i++) {
      if (isNaN(parseInt(id.charAt(i), 10))) {
        break;
      }
      charArray.push(id.charAt(i));
    }
    return charArray.join('');
  }
}

function getCrsFromId (id) {
  var regEx = new RegExp('^[0-9]{4,5}[A-Z]{2}[0-9]*$');
  return regEx.test(id) ? 'synxis' : 'windsurfer';
}

export const createResRequestJSON = (checkout) => {
  let guests = checkout.GuestDetails || {};
  let rooms = checkout.Rooms ? Object.values(checkout.Rooms) : [];
  let roomsForRequest = [];
  let payment = checkout.Payment;
  let applyBucks = !!payment.with_giftcards;
  let bucksAmount = parseFloat(payment.giftcard_amount);
  let appliedBucks = 0;
  rooms.forEach((room) => {

    // create room rate request object
    let roomRates = []; //@TODO : consider gift card amount
    if(room.rate && room.rate.RoomRateNightly && room.rate.RoomRateNightly.length > 1) { //multi nights
      room.rate.RoomRateNightly.forEach((rate, i) => {
        let amountBeforeTax = parseFloat(rate.Rate);
        if(applyBucks && bucksAmount > 0 && amountBeforeTax > 0) {
          if(bucksAmount <= amountBeforeTax) {
            amountBeforeTax = amountBeforeTax - bucksAmount
            appliedBucks += bucksAmount;
            bucksAmount = 0;
          } else {
            bucksAmount = bucksAmount - amountBeforeTax;
            appliedBucks += amountBeforeTax;
            amountBeforeTax = 0;
          }
        }
        roomRates.push({
          "AmountBeforeTax": amountBeforeTax,
          "EffectiveDate": rate.EffectiveDate,
          "ExpireDate": rate.ExpireDate
        })
      });
    } else {
      // add rates for single night.
      let amountBeforeTax = parseFloat(room.rate.Subtotal);

      if(applyBucks && bucksAmount > 0 && amountBeforeTax > 0) {
        if(bucksAmount <= amountBeforeTax) {
          amountBeforeTax = amountBeforeTax - bucksAmount;
          appliedBucks += bucksAmount;
          bucksAmount = 0;
        } else {
          bucksAmount = bucksAmount - amountBeforeTax;
          appliedBucks += amountBeforeTax;
          amountBeforeTax = 0;
        }
      }

      roomRates.push({
        "AmountBeforeTax": amountBeforeTax,
        "EffectiveDate": checkout.Start,
        "ExpireDate": checkout.End
      })
    }

    // create room services object
    let roomServices = [];
    room.services && Object.values(room.services).forEach((ser, i) => {
      roomServices.push({
        "Description": ser.Description,
        "Quantity": ser.AvailedQuantity,
        "ServiceInventoryCode": ser.ServiceInventoryCode,
        "ServiceRPH": ser.ServiceRPH,
        "Total": (parseFloat(ser.Price) + parseFloat(ser.Tax)) * ser.AvailedQuantity
      })
    });

    let roomObj = {
      "Count": {
        "Adult": room.adults,
        "Child": room.children || 0
      },
      "RoomTypeCode": room.room.RoomCode,
      "RatePlanCode": checkout.Crs == 'windsurfer' && checkout.groupCode ? `G:${checkout.groupCode}` : room.rate.RateCode ,
      "RoomRates": roomRates,
      "roomServices": roomServices,
    }
    //@TODO Need to specifically test for groupCode
    // if(checkout.Crs == 'windsurfer' && checkout.groupCode) {
    //   roomObj.RatePlanCode = `G:${checkout.groupCode}`; // Not sure if room.rate.RateCode and checkout.groupCode would be same
    // }
    roomsForRequest.push(roomObj);
  });
  if(applyBucks) {
    payment.giftcard_amount = Math.ceil(appliedBucks);
  }
  let request = {
    "payment": payment,
    "reservation": {
      "Rooms": roomsForRequest,
      "Start": checkout.Start,
      "End": checkout.End,
      "crs": checkout.Crs,
      "HotelCode": checkout.HotelCode,
      "NumberOfUnits": 1,
      "ResGuests": [
        {
          "Email": guests.email,
          "GivenName": guests.firstName,
          "Surname": guests.lastName,
          "PhoneNumber": guests.phoneNumber
        }
      ],
      "PromotionCode": checkout.promotionCode,
      "EmailTemplate": "Guestconf"
    }
  };
  if(checkout.Crs == 'windsurfer' && checkout.groupCode) {
    request.reservation.InvBlockCode = checkout.groupCode;
    request.reservation.RatePlanCode = `G:${checkout.groupCode}`;
  }
  if (checkout.SpecialRequests) {
    request.reservation.SpecialRequests = checkout.SpecialRequests;
  }

  return request;
}
