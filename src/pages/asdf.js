// // import React, { useState, useEffect } from 'react';
// // import { useStaticQuery, graphql } from 'gatsby';
// // import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// // const Map = ({ hotels, center }) => (
// //   <GoogleMap
// //     center={center}
// //     zoom={10}
// //   >
// //     {hotels.map((hotel) => (
// //       <Marker
// //         key={hotel.id}
// //         position={{ lat: parseFloat(hotel.lat_lon.lat), lng: parseFloat(hotel.lat_lon.lon) }}
// //         title={hotel.name}
// //       />
// //     ))}
// //   </GoogleMap>
// // );

// // const HotelSearch = () => {
// //   const data = useStaticQuery(graphql`
// //     query {
// //       allHotel {
// //         nodes {
// //           id
// //           name
// //           lat_lon {
// //             lat
// //             lon
// //           }
// //         }
// //       }
// //     }
// //   `);

// //   const [city, setCity] = useState('');
// //   const [hotels, setHotels] = useState([]);
// //   const [error, setError] = useState('');
// //   const [mapCenter, setMapCenter] = useState({ lat: 0, lon: 0 });

// //   useEffect(() => {
// //     const filteredHotels = data.allHotel.nodes.filter((hotel) => {
// //       return hotel.lat_lon && hotel.lat_lon.lat && hotel.lat_lon.lon;
// //     });

// //     setHotels(filteredHotels);
// //     setMapCenter({
// //       lat: filteredHotels.length > 0 ? parseFloat(filteredHotels[0].lat_lon.lat) : 0,
// //       lon: filteredHotels.length > 0 ? parseFloat(filteredHotels[0].lat_lon.lon) : 0,
// //     });
// //   }, [city, data]);

// //   return (
// //     <div>
// //       <h1>Hotel Search</h1>
// //       <div>
// //         <label htmlFor="cityInput">City:</label>
// //         <input
// //           type="text"
// //           id="cityInput"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value)}
// //         />
// //       </div>
// //       {error && <p style={{ color: 'red' }}>{error}</p>}
// //       <div style={{ height: '400px', width: '100%' }}>
// //         <LoadScript
// //           googleMapsApiKey="AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ"
// //           libraries={['places']}
// //         >
// //           <Map
// //             hotels={hotels}
// //             center={mapCenter}
// //           />
// //         </LoadScript>
// //       </div>
// //       <ul>
// //         {hotels.map((hotel) => (
// //           <li key={hotel.id}>{hotel.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default HotelSearch;


// // AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ

// // import React, { useState } from 'react';
// // import GoogleMapReact from 'google-map-react';
// // import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// // const MapWithSearch = ({ center, zoom }) => {
// //   const [selectedPlace, setSelectedPlace] = useState(null);
// //   const [mapApiLoaded, setMapApiLoaded] = useState(false);
// //   const [searchValue, setSearchValue] = useState('');

// //   const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
// //     requestOptions: {
// //       location: { lat: () => center.lat, lng: () => center.lng },
// //       radius: 200 * 1000, // 200 km around the center
// //     },
// //   });

// //   const handleSelect = async (address) => {
// //     setValue(address, false);
// //     clearSuggestions();

// //     try {
// //       const results = await getGeocode({ address });
// //       const { lat, lng } = await getLatLng(results[0]);
// //       setSelectedPlace({ lat, lng });
// //     } catch (error) {
// //       console.error('Error selecting place:', error);
// //     }
// //   };

// //   const handleSearch = () => {
// //     if (searchValue.trim() !== '') {
// //       setValue(searchValue, false);
// //       handleSelect(searchValue);
// //     }
// //   };

// //   return (
// //     <div style={{ height: '100vh', width: '100%' }}>
// //       <GoogleMapReact
// //         bootstrapURLKeys={{ key: "AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ" }}
// //         defaultCenter={center}
// //         defaultZoom={zoom}
// //         yesIWantToUseGoogleMapApiInternals
// //         onGoogleApiLoaded={({ map, maps }) => {
// //           setMapApiLoaded(true);
// //         }}
// //       >
// //         {selectedPlace && mapApiLoaded && (
// //           <AnyReactComponent
// //             lat={selectedPlace.lat}
// //             lng={selectedPlace.lng}
// //             text="Selected Place"
// //           />
// //         )}
// //       </GoogleMapReact>

// //       <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
// //         <input
// //           value={searchValue}
// //           onChange={(e) => setSearchValue(e.target.value)}
// //           placeholder="Search for a location"
// //         />
// //         <button onClick={handleSearch}>Search</button>
// //         {status === 'OK' && (
// //           <ul>
// //             {data.map(({ place_id, description }) => (
// //               <li key={place_id} onClick={() => handleSelect(description)}>
// //                 {description}
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default function SimpleMap() {
// //   const defaultProps = {
// //     center: {
// //       lat: 10.99835602,
// //       lng: 77.01502627,
// //     },
// //     zoom: 11,
// //   };

// //   return <MapWithSearch center={defaultProps.center} zoom={defaultProps.zoom} />;
// // }



// // AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ
// import React from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow
// } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css";
// // import mapStyles from "./mapStyles";

// const libraries = ["places"];
// const mapContainerStyle = {
//   height: "100vh",
//   width: "100vw"
// };
// const options = {
//   // styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true
// };
// const center = {
//   lat: 43.6532,
//   lng: -79.3832
// };

// export default function App() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk",
//     libraries
//   });
//   const [markers, setMarkers] = React.useState([]);
//   const [selected, setSelected] = React.useState(null);

//   const onMapClick = React.useCallback(e => {
//     setMarkers(current => [
//       // ...current,
//       {
//         lat: e.latLng.lat(),
//         lng: e.latLng.lng(),
//         time: new Date()
//       }
//     ]);
//   }, []);

//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback(map => {
//     mapRef.current = map;
//   }, []);

//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(14);
//     setMarkers(current => [
//       // ...current,
//       {
//         lat,
//         lng,
//         time: new Date()
//       }
//     ]);
//   }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return (
//     <div>
//       <Locate panTo={panTo} />
//       <Search panTo={panTo} />

//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={center}
//         options={options}
//         onClick={onMapClick}
//         onLoad={onMapLoad}
//       >
//         {markers.map(marker => (
//           <Marker
//             key={`${marker.lat}-${marker.lng}`}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             onClick={() => {
//               setSelected(marker);
//             }}
//             // icon={{
//             //   url: `/bear.svg`,
//             //   origin: new window.google.maps.Point(0, 0),
//             //   anchor: new window.google.maps.Point(15, 15),
//             //   scaledSize: new window.google.maps.Size(30, 30)
//             // }}
//           />
//         ))}

//         {selected ? (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => {
//               setSelected(null);
//             }}
//           >
//             <div>
//               <h2>
//                 <span role="img" aria-label="bear">
//                   🐻
//                 </span>{" "}
//                 Alert
//               </h2>
//               <p>Spotted {formatRelative(selected.time, new Date())}</p>
//             </div>
//           </InfoWindow>
//         ) : null}
//       </GoogleMap>
//     </div>
//   );
// }

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           position => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }

// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000
//     }
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = e => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async address => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }


import React from 'react'

const asdf = () => {
  return (
    <div>
      <p>zdvzdf</p>
    </div>
  )
}

export default asdf
