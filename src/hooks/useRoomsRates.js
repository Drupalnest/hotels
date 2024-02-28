// import Axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { buildFetchRatesUrl, fetchRoomsAndRates } from "../apis/rates";
// import { coreGet } from "../apis/core";

// export const useRoomsRates = (index, editCheckout) => {
//   const freshCheckout = useSelector(state => state.checkout);
//   const checkout = editCheckout || freshCheckout;
//   const [apiUrl, setApiUrl] = useState(null);
//   const [loadingRates, setLoadingRates] = useState(false);
//   const [rooms, setRooms] = useState(null);
//   const [roomRates, setRoomRates] = useState(null);

//   useEffect(() => {
//     if (checkout.Rooms && checkout.Rooms[index]) {
//       const newApiUrl = buildFetchRatesUrl(
//         checkout.Crs,
//         checkout.HotelCode,
//         checkout.Start,
//         checkout.End,
//         checkout.Rooms[index].adults,
//         checkout.Rooms[index].children,
//         checkout.promotionCode,
//         checkout.groupCode
//       );
//       setApiUrl(newApiUrl);
//     }
//   }, [checkout, index]);

//   // Fetch pricing.
//   useEffect(() => {
//     const source = Axios.CancelToken.source();
//     let didCancel = false;

//     const fetchRates = async () => {
//       let fetchedRooms = null;
//       const data = await coreGet(apiUrl, source);
//       if (data !== null) {
//         fetchedRooms = Object.values(data)[0].Rooms;
//       }
//       if (!didCancel) {
//         let thisRoomRates = fetchRoomsAndRates(fetchedRooms, checkout.discount, checkout.promotionCode, checkout.groupCode);
//         setLoadingRates(false);
//         setRoomRates(thisRoomRates);
//         setRooms(fetchedRooms);
//       }
//     }

//     (async () => {
//       setLoadingRates(true);
//       if (apiUrl) {
//         await fetchRates(apiUrl);
//         if (!didCancel) {
//           setLoadingRates(false);
//         }
//       }
//     })();

//     return () => {
//       didCancel = true;
//       source.cancel(`Request cancelled for fetch rooms rates for ${index}`);
//     }

//   }, [apiUrl, checkout, index]);

//   return [loadingRates, rooms, roomRates];
// };
