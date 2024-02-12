import React from "react";
import { graphql } from "gatsby";

const HotelDetailsTemplate = ({ data }) => {
  const hotel = data?.allHotel?.nodes[0] || null;

  return (
    <div>
      <h1>{ hotel.id}</h1>
    </div>
  );
};

export const query = graphql`
  query ($id: String!) {
    allHotel(filter: { id: { eq: $id } }) {
      nodes {
        id
      }
    }
  }
`;

export default HotelDetailsTemplate;
