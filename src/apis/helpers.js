import Axios from "axios";
import {
  coreGet,
} from "./core";
import { Storage } from "../utils/storage";

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  if (Array.isArray(array)) {
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  } else {
    return initialValue;
  }
};

export const getCoreSessionToken = async () => {
  let token = null;
  const restUrl = `${process.env.GATSBY_CORE_BASE_URL}/rest/session/token`
  try {
    const response = await Axios.get(restUrl);
    token = await response.data;
  } catch (error) {
    console.log(error)
  }
  return token;
};

export const isEmptyObject = (obj) => {
  for (var x in obj) {
    if (obj.hasOwnProperty(x)) return false;
  }
  return true;
};

export const formatCurrency = (num, decimals = 2) => {
  return '$' + num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const getLocationPlaceId = async (params, source) => {
  let inputStr = encodeURIComponent(params.location);
  let apiUrl = `/placeid/${params.lat},${params.lon}/${inputStr}`;

  let locationPlaceId = null;

  // let config = {
  //   headers: {
  //     'api-key': process.env.GATSBY_CORE_API_KEY
  //   }
  // };
  // if (source) {
  //   config.cancelToken = source.token;
  // }
  // try {
  //   const apiResponse = await Axios.get(
  //     `https://rlhcorestg.prod.acquia-sites.com/api${apiUrl}`,
  //     config
  //   );
  //   if (apiResponse.status === 200) {
  //     locationPlaceId = apiResponse.data.placeid;
  //   }
  // } catch (error) {
  //   console.log(error)
  // }


  try {
    let cacheKey = `pc_${params.lat},${params.lon}`;
    locationPlaceId = Storage.GetLocalStorageValue(cacheKey);
    if(!locationPlaceId) {
      const response = await coreGet(apiUrl);
      locationPlaceId = response.placeid;
      Storage.SetLocalStorageValue(cacheKey, locationPlaceId);
    }
  } catch (error) {
    console.log(error);
  }

  return locationPlaceId;
};

export const sortRooms = (unsortedRooms) => {
  let availableRooms = [];
  let soldoutRooms = [];
  let soldoutAccessibleRooms = [];
  unsortedRooms.forEach((r) => {
    if(!r.Availability || r.Availability < 1) {
      let rname = r.Name?.toLowerCase();
      if(rname && (rname.indexOf('accessible') != -1 || rname.indexOf('ada') != -1)) {
        soldoutAccessibleRooms.push(r);
      } else {
        soldoutRooms.push(r);
      }
    } else {
      availableRooms.push(r);
    }
  });
  let sortedSoldoutRooms = soldoutRooms.sort((r1, r2) => r1.Name < r2.Name && -1);
  soldoutAccessibleRooms = soldoutAccessibleRooms.sort((r1, r2) => r1.Name < r2.Name && -1);

  availableRooms.push(...sortedSoldoutRooms);
  availableRooms.push(...soldoutAccessibleRooms);
  return availableRooms;
}
// const parsePlaceIDFromPredictions = (predictions, searchString) =>  {
//   let placeId = null;
//   if(predictions && predictions.length > 0) {
//     let filteredPrediction = predictions.filter((p) => {
//       return p.structured_formatting && p.structured_formatting.main_text && p.structured_formatting.main_text.toLowerCase() == searchString.toLowerCase();
//     })[0];
//     placeId = filteredPrediction && filteredPrediction.place_id;
//   }
//   return placeId;
// }
