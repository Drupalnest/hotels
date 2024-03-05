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

import React from "react";
import { graphql } from "gatsby";
import room1 from "../assets/room1.jpg";
import Filter from "../components/HotelList/Filter";
import Search from "../components/SearchComponents/Search";
import PreHeader from "../components/PreHeader";
import Header from "../components/Header";
import HotelDetailss from "../components/HotelList/HotelDetailss";
import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
import HeaderSearchBox from "../components/SearchComponents/HeaderSearchBox";
import Indexpage from "../components/IndexPage/Indexpage";

const hotellist = ({ data }) => {
  const hotels = data?.allHotel?.nodes || [];
  console.log("hotels", hotels);
  const airports = data?.allLocationAirport?.nodes || [];
  console.log("airports", airports);
  const city = data?.allLocationCity?.nodes || [];
  console.log("city", city);
  const cruise = data?.allLocationCruise?.nodes || [];
  console.log("cruise", cruise);
  const interest = data?.allLocationPointOfInterest?.nodes || [];
  console.log("interest", interest);
  return (
    <div className="flex flex-col items-center justify-center border border-red-500 ">
      <PreHeader />
      {/* <Header /> */}

      <div className="w-full container-fluid h-10 border-2">Navbar</div>
      <HeaderSearchBox
        hotels={hotels}
        airports={airports}
        city={city}
        cruise={cruise}
        interest={interest}
      />

      <div className="border border-blue-500 flex flex-row  w-full  justify-center">
        <div className="flex flex-col border-2 w-1/1 py-2 px-4">
          <div>
            <Filter />
          </div>
        </div>
        {/* <div className="flex flex-row border-2">
          <div>
            <img
              src={room1}
              className=""
              style={{
                border: "2px solid red",
                width: "200px",
                height: "150px",
              }}
            />
          </div>
          <div className="flex flex-col border-2">
            <div className="flex flex-row border-2">
              <p>COMFORT</p>
              <p>BUSINESS FRIENDLY</p>
              <p>SPA & WELLNESS</p>
            </div>
            <div>
              <span>
                <p>Courtyard by Marriott Indianapolis South</p>
              </span>
              <span>
                <p>Indianapolis South</p>
              </span>
              <span>
                <p>Free Internet Access,Free Parking Amenities</p>
                <p>Fully Refundable Rates,Pay Later Available</p>
              </span>
              <span className="flex flex-row">
                <p>7.9</p>
                <p>291 Rating</p>
                <p>3-Star Hotel</p>
              </span>
            </div>
          </div>
          <div>
            <div>
              <p>₹11533</p>
              <p>₹123,066 for 2 nights</p>
              <button>Choose your room</button>
            </div>
          </div>
         
        </div> */}
        <HotelDetailsComponent />
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
export default hotellist;
