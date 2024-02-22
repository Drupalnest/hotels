// GoogleMapComponent.js
import React from 'react';

const calculateCenterAndZoom = (lat_lon) => {
  const centerLat = (lat_lon.top + lat_lon.bottom) / 2;
  const centerLng = (lat_lon.left + lat_lon.right) / 2;

  const latDifference = lat_lon.top - lat_lon.bottom;
  const lngDifference = lat_lon.right - lat_lon.left;

  // Use the larger difference to determine the zoom level
  const zoom = Math.max(
    Math.floor(Math.log2(360 / lngDifference)),
    Math.floor(Math.log2(180 / latDifference))
  );

  return { center: `${centerLat},${centerLng}`, zoom: Math.round(zoom) }; // Round the zoom value to an integer
};

const GoogleMapComponent = ({ lat_lon }) => {
  const { center, zoom } = calculateCenterAndZoom(lat_lon);

  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ&center=${center}`;

  return (
    <div className="py-4">
      <div style={{ height: '400px', width: '100%' }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: '0' }}
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapComponent;


//AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

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
