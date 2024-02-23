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

import React, { useState } from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import MapIcon from "@mui/icons-material/Map";
import { navigate } from "gatsby";

const MapComponent = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [showMap, setShowMap] = useState(false);

  const handleButtonClick = () => {
    
    navigate('/map');
  };

  return (
    <div style={{ position: "relative", height: "150px" }}>
      <button
        className="border-2 hover:border-gray-500 bg-white  font-bold p-2 rounded-xl text-blue-800 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          />
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;
