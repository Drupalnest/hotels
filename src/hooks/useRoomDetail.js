// import Axios from "axios";
// import { useState, useEffect } from "react";
// import { fetchHotelDetails } from "../apis/crs";

// export const useRoomDetail = (hotelCode, roomCode, resId, crsName) => {
//   const [loadingRoomDetail, setLoadingRoomDetail] = useState(false);
//   const [roomDetail, setRoomDetail] = useState(null);
//   const [allRooms, setAllRooms] = useState(null);


//   // Fetch room details.
//   useEffect(() => {
//     const source = Axios.CancelToken.source();
//     let didCancel = false;

//     (async () => {
//       setLoadingRoomDetail(true);
//       if (hotelCode || resId) {
//         const data = await fetchHotelDetails({hotelCode: hotelCode, resId: resId, crs: crsName}, source);
//         if (data !== null) {
//           let fetchedRooms = data.value && data.value[hotelCode] && data.value[hotelCode].Rooms;
//           let roomDetail = fetchedRooms && fetchedRooms[roomCode];
//           if (!didCancel) {
//             setRoomDetail(roomDetail);
//             setAllRooms(fetchedRooms);
//           }
//         }

//         if (!didCancel) {
//           setLoadingRoomDetail(false);
//         }
//       }
//     })();

//     return () => {
//       didCancel = true;
//       source.cancel(`Request cancelled for fetch room details`);
//     }

//   }, [hotelCode, roomCode]);

//   return [loadingRoomDetail, roomDetail, allRooms];
// };
