// import { useState, useEffect } from 'react';
// import { useSelector } from "react-redux";
// import addDays from "date-fns/addDays";

// const GROUP360URL = process.env.GATSBY_GROUP360_URL;//'https://app.groupsync.com/guest-events';
// const THEMEG360 = 'redlion';

// export default function useGroupBookingLink(placeId, pCheckin, pCheckout, pCountry) {
//   const search = useSelector((state) => state.search);
//   const checkin = pCheckin || search.checkin || new Date();
//   const checkout  = pCheckout || search.checkout || addDays(new Date(checkin), 1);
//   const [bookingLink, setBookingLink] = useState(null);

//   useEffect(() => {
//     let queryString = `arrival_date=${checkin}&departure_date=${checkout}&theme=${THEMEG360}`
//     if(placeId) {
//       queryString = `${queryString}&location_id=${placeId}`
//     }
//     if(pCountry) {
//       queryString = `${queryString}&country_code=${pCountry}`;
//     }
//     setBookingLink(`${GROUP360URL}?${queryString}`);
//   }, [search, placeId, pCheckin, pCheckout]);

//   return bookingLink;
// }
