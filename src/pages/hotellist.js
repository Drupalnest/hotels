// import React from "react";
// import { graphql } from "gatsby";
// import room1 from "../assets/room1.jpg";
// import Filter from "../components/HotelList/Filter";
// import Search from "../components/SearchComponents/Search";

// const hotellist = ({ data }) => {
//   const hotels = data?.allHotel?.nodes || [];
//  // console.log("hotelsv", hotels);
//   return (
//     <div className="flex flex-col items-center justify-center border border-red-500 ">
//       <div className="w-full container-fluid h-10 border-2">Navbar</div>
//       <Search hotels={hotels} />
//       <div className="border border-blue-500 flex flex-row  w-full  justify-center">
//         <div className="flex flex-col border-2 w-1/1 py-2 px-4">
//           <div>
//             <Filter />
//           </div>
//         </div>
//         <div className="flex flex-row border-2">
//           <div>
//             <img
//               src={room1}
//               className=""
//               style={{
//                 border: "2px solid red",
//                 width: "200px",
//                 height: "150px",
//               }}
//             />
//           </div>
//           <div className="flex flex-col border-2">
//             <div className="flex flex-row border-2">
//               <p>COMFORT</p>
//               <p>BUSINESS FRIENDLY</p>
//               <p>SPA & WELLNESS</p>
//             </div>
//             <div>
//               <span>
//                 <p>Courtyard by Marriott Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Free Internet Access,Free Parking Amenities</p>
//                 <p>Fully Refundable Rates,Pay Later Available</p>
//               </span>
//               <span className="flex flex-row">
//                 <p>7.9</p>
//                 <p>291 Rating</p>
//                 <p>3-Star Hotel</p>
//               </span>
//             </div>
//           </div>
//           <div>
//             <div>
//               <p>₹11533</p>
//               <p>₹123,066 for 2 nights</p>
//               <button>Choose your room</button>
//             </div>
//           </div>
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

//       }
//     }
//   }
// `;

// export default hotellist;

// import React from "react";
// import { graphql } from "gatsby";
// import room1 from "../assets/room1.jpg";
// import Filter from "../components/HotelList/Filter";
// import Search from "../components/SearchComponents/Search";
// import PreHeader from "../components/PreHeader";
// import Header from "../components/Header";
// import HotelDetailss from "../components/HotelList/HotelDetailss";
// import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
// import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
// import Indexpage from "../components/IndexPage/Indexpage";
// import Navbar from "../components/Navbar/Navbar";

// const hotellist = ({ data }) => {
//   const hotels = data?.allHotel?.nodes || [];
//   console.log("hotels", hotels);
//   const airports = data?.allLocationAirport?.nodes || [];
//   console.log("airports", airports);
//   const city = data?.allLocationCity?.nodes || [];
//   console.log("city", city);
//   const cruise = data?.allLocationCruise?.nodes || [];
//   console.log("cruise", cruise);
//   const interest = data?.allLocationPointOfInterest?.nodes || [];
//   console.log("interest", interest);
//   return (
//     <div className="flex flex-col gap-2 items-center justify-center ">
//       {/* <PreHeader /> */}
//       <Navbar />

//       <HeaderSearchBox
//         hotels={hotels}
//         airports={airports}
//         city={city}
//         cruise={cruise}
//         interest={interest}
//       />

//       <div className="border border-blue-500 flex flex-row  w-full  justify-center">
//         <div className="flex flex-col border-2 w-1/1 py-2 px-4">
//           <div>
//             <Filter
//               hotels={hotels}
//               airports={airports}
//               city={city}
//               cruise={cruise}
//               interest={interest}
//             />
//           </div>
//         </div>
//         {/* <div className="flex flex-row border-2">
//           <div>
//             <img
//               src={room1}
//               className=""
//               style={{
//                 border: "2px solid red",
//                 width: "200px",
//                 height: "150px",
//               }}
//             />
//           </div>
//           <div className="flex flex-col border-2">
//             <div className="flex flex-row border-2">
//               <p>COMFORT</p>
//               <p>BUSINESS FRIENDLY</p>
//               <p>SPA & WELLNESS</p>
//             </div>
//             <div>
//               <span>
//                 <p>Courtyard by Marriott Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Free Internet Access,Free Parking Amenities</p>
//                 <p>Fully Refundable Rates,Pay Later Available</p>
//               </span>
//               <span className="flex flex-row">
//                 <p>7.9</p>
//                 <p>291 Rating</p>
//                 <p>3-Star Hotel</p>
//               </span>
//             </div>
//           </div>
//           <div>
//             <div>
//               <p>₹11533</p>
//               <p>₹123,066 for 2 nights</p>
//               <button>Choose your room</button>
//             </div>
//           </div>

//         </div> */}
//         <HotelDetailsComponent />
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
// export default hotellist;

// import React from "react";
// import { graphql } from "gatsby";
// import room1 from "../assets/room1.jpg";
// import Filter from "../components/HotelList/Filter";
// import Search from "../components/SearchComponents/Search";

// const hotellist = ({ data }) => {
//   const hotels = data?.allHotel?.nodes || [];
//  // console.log("hotelsv", hotels);
//   return (
//     <div className="flex flex-col items-center justify-center border border-red-500 ">
//       <div className="w-full container-fluid h-10 border-2">Navbar</div>
//       <Search hotels={hotels} />
//       <div className="border border-blue-500 flex flex-row  w-full  justify-center">
//         <div className="flex flex-col border-2 w-1/1 py-2 px-4">
//           <div>
//             <Filter />
//           </div>
//         </div>
//         <div className="flex flex-row border-2">
//           <div>
//             <img
//               src={room1}
//               className=""
//               style={{
//                 border: "2px solid red",
//                 width: "200px",
//                 height: "150px",
//               }}
//             />
//           </div>
//           <div className="flex flex-col border-2">
//             <div className="flex flex-row border-2">
//               <p>COMFORT</p>
//               <p>BUSINESS FRIENDLY</p>
//               <p>SPA & WELLNESS</p>
//             </div>
//             <div>
//               <span>
//                 <p>Courtyard by Marriott Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Free Internet Access,Free Parking Amenities</p>
//                 <p>Fully Refundable Rates,Pay Later Available</p>
//               </span>
//               <span className="flex flex-row">
//                 <p>7.9</p>
//                 <p>291 Rating</p>
//                 <p>3-Star Hotel</p>
//               </span>
//             </div>
//           </div>
//           <div>
//             <div>
//               <p>₹11533</p>
//               <p>₹123,066 for 2 nights</p>
//               <button>Choose your room</button>
//             </div>
//           </div>
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

//       }
//     }
//   }
// `;

// export default hotellist;

// import React from "react";
// import { graphql } from "gatsby";
// import room1 from "../assets/room1.jpg";
// import Filter from "../components/HotelList/Filter";
// import Search from "../components/SearchComponents/Search";
// import PreHeader from "../components/PreHeader";
// import Header from "../components/Header";
// import HotelDetailss from "../components/HotelList/HotelDetailss";
// import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
// import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
// import Indexpage from "../components/IndexPage/Indexpage";
// import Navbar from "../components/Navbar/Navbar";
// import Amenities from "../components/FilterComponents/Amenties";
// import { useState } from "react";
// import { useEffect } from "react";

// const hotellist = ({ data }) => {
//   const hotels = data?.allHotel?.nodes || [];
//   console.log("hotels", hotels);
//   const airports = data?.allLocationAirport?.nodes || [];
//   console.log("airports", airports);
//   const city = data?.allLocationCity?.nodes || [];
//   console.log("city", city);
//   const cruise = data?.allLocationCruise?.nodes || [];
//   console.log("cruise", cruise);
//   const interest = data?.allLocationPointOfInterest?.nodes || [];
//   console.log("interest", interest);

//   const storedFilteredHotels =
//     JSON.parse(sessionStorage.getItem("filteredHotels")) || [];

//       useEffect(() => {
//     // This will run whenever hotels in Redux store changes
//     console.log("Hotels in session store:", storedFilteredHotels);
//   }, [storedFilteredHotels]);

//   const [filteredHotels, setFilteredHotels] = useState([]);

//   useEffect(() => {
//     // Set the initial filtered hotels
//     setFilteredHotels(storedFilteredHotels);
//   }, [storedFilteredHotels]);

//   const handleAmenityChange = (amenity) => {
//     // Filter hotels based on selected amenity
//     const updatedHotels = storedFilteredHotels.filter(
//       (hotel) => hotel.amenities?.some((a) => a.machine_name === amenity) // Added a null check for hotel.amenities
//     );
//     setFilteredHotels(updatedHotels);
//   };

//   return (
//     <div className="flex flex-col gap-2 items-center justify-center ">
//       {/* <PreHeader /> */}
//       <Navbar />

//       <HeaderSearchBox
//         hotels={hotels}
//         airports={airports}
//         city={city}
//         cruise={cruise}
//         interest={interest}
//       />

//       <div className="border border-blue-500 flex flex-row  w-full  justify-center">
//         <div className="flex flex-col border-2 w-1/1 py-2 px-4">
//           <div>
//             <Filter
//               hotels={hotels}
//               airports={airports}
//               city={city}
//               cruise={cruise}
//               interest={interest}
//               onAmenityChange={handleAmenityChange}
//             />
//           </div>
//           {/* <Amenities onAmenityChange={handleAmenityChange} /> */}
//         </div>
//         {/* <div className="flex flex-row border-2">
//           <div>
//             <img
//               src={room1}
//               className=""
//               style={{
//                 border: "2px solid red",
//                 width: "200px",
//                 height: "150px",
//               }}
//             />
//           </div>
//           <div className="flex flex-col border-2">
//             <div className="flex flex-row border-2">
//               <p>COMFORT</p>
//               <p>BUSINESS FRIENDLY</p>
//               <p>SPA & WELLNESS</p>
//             </div>
//             <div>
//               <span>
//                 <p>Courtyard by Marriott Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Indianapolis South</p>
//               </span>
//               <span>
//                 <p>Free Internet Access,Free Parking Amenities</p>
//                 <p>Fully Refundable Rates,Pay Later Available</p>
//               </span>
//               <span className="flex flex-row">
//                 <p>7.9</p>
//                 <p>291 Rating</p>
//                 <p>3-Star Hotel</p>
//               </span>
//             </div>
//           </div>
//           <div>
//             <div>
//               <p>₹11533</p>
//               <p>₹123,066 for 2 nights</p>
//               <button>Choose your room</button>
//             </div>
//           </div>

//         </div> */}
//         <HotelDetailsComponent hotels={filteredHotels} />
//       </div>
//     </div>
//   );
// };
// export const query = graphql`
//   query MyQuery {
//     allHotel {
//       nodes {
//         id
//         drupal_id
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
// export default hotellist;

import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import room1 from "../assets/room1.jpg";
import Filter from "../components/HotelList/Filter";
import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
import Navbar from "../components/Navbar/Navbar";
import HotelDetailsComponent from "../components/HotelList/HotelDetailss";

const Hotellist = ({ data }) => {
  const hotels = data?.allHotel?.nodes || [];
  const airports = data?.allLocationAirport?.nodes || [];
  const city = data?.allLocationCity?.nodes || [];
  const cruise = data?.allLocationCruise?.nodes || [];
  const interest = data?.allLocationPointOfInterest?.nodes || [];

  const [filteredHotels, setFilteredHotels] = useState([]);



  const storedFilteredHotels =
    JSON.parse(sessionStorage.getItem("filteredHotels")) || [];

    useEffect(() => {
      // Check if the storedFilteredHotels have changed
      const isFilteredHotelsChanged = JSON.stringify(filteredHotels) !== JSON.stringify(storedFilteredHotels);
  
      // If filtered hotels have changed, update the state
      if (isFilteredHotelsChanged) {
          setFilteredHotels(storedFilteredHotels);
      }
  }, [filteredHotels, storedFilteredHotels]); 
   
  
  const handleAmenityChange = (amenity) => {
    // Filter hotels based on selected amenity
    const updatedHotels = storedFilteredHotels.filter((hotel) =>
      hotel.amenities?.some((a) => a.machine_name === amenity)
    );
    setFilteredHotels(updatedHotels);
  };

  console.log("filter hotels",filteredHotels)

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Navbar />
      <HeaderSearchBox
        hotels={hotels}
        airports={airports}
        city={city}
        cruise={cruise}
        interest={interest}
      />
      <div className="border border-blue-500 flex flex-row w-full justify-center">
        <div className="flex flex-col border-2 w-1/1 py-2 px-4">
          <Filter
            //hotels={hotels}
            airports={airports}
            city={city}
            cruise={cruise}
            interest={interest}
            onAmenityChange={handleAmenityChange}
            hotels={filteredHotels}
          />
        </div>
        <HotelDetailsComponent hotels={filteredHotels} />
      </div>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allHotel {
      nodes {
        id
        drupal_id
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

export default Hotellist;
