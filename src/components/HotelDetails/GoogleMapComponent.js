// // GoogleMapComponent.js
// import React from "react";

// const calculateCenterAndZoom = (lat_lon) => {
//   const centerLat = (lat_lon.top + lat_lon.bottom) / 2;
//   const centerLng = (lat_lon.left + lat_lon.right) / 2;

//   const latDifference = lat_lon.top - lat_lon.bottom;
//   const lngDifference = lat_lon.right - lat_lon.left;

//   // Use the larger difference to determine the zoom level
//   let zoom = Math.min(
//     Math.floor(Math.log2(360 / lngDifference)),
//     Math.floor(Math.log2(180 / latDifference))
//   );

//   // Ensure the calculated zoom is within the valid range
//   zoom = Math.max(0, Math.min(21, zoom));

//   return { center: `${centerLat},${centerLng}`, zoom };
// };

// const GoogleMapComponent = ({ lat_lon }) => {
//   const { center, zoom } = calculateCenterAndZoom(lat_lon);

//   const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ&center=${center}&zoom=${zoom}&bottom=${lat_lon.bottom}&geo_type=${lat_lon.geo_type}&geohash=${lat_lon.geohash}&lat=${lat_lon.lat}&left=${lat_lon.left}&lon=${lat_lon.lon}&right=${lat_lon.right}&top=${lat_lon.top}&value=${lat_lon.value}`;

//   return (
//     <div className="py-4">
//       <div style={{ height: "400px", width: "100%" }}>
//         <iframe
//           title="Google Map"
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           style={{ border: "0" }}
//           src={mapUrl}
//           allowFullScreen
//         ></iframe>
//       </div>
//       <div>
//         {lat_lon.bottom}
//         {lat_lon.geo_type}
//         {lat_lon.geohash}
//         {lat_lon.lat}
//         {lat_lon.left}
//         {lat_lon.lon}
//         {lat_lon.right}
//         {lat_lon.top}
//         {lat_lon.value}
//       </div>
//     </div>
//   );
// };

// export default GoogleMapComponent;

// //AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ
// import React, { useState, useEffect } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   Rectangle,
//   Circle,
// } from "@react-google-maps/api";
// import HomeIcon from "@mui/icons-material/Home";

// const GoogleMapComponent = ({ lat_lon, address }) => {
//   const [mapType, setMapType] = useState("roadmap");

//   const centerLat = (lat_lon.top + lat_lon.bottom) / 2;
//   const centerLng = (lat_lon.left + lat_lon.right) / 2;

//   const zoom = 15;

//   const mapContainerStyle = {
//     width: "100%",
//     height: "500px",
//   };

//   const options = {
//     disableDefaultUI: true,
//     zoomControl: true,
//     mapTypeId: mapType,
//   };

//   const handleToggleMapType = () => {
//     setMapType((prevType) =>
//       prevType === "roadmap" ? "satellite" : "roadmap"
//     );
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={{ lat: centerLat, lng: centerLng }}
//         zoom={zoom}
//         options={options}
//       >
//         <Marker position={{ lat: centerLat, lng: centerLng }} />

//         {/* Red rectangle surrounding the location */}
//         {/* <Rectangle
//           bounds={{
//             north: lat_lon.top,
//             south: lat_lon.bottom,
//             east: lat_lon.right,
//             west: lat_lon.left,
//           }}
//           options={{
//             fillColor: "red",
//             fillOpacity: 0.2,
//             strokeColor: "red",
//             strokeOpacity: 1,
//             strokeWeight: 2,
//           }}
//         /> */}

//         {/* Blue rectangle representing the discovery area */}
//         {/* <Rectangle
//           bounds={{
//             north: centerLat + 0.01,
//             south: centerLat - 0.01,
//             east: centerLng + 0.01,
//             west: centerLng - 0.01,
//           }}
//           options={{
//             fillColor: "blue",
//             fillOpacity: 0.1,
//             strokeColor: "blue",
//             strokeOpacity: 1,
//             strokeWeight: 2,
//           }}
//         /> */}

//         {/* Circular overlay around the city center */}
//         <Circle
//           center={{ lat: centerLat, lng: centerLng }}
//           radius={1000} // Adjust the radius as needed (in meters)
//           options={{
//             fillColor: "blue", // You can change the color
//             fillOpacity: 0.1,
//             strokeColor: "blue",
//             strokeOpacity: 1,
//             strokeWeight: 0.5,
//           }}
//         />

//         <button onClick={handleToggleMapType}>
//           Toggle Map Type ({mapType === "roadmap" ? "Satellite" : "Standard"})
//         </button>
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapComponent;

// GoogleMapComponent.js
// import React from "react";

// const calculateCenterAndZoom = (top, left, bottom, right) => {
//   const centerLat = (top + bottom) / 2;
//   const centerLng = (left + right) / 2;

//   const latDifference = top - bottom;
//   const lngDifference = right - left;

//   // Use the larger difference to determine the zoom level
//   const zoom = Math.max(
//     Math.floor(Math.log2(360 / lngDifference)),
//     Math.floor(Math.log2(180 / latDifference))
//   );

//   return { center: `${centerLat},${centerLng}`, zoom };
// };

// const GoogleMapComponent = ({map}) => {
//   // Check if map and map.lat_lon are defined
//   //   if (!map || !map.lat_lon) {
//   //     return <div>Error: Invalid map data</div>;
//   //   }

//   //   const { center, zoom } = calculateCenterAndZoom(
//   //     map.lat_lon.top,
//   //     map.lat_lon.left,
//   //     map.lat_lon.bottom,
//   //     map.lat_lon.right
//   //   );

//   const mapUrl = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgUbEo8cfqokR5lP9_Wh_DaM&key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ`;

//   return (
//     <div className="py-4">
//       <div style={{ height: "400px", width: "100%" }}>
//         <iframe
//           title="Google Map"
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           style={{ border: "0" }}
//           src={mapUrl}
//           allowFullScreen
//         ></iframe>
//       </div>

//     </div>
//   );
// };

// export default GoogleMapComponent;

// // GoogleMapComponent.js
// import React from 'react';

// const calculateCenterAndZoom = (lat_lon) => {
//   const { top, left, bottom, right } = lat_lon;
//   const centerLat = (top + bottom) / 2;
//   const centerLng = (left + right) / 2;

//   const latDifference = top - bottom;
//   const lngDifference = right - left;

//   // Use the larger difference to determine the zoom level
//   const zoom = Math.max(
//     Math.floor(Math.log2(360 / lngDifference)),
//     Math.floor(Math.log2(180 / latDifference))
//   );

//   return { center: `${centerLat},${centerLng}`, zoom };
// };

// const GoogleMapComponent = ({ lat_lon }) => {
//   // Check if lat_lon is defined
//   if (!lat_lon) {
//     return <div>Error: Invalid lat_lon data</div>;
//   }

// //   const { center, zoom } = calculateCenterAndZoom(lat_lon);

//   const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ`;

//   return (
//     <div className="py-4">
//       <div style={{ height: '400px', width: '100%' }}>
//         <iframe
//           title="Google Map"
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           style={{ border: '0' }}
//           src={mapUrl}
//           allowFullScreen
//         ></iframe>
//       </div>

//       <p>{lat_lon.bottom}</p>
//     </div>
//   );
// };

// export default GoogleMapComponent;








//AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Rectangle,
  Circle,
} from "@react-google-maps/api";
import HomeIcon from "@mui/icons-material/Home";

const GoogleMapComponent = ({ lat_lon, address }) => {
  const [mapType, setMapType] = useState("roadmap");

  const centerLat = (lat_lon.top + lat_lon.bottom) / 2;
  const centerLng = (lat_lon.left + lat_lon.right) / 2;

  const zoom = 15;

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeId: mapType,
  };

  const handleToggleMapType = () => {
    setMapType((prevType) =>
      prevType === "roadmap" ? "satellite" : "roadmap"
    );
  };

  return (
   
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: centerLat, lng: centerLng }}
        zoom={zoom}
        options={options}
      >
        <Marker position={{ lat: centerLat, lng: centerLng }} />

        <Circle
          center={{ lat: centerLat, lng: centerLng }}
          radius={1000}
          options={{
            fillColor: "blue",
            fillOpacity: 0.1,
            strokeColor: "blue",
            strokeOpacity: 1,
            strokeWeight: 0.5,
          }}
        />

        <button onClick={handleToggleMapType}>
          Toggle Map Type ({mapType === "roadmap" ? "Satellite" : "Standard"})
        </button>
      </GoogleMap>
  
  );
};

export default GoogleMapComponent;
