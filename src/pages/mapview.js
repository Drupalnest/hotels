// import React, { useEffect } from "react";
// import "./mapstyle.css";

// const MapComponent = () => {
//   useEffect(() => {
//     window.initMap = () => {
//       const map = new window.google.maps.Map(document.getElementById("map"), {
//         center: { lat: 40.749933, lng: -73.98633 },
//         zoom: 13,
//         mapTypeControl: false,
//       });
//       const card = document.getElementById("pac-card");
//       const input = document.getElementById("pac-input");
//       const biasInputElement = document.getElementById("use-location-bias");
//       const strictBoundsInputElement =
//         document.getElementById("use-strict-bounds");
//       const options = {
//         fields: ["formatted_address", "geometry", "name"],
//         strictBounds: false,
//       };

//       map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(card);

//       const autocomplete = new window.google.maps.places.Autocomplete(
//         input,
//         options
//       );

//       autocomplete.bindTo("bounds", map);

//       const infowindow = new window.google.maps.InfoWindow();
//       const infowindowContent = document.getElementById("infowindow-content");

//       infowindow.setContent(infowindowContent);

//       const marker = new window.google.maps.Marker({
//         map,
//         anchorPoint: new window.google.maps.Point(0, -29),
//       });

//       autocomplete.addListener("place_changed", () => {
//         infowindow.close();
//         marker.setVisible(false);

//         const place = autocomplete.getPlace();

//         if (!place.geometry || !place.geometry.location) {
//           window.alert("No details available for input: '" + place.name + "'");
//           return;
//         }

//         if (place.geometry.viewport) {
//           map.fitBounds(place.geometry.viewport);
//         } else {
//           map.setCenter(place.geometry.location);
//           map.setZoom(17);
//         }

//         marker.setPosition(place.geometry.location);
//         marker.setVisible(true);
//         infowindowContent.children["place-name"].textContent = place.name;
//         infowindowContent.children["place-address"].textContent =
//           place.formatted_address;
//         infowindow.open(map, marker);
//       });

//       const setupClickListener = (id, types) => {
//         const radioButton = document.getElementById(id);

//         radioButton.addEventListener("click", () => {
//           autocomplete.setTypes(types);
//           input.value = "";
//         });
//       };

//       setupClickListener("changetype-all", []);
//       setupClickListener("changetype-address", ["address"]);
//       setupClickListener("changetype-establishment", ["establishment"]);
//       setupClickListener("changetype-geocode", ["geocode"]);
//       setupClickListener("changetype-cities", ["(cities)"]);
//       setupClickListener("changetype-regions", ["(regions)"]);
//       biasInputElement.addEventListener("change", () => {
//         if (biasInputElement.checked) {
//           autocomplete.bindTo("bounds", map);
//         } else {
//           autocomplete.unbind("bounds");
//           autocomplete.setBounds({
//             east: 180,
//             west: -180,
//             north: 90,
//             south: -90,
//           });
//           strictBoundsInputElement.checked = biasInputElement.checked;
//         }

//         input.value = "";
//       });
//       strictBoundsInputElement.addEventListener("change", () => {
//         autocomplete.setOptions({
//           strictBounds: strictBoundsInputElement.checked,
//         });
//         if (strictBoundsInputElement.checked) {
//           biasInputElement.checked = strictBoundsInputElement.checked;
//           autocomplete.bindTo("bounds", map);
//         }

//         input.value = "";
//       });
//     };

//     // Load Google Maps API script
//     useEffect(() => {
//       // Load Google Maps API script
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ&libraries=places&v=weekly&callback=initMap`;
//       script.defer = true;
//       document.head.appendChild(script);

//       return () => {
//         // Cleanup
//         document.head.removeChild(script);
//       };
//     }, []);
//   }, []);

//   return (
//     <div>
//       <div id="title">Autocomplete search</div>
//       <div className="pac-card" id="pac-card">
//         <div>
//           <div id="type-selector" className="pac-controls">
//             <input
//               type="radio"
//               name="type"
//               id="changetype-all"
//               defaultChecked
//             />
//             <label htmlFor="changetype-all">All</label>

//             <input type="radio" name="type" id="changetype-establishment" />
//             <label htmlFor="changetype-establishment">establishment</label>

//             <input type="radio" name="type" id="changetype-address" />
//             <label htmlFor="changetype-address">address</label>

//             <input type="radio" name="type" id="changetype-geocode" />
//             <label htmlFor="changetype-geocode">geocode</label>

//             <input type="radio" name="type" id="changetype-cities" />
//             <label htmlFor="changetype-cities">(cities)</label>

//             <input type="radio" name="type" id="changetype-regions" />
//             <label htmlFor="changetype-regions">(regions)</label>
//           </div>
//           <br />
//           <div className="pac-controls" id="strict-bounds-selector">
//             <input
//               type="checkbox"
//               id="use-location-bias"
//               value=""
//               defaultChecked
//             />
//             <label htmlFor="use-location-bias">Bias to map viewport</label>

//             <input type="checkbox" id="use-strict-bounds" value="" />
//             <label htmlFor="use-strict-bounds">Strict bounds</label>
//           </div>
//         </div>
//         <div id="pac-container">
//           <input id="pac-input" type="text" placeholder="Enter a location" />
//         </div>
//       </div>
//       <div id="map"></div>
//       <div id="infowindow-content">
//         <span id="place-name" className="title"></span>
//         <br />
//         <span id="place-address"></span>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

// import React, { useEffect } from "react";
// import "./mapstyle.css";

// const MapComponent = () => {
//   // Initialize map using Google Maps API
//   useEffect(() => {
//     window.initMap = () => {
//       const map = new window.google.maps.Map(document.getElementById("map"), {
//         center: { lat: 40.749933, lng: -73.98633 },
//         zoom: 13,
//         mapTypeControl: false,
//       });

//       const card = document.getElementById("pac-card");
//       const input = document.getElementById("pac-input");
//       const biasInputElement = document.getElementById("use-location-bias");
//       const strictBoundsInputElement = document.getElementById(
//         "use-strict-bounds"
//       );
//       const options = {
//         fields: ["formatted_address", "geometry", "name"],
//         strictBounds: false,
//       };

//       map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(card);

//       const autocomplete = new window.google.maps.places.Autocomplete(
//         input,
//         options
//       );

//       autocomplete.bindTo("bounds", map);

//       const infowindow = new window.google.maps.InfoWindow();
//       const infowindowContent = document.getElementById("infowindow-content");

//       infowindow.setContent(infowindowContent);

//       const marker = new window.google.maps.Marker({
//         map,
//         anchorPoint: new window.google.maps.Point(0, -29),
//       });

//       autocomplete.addListener("place_changed", () => {
//         infowindow.close();
//         marker.setVisible(false);

//         const place = autocomplete.getPlace();

//         if (!place.geometry || !place.geometry.location) {
//           window.alert(
//             "No details available for input: '" + place.name + "'"
//           );
//           return;
//         }

//         if (place.geometry.viewport) {
//           map.fitBounds(place.geometry.viewport);
//         } else {
//           map.setCenter(place.geometry.location);
//           map.setZoom(17);
//         }

//         marker.setPosition(place.geometry.location);
//         marker.setVisible(true);
//         infowindowContent.children["place-name"].textContent = place.name;
//         infowindowContent.children["place-address"].textContent =
//           place.formatted_address;
//         infowindow.open(map, marker);
//       });

//       const setupClickListener = (id, types) => {
//         const radioButton = document.getElementById(id);

//         radioButton.addEventListener("click", () => {
//           autocomplete.setTypes(types);
//           input.value = "";
//         });
//       };

//       setupClickListener("changetype-all", []);
//       setupClickListener("changetype-address", ["address"]);
//       setupClickListener("changetype-establishment", ["establishment"]);
//       setupClickListener("changetype-geocode", ["geocode"]);
//       setupClickListener("changetype-cities", ["(cities)"]);
//       setupClickListener("changetype-regions", ["(regions)"]);
//       biasInputElement.addEventListener("change", () => {
//         if (biasInputElement.checked) {
//           autocomplete.bindTo("bounds", map);
//         } else {
//           autocomplete.unbind("bounds");
//           autocomplete.setBounds({
//             east: 180,
//             west: -180,
//             north: 90,
//             south: -90,
//           });
//           strictBoundsInputElement.checked = biasInputElement.checked;
//         }

//         input.value = "";
//       });
//       strictBoundsInputElement.addEventListener("change", () => {
//         autocomplete.setOptions({
//           strictBounds: strictBoundsInputElement.checked,
//         });
//         if (strictBoundsInputElement.checked) {
//           biasInputElement.checked = strictBoundsInputElement.checked;
//           autocomplete.bindTo("bounds", map);
//         }

//         input.value = "";
//       });
//     };

//     // Load Google Maps API script
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ&libraries=places&v=weekly&callback=initMap`;
//     script.defer = true;
//     document.head.appendChild(script);

//     return () => {
//       // Cleanup
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <div id="title">Autocomplete search</div>
//       <div className="pac-card" id="pac-card">
//         <div>
//           <div id="type-selector" className="pac-controls">
//             <input
//               type="radio"
//               name="type"
//               id="changetype-all"
//               defaultChecked
//             />
//             <label htmlFor="changetype-all">All</label>

//             <input type="radio" name="type" id="changetype-establishment" />
//             <label htmlFor="changetype-establishment">establishment</label>

//             <input type="radio" name="type" id="changetype-address" />
//             <label htmlFor="changetype-address">address</label>

//             <input type="radio" name="type" id="changetype-geocode" />
//             <label htmlFor="changetype-geocode">geocode</label>

//             <input type="radio" name="type" id="changetype-cities" />
//             <label htmlFor="changetype-cities">(cities)</label>

//             <input type="radio" name="type" id="changetype-regions" />
//             <label htmlFor="changetype-regions">(regions)</label>
//           </div>
//           <br />
//           <div className="pac-controls" id="strict-bounds-selector">
//             <input
//               type="checkbox"
//               id="use-location-bias"
//               value=""
//               defaultChecked
//             />
//             <label htmlFor="use-location-bias">Bias to map viewport</label>

//             <input type="checkbox" id="use-strict-bounds" value="" />
//             <label htmlFor="use-strict-bounds">Strict bounds</label>
//           </div>
//         </div>
//         <div id="pac-container">
//           <input id="pac-input" type="text" placeholder="Enter a location" />
//         </div>
//       </div>
//       <div id="map"></div>
//       <div id="infowindow-content">
//         <span id="place-name" className="title"></span>
//         <br />
//         <span id="place-address"></span>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

// import React, { useState } from "react";
// import { LoadScript, GoogleMap } from "@react-google-maps/api";
// import MapIcon from "@mui/icons-material/Map";
// import { navigate } from "gatsby";
// import { useSelector } from "react-redux";

// const MapComponent = () => {

//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
//   const center = {
//     lat: {selectedHotel.lat_lon && selectedHotel.lat_lon.lat}
//     lng:{selectedHotel.lat_lon && selectedHotel.lat_lon.lon}</p>
//   };

//   const [showMap, setShowMap] = useState(false);

//   const handleButtonClick = () => {

//     navigate('/hotellist');
//   };

//   return (
//     <div style={{ position: "relative", height: "150px" }}>
//       <button
//         className="border-2 hover:border-gray-500 bg-white  font-bold p-2 rounded-xl text-blue-800 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         style={{ zIndex: 1 }}
//         onClick={handleButtonClick}
//       >
//         <MapIcon className="mr-2" />
//         Classic View
//       </button>
//       <div
//         className="border-2"
//         style={{ width: "100%", height: "800px", borderRadius: "4%" }}
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

// // AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ
// import React, { useState } from "react";
// import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import MapIcon from "@mui/icons-material/Map";
// import { navigate } from "gatsby";
// import { useSelector } from "react-redux";

// const MapComponent = () => {
//   const filteredHotels = useSelector((state) => state.hotel.filteredHotels);

//   if (!filteredHotels || filteredHotels.length === 0) {
//     return <div>No hotel selected</div>;
//   }

//   // Checking if selectedHotel exists before accessing lat_lon
//   const center = {
//     lat: selectedHotel?.lat_lon?.lat || 0, // Default to 0 if lat_lon is not available
//     lng: selectedHotel?.lat_lon?.lon || 0,
//   };

//   const markerPosition = {
//     lat: center.lat,
//     lng: center.lng,
//   };

//   const [showMap, setShowMap] = useState(false);

//   const handleButtonClick = () => {
//     navigate('/hotellist');
//   };

//   return (
//     <div style={{ position: "relative", height: "800px" }}>
//       <button
//         className="border-2 hover:border-gray-500 bg-white font-bold p-2 rounded-xl text-blue-800 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         style={{ zIndex: 1 }}
//         onClick={handleButtonClick}
//       >
//         <MapIcon className="mr-2" />
//         Classic View
//       </button>
//       <div
//         className="border-2"
//         style={{ width: "100%", height: "800px", borderRadius: "4%" }}
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
//           >
//             {/* Red Marker at the specified latitude and longitude */}
//             <Marker position={markerPosition} icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }} />
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

// AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ
// import React, { useState } from "react";
// import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import MapIcon from "@mui/icons-material/Map";
// import { navigate } from "gatsby";
// import { useSelector } from "react-redux";

// const MapComponent = () => {
//   const filteredHotels = useSelector((state) => state.hotel.filteredHotels);

//   // Move the useState outside of the condition
//   const [showMap, setShowMap] = useState(false);

//   if (!filteredHotels || filteredHotels.length === 0) {
//     return <div>No hotel selected</div>;
//   }

//   const center = {
//     lat: filteredHotels[0]?.lat_lon?.lat || 0,
//     lng: filteredHotels[0]?.lat_lon?.lon || 0,
//   };

//   const handleButtonClick = () => {
//     navigate('/hotellist');
//   };

//   return (
//     <div style={{ position: "relative", height: "800px" }}>
//       <button
//         className="border-2 hover:border-gray-500 bg-white font-bold p-2 rounded-xl text-blue-800 z-50 absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         style={{ zIndex: 1 }}
//         onClick={handleButtonClick}
//       >
//         <MapIcon className="mr-2" />
//         Classic View
//       </button>
//       <div
//         className="border-2"
//         style={{ width: "100%", height: "800px", borderRadius: "4%" }}
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
//           >
//             {filteredHotels.map((hotel) => (
//               <Marker
//                 key={hotel.id}
//                 position={{
//                   lat: hotel.lat_lon?.lat || 0,
//                   lng: hotel.lat_lon?.lon || 0,
//                 }}
//                 icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }}
//               />
//             ))}
//           </GoogleMap>
//         </LoadScript>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

// import React, { useEffect, useState } from "react";
// import {
//   LoadScript,
//   GoogleMap,
//   Marker,
//   InfoWindow,
//   OverlayView,
// } from "@react-google-maps/api";
// import MapIcon from "@mui/icons-material/Map";
// import { Link, navigate } from "gatsby";
// import { useSelector } from "react-redux";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Filter from "../components/HotelList/Filter";
// import Filterwithoutmap from "../components/HotelList/Filterwithoutmap";
// import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import Navbar from "../components/Navbar/Navbar";
// import { graphql } from "gatsby";

// const HotelPopup = ({ hotel, onClose }) => {
//   return (
//     <InfoWindow onCloseClick={onClose}>
//       <div className="w-64 p-4 bg-white border rounded shadow-md">
//         <div className="mb-4">
//           <img
//             src={hotel.image} // Add the image source for the hotel
//             alt={hotel.name}
//             className="w-full h-32 object-cover rounded"
//           />
//         </div>
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center">
//             <span className="text-green-500 mr-1">
//               <FavoriteIcon />
//               {/* Replace with the actual AddLoveMaterialUIIcon component */}
//             </span>
//             <p className="text-gray-700">9.3</p>
//           </div>
//           <p className="text-gray-700">{hotel.location}</p>
//           <p className="text-gray-700">5-Star Hotel</p>
//         </div>
//         <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
//       </div>
//     </InfoWindow>
//   );
// };

// // const CustomMarker = ({ onClick }) => {
// //   return (
// //     <OverlayView mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
// //       <div
// //         style={{
// //           position: "absolute",
// //           cursor: "pointer",
// //           transform: "translate(-50%, -50%)",
// //           border: "2px solid red",
// //         }}
// //       >
// //         <div
// //           className="p-1 px-2 bg-blue-600 flex justify-center items-center rounded-full border border-2 cursor-pointer transition-transform transform-gpu hover:scale-110"
// //           onClick={onClick}
// //         >
// //           <p className="text-sm text-white font-bold">₹25360</p>
// //         </div>
// //       </div>
// //     </OverlayView>
// //   );
// // };

// const CustomMarker = ({ onClick }) => {
//   return (
//     <OverlayView mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
//       <div
//         style={{
//           position: "absolute",
//           cursor: "pointer",
//           transform: "translate(-50%, -50%)",
//           border: "2px solid red",
//         }}
//       >
//         <div
//           className="p-1 px-2 bg-blue-600 flex justify-center items-center rounded-full border border-2 cursor-pointer transition-transform transform-gpu hover:scale-110"
//           onClick={onClick}
//         >
//           <p className="text-sm text-white font-bold">₹25360</p>
//         </div>
//       </div>
//     </OverlayView>
//   );
// };

// const MapComponent = ({ data }) => {
//   const hotels = data?.allHotel?.nodes || [];
//   const airports = data?.allLocationAirport?.nodes || [];
//   const city = data?.allLocationCity?.nodes || [];
//   const cruise = data?.allLocationCruise?.nodes || [];
//   const interest = data?.allLocationPointOfInterest?.nodes || [];
//   // const filteredHotels = useSelector((state) => state.hotel.filteredHotels);
//   const [isMapViewPage, setIsMapViewPage] = useState(true);

//   const [filteredHotels, setFilteredHotels] = useState([]);
//   const [mapKey, setMapKey] = useState(0); // State for key attribute

//   const storedFilteredHotels =
//     JSON.parse(sessionStorage.getItem("filteredHotels")) || [];

//   useEffect(() => {
//     const isFilteredHotelsChanged =
//       JSON.stringify(filteredHotels) !== JSON.stringify(storedFilteredHotels);

//     if (isFilteredHotelsChanged) {
//       setFilteredHotels(storedFilteredHotels);
//       // Update map key to force re-render
//       setMapKey((prevKey) => prevKey + 1);
//     }
//   }, [filteredHotels, storedFilteredHotels]);

//   if (!storedFilteredHotels || storedFilteredHotels.length === 0) {
//     return <div>No hotel selected</div>;
//   }

//   const handleMarkerClick = (hotel) => {
//     setFilteredHotels(hotel);
//   };

//   const handleMapClick = () => {
//     setFilteredHotels(null);
//   };

//   // useEffect(() => {
//   //   setMapKey((prevKey) => prevKey + 1);
//   // }, []);

//   const handleButtonMapClick = () => {
//     navigate("/mapview");
//   };

//   // const center = {
//   //   lat:
//   //     storedFilteredHotels.length > 0
//   //       ? storedFilteredHotels[0]?.lat_lon?.lat || 0
//   //       : 0,
//   //   lng:
//   //     storedFilteredHotels.length > 0
//   //       ? storedFilteredHotels[0]?.lat_lon?.lon || 0
//   //       : 0,
//   // };

//   const center = {
//     lat: filteredHotels[0]?.lat_lon?.lat || 0,
//     lng: filteredHotels[0]?.lat_lon?.lon || 0,
//   };

//   return (
//     <div className="container-fluid">
//       <Navbar />
//       <div className="flex justify-center items-center">
//         <Link
//           className="flex mr-3 font-bold text-blue-600 hover:underline"
//           to="/hotellist"
//         >
//           <p>
//             <KeyboardArrowLeftIcon />
//           </p>
//           <p>Classic View</p>
//         </Link>
//         <HeaderSearchBox
//           hotels={hotels}
//           airports={airports}
//           city={city}
//           cruise={cruise}
//           interest={interest}
//           onButtonClick={handleButtonMapClick}
//           isMapViewPage={isMapViewPage}
//         />
//       </div>

//       <div
//         style={{ position: "relative", height: "835px" }}
//         className="flex flex-row py-2"
//       >
//         <div className="flex flex-col">
//           <Filterwithoutmap />
//         </div>
//         <div className="border-2" style={{ width: "100%", height: "auto" }}>
//           <GoogleMap
//             key={mapKey}
//             mapContainerStyle={{
//               width: "100%",
//               height: "100%",
//             }}
//             center={center}
//             zoom={10}
//             onClick={handleMapClick}
//           >
//             {/* {filteredHotels.map((hotel) => (
//               <CustomMarker
//                 key={hotel.id}
//                 position={{
//                   lat: hotel.lat_lon?.lat || 0,
//                   lng: hotel.lat_lon?.lon || 0,
//                 }}
//                 onClick={() => handleMarkerClick(hotel)}
//               />
//             ))}
//             {filteredHotels && (
//               <HotelPopup
//                 hotel={filteredHotels}
//                 onClose={() => setFilteredHotels(null)}
//               />
//             )} */}

//             {filteredHotels.map((hotel) => (
//               <Marker
//                 key={hotel.id}
//                 position={{
//                   lat: hotel.lat_lon?.lat || 0,
//                   lng: hotel.lat_lon?.lon || 0,
//                 }}
//                 onClick={() => handleMarkerClick(hotel)}
//               />
//             ))}
//             {/* {storedFilteredHotels.map((hotel) => (
//               <HotelPopup
//                 key={hotel.id}
//                 hotel={hotel}
//                 //hotel={filteredHotels}
//                 onClose={() => setFilteredHotels([])}
//               />
//             ))} */}
//           </GoogleMap>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const query = graphql`
//   query MyQuery {
//     allHotel {
//       nodes {
//         id
//         name
//         phone
//         hotel_code
//         field_rooms_ajay {
//           drupal_internal__target_id
//         }
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
//     allLocationAirport {
//       nodes {
//         id
//         name
//         field_address {
//           locality
//           country_code
//         }
//       }
//     }
//     allLocationCity {
//       nodes {
//         id
//         name
//         population
//       }
//     }
//     allLocationCruise {
//       nodes {
//         id
//         google_place_id
//         name
//       }
//     }
//     allLocationPointOfInterest {
//       nodes {
//         id
//         name
//         google_place_id
//       }
//     }
//   }
// `;

// export default MapComponent;

import React, { useEffect, useState } from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
  OverlayView,
  InfoWindow,
} from "@react-google-maps/api";
import { Link, navigate } from "gatsby";
import { graphql } from "gatsby";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Navbar from "../components/Navbar/Navbar";
import Filterwithoutmap from "../components/HotelList/Filterwithoutmap";
import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
import CloseIcon from "@mui/icons-material/Close";
import room3 from "../assets/room3.jpg";

const MapComponent = ({ data }) => {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [mapKey, setMapKey] = useState(0);
  const storedFilteredHotels =
    JSON.parse(sessionStorage.getItem("filteredHotels")) || [];
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotels = data?.allHotel?.nodes || [];
  const airports = data?.allLocationAirport?.nodes || [];
  const city = data?.allLocationCity?.nodes || [];
  const cruise = data?.allLocationCruise?.nodes || [];
  const interest = data?.allLocationPointOfInterest?.nodes || [];
  // const filteredHotels = useSelector((state) => state.hotel.filteredHotels);
  const [isMapViewPage, setIsMapViewPage] = useState(true);

  useEffect(() => {
    const isFilteredHotelsChanged =
      JSON.stringify(filteredHotels) !== JSON.stringify(storedFilteredHotels);

    if (isFilteredHotelsChanged) {
      setFilteredHotels(storedFilteredHotels);
      setMapKey((prevKey) => prevKey + 1);
    }
  }, [filteredHotels, storedFilteredHotels]);

  const handleMarkerClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleMapClick = () => {
    setSelectedHotel(null);
  };

  const handleButtonMapClick = () => {
    navigate("/mapview");
  };
  const handleClosePopup = (event) => {
    event.stopPropagation(); // Prevent event bubbling

    // Implement the logic to close the popup
    setSelectedHotel(null);
  };

  const center = {
    lat:
      filteredHotels && filteredHotels.length > 0
        ? filteredHotels[0]?.lat_lon?.lat
        : 0,
    lng:
      filteredHotels && filteredHotels.length > 0
        ? filteredHotels[0]?.lat_lon?.lon
        : 0,
  };

  //   const CustomMarker = ({ onClick }) => {
  //   return (
  //     <div >
  //       <div
  //         style={{
  //           position: "absolute",
  //           cursor: "pointer",
  //           //transform: "translate(-50%, -50%)",
  //           border: "2px solid red",
  //         }}
  //       >
  //         <div
  //           className="p-1 px-2 bg-blue-600 flex justify-center items-center rounded-full border border-2 cursor-pointer transition-transform transform-gpu hover:scale-110"
  //           onClick={onClick}
  //         >
  //           <p className="text-sm text-white font-bold">₹25360</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const CustomMarker = ({ position, onClick }) => {
  //   return (
  //     <OverlayView
  //       position={position}
  //       mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
  //       getPixelPositionOffset={(width, height) => ({
  //         x: -(width / 2),
  //         y: -(height / 2),
  //       })}
  //     >
  //       <div
  //         style={{
  //           cursor: "pointer",
  //           border: "2px solid red",
  //           transform: "translate(-50%, -50%)",
  //         }}
  //         onClick={onClick}
  //       >
  //         <div className="p-1 px-2 bg-blue-600 flex justify-center items-center rounded-full border border-2 cursor-pointer transition-transform transform-gpu hover:scale-110">
  //           <p className="text-sm text-white font-bold">₹25360</p>
  //         </div>
  //       </div>
  //     </OverlayView>
  //   );
  // };

  const CustomMarker = ({ position, onClick }) => {
    return (
      <Marker
        position={position}
        onClick={onClick}
        icon={{
          url: "https://path/to/your/custom-marker-icon.png",
          scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
        }}
      />
    );
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="flex justify-center items-center">
        <Link
          className="flex mr-3 font-bold text-blue-600 hover:underline"
          to="/hotellist"
        >
          <p>
            <KeyboardArrowLeftIcon />
          </p>
          <p>Classic View</p>
        </Link>
        <HeaderSearchBox
          hotels={hotels}
          airports={airports}
          city={city}
          cruise={cruise}
          interest={interest}
          onButtonClick={handleButtonMapClick}
          isMapViewPage={isMapViewPage}
        />
      </div>

      <div
        style={{ position: "relative", height: "835px" }}
        className="flex flex-row py-2"
      >
        <div className="flex flex-col">
          <Filterwithoutmap />
        </div>
        <div className="border-2" style={{ width: "100%", height: "auto" }}>
          <GoogleMap
            key={mapKey}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={10}
            onClick={handleMapClick}
          >
            {/* {filteredHotels.map((hotel) => (
              <Marker
                key={hotel.id}
                position={{
                  lat: hotel.lat_lon?.lat || 0,
                  lng: hotel.lat_lon?.lon || 0,
                }}
                onClick={() => handleMarkerClick(hotel)}
              />
            ))} */}
            {filteredHotels.map((hotel) => (
              <Marker
                key={hotel.id}
                position={{
                  lat: hotel.lat_lon?.lat || 0,
                  lng: hotel.lat_lon?.lon || 0,
                }}
                onClick={() => handleMarkerClick(hotel)}
              ></Marker>
            ))}
          </GoogleMap>

          {selectedHotel && (
            <div
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              className="w-64 p-4 bg-white border rounded shadow-md"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                border: "2px solid red",
              }}
            >
              <CloseIcon
                className="text-black text-2xl    hover:bg-red-500 rounded-full  "
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                onClick={(event) => handleClosePopup(event)}
              />
              <Link   to={`/hotels/${selectedHotel.id}`}>
                <div className="mb-4">
                  <img
                    src={room3}
                    alt={selectedHotel.name}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-1">
                      <FavoriteIcon />
                    </span>
                    <p className="text-gray-700">9.3</p>
                  </div>
                  <p className="text-gray-700">{selectedHotel.location}</p>
                  <p className="text-gray-700">5-Star Hotel</p>
                </div>
                <h2 className="text-md font-semibold mb-2">
                  {selectedHotel.name}
                </h2>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allHotel {
      nodes {
        id
        name
        phone
        hotel_code
        field_rooms_ajay {
          drupal_internal__target_id
        }
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
    allLocationAirport {
      nodes {
        id
        name
        field_address {
          locality
          country_code
        }
      }
    }
    allLocationCity {
      nodes {
        id
        name
        population
      }
    }
    allLocationCruise {
      nodes {
        id
        google_place_id
        name
      }
    }
    allLocationPointOfInterest {
      nodes {
        id
        name
        google_place_id
      }
    }
  }
`;

export default MapComponent;
