// src/components/HotelList.js

import React from 'react';
import { Link } from 'gatsby';

const HotelList = ({ hotels }) => {
  return (
    <div>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <Link to={`/hotel/${hotel.id}`}>
            <h2>{hotel.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
