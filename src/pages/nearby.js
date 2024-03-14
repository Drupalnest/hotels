// import React, { useState, useEffect } from "react";
// import { graphql } from "gatsby";
// import MyLocationIcon from "@mui/icons-material/MyLocation";

// const NearbyHotelsPage = ({ data }) => {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hotels, setHotels] = useState([]);

//   const fetchNearbyHotels = async () => {
//     try {
//       setLoading(true);

//       // For testing purposes, you can set test latitude and longitude coordinates
//       const testLatitude = 37.7749; // Example latitude
//       const testLongitude = -122.4194; // Example longitude
//       setLatitude(testLatitude);
//       setLongitude(testLongitude);

//       // For testing purposes, you can remove the geolocation getCurrentPosition call
//       // and directly use the test coordinates
//       // setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch nearby hotels when latitude and longitude are available
//     if (latitude !== null && longitude !== null) {
//       const fetchHotels = async () => {
//         try {
//           const allHotels = data.allHotel.nodes;
//           // Filter nearby hotels based on latitude and longitude
//           const nearbyHotels = allHotels.filter((hotel) => {
//             // Check if lat_lon is not null
//             if (!hotel.lat_lon) return false;
//             // Assuming lat_lon is an array containing [latitude, longitude]
//             const [hotelLatitude, hotelLongitude] =
//               hotel.lat_lon.latlon.split(",");
//             // Calculate distance between two points (you can replace this with your own distance calculation logic)
//             const distance = calculateDistance(
//               latitude,
//               longitude,
//               parseFloat(hotelLatitude),
//               parseFloat(hotelLongitude)
//             );
//             return distance <= 10; // Filter hotels within 10 km radius
//           });
//           setHotels(nearbyHotels);
//           setLoading(false);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };
//       fetchHotels();
//     } else {
//       fetchNearbyHotels();
//     }
//   }, [latitude, longitude, data]);

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     // Calculation logic for distance between two points (e.g., Haversine formula)
//     // You can implement your own logic or use a library like GeoLib
//     // This is just a dummy function for demonstration purposes
//     return Math.sqrt((lat1 - lat2) ** 2 + (lon1 - lon2) ** 2);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Nearby Hotels</h2>
//       <div style={{ marginBottom: "1rem" }}>
//         <MyLocationIcon onClick={() => fetchNearbyHotels()} />
//       </div>
//       <p>Latitude: {latitude}</p>
//       <p>Longitude: {longitude}</p>
//       {hotels.length === 0 ? (
//         <div>No hotels found nearby.</div>
//       ) : (
//         <ol>
//           {hotels.map((hotel, index) => (
//             <li key={hotel.id}>
//               {index + 1}. {hotel.name} - {hotel.distance} km away
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default NearbyHotelsPage;

// export const query = graphql`
//   query {
//     allHotel {
//       nodes {
//         id
//         drupal_id
//         name
//         phone
//         hotel_code
//         lat_lon {
//           value
//           geo_type
//           lat
//           lon
//           left
//           top
//           right
//           bottom
//           geohash
//           latlon
//         }
//         email
//         description
//         crs_code
//         crs_name
//         address {
//           address_line1
//           country_code
//           administrative_area
//           locality
//           postal_code
//         }
//         amenities {
//           machine_name
//           name
//         }
//       }
//     }
//   }
// `;

// AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ




// import React, { useState, useEffect } from "react";
// import { graphql } from "gatsby";
// import MyLocationIcon from "@mui/icons-material/MyLocation";

// const NearbyHotelsPage = ({ data }) => {
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

//     // Try HTML5 geolocation to obtain the user's current location
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
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   };

//   const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(
//       browserHasGeolocation
//         ? "Error: The Geolocation service failed."
//         : "Error: Your browser doesn't support geolocation."
//     );
//     infoWindow.open(map);
//   };

//   const fetchNearbyHotels = async () => {
//     try {
//       setLoading(true);

//       // For testing purposes, you can set test latitude and longitude coordinates
//       const testLatitude = 37.7749; // Example latitude
//       const testLongitude = -122.4194; // Example longitude
//       setLatitude(testLatitude);
//       setLongitude(testLongitude);

//       // For testing purposes, you can remove the geolocation getCurrentPosition call
//       // and directly use the test coordinates
//       // setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch nearby hotels when latitude and longitude are available
//     if (latitude !== null && longitude !== null) {
//       const fetchHotels = async () => {
//         try {
//           const allHotels = data.allHotel.nodes;
//           // Filter nearby hotels based on latitude and longitude
//           const nearbyHotels = allHotels.filter((hotel) => {
//             // Check if lat_lon is not null
//             if (!hotel.lat_lon) return false;
//             // Assuming lat_lon is an array containing [latitude, longitude]
//             const [hotelLatitude, hotelLongitude] =
//               hotel.lat_lon.latlon.split(",");
//             // Calculate distance between two points (you can replace this with your own distance calculation logic)
//             const distance = calculateDistance(
//               latitude,
//               longitude,
//               parseFloat(hotelLatitude),
//               parseFloat(hotelLongitude)
//             );
//             return distance <= 10; // Filter hotels within 10 km radius
//           });
//           setHotels(nearbyHotels);
//           setLoading(false);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };
//       fetchHotels();
//     } else {
//       fetchNearbyHotels();
//     }
//   }, [latitude, longitude, data]);

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     // Calculation logic for distance between two points (e.g., Haversine formula)
//     // You can implement your own logic or use a library like GeoLib
//     // This is just a dummy function for demonstration purposes
//     return Math.sqrt((lat1 - lat2) ** 2 + (lon1 - lon2) ** 2);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Nearby Hotels</h2>
//       <div style={{ marginBottom: "1rem" }}>
//         <MyLocationIcon onClick={() => initMap()} />
//       </div>
//       <div id="map" style={{ width: "100%", height: "400px" }}></div>
//       {loading && <div>Loading map...</div>}
//       {/* Render hotel list once latitude and longitude are obtained */}
//       {!loading && (
//         <div>
//           <p>Latitude: {latitude}</p>
//           <p>Longitude: {longitude}</p>
//           //{" "}
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

// export default NearbyHotelsPage;

// export const query = graphql`
//   query {
//     allHotel {
//       nodes {
//         id
//         drupal_id
//         name
//         phone
//         hotel_code
//         lat_lon {
//           value
//           geo_type
//           lat
//           lon
//           left
//           top
//           right
//           bottom
//           geohash
//           latlon
//         }
//         email
//         description
//         crs_code
//         crs_name
//         address {
//           address_line1
//           country_code
//           administrative_area
//           locality
//           postal_code
//         }
//         amenities {
//           machine_name
//           name
//         }
//       }
//     }
//   }
// `;


// AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const NearbyHotelsPage = ({ data }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hotels, setHotels] = useState([]);

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
      center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco coordinates
      zoom: 8,
    });

    const infoWindow = new window.google.maps.InfoWindow();

    // Try HTML5 geolocation to obtain the user's current location
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
        },
        () => {
          handleLocationError(true, infoWindow, map, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
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

  // Rest of your code for fetching nearby hotels based on the obtained latitude and longitude
  // ...

  return (
    <div>
      <h2>Nearby Hotels</h2>
      <div style={{ marginBottom: "1rem" }}>
        <MyLocationIcon onClick={() => initMap()} />
      </div>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      {loading && <div>Loading map...</div>}
      {/* Render hotel list once latitude and longitude are obtained */}
      {!loading && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          {hotels.length === 0 ? (
            <div>No hotels found nearby.</div>
          ) : (
            <ol>
              {hotels.map((hotel, index) => (
                <li key={hotel.id}>
                  {index + 1}. {hotel.name} - {hotel.distance} km away
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
};

export default NearbyHotelsPage;

export const query = graphql`
  query {
    allHotel {
      nodes {
        id
        drupal_id
        name
        phone
        hotel_code
        lat_lon {
          value
          geo_type
          lat
          lon
          left
          top
          right
          bottom
          geohash
          latlon
        }
        email
        description
        crs_code
        crs_name
        address {
          address_line1
          country_code
          administrative_area
          locality
          postal_code
        }
        amenities {
          machine_name
          name
        }
      }
    }
  }
`;
