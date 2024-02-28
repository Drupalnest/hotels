// import Axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { buildFetchRatesUrl } from "../apis/rates";
// import { coreGet } from "../apis/core";

// export const useRateServices = (index) => {
//   const checkout = useSelector(state => state.checkout);
//   const [apiUrl, setApiUrl] = useState(null);
//   const [loadingServices, setLoadingServices] = useState(false);
//   const [services, setServices] = useState(null);
//   let rateCode = null;

//   if(checkout.Rooms && checkout.Rooms[index] && checkout.Rooms[index].rate) {
//     rateCode = checkout.Rooms[index].rate.RateCode;
//   }

//   useEffect(() => {
//     if (rateCode) {
//       const newApiUrl = buildFetchRatesUrl(
//         checkout.Crs,
//         checkout.HotelCode,
//         checkout.Start,
//         checkout.End,
//         checkout.Rooms[index].adults,
//         checkout.Rooms[index].children,
//         checkout.promotionCode,
//         checkout.groupCode,
//         rateCode
//       );
//       setApiUrl(newApiUrl);
//     }
//   }, [rateCode]);

//   // Fetch pricing.
//   useEffect(() => {
//     const source = Axios.CancelToken.source();
//     let didCancel = false;

//     const fetchServices = async () => {
//       let fetchedServices = null;
//       const data = await coreGet(apiUrl, source);
//       if (data !== null) {
//         fetchedServices = Object.values(data)[0].Services;
//       }
//       if (!didCancel) {
//         setServices(fetchedServices);
//       }
//     }

//     (async () => {
//       setLoadingServices(true);
//       if (apiUrl) {
//         await fetchServices();
//         if (!didCancel) {
//           setLoadingServices(false);
//         }
//       }
//     })();

//     return () => {
//       didCancel = true;
//       source.cancel(`Request cancelled for fetch rooms services`);
//     }

//   }, [apiUrl, checkout, index]);

//   return [loadingServices, services];
// };
