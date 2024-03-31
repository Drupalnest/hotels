// import React from "react";
// // import Header from "../components/Header/Header";
// import { Link, graphql } from "gatsby";
// import "../index.css";
// // import Footer from "../components/Footer/Footer";
// // import Banner from "../components/Home/Banner";

// import Image1 from "../assets/room1.jpg";
// import Image2 from "../assets/room2.jpg";
// import Image3 from "../assets/room3.jpg";
// import Image4 from "../assets/room4.jpg";
// import Image5 from "../assets/room5.jpg";
// import Image6 from "../assets/room6.jpg";
// import Indexpage from "../components/IndexPage/Indexpage";
// import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
// import Navbar from "../components/Navbar/Navbar";

// const MyPage = ({ data }) => {
//   const hotels = data?.allHotel?.nodes || [];
//   console.log("hotels", hotels);

//   // console.log("hotelsdfdv",hotels)

//   const imagePaths = [Image1, Image2, Image3, Image4, Image5, Image6];

//   return (
//     <div className="max-w-[1200] mx-auto bg-white p-6">
//       <Navbar />
//       <div>
//         <Indexpage hotels={hotels} />
//       </div>

//       {/* <h1 className="text-3xl font-semibold mt-8 mb-4">Hotel List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {hotels.map((hotel, index) => (
//           <Link
//             key={index}
//             to={`/hotels/${hotel.id}`}
//             className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
//           >
//             <div key={hotel.id}>
//               <strong className="block mb-2 text-gray-600">Hotel</strong>
//               {imagePaths.length > 0 && (
//                 <img
//                   src={imagePaths[index % imagePaths.length]}
//                   alt={`Hotel Image ${index + 1}`}
//                   className="w-full h-auto rounded-md"
//                 />
//               )}
//             </div>

//             <div className="pt-4">

//               <span className="block mt-2">
//                 <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
//                 <h2 className="text-xl font-semibold mb-2">{hotel.id}</h2>
//                 <h3 className="text-gray-600">New Delhi</h3>
//               </span>
//               <span className="block mt-2">
//                 ₹17,074 <strike className="text-gray-500">₹26,268</strike>
//               </span>
//               <span className="block mt-2">
//                 <p className="text-gray-600">per night</p>
//                 <p className="text-gray-600">₹40,295 total </p>
//                 <p className="text-gray-600">includes taxes & fees</p>
//               </span>
//               <button className="bg-green-900 text-white py-2 px-4 mt-4 rounded-full hover:bg-green-700 transition-colors">
//                 35% off
//               </button>
//             </div>
//           </Link>
//         ))}
//       </div> */}
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
//         field_rooms {
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
//   }
// `;

// export default MyPage;

// import React from "react";
// import { Link, graphql } from "gatsby";
// import "../index.css";
// import Image1 from "../assets/room1.jpg";
// import Image2 from "../assets/room2.jpg";
// import Image3 from "../assets/room3.jpg";
// import Image4 from "../assets/room4.jpg";
// import Image5 from "../assets/room5.jpg";
// import Image6 from "../assets/room6.jpg";
// import Indexpage from "../components/IndexPage/Indexpage";
// import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
// import Navbar from "../components/Navbar/Navbar";
// import { useSelector } from "react-redux";
// import Loader from "../components/UI_components/Loader"

// const MyPage = ({ data }) => {
//   const hotels = data?.allHotel?.nodes || [];

//   // Fetch checkInDate and checkOutDate from Redux state
//   const checkInDate = useSelector((state) => state.date.checkInDate);
//   const checkOutDate = useSelector((state) => state.date.checkOutDate);

//   // Determine if data is loading
//   const isLoading = hotels.length === 0 || !checkInDate || !checkOutDate;

  

//   return (
//     <div className="max-w-[1200] mx-auto bg-white p-6">
//       <div>
//         {isLoading ? (
//           // Render loading spinner or message
//           <p>Loading...</p>
//         ) : (
//           // Render Indexpage with hotels data
//           <Indexpage hotels={hotels} checkInDate={checkInDate} checkOutDate={checkOutDate} />
//         )}
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
//         field_rooms {
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
//   }
// `;

// export default MyPage;




import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import "../index.css";
import Image1 from "../assets/room1.jpg";
import Image2 from "../assets/room2.jpg";
import Image3 from "../assets/room3.jpg";
import Image4 from "../assets/room4.jpg";
import Image5 from "../assets/room5.jpg";
import Image6 from "../assets/room6.jpg";
import Indexpage from "../components/IndexPage/Indexpage";
import HotelDetailsComponent from "../components/HotelList/HotelDetailss";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Loader from "../components/UI_components/Loader";

const MyPage = ({ data }) => {
  const hotels = data?.allHotel?.nodes || [];

  // Fetch checkInDate and checkOutDate from Redux state
  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);

  // Determine if data is loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after some time
    }, 2000);
  }, []);

  return (
    <div className="max-w-[1200] mx-auto bg-white p-6">
      <Navbar />
      <div>
        {isLoading ? (
          // Render loading spinner or message
          <Loader />
        ) : (
          // Render Indexpage with hotels data
          <Indexpage hotels={hotels} checkInDate={checkInDate} checkOutDate={checkOutDate} />
        )}
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
        field_rooms {
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
  }
`;

export default MyPage;
