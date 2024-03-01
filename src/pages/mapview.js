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


// AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ
import React, { useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import MapIcon from "@mui/icons-material/Map";
import { navigate } from "gatsby";
import { useSelector } from "react-redux";

const MapComponent = () => {
  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);

  // Checking if selectedHotel exists before accessing lat_lon
  const center = {
    lat: selectedHotel?.lat_lon?.lat || 0, // Default to 0 if lat_lon is not available
    lng: selectedHotel?.lat_lon?.lon || 0,
  };

  const markerPosition = {
    lat: center.lat,
    lng: center.lng,
  };

  const [showMap, setShowMap] = useState(false);

  const handleButtonClick = () => {
    navigate('/hotellist');
  };

  return (
    <div style={{ position: "relative", height: "800px" }}>
      <button
        className="border-2 hover:border-gray-500 bg-white font-bold p-2 rounded-xl text-blue-800 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ zIndex: 1 }}
        onClick={handleButtonClick}
      >
        <MapIcon className="mr-2" />
        Classic View
      </button>
      <div
        className="border-2"
        style={{ width: "100%", height: "800px", borderRadius: "4%" }}
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
            {/* Red Marker at the specified latitude and longitude */}
            <Marker position={markerPosition} icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapComponent;