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

import React, { useState } from "react";

const Search = ({ hotels }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm state

  console.log("hotels", hotels);

  // Filter hotels based on the entered search term
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-grow mb-4 sm:mr-4 sm:mb-0 border rounded focus:outline-none border-gray-500">
      {/* Input box for searching hotels by name */}
      <input
        type="text"
        className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
        placeholder="Search by Hotel Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display filtered hotels */}
      <div className="mt-2">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="mb-2">
            {hotel.name} - {hotel.address ? hotel.address.address_line1 : 'Address Not Available'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
