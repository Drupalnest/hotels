// src/pages/demo.js

import React from 'react';
import { graphql } from 'gatsby';
import HotelList from '../components/HotelList';

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
`;

export default Demo;
