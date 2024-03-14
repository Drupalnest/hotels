// // HotelDetailsComponent.js
// import React from "react";
// import { useSelector } from "react-redux";
// import room1 from "../../assets/room1.jpg";

// const HotelDetailsComponent = () => {
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);

//   if (!selectedHotel) {
//     return <div>No hotel selected</div>;
//   }

//   console.log("selectedHotel", selectedHotel); // Check if you see details in the console

//   return (
//     <div className="flex flex-row border-2">
//       <div>
//         <img
//           src={room1}
//           className=""
//           style={{
//             border: "2px solid red",
//             width: "200px",
//             height: "150px",
//           }}
//         />
//       </div>
//       <div className="flex flex-col border-2">
//         <div className="flex flex-row border-2">
//           <p>COMFORT</p>
//           <p>BUSINESS FRIENDLY</p>
//           <p>SPA & WELLNESS</p>
//         </div>
//         <div>
//           <span>
//             <p> {selectedHotel.name}</p>
//           </span>
//           <span>
//             <p> {selectedHotel.address}</p>
//             <p>{selectedHotel.hotel_code}</p>
//           <p>{selectedHotel.phone}</p>
//           </span>
//           <span>
//             <p>Free Internet Access,Free Parking Amenities</p>
//             <p>Fully Refundable Rates,Pay Later Available</p>
//           </span>
//           <span className="flex flex-row">
//             <p>7.9</p>
//             <p>291 Rating</p>
//             <p>3-Star Hotel</p>
//           </span>
//         </div>
//       </div>
//       <div>
//         <div>
//           <p>₹11533</p>
//           <p>₹123,066 for 2 nights</p>
//           <button>Choose your room</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelDetailsComponent;

// // HotelDetailsComponent.js
// import React from "react";
// import { useSelector } from "react-redux";
// import room1 from "../../assets/room1.jpg";

// const HotelDetailsComponent = () => {
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);

//   if (!selectedHotel) {
//     return <div>No hotel selected</div>;
//   }

//   console.log("selectedHotel", selectedHotel); // Check if you see details in the console

//   return (
//     <div className="flex flex-row border-2">
//       <div>
//         <img
//           src={room1}
//           className=""
//           style={{
//             border: "2px solid red",
//             width: "200px",
//             height: "150px",
//           }}
//         />
//       </div>
//       <div className="flex flex-col border-2">
//         <div className="flex flex-col border-2">
//           {/* Add your amenities rendering logic here */}
//           {selectedHotel.amenities &&
//             selectedHotel.amenities.map((amenity) => (
//               <p key={amenity.machine_name}>{amenity.name}</p>
//             ))}
//         </div>
//         <div>
//           <span>
//             <p>{selectedHotel.name}</p>
//           </span>
//           <span>
//             {/* Access address properties individually */}
//             <p>{selectedHotel.address && selectedHotel.address.address_line1}</p>
//             <p>{selectedHotel.hotel_code}</p>
//             <p>{selectedHotel.phone}</p>
//             <p>Latitude: {selectedHotel.lat_lon && selectedHotel.lat_lon.lat}</p>
//             <p>Longitude: {selectedHotel.lat_lon && selectedHotel.lat_lon.lon}</p>
//           </span>
//           <span>
//             <p>Free Internet Access, Free Parking Amenities</p>
//             <p>Fully Refundable Rates, Pay Later Available</p>
//           </span>
//           <span className="flex flex-row">
//             <p>7.9</p>
//             <p>291 Rating</p>
//             <p>3-Star Hotel</p>
//           </span>
//         </div>
//       </div>
//       <div>
//         <div>
//           <p>₹11533</p>
//           <p>₹123,066 for 2 nights</p>
//           <button>Choose your room</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelDetailsComponent;

// // HotelDetailsComponent.js
// import React from "react";
// import { useSelector } from "react-redux";
// import room1 from "../../assets/room1.jpg";

// const HotelDetailsComponent = () => {
//     const filteredHotels = useSelector((state) => state.hotel.filteredHotels);

//   if (!filteredHotels) {
//     return <div>No hotel selected</div>;
//   }

//   console.log("selectedHotel", filteredHotels); // Check if you see details in the console

//   return (
//     <div className="flex flex-row border-2">
//       <div>
//         <img
//           src={room1}
//           className=""
//           style={{
//             border: "2px solid red",
//             width: "200px",
//             height: "150px",
//           }}
//         />
//       </div>
//       <div className="flex flex-col border-2">
//         <div className="flex flex-col border-2">
//           {/* Add your amenities rendering logic here */}
//           {selectedHotel.amenities &&
//             selectedHotel.amenities.map((amenity) => (
//               <p key={amenity.machine_name}>{amenity.name}</p>
//             ))}
//         </div>
//         <div>
//           <span>
//             <p>{selectedHotel.name}</p>
//           </span>
//           <span>
//             {/* Access address properties individually */}
//             <p>{selectedHotel.address && selectedHotel.address.address_line1}</p>
//             <p>{selectedHotel.hotel_code}</p>
//             <p>{selectedHotel.phone}</p>
//             <p>Latitude: {selectedHotel.lat_lon && selectedHotel.lat_lon.lat}</p>
//             <p>Longitude: {selectedHotel.lat_lon && selectedHotel.lat_lon.lon}</p>
//           </span>
//           <span>
//             <p>Free Internet Access, Free Parking Amenities</p>
//             <p>Fully Refundable Rates, Pay Later Available</p>
//           </span>
//           <span className="flex flex-row">
//             <p>7.9</p>
//             <p>291 Rating</p>
//             <p>3-Star Hotel</p>
//           </span>
//         </div>
//       </div>
//       <div>
//         <div>
//           <p>₹11533</p>
//           <p>₹123,066 for 2 nights</p>
//           <button>Choose your room</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelDetailsComponent;

// // HotelDetailsComponent.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import room1 from "../../assets/room1.jpg";
// import { setFilteredHotels } from "../../redux/actions";

// const HotelDetailsComponent = () => {
//   const dispatch = useDispatch();
//   const filteredHotels = useSelector((state) => state.hotel.filteredHotels);

//   useEffect(() => {
//     // This will run whenever hotels in Redux store changes
//     console.log("Hotels in Redux store:", filteredHotels);
//   }, [filteredHotels]);

//   if (!filteredHotels || filteredHotels.length === 0) {
//     return <div>No hotel selected</div>;
//   }

//   return (
//     <div className="flex flex-col border-2 border-red-500">
//       {filteredHotels.map((hotel) => (
//         <div key={hotel.id} className="flex flex-row">
//           <img
//             src={room1}
//             alt="Hotel Room"
//             style={{
//               border: "2px solid red",
//               width: "200px",
//               height: "150px",
//             }}
//           />
//           <div className="flex flex-col border-2">
//             {/* <div className="flex flex-col border-2">

//               {hotel.amenities &&
//                 hotel.amenities.map((amenity) => (
//                   <p key={amenity.machine_name}>{amenity.name}</p>
//                 ))}
//             </div> */}
//             <div>
//               <span>
//                 <p>{hotel.name}</p>
//               </span>
//               <span>

//                 {hotel.address && (
//                   <>
//                     <p>{hotel.address.address_line1}</p>
//                     <p>Locality: {hotel.address.locality}</p>
//                   </>
//                 )}

//               </span>
//               <span>
//                 <p>Free Internet Access, Free Parking Amenities</p>
//                 <p>Fully Refundable Rates, Pay Later Available</p>
//               </span>
//               <span className="flex flex-row">
//                 <p>7.9</p>
//                 <p>291 Rating</p>
//                 <p>3-Star Hotel</p>
//               </span>
//             </div>
//           </div>
//           <div>
//             <div>
//               <p>₹11533</p>
//               <p>₹123,066 for 2 nights</p>
//               <button>Choose your room</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HotelDetailsComponent;

// HotelDetailsComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import room1 from "../../assets/room1.jpg";
import { setFilteredHotels } from "../../redux/actions";
import { Link } from "gatsby";
const HotelDetailsComponent = () => {
  const filteredHotels = useSelector((state) => state.hotel.filteredHotels);
  useEffect(() => {
    // This will run whenever hotels in Redux store changes
    console.log("Hotels in Redux store:", filteredHotels);
  }, [filteredHotels]);
  if (!filteredHotels || filteredHotels.length === 0) {
    return <div>No hotel selected</div>;
  }
  return (
    <div className="py-3 flex flex-col  gap-3 shadow ">
      {filteredHotels.map((hotel) => (
        <Link
          to={`/hotels/${hotel.id}`}
          key={hotel.id}
          className="flex flex-row shadow border rounded-3xl border-gray-500 "
        >
          <img
            src={room1}
            className=" "
            alt="Hotel Room"
            style={{
              width: "240px",
              height: "230px",
              borderRadius: "10px 0 0 10px",
            }}
          />
          <div className="flex flex-col border-r-2 p-3 w-3/4">
            {/* <div className="flex flex-col border-2">
              {hotel.amenities &&
                hotel.amenities.map((amenity) => (
                  <p key={amenity.machine_name}>{amenity.name}</p>
                ))}
            </div> */}
            <div>
              <span>
                <p className="text-lg font-bold">{hotel.name}</p>
              </span>
              <span>
                {hotel.address && (
                  <div className="py-2">
                    <p className="text-blue-500">
                      {hotel.address.address_line1}
                    </p>
                    <p>Locality: {hotel.address.locality}</p>
                  </div>
                )}
              </span>
              <div className="flex">
                {hotel.amenities &&
                  hotel.amenities
                    .slice(0, 2)
                    .map((amenity) => (
                      <p key={amenity.machine_name}> {amenity.name},&nbsp;</p>
                    ))}
              </div>
              <div className="flex">
                {hotel.amenities &&
                  hotel.amenities
                    .slice(2, 4)
                    .map((amenity) => (
                      <p key={amenity.machine_name}> {amenity.name} ,&nbsp;</p>
                    ))}
              </div>
              <div className="flex gap-3 flex-row mt-3">
                <p className="py-1 text-xs px-2 font-bold text-white rounded-lg bg-orange-400">
                  7.9
                </p>
                <p className=" ">291 Rating</p>
                <p>3-Star Hotel</p>
              </div>
            </div>
          </div>
          <div className="p-3 flex flex-col justify-end w-1/4">
            <div>
              <div className="flex">
                <p className=" text-blue-600  font-bold">₹</p>
                <p className="text-4xl font-bold text-blue-600 ">11533</p>
              </div>
              {/* <p>₹123,066 for 2 nights</p> */}
              <p>price per night</p>
              <button className=" text-sm rounded-3xl px-2 py-2 text-white bg-green-600 font-bold ">
                Choose your room
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default HotelDetailsComponent;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import room1 from "../../assets/room1.jpg";
// import { setFilteredHotels } from "../../redux/actions";
// import { Link } from "gatsby";

// const HotelDetailsComponent = () => {
//   const dispatch = useDispatch();
//   const filteredAmenity = useSelector((state) => state.hotel.filteredAmenity);
//   const allHotels = useSelector((state) => state.hotel.hotels);
//   const filteredHotels = useSelector((state) => state.hotel.filteredHotels);

//   useEffect(() => {
//     // Filter hotels based on selected amenity
//     const filteredHotels = allHotels.filter((hotel) => {
//       return (
//         filteredAmenity === null ||
//         hotel.amenities.some((amenity) => amenity.name === filteredAmenity)
//       );
//     });
//     // Dispatch action to update filtered hotels in Redux store
//     dispatch(setFilteredHotels(filteredHotels));
//   }, [filteredAmenity, allHotels, dispatch]);

//   if (!filteredHotels || filteredHotels.length === 0) {
//     return <div>No hotels matching the selected amenity</div>;
//   }

//   return (
//     <div className="py-3 flex flex-col gap-3 shadow">
//       {filteredHotels.map((hotel) => (
//         <Link
//           to={`/hotels/${hotel.id}`}
//           key={hotel.id}
//           className="flex flex-row shadow border rounded-3xl border-gray-500"
//         >
//           {/* Render hotel details */}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default HotelDetailsComponent;
