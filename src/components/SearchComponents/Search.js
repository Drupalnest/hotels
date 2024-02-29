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

import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { DayPicker } from "react-day-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./DayPicker.css";
import "react-day-picker/dist/style.css";

const Search = ({ hotels, airports, cruise, interest, city }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const allData = [...hotels, ...airports, ...cruise, ...interest, ...city];

  // Filter based on the entered search term
  const filteredData = allData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const today = new Date(); // Get the current date
  const tomorrow = new Date(today); // Get tomorrow's date
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState([today, tomorrow]);

  const handleDayPickerToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDayClick = (day) => {
    const newDateRange = [...dateRange];

    if (!newDateRange[0] || (newDateRange[0] && newDateRange[1])) {
      newDateRange[0] = day;
      newDateRange[1] = null;
    } else if (day > newDateRange[0]) {
      newDateRange[1] = day;
      setIsCalendarOpen(false);
    } else {
      // Swap dates if the selected date is before the check-in date
      newDateRange[1] = newDateRange[0];
      newDateRange[0] = day;
      setIsCalendarOpen(false);
    }

    setDateRange(newDateRange);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleIncrement = (type) => {
    switch (type) {
      case "rooms":
        setRooms(rooms + 1);
        break;
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (type) => {
    if (type === "rooms" && rooms > 1) {
      setRooms(rooms - 1);
    } else if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    }
  };

  return (
    <div className="w-1/ border-2 border border-red-500  flex flex-row">
      <div className=" mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
        <input
          type="text"
          className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Search by Hotel Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Display filtered hotels if there is a search term */}
        {searchTerm && (
          <div className="mt-2 h-20 overflow-y-auto border border-gray-300 rounded p-2 z-10">
            {filteredData.map((item) => (
              <div key={item.id} className="mb-2">
                {item.name}
                {/* {item.lat_lon.lat} */}

                {item.lat_lon
                ? item.lat_lon.latlon
                : "Address Not Available"} 

                {/* {item.address
                ? item.address.address_line1
                : "Address Not Available"} */}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        style={{ position: "relative" }}
        className="flex-grow mb-4 sm:mr-4 sm:mb-0"
      >
        <input
          type="text"
          placeholder="Check-in Check-out"
          onClick={handleDayPickerToggle}
          value={`${dateRange[0]?.toLocaleDateString()}${
            dateRange[0] && dateRange[1]
              ? " - " + dateRange[1]?.toLocaleDateString()
              : ""
          }`}
          readOnly
          className="overflow-x-auto w-full p-3 border rounded focus:outline-none focus:border-blue-500"
        />
        {isCalendarOpen && (
          <DayPicker
            numberOfMonths={2}
            pagedNavigation
            selected={dateRange[0]}
            onDayClick={handleDayClick}
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            selectsRange
            placeholderText="Check-in Check-out"
            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            style={{
              zIndex: 1000,
              width: "300px",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
            }}
            modifiers={{
              disabled: { before: today },
            }}
          />
        )}
      </div>

      <div
        ref={dropdownRef}
        className=" relative flex-grow mb-4 sm:mr-4 sm:mb-0"
      >
        <button
          className="w-full p-3 border rounded focus:outline-none focus:border-blue-500 text-blue-500 hover:bg-blue-50"
          onClick={handleToggleDropdown}
        >
          {rooms} Rooms, {children} Children, {adults} Adults
        </button>
        {isDropdownOpen && (
          <div className="absolute top-10 right-0 p-4 bg-white border rounded shadow">
            <div className="mb-4">
              <label className="block text-gray-700">Rooms:</label>
              <div className="flex">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleDecrement("rooms")}
                >
                  -
                </button>
                <span className="mx-2">{rooms}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleIncrement("rooms")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Adults:</label>
              <div className="flex">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleDecrement("adults")}
                >
                  -
                </button>
                <span className="mx-2">{adults}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleIncrement("adults")}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Children:</label>
              <div className="flex">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleDecrement("children")}
                >
                  -
                </button>
                <span className="mx-2">{children}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200"
                  onClick={() => handleIncrement("children")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-grow">
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 w-full sm:w-auto">
          Update Search
        </button>
      </div>
    </div>
  );
};
export default Search;

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
