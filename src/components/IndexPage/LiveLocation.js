// AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

// import React, { useState, useEffect } from "react";
// import MyLocationIcon from "@mui/icons-material/MyLocation";

// const LiveLocation = ({ data }) => {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ&libraries=places`;
//     script.async = true;
//     script.onload = () => {
//       setLoading(false);
//       initMap();
//     };
//     document.body.appendChild(script);
//   }, []);

//   const initMap = () => {
//     const map = new window.google.maps.Map(document.getElementById("map"), {
//       center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco coordinates
//       zoom: 8,
//     });

//     const infoWindow = new window.google.maps.InfoWindow();

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           setLatitude(pos.lat);
//           setLongitude(pos.lng);

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map, map.getCenter());
//         }
//       );
//     } else {
//       handleLocationError(false, infoWindow, map, map.getCenter());
//     }
//   };

//   const handleLocationError = (browserHasGeolocation, infoWindow, map, pos) => {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//       browserHasGeolocation
//         ? "Error: The Geolocation service failed."
//         : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
//   };

//   return (
//     <div>
//       {/* <h2>Nearby Hotels</h2> */}
//       <div
//         className=" px-1 flex flex-row gap-2 hover:bg-slate-100  rounded-2xl"
//         style={{ marginBottom: "1rem" }}
//       >
//         <MyLocationIcon onClick={() => initMap()} />
//         <p>Use current location</p>
//       </div>
//       <div id="map" style={{ width: "100%", height: "400px" }}></div>
//       {loading && <div>Loading map...</div>}
//       {!loading && (
//         <div>
//           <p>Latitude: {latitude}</p>
//           <p>Longitude: {longitude}</p>
//           {hotels.length === 0 ? (
//             <div>No hotels found nearby.</div>
//           ) : (
//             <ol>
//               {hotels.map((hotel, index) => (
//                 <li key={hotel.id}>
//                   {index + 1}. {hotel.name} - {hotel.distance} km away
//                 </li>
//               ))}
//             </ol>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveLocation;

import React, { useState, useEffect } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const LiveLocation = ({ data }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ&libraries=places`;
    script.async = true;
    script.onload = () => {
      setLoading(false);
      initMap();
    };
    document.body.appendChild(script);
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 11,
      zoomControl: true, // Enable zoom controls
    });

    const infoWindow = new window.google.maps.InfoWindow();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          setLatitude(pos.lat);
          setLongitude(pos.lng);

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);

          // Draw circle overlay for 50-meter radius
          new window.google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map,
            center: pos,
            radius: 10, // Radius in meters
          });
        },
        () => {
          handleLocationError(true, infoWindow, map, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map, map.getCenter());
    }
  };

  const handleLocationError = (browserHasGeolocation, infoWindow, map, pos) => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  };

  return (
    <div>
      <div
        className=" px-1 flex flex-row gap-2 hover:bg-slate-100  rounded-2xl"
        style={{ marginBottom: "1rem" }}
      >
        <MyLocationIcon onClick={() => initMap()} />
        <p>Use current location</p>
      </div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      {loading && <div>Loading map...</div>}
      {!loading && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LiveLocation;
