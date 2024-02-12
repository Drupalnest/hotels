// src/templates/hotel-details.js

import React from "react";
import { graphql } from "gatsby";

const HotelDetailsTemplate = ({ data }) => {
  const hotel = data?.allHotel?.nodes[0] || null;

  return (
    <div>
      <h1>{hotel ? hotel.id : "No hotel found"}</h1>
      <h1>{hotel ? hotel.name : "No name found"}</h1>
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    allHotel(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
      }
    }
  }
`;

export default HotelDetailsTemplate;
