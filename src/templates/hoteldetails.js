import React from "react";
import { graphql } from "gatsby";

const HotelDetails = ({ data }) => {
  const hotels = data.allHotel.edges;

  return (
    <div>
      {hotels.map(({ node }) => (
        <div key={node.id}>
          <h1>{node.name}</h1>
          <h2>{node.phone}</h2>
          <p>Status: {node.rlh_status}</p>
          
          <div>
            <h2>Address:</h2>
            <p>{node.address.address_line1}</p>
            <p>{node.address.administrative_area}</p>
            <p>{node.address.locality}</p>
            <p>{node.address.postal_code}</p>
            <p>{node.address.country_code}</p>
          </div>

          <div>
            <h2>Amenities:</h2>
            {node.amenities.map(amenity => (
              <p key={amenity.machine_name}>{amenity.name}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    allHotel(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          phone
          rlh_status
          address {
            address_line1
            administrative_area
            country_code
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
  }
`;

export default HotelDetails;
