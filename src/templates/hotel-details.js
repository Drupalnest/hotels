// // src/templates/hotel-details.js
// import React from 'react';

// const HotelDetails = ({ pageContext }) => {
//   const { hotel } = pageContext;

//   return (
//     <div>
//       <h1>{hotel.name}</h1>
//       <p>{hotel.address.address_line1}</p>
//       <p>{hotel.address.address_line2}</p>
//       {/* Add other hotel details as needed */}
//     </div>
//   );
// };

// export default HotelDetails;

// src/templates/hotel-details.js

// import React from "react";
// import { graphql } from "gatsby";

// const HotelDetails = ({ data }) => {
//   const hotel = data?.hotel;

//   return (
//     <div>
//       <h5>Hotel Details</h5>
//       <h1>{hotel.name}</h1>
//       <p>{hotel.address.address_line1}</p>
//       <p>{hotel.address.address_line2}</p>
//       <p>{hotel.address.administrative_area}</p>
//       <p>{hotel.address.country_code}</p>
//       <p>{hotel.address.locality}</p>
//       <p>{hotel.address.postal_code}</p>
//     </div>
//   );
// };

// export const query = graphql`
//   query ($id: String!) {
//     hotel(id: { eq: $id }) {
//       id
//       name
//       address {
//         address_line1
//         address_line2
//         administrative_area
//         country_code
//         locality
//         postal_code
//       }
//     }
//   }
// `;

// export default HotelDetails;

// src/templates/hotel-details.js
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useParams } from "react-router-dom"; // Import the useParams hook

const HotelDetails = () => {
  // Use useParams to get parameters from the URL
  const { id } = useParams();

  // Define the GraphQL query
  const data = useStaticQuery(graphql`
    query($id: String!) {
      allHotel(filter: { id: { eq: $id } }) {
        nodes {
          id
          name
          address {
            address_line1
            address_line2
            administrative_area
            country_code
            locality
            postal_code
          }
        }
      }
    }
  `);

  // Get the hotels data from the query result
  const hotels = data.allHotel.nodes || [];

  // Find the selected hotel based on the id
  const selectedHotel = hotels.find((hotel) => hotel.id === id);

  // Render the details or a message if hotel not found
  if (!selectedHotel) {
    return <p>Hotel not found</p>;
  }

  return (
    <div>
      <h1>{selectedHotel.name}</h1>
      <h1>{selectedHotel.id}</h1>
      <p>{selectedHotel.address.address_line1}</p>
      <p>{selectedHotel.address.address_line2}</p>
      <p>{selectedHotel.address.administrative_area}</p>
      <p>{selectedHotel.address.country_code}</p>
      <p>{selectedHotel.address.locality}</p>
      <p>{selectedHotel.address.postal_code}</p>
    </div>
  );
};

export default HotelDetails;
