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




// HotelDetailsComponent.js
import React from "react";
import { useSelector } from "react-redux";
import room1 from "../../assets/room1.jpg";

const HotelDetailsComponent = () => {
  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);

  if (!selectedHotel) {
    return <div>No hotel selected</div>;
  }

  console.log("selectedHotel", selectedHotel); // Check if you see details in the console

  return (
    <div className="flex flex-row border-2">
      <div>
        <img
          src={room1}
          className=""
          style={{
            border: "2px solid red",
            width: "200px",
            height: "150px",
          }}
        />
      </div>
      <div className="flex flex-col border-2">
        <div className="flex flex-col border-2">
          {/* Add your amenities rendering logic here */}
          {selectedHotel.amenities &&
            selectedHotel.amenities.map((amenity) => (
              <p key={amenity.machine_name}>{amenity.name}</p>
            ))}
        </div>
        <div>
          <span>
            <p>{selectedHotel.name}</p>
          </span>
          <span>
            {/* Access address properties individually */}
            <p>{selectedHotel.address && selectedHotel.address.address_line1}</p>
            <p>{selectedHotel.hotel_code}</p>
            <p>{selectedHotel.phone}</p>
            <p>Latitude: {selectedHotel.lat_lon && selectedHotel.lat_lon.lat}</p>
            <p>Longitude: {selectedHotel.lat_lon && selectedHotel.lat_lon.lon}</p>
          </span>
          <span>
            <p>Free Internet Access, Free Parking Amenities</p>
            <p>Fully Refundable Rates, Pay Later Available</p>
          </span>
          <span className="flex flex-row">
            <p>7.9</p>
            <p>291 Rating</p>
            <p>3-Star Hotel</p>
          </span>
        </div>
      </div>
      <div>
        <div>
          <p>₹11533</p>
          <p>₹123,066 for 2 nights</p>
          <button>Choose your room</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsComponent;
