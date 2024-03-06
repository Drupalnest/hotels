// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// const Search = ({ data }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [dateRange, setDateRange] = useState([null, null]);
//   // Extracting relevant data for the dropdown
//   if (!data || !data.allHotel || !data.allHotel.edges) {
//     console.error("Invalid data structure. Check your GraphQL query.");
//     return null; // or handle the error in a way suitable for your app
//   }
//   const hotels = data.allHotel.edges.map(({ node }) => ({
//     id: node.id,
//     name: node.name,
//     address: `${node.address.address_line1}, ${node.address.locality}, ${node.address.postal_code}`,
//   }));
//   const airports = data.allLocationAirport.edges.map(({ node }) => ({
//     id: node.id,
//     name: node.name,
//     googlePlaceId: node.google_place_id,
//   }));
//   const cities = data.allLocationCity.edges.map(({ node }) => ({
//     id: node.id,
//     name: node.name,
//     googlePlaceId: node.google_place_id,
//   }));
//   return (
//     <div className="border border-red-500 container mx-auto p-8 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 border-2 rounded-lg shadow-lg bg-white flex flex-col sm:flex-row">
//       <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         <input
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           type="text"
//           placeholder="Where to"
//         />
//       </div>
//       <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         {/* Dropdown for Hotels */}
//         <select
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Where to
//           </option>
//           {hotels.map((hotel) => (
//             <option key={hotel.id} value={hotel.id}>
//               {hotel.name} - {hotel.address}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="flex-grow mb-4 sm:mr-4 sm:mb-0">
//         <DatePicker
//           selected={dateRange[0]}
//           onChange={(date) => setDateRange([date, dateRange[1]])}
//           startDate={dateRange[0]}
//           endDate={dateRange[1]}
//           selectsRange
//           showMonthYearPicker
//           placeholderText="Check-in Check-out"
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//         />
//       </div>
//       <div className="flex-grow mb-4 sm:mr-4 sm:mb-0">
//         <button className="w-full p-3 border rounded focus:outline-none focus:border-blue-500 text-blue-500 hover:bg-blue-50">
//           Room And Guest
//         </button>
//       </div>
//       <div className="flex-grow">
//         <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 w-full sm:w-auto">
//           Update Search
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Search;
// import React, { useState } from "react";
// const Search = ({ hotels }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state
//   console.log("hotels", hotels);
//   // Filter hotels based on the entered search term
//   const filteredHotels = hotels.filter((hotel) =>
//     hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   // Check if the necessary data properties exist
//   // if (!data) {
//   //   console.error("Invalid data structure. Check your GraphQL query.");
//   //   return null; // or handle the error in a way suitable for your app
//   // }
//   // Extracting relevant data for each dropdown
//   // const hotels = data.allHotel?.edges.map(({ node }) => ({
//   //   id: node.id,
//   //   name: node.name,
//   //   address: `${node.address.address_line1}, ${node.address.locality}, ${node.address.postal_code}`
//   // })) || [];
//   // const airports = data.allLocationAirport?.edges.map(({ node }) => ({
//   //   id: node.id,
//   //   name: node.name,
//   //   googlePlaceId: node.google_place_id
//   // })) || [];
//   // const cities = data.allLocationCity?.edges.map(({ node }) => ({
//   //   id: node.id,
//   //   name: node.name,
//   //   googlePlaceId: node.google_place_id
//   // })) || [];
//   // const cruises = data.allLocationCruise?.edges.map(({ node }) => ({
//   //   id: node.id,
//   //   name: node.name,
//   //   googlePlaceId: node.google_place_id
//   // })) || [];
//   // const pointsOfInterest = data.allLocationPointOfInterest?.edges.map(({ node }) => ({
//   //   id: node.id,
//   //   name: node.name,
//   //   googlePlaceId: node.google_place_id
//   // })) || [];
//   return (
//     <div className="border border-red-500 container mx-auto p-8 sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 border-2 rounded-lg shadow-lg bg-white flex flex-col sm:flex-row">
//       <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//       {/* Input box for searching hotels by name */}
//       <input
//         type="text"
//         className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//         placeholder="Search by Hotel Name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {/* Dropdown for Hotels */}
//       <select
//         className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//         defaultValue=""
//       >
//         <option value="" disabled>
//           Select a Hotel
//         </option>
//         {filteredHotels.map((hotel) => (
//           <option key={hotel.id} value={hotel.id}>
//             {hotel.name} - {hotel.address.address_line1}
//           </option>
//         ))}
//       </select>
//     </div>
//       {/* Dropdown for Airports */}
//       {/* <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         <select
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Select an Airport
//           </option>
//           {airports.map((airport) => (
//             <option key={airport.id} value={airport.id}>
//               {airport.name}
//             </option>
//           ))}
//         </select>
//       </div> */}
//       {/* Dropdown for Cities */}
//       {/* <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         <select
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Select a City
//           </option>
//           {cities.map((city) => (
//             <option key={city.id} value={city.id}>
//               {city.name}
//             </option>
//           ))}
//         </select>
//       </div> */}
//       {/* Dropdown for Cruises */}
//       {/* <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         <select
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Select a Cruise
//           </option>
//           {cruises.map((cruise) => (
//             <option key={cruise.id} value={cruise.id}>
//               {cruise.name}
//             </option>
//           ))}
//         </select>
//       </div> */}
//       {/* Dropdown for Points of Interest */}
//       {/* <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         <select
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Select a Point of Interest
//           </option>
//           {pointsOfInterest.map((poi) => (
//             <option key={poi.id} value={poi.id}>
//               {poi.name}
//             </option>
//           ))}
//         </select>
//       </div> */}
//       {/* ... rest of your component */}
//     </div>
//   );
// };
// export default Search;

// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import "../styles/autocomplete.css";
// import locationIcon from "../../images/svg/icon-current-location.svg";
// import pointsIcon from "../../images/svg/icon-points-of-interest.svg";
// import citiesIcon from "../../images/svg/icon-regions.svg";
// import airportsIcon from "../../images/svg/icon-airports.svg";
// import hotelsIcon from "../../images/svg/icon-hotels.svg";
// import styled from "styled-components";
// import { theme } from "../styles/theme";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import Autosuggest from "react-autosuggest";
// import { slugify } from "transliteration";
// import { getAddressStateName } from "../../apis/address";
// // import loadable from '@loadable/component'
// // const Autosuggest = loadable(() => import(`react-autosuggest`));

// const Wrapper = styled.div`
//   .react-autosuggest__suggestions-container {
//     padding-bottom: unset !important;
//   }
// `;
// const InputWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   z-index: 40;
//   .searchIcon {
//     position: absolute;
//     top: 0;
//     right: 10px;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: #fff;
//     font-size: 13px;
//   }
// `;
// const SectionContainer = styled.div`
//   background-color: #ffffff;
//   margin-top: 15px;
//   bottom: unset !important;
// `;
// const SectionTitleText = styled.h6`
//   line-height: 20px;
// `;
// const SectionTitle = styled.div`
//   background-color: #fff;
//   padding: 0 0.8125rem 0.375rem 2.5rem;
//   font-size: 14px;
//   font-weight: bold;
//   background-position: 15px top;
//   background-repeat: no-repeat;
//   background-size: 15px auto;
//   &.points {
//     background-image: url(${pointsIcon});
//     background-size: 15px 18px;
//   }
//   &.cities {
//     background-image: url(${citiesIcon});
//     background-size: 15px 16px;
//   }
//   &.airports {
//     background-image: url(${airportsIcon});
//     background-size: 15px 18px;
//   }
//   &.hotels {
//     background-image: url(${hotelsIcon});
//     background-size: 15px 13px;
//     background-position-y: 3px;
//   }
// `;
// const CurrentLocation = styled.div`
//   padding: 10px 15px 10px 40px;
//   background: transparent;
//   border-bottom: 1px solid #d9d9d9;
//   color: #404040;
//   font-family: "Roboto", Arial, sans-serif;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 25px;
//   cursor: pointer;
//   transition: all 0.2s ease-out;
//   border-radius: 4px;
//   &:focus,
//   &:hover {
//     background: #f2f2f2;
//     color: ${theme.primaryColor};
//   }
//   img {
//     height: auto;
//     width: 18px;
//     position: absolute;
//     top: 13px;
//     left: 13px;
//   }
// `;
// const SearchResults = styled.div`
//   max-height: calc(100vh - 300px);
//   margin-right: 16px;
//   overflow-y: scroll;
//   padding-top: 20px;
//   -webkit-overflow-scrolling: touch;
//   .react-autosuggest__suggestions-list {
//     margin: 0;
//     padding: 0;
//     list-style-type: none;
//     .react-autosuggest__suggestion {
//       cursor: pointer;
//       padding: 6px 13px 6px 40px;
//       margin: 0;
//       font-size: 14px;
//       font-weight: 400;
//     }
//     .react-autosuggest__suggestion--highlighted {
//       background-color: #f2f2f2;
//       color: ${theme.primaryColor};
//     }
//   }
// `;

// const SearchAutocomplete = ({
//   searchString,
//   setCoordinates,
//   id,
//   inputRef = null,
//   brandId = null,
//   setIsKeyInLocation,
//   onSearchFocus,
// }) => {
//   const [value, setValue] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedSuggestion, setSelectedSuggestion] = useState(null);
//   const [isMyLocation, setIsMyLocation] = useState(false);

//   useEffect(() => {
//     setValue(searchString);
//   }, [searchString]);

//   const renderInputComponent = (inputProps) => (
//     <InputWrapper>
//       <span className="searchIcon">
//         <FontAwesomeIcon icon={faMapMarkerAlt} />
//       </span>
//       <input {...inputProps} />
//     </InputWrapper>
//   );
//   const setOverlayTop = () => {
//     var datesDiv = document.getElementById("global-search-autocomplete");
//     if (
//       datesDiv &&
//       window.innerHeight - datesDiv.getBoundingClientRect().y < 350
//     ) {
//       if (document.getElementById("react-autowhatever-1")) {
//         document.getElementById("react-autowhatever-1").style.bottom = "50px";
//       }
//     } else {
//       if (document.getElementById("react-autowhatever-1")) {
//         document.getElementById("react-autowhatever-1").style.bottom = "auto";
//       }
//     }
//   };
//   // const onAutocompleteChange = (event, { newValue, method }) => {
//   //   setOverlayTop();
//   //   setValue(newValue);
//   // };

//   // const onAutocompleteChange = (event, { newValue, method, inputProps }) => {
//   //   setOverlayTop();

//   //   // Check if inputProps and inputProps.value are defined before accessing their properties
//   //   if (inputProps && inputProps.value !== undefined) {
//   //     setValue(newValue);
//   //   }
//   // };

//   const handleSearchFocus = (event) => {
//     event.target.setSelectionRange(0, event.target.value.length);
//     onSearchFocus && onSearchFocus();
//   };

//   const handleBlur = (event, { highlightedSuggestion }) => {
//     if (!highlightedSuggestion && !isMyLocation) {
//       setValue("");
//       setCoordinates("", null, null);
//     }
//     setIsKeyInLocation(false);
//   };

//   const handleOnKeyPress = () => {
//     setIsKeyInLocation(true);
//     setIsMyLocation(false);
//   };

//   const getSuggestionValue = (suggestion) => suggestion.name;

//   const renderSuggestion = (suggestion) => (
//     <span>
//       {suggestion.name}
//       {suggestion.type == "hotel" && suggestion.state
//         ? `, ${suggestion.state}`
//         : ""}
//     </span>
//   );

//   const parseSuggestionResponse = (data) => {
//     for (const data_type in data) {
//       data[data_type].splice(4);
//     }
//     const cities = data["cities"];
//     const hotels = data["hotels"];
//     const airports = data["airports"];
//     const points = data["points"];
//     let results = [];
//     if (cities && cities.length > 0) {
//       results.push({
//         type: "Destinations",
//         data: cities,
//         class: "cities",
//       });
//     }
//     if (hotels && hotels.length > 0) {
//       results.push({
//         type: "Hotels",
//         data: hotels,
//         class: "hotels",
//       });
//     }
//     if (airports && airports.length > 0) {
//       results.push({
//         type: "Airports",
//         data: airports,
//         class: "airports",
//       });
//     }
//     if (points && points.length > 0) {
//       results.push({
//         type: "Points of Interest",
//         data: points,
//         class: "points",
//       });
//     }
//     return results;
//   };
//   const onSuggestionsFetchRequested = ({ value, reason }) => {
//     /*
//     if (reason === 'input-focused') {
//       return;
//     }*/
//     setTimeout(() => {
//       !value &&
//         setSuggestions([
//           {
//             type: "",
//             data: [{ name: "" }],
//           },
//         ]);
//     }, 0);
//     const source = Axios.CancelToken.source();
//     const config = {
//       cancelToken: source.token,
//       headers: {
//         "api-key": process.env.GATSBY_CORE_API_KEY,
//       },
//     };
//     try {
//       let escapedSearchValue = encodeURIComponent(value);
//       let autocompleteUrl = `${process.env.GATSBY_CORE_BASE_URL}/api/autocomplete?search=${escapedSearchValue}&site=1`;
//       // let autocompleteUrl = `http://rlhcoredev.prod.acquia-sites.com/api/autocomplete?search=${escapedSearchValue}&site=1`;

//       if (brandId) {
//         autocompleteUrl += `&brand=${brandId}`;
//       }
//       Axios.get(autocompleteUrl, config).then((res) => {
//         const { data } = res;
//         const parsedSuggestions = parseSuggestionResponse(data);
//         setSuggestions(parsedSuggestions);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };
//   const onSuggestionSelected = (
//     event,
//     { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
//   ) => {
//     setSelectedSuggestion(suggestion.name);
//     let alias = null;
//     if (suggestion.type === "city" && suggestion.country) {
//       const country = suggestion.country.toLowerCase();
//       const stateName = getAddressStateName(
//         suggestion.country,
//         suggestion.state
//       );
//       const state =
//         stateName !== null
//           ? slugify(stateName)
//           : suggestion.state.toLowerCase();
//       if (parseInt(suggestion.published)) {
//         alias = `/locations/${country}/${state}/${slugify(
//           suggestion.locality
//         )}`;
//       }
//     }
//     setCoordinates(
//       suggestion.name,
//       suggestion.lat,
//       suggestion.lon,
//       suggestion.brand_id,
//       suggestion.type,
//       suggestion.place_id || null,
//       alias
//     );
//     setIsMyLocation(false);
//   };
//   const renderSectionTitle = (section) => {
//     return (
//       section.type && (
//         <SectionTitle className={`${section.class}`}>
//           <SectionTitleText className={`section-title-icon`}>
//             {section.type}
//           </SectionTitleText>
//         </SectionTitle>
//       )
//     );
//   };
//   const renderSuggestionsContainer = ({ containerProps, children, query }) => {
//     return (
//       <SectionContainer {...containerProps}>
//         <CurrentLocation onClick={getLocation}>
//           <img src={locationIcon} alt="Current Location" />
//           <a tabIndex="0">Find hotels near me</a>
//         </CurrentLocation>
//         {value.trim().length > 2 && <SearchResults>{children}</SearchResults>}
//       </SectionContainer>
//     );
//   };
//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(getPosition, getPositionError);
//     }
//   };
//   const getPosition = (position) => {
//     const coords = position.coords;
//     setCoordinates("My Current Location", coords.latitude, coords.longitude);
//     setIsMyLocation(true);
//     setValue("My Current Location");
//     setSuggestions([]);
//   };
//   const getPositionError = (error) => {
//     /**
//      * @todo
//      * handle different errors and show message. For now just reset state.
//      *
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         x.innerHTML = "User denied the request for Geolocation."
//         break;
//       case error.POSITION_UNAVAILABLE:
//         x.innerHTML = "Location information is unavailable."
//         break;
//       case error.TIMEOUT:
//         x.innerHTML = "The request to get user location timed out."
//         break;
//       case error.UNKNOWN_ERROR:
//         x.innerHTML = "An unknown error occurred."
//         break;
//     }*/
//     console.log(error);
//     setValue("");
//     setSuggestions([]);
//     setIsMyLocation(false);
//   };
//   const getSectionSuggestions = (section) => {
//     if (section !== undefined) {
//       return section.data;
//     }
//     return null;
//   };

//   /* to render suggestion when input is null  */
//   const shouldRenderSuggestions = () => {
//     return true;
//   };

//   const inputProps = {
//     placeholder: "City, airport, attraction or hotel",
//     value,
//    // onChange: onAutocompleteChange,
//     onBlur: handleBlur,
//     onClick: handleSearchFocus,
//     onKeyPress: handleOnKeyPress,
//     className: "rounded",
//     id: id,
//     ref: inputRef,
//   };
//   return (
//     <Wrapper>
//     <Autosuggest
//       suggestions={suggestions}
//       onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//       onSuggestionsClearRequested={onSuggestionsClearRequested}
//       onSuggestionSelected={onSuggestionSelected}
//       getSuggestionValue={getSuggestionValue}
//       renderSuggestion={renderSuggestion}
//       renderSuggestionsContainer={renderSuggestionsContainer}
//       renderInputComponent={renderInputComponent}
//       multiSection={true}
//       highlightFirstSuggestion={true}
//       focusInputOnSuggestionClick={false}
//       renderSectionTitle={renderSectionTitle}
//       getSectionSuggestions={getSectionSuggestions}
//       alwaysRenderSuggestions={false}
//       shouldRenderSuggestions={shouldRenderSuggestions}
//       inputProps={inputProps}
//     />
//     </Wrapper>
//   );
// };

// export default SearchAutocomplete;

// SearchAutocomplete.propTypes = {
//   searchString: PropTypes.string.isRequired,
//   setCoordinates: PropTypes.func.isRequired,
//   id: PropTypes.string,
// };

// SearchAutocomplete.defaultProps = {
//   id: null,
// };
// Search.js

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
// } from "../../redux/actions";
// import HotelDetailsComponent from "../HotelList/HotelDetailss";

// const Search = ({ hotels, airports, cruise, interest, city }) => {
//   const dispatch = useDispatch();

//   const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
//     // Replace this with your actual logic to fetch hotel details
//     return {
//       id: hotelId,
//       name: hotelName,
//       address: "Hotel Address",
//       // Add other details as needed
//     };
//   };

//   const searchTerm = useSelector((state) => state.hotel.searchTerm);
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
//   const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

//   const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

//   const filteredData = allData.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleHotelClick = (hotel) => {
//     dispatch(setSelectedHotel(hotel));

//     // Fetch detailed information for the selected hotel (replace with your logic)
//     const details = fetchHotelDetails(
//       hotel.id,
//       hotel.Name,
//       hotel.address ? hotel.address.address_line1 : "Address not available"
//     );

//     // Dispatch the action to store hotel details in Redux
//     dispatch(setHotelDetails(details));
//   };

//   return (
//     <div>
//       <div className="relative mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         <input
//           type="text"
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           placeholder="Search by Hotel Name"
//           value={searchTerm}
//           onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//         />
//         {searchTerm && (
//           <div className="mt-2 h-20 overflow-y-auto border border-gray-300 rounded p-2 z-10">
//             {filteredData.map((item) => (
//               <div
//                 key={item.id}
//                 className="mb-2 cursor-pointer"
//                 onClick={() => handleHotelClick(item)}
//               >
//                 {item.name}
//                 {item.address && (
//                   <div>
//                     <div>{item.address.address_line1}</div>
//                     <div>{item.address.locality}</div>
//                     {/* Add other address properties as needed */}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setSearchTerm,
//   setSelectedHotel,
//   setHotelDetails,
// } from "../../redux/actions";
// import HotelDetailsComponent from "../HotelList/HotelDetailss";

// const Search = ({ hotels, airports, cruise, interest, city }) => {
//   const dispatch = useDispatch();

//   const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
//     // Replace this with your actual logic to fetch hotel details
//     return {
//       id: hotelId,
//       name: hotelName,
//       address: "Hotel Address",
//       // Add other details as needed
//     };
//   };

//   const searchTerm = useSelector((state) => state.hotel.searchTerm);
//   const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
//   const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

//   // Combine all data into a single array
//   const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

//   // Filter hotels based on the selected locality
//   // ...

//   const filteredData = allData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       // Remove the locality condition for now
//   );

//   // ...

//   const handleHotelClick = (hotel) => {
//     dispatch(setSelectedHotel(hotel));

//     // Fetch detailed information for the selected hotel (replace with your logic)
//     const details = fetchHotelDetails(
//       hotel.id,
//       hotel.Name,
//       hotel.address ? hotel.address.address_line1 : "Address not available"
//     );

//     // Dispatch the action to store hotel details in Redux
//     dispatch(setHotelDetails(details));
//   };

//   console.log("searchTerm", searchTerm);
//   console.log("selectedHotel", selectedHotel);

//   return (
//     <div>
//       <div className="relative mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
//         <input
//           type="text"
//           className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
//           placeholder="Search by Hotel Name"
//           value={searchTerm}
//           onChange={(e) => dispatch(setSearchTerm(e.target.value))}
//         />
//         {searchTerm && (
//           <div className="z-50 bg-slate-50 mt-2 h-20 overflow-y-auto border border-gray-300 rounded p-2 z-10">
//             {filteredData.map((item) => (
//               <div
//                 key={item.id}
//                 className="mb-2 cursor-pointer"
//                 onClick={() => handleHotelClick(item)}
//               >
//                 {item.address && (
//                   <div>
//                     <div>{item.address.locality}</div>
//                     {/* Add other address properties as needed */}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setSelectedHotel, setHotelDetails, setFilteredHotels } from "../../redux/actions";
import SearchIcon from "@mui/icons-material/Search";
import HotelDetailsComponent from "../HotelList/HotelDetailss";
import { InputAdornment, TextField } from "@mui/material";

const Search = ({ hotels, airports, cruise, interest, city }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const fetchHotelDetails = (hotelId, hotelName, addressLine) => {
    // Replace this with your actual logic to fetch hotel details
    return {
      id: hotelId,
      name: hotelName,
      address: "Hotel Address",
      // Add other details as needed
    };
  };

  const searchTerm = useSelector((state) => state.hotel.searchTerm);
  const selectedHotel = useSelector((state) => state.hotel.selectedHotel);
  const hotelDetails = useSelector((state) => state.hotel.hotelDetails);

  // Combine all data into a single array
  const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

  // Filter hotels based on the selected locality
  const uniqueLocalities = new Set();

  const filteredData = allData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.address &&
      item.address.locality &&
      item.address.locality.toLowerCase().includes(searchTerm.toLowerCase());

    if (matchesSearch) {
      // Add the locality to the set if it matches the search
      uniqueLocalities.add(item.address.locality);
    }

    return matchesSearch;
  });

  // Handle click on hotel item
  const handleHotelClick = (hotel) => {
    dispatch(setSelectedHotel(hotel));

    // Fetch detailed information for the selected hotel (replace with your logic)
    const details = fetchHotelDetails(
      hotel.id,
      hotel.Name,
      hotel.address ? hotel.address.address_line1 : "Address not available"
    );

    // Dispatch the action to store hotel details in Redux
    dispatch(setHotelDetails(details));

    // Log filtered hotels based on locality
    const filteredHotels = allData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        item.address &&
        item.address.locality &&
        item.address.locality.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Hotels based on Locality:", filteredHotels);
    dispatch(setFilteredHotels(filteredHotels));
  };

  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearchBoxToggle = () => {
    setIsSearchBoxOpen(!isSearchBoxOpen);
  };

  return (
    <div className="flex flex-col relative justify-center items-center mr-2 h-full sm:w-full md:w-1/3 border-none rounded-3xl">
      <TextField
        onClick={handleSearchBoxToggle}
        placeholder="Where to?"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="font-montserrat font-bold text-2xl leading-10 text-blue-800" />
            </InputAdornment>
          ),
        }}
        className="w-full border-2 rounded-lg border-blue-600"
      />

      {isSearchBoxOpen && searchTerm && (
        <div className="absolute w-full top-full left-0 bg-white rounded shadow overflow-auto border h-32 border-gray-300 p-2">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="mb-2 cursor-pointer"
              onClick={() => handleHotelClick(item)}
            >
              {item.address && (
                <div>
                  <div>{item.address.locality}</div>
                  {/* Add other address properties as needed */}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
