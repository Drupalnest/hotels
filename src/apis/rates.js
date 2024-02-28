import Axios from "axios";
// import keys from 'lodash/keys';
import {
  browserName,
  fullBrowserVersion,
  osName,
  isMobile,
} from 'react-device-detect';
import {convertArrayToObject} from "./helpers.js";
/**
 *
 * @param {string} crs
 * @param {string} crsCode
 * @param {string} checkin
 * @param {string} checkout
 * @param {number} adults
 * @param {number} children
 * @param {string} promotionCode
 * @param {string} groupCode
 * @param {string|null} rateCode
 * @returns {string}
 */
export const buildFetchRatesUrl = (crs, crsCode, checkin, checkout, adults, children, promotionCode, groupCode, rateCode = null) => {
  let apiUrl = `${process.env.GATSBY_CORE_BASE_URL}/api/${crs}/availability?_format=json`;
  apiUrl += `&Quantity=1`;
  apiUrl += `&Start=${checkin}`;
  apiUrl += `&End=${checkout}`;
  apiUrl += `&Adults=${adults}`;
  apiUrl += `&Children=${children}`;
  apiUrl += `&HotelCode=${crsCode}`;
  // Promotion code.
  if (promotionCode !== null && promotionCode.length) {
    apiUrl += `&PromotionCode=${promotionCode}&ExactMatchOnly=true`;
  }
  // Group code.
  if (groupCode !== null && groupCode.length) {
    // This currently only applies to crs_name = windsurfer.
    apiUrl += `&InvBlockCode=${groupCode}`;
  }
  // Detailed rates
  if (rateCode !== null) {
    // Crs-specific params.
    if (crs === 'synxis') {
      apiUrl += '&AvailReqType=NonRoom';
    } else {
      apiUrl += '&ResponseType=RateRoomServiceItem';
    }
    // Rate plan code.
    apiUrl += `&RatePlanCode=${rateCode}`;
  }
  return apiUrl;
};

/**
 *
 * @param {Array<{Object}>} rooms
 * @param {string} discountCode
 * @param {string} promotionCode
 * @param {string} groupCode
 * @returns {null|[]}
 */
export const fetchRoomsAndRates = (rooms, discountCode = null, promotionCode = null, groupCode = null) => {
  let filteredRooms = [];
  if (rooms !== null && rooms !== undefined) {
    Object.keys(rooms).forEach(function (roomCode) {
      const room = rooms[roomCode];
      let rates = [];
      let selectedRates = [];
      Object.keys(room.Rates).forEach(function (rateCode) {
        const rate = room.Rates[rateCode];
        const defaultTypes = [
          'public',
          'member',
          'package'
        ];
        const rateObject = {
          ...rate,
          RateCode: rateCode
        };
        rates.push(rateObject);
        if (promotionCode !== null || (groupCode !== null && rateCode === `G:${groupCode}`)) {
          selectedRates.push(rateObject)
        }
        // Member discounts.
        if (discountCode !== null) {
          if (rate.RateType === 'plan' && rate.PlanType !== null) {
            const planType = rate.PlanType;
            if (discountCode === planType) {
              selectedRates.push(rateObject)
            }
          }
        }
        // Parse out base rates.
        else if (defaultTypes.includes(rate.RateType)) {
          selectedRates.push(rateObject)
        }
      });
      if (selectedRates.length) {
        selectedRates.sort((a, b) => parseFloat(a.RoomRate) - parseFloat(b.RoomRate));
        if (rates.length) {
          rates.sort((a, b) => parseFloat(a.RoomRate) - parseFloat(b.RoomRate));
        }
        let baseRate = rates.filter(rateObject => rateObject.IsBaseRate);
        if(!baseRate[0]) {
          baseRate = rates.filter(rateObject => rateObject.RateType == 'public');
        }
        const roomObject = {
          ...room,
          Rates: rates,
          FromRate: selectedRates[0].RoomRate,
          FromRateCode: selectedRates[0].RateCode,
          FromRateType: selectedRates[0].RateType,
          BaseRate: baseRate.length ? baseRate[0].RoomRate : null,
          BaseRateCode: baseRate[0] ? baseRate[0].RateCode : null,
          BaseRateType: baseRate[0] ? baseRate[0].RateType : null,
          RoomCode: roomCode
        };
        filteredRooms.push(roomObject);
      }
    });
    if (filteredRooms.length) {
      // Sort rooms by lowest price.
      filteredRooms.sort((a, b) => parseFloat(a.FromRate) - parseFloat(b.FromRate));
      return filteredRooms;
    }
  }
  return null;
};

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const setServicesDataAttributes = (service) => {
  const priceType = service.ServicePricingType.toString().toLowerCase().trim();
  const name = service.Title.toLowerCase().trim();
  const rate = parseFloat(service.Price.Rate);
  const taxes = parseFloat(service.Price.Taxes);
  let PricePerItem = false;
  let PricePerNight = false;
  let PricePerStay = false;
  switch (priceType) {
    case 'per stay':
    case 'per room': {
      PricePerStay = true;
    }
      break;
    case 'per night':
    case 'per adult per night':
    case 'per room per night': {
      PricePerNight = true;
    }
      break;
    case 'per item':
    case 'per person':
    case 'per person per night': {
      PricePerItem = true;
    }
  }
  // Override breakfast pricing (ADO 6507).
  if (name === 'breakfast' && rate > 0) {
    PricePerNight = true;
    PricePerItem = true;
  }
  const attributes = {
    'data-price-per-stay': PricePerStay,
    'data-price-per-night': PricePerNight,
    'data-price-per-item': PricePerItem,
    'data-rate': rate
  };
  return attributes;
};

export const getOTARates = async (params, source = null) => {
  const url = 'https://ratematch-us-prd.reztrip.io/widget/otarates';
  let config = {
    headers: {
      'X-api-key': process.env.GATSBY_RATEMATCH_API_KEY
    }
  };
  if (source !== null) {
    config.cancelToken = source.token;
  }

  let requestData = {
    "wtoken": params.wtoken,
    "arrival_date": params.checkin, //"2020-10-30",
    "departure_date": params.checkout, //"2020-11-01",
    "num_rates_display": 5, //how many maximum ota rates we want pull and show
    "num_adults": params.adults,
    "num_children": params.children,
    "child_age": [],
    "hotel_lowest_price": params.bestPrice,
    "num_rooms": params.totalRooms,
    "currency": "USD",
    "widget_request_client_time_zone": Intl.DateTimeFormat().resolvedOptions().timeZone, //"Asia/Calcutta", //guest time zone - from user agent
    "widget_request_client_time": new Date(),
    "device_type": isMobile ? 'mobile' : 'desktop',
    "device_OS": osName, //"macOS",
    "browser_name": browserName, //"Chrome",
    "browser_version": fullBrowserVersion,
    "language": "en"
  }
  try {
    const response = await Axios.post(
      url,
      requestData,
      config
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const containsGroupCode = (rooms, groupCode) => {
  let groupCodeFound = false;
  rooms && rooms.forEach((room, i) => {
    let rates = Object.keys(room.Rates);
    if(rates[0] !== 0) {
      let ratesObject = convertArrayToObject(room.Rates, "RateCode");
      rates = Object.keys(ratesObject);
    }
    if(rates.length > 0 && rates.indexOf('G:'+groupCode) != -1) {
      groupCodeFound =  true;
    }
  });
  return groupCodeFound;

}
