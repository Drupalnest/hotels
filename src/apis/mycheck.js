// import Axios from "axios";
import {
  coreGet
} from "./core";
// const baseUrl = 'https://rlhcorestg.prod.acquia-sites.com/api';

export const getRefreshToken = async (email = null, source = null) => {
  let refreshToken = null;

  const externalId = email !== null ? encodeURIComponent(email) : '';
  let apiUrl = `/billing?_format=json&ttl=300&externalID=${externalId}`;

  try {
    const response = await coreGet(apiUrl, source);
    if (response.error) {
      refreshToken = null;
    } else {
      refreshToken = response.refreshToken
    }
  } catch (error) {
    console.log(error);
  }

  // const externalId = email !== null ? encodeURIComponent(email) : '';
  // let apiUrl = `${baseUrl}/billing?_format=json&ttl=300&externalID=${externalId}`;
  //
  // let config = {
  //   headers: {
  //     'api-key': process.env.GATSBY_CORE_API_KEY
  //   }
  // };
  // if (source !== null) {
  //   config.cancelToken = source.token;
  // }
  // try {
  //   const response = await Axios.get(apiUrl, config);
  //   if (response.status === 200) {
  //     const data = response.data;
  //     refreshToken = data.refreshToken;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  return refreshToken;
};

// export const createReservation = async (data, source = null) => {
//   let confirmation = null;
//   let config = {
//     headers: {
//       'api-key': process.env.GATSBY_CORE_API_KEY
//     }
//   };
//   if (source !== null) {
//     config.cancelToken = source.token;
//   }
//   try {
//     const response = await Axios.post(
//       baseUrl + '/api/billing?_format=json',
//       data,
//       config
//     );
//     if (response.status === 200) {
//       confirmation = await response.data;
//     }
//   } catch (error) {
//     console.log(error)
//   }
//   return confirmation;
// };
