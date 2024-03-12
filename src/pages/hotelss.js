import React from "react";
import { graphql } from "gatsby";

const HotelDetails = ({ data }) => {
  const hotels = data?.allHotel?.edges || [];

  return (
    <div>
      {hotels.map(({ node }) => (
        <div key={node.id}>
          <h1>{node.name}</h1>
          <p>{node.hotel_code}</p>
          <p>{node.drupal_id}</p>
          <p>{node.phone}</p>
          <p>{node.rlh_status}</p>
          <p>{node.status}</p>
          <p>{node.email}</p>
          <p>{node.description}</p>
          <p>{node.crs_name}</p>
          <p>{node.crs_code}</p>
          {/* Add other fields as needed */}
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allHotel {
      edges {
        node {
          id
          drupal_id
          hotel_code
          name
          phone
          rlh_status
          status
          email
          description
          crs_name
          crs_code
        }
      }
    }
  }
`;

export default HotelDetails;
