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

import React from 'react';
import { graphql } from 'gatsby';

const HotelDetails = ({ data }) => {
  const hotel = data?.hotel;

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.address.address_line1}</p>
      <p>{hotel.address.address_line2}</p>
      <p>{hotel.address.administrative_area}</p>
      <p>{hotel.address.country_code}</p>
      <p>{hotel.address.locality}</p>
      <p>{hotel.address.postal_code}</p>
    </div>
  );
};

export const query = graphql`
  query($id: String!) {
    hotel(id: { eq: $id }) {
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
`;

export default HotelDetails;
