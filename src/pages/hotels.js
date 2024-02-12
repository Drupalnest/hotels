// src/pages/demo.js

import React from "react";
import { graphql } from "gatsby";
import HotelList from "../components/HotelList";

const Demo = ({ data }) => {
  const hotels = data?.allHotel?.nodes || [];

  return (
    <div>
      <h1>List of Hotels</h1>
      <HotelList hotels={hotels} />
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
        status
      }
    }
  }
`;

export default Demo;
