// import Axios from "axios";
// import { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addRates } from "../redux/actions";
// import { buildFetchRatesUrl, fetchRoomsAndRates } from "../apis/rates";
// import isAfter from 'date-fns/isAfter';
// import { addHotelsAvailabilityGTMDataLayer } from "../utils/datalayers";

// export const useHotelRates = (hotel, addGTM = false) => {
//   const dispatch = useDispatch();
//   const search = useSelector(state => state.search);
//   const rates = useSelector(state => state.rates[hotel.crs_code]);
//   const isMountedRef = useRef(null);

//   const apiUrl = buildFetchRatesUrl(
//     hotel.crs_name,
//     hotel.crs_code,
//     search.checkin,
//     search.checkout,
//     search.rooms[0].adults,
//     search.rooms[0].children,
//     search.promotionCode,
//     search.groupCode
//   );
//   const [searchQuery, setSearchQuery] = useState(apiUrl);
//   const [isLoadingRates, setIsloadingRates] = useState(false);
//   const [isDataLayer, setIsDataLayer] = useState(false);

//   // const price = hotel.bestPrice !== null ? hotel.bestPrice : null;

//   const fetchRates = async (source) => {
//     if (!isMountedRef.current) {
//       return;
//     } else {
//       let getNewRates = false;
//       if (rates !== null && rates !== undefined) {
//         // Check if search filters changed.
//         if (searchQuery !== rates.searchQuery) {
//           getNewRates = true;
//         } else if (rates.hasOwnProperty('Rooms')) {
//           const currentTime = new Date();
//           const cacheTime = new Date(rates.expireCache);
//           // Check for cache expiration.
//           if (isAfter(currentTime, cacheTime)) {
//             getNewRates = true;
//           }
//         }
//       }
//       // No rates in redux.
//       else {
//         getNewRates = true;
//       }
//       if (getNewRates) {
//         if (isMountedRef.current) {
//           setIsloadingRates(true);
//           await dispatch(addRates(hotel.crs_code, apiUrl, source));
//           if (isMountedRef.current) {
//             setSearchQuery(apiUrl);
//             setIsloadingRates(false);
//           }
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     isMountedRef.current = true;
//     let source = Axios.CancelToken.source();
//     (async () => {
//       await fetchRates(source);
//     })();
//     const intervalId = setInterval(async () => {
//       await fetchRates(source);
//     }, 300000);
//     // Cleanup on unmount.
//     return () => {
//       clearInterval(intervalId);
//       isMountedRef.current = false;
//       source.cancel(`Request cancelled for ${apiUrl}`);
//     }
//   }, [searchQuery]);

//   let selectedRoom = null;
//   if (rates !== null && rates !== undefined) {
//     let soldout = true;
//     if (rates.hasOwnProperty('Rooms')) {
//       const parsedRooms = fetchRoomsAndRates(rates.Rooms, search.discount, search.promotionCode, search.groupCode);
//       if (parsedRooms !== null) {
//         selectedRoom = parsedRooms[0];
//       }
//       if(rates.Rooms && parsedRooms) {
//         soldout = false
//       }
//     }
//     if(!isLoadingRates && isMountedRef.current && addGTM && !isDataLayer) {
//       addHotelsAvailabilityGTMDataLayer(hotel, search, soldout);
//       setIsDataLayer(true);
//     }

//   }


//   return [isLoadingRates, selectedRoom];

// };
