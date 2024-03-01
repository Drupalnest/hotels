//AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

// import React from "react";
// import { LoadScript, GoogleMap } from "@react-google-maps/api";

// const MapComponent = () => {
//   const center = {
//     lat: 37.7749,
//     lng: -122.4194,
//   };

//   return (
//     <div
//       className="border-2  "
//       style={{ width: "100%", height: "150px", borderRadius: "4%" }}
//     >
//       <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
//         <GoogleMap
//           mapContainerStyle={{
//             width: "100%",
//             height: "100%",
//             borderRadius: "4%",
//           }}
//           center={center}
//           zoom={10}
//         />
//       </LoadScript>
//     </div>
//   );
// };

// export default MapComponent;

//AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

// import React, { useState } from "react";
// import { LoadScript, GoogleMap } from "@react-google-maps/api";
// import MapIcon from "@mui/icons-material/Map";
// import { navigate } from "gatsby";

// const MapComponent = () => {
//   const center = {
//     lat: 37.7749,
//     lng: -122.4194,
//   };

//   const [showMap, setShowMap] = useState(false);

//   const handleButtonClick = () => {

//     navigate('/mapview');
//   };

//   return (
//     <div style={{ position: "relative", height: "150px" }}>
//       <button
//         className="border-2 hover:border-gray-500 bg-white  font-bold p-2 rounded-xl text-blue-800 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         style={{ zIndex: 1 }}
//         onClick={handleButtonClick}
//       >
//         <MapIcon className="mr-2" />
//         View Map
//       </button>
//       <div
//         className="border-2"
//         style={{ width: "100%", height: "150px", borderRadius: "4%" }}
//       >
//         <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
//           <GoogleMap
//             mapContainerStyle={{
//               width: "100%",
//               height: "100%",
//               borderRadius: "4%",
//             }}
//             center={center}
//             zoom={10}
//           />
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

import React, { useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import MapIcon from "@mui/icons-material/Map";
import { navigate } from "gatsby";
import { useSelector } from "react-redux";

const MapComponent = () => {
  const filteredHotels = useSelector((state) => state.hotel.filteredHotels);

  // Move the useState outside of the condition
  const [showMap, setShowMap] = useState(false);

  if (!filteredHotels || filteredHotels.length === 0) {
    return <div>No hotel selected</div>;
  }

  const center = {
    lat: filteredHotels[0]?.lat_lon?.lat || 0,
    lng: filteredHotels[0]?.lat_lon?.lon || 0,
  };

  const handleButtonClick = () => {
    navigate("/mapview");
  };

  return (
    <div style={{ position: "relative", height: "150px" }}>
      <button
        className="border-2 hover:border-gray-500 bg-white font-bold p-2 rounded-xl text-blue-800 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 1 }}
        onClick={handleButtonClick}
      >
        <MapIcon className="mr-2" />
     View Map
      </button>
      <div
        className="border-2"
        style={{ width: "100%", height: "150px", borderRadius: "4%" }}
      >
        <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              borderRadius: "4%",
            }}
            center={center}
            zoom={10}
          >
            {filteredHotels.map((hotel) => (
              <Marker
                key={hotel.id}
                position={{
                  lat: hotel.lat_lon?.lat || 0,
                  lng: hotel.lat_lon?.lon || 0,
                }}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;
