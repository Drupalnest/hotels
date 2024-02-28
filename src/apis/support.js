import {
  coreRequest,
  coreGet
} from "./core";
//import Axios from "axios";

export const contactUs = async (params, source = null) => {
  let apiUrl = '/support-case/create?_format=json';
  let returnData;
  try {
    const response = await coreRequest({
      url: apiUrl,
      data: params,
      source: source
    });

    if (response) {
      if (response.error) {
        returnData = {
          error: true,
          errorSummary: response.message.errorSummary || response.message
        }
      } else {
        returnData = {
          error: false,
          value: response
        };
      }
    }
  } catch (error) {
    console.log(error.message);
    returnData = {
      error: true,
      errorSummary: 'Oops!! Something went wrong, please try again.'
    };
  }
  return returnData;
};

export const hotelAutoComplete = async (name, source = null) => {
  let apiUrl = "/hotel-autocomplete?site_id=1&_format=json&name=" + name;

  try {
    const response = await coreGet(apiUrl, source);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateGuestSMSStatus = async (params, source = null) => {
  // let config = {
  //   // headers: {
  //   //   'api-key': process.env.GATSBY_CORE_API_KEY
  //   // },
  //   timeout: 10000
  // };
  // if (source !== null) {
  //   config.cancelToken = source.token;
  // }
  // let queryString = Object.entries(params)
  //   .map(
  //     ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
  //   )
  //   .join("&");
  // let success = false;
  // try {
  //   const response = await Axios.get(
  //     'https://rlh-orchestration-api-management-dev.azure-api.net/api/orchestration/UpdateGuestSMSStatus?'+queryString,
  //     config
  //     );
  //   if (response.status === 200) {
  //     success = true;
  //   }
  // } catch (error) {
  //   console.log(error)
  // }
  // return success;
  let returnData;

  let queryString = Object.entries(params)
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    )
    .join("&");
  let apiUrl = "/hello-rewards/updateguestsmsstatus";//+queryString;
  try {
    const response = await coreRequest({
      url: apiUrl,
      data: params,
      source: source
    });
    if (response) {
      if (response.error) {
        returnData = {
          error: true,
          errorSummary: response.message.errorSummary || response.message
        }
      } else {
        returnData = {
          error: false,
          value: response
        };
      }
    }
  } catch (error) {
    console.log(error);
    returnData =  {
      error: true,
      errorSummary: 'Oops!! Something went wrong, please try again.'
    };
  }
  return returnData;
};
