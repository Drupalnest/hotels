import React from "react";
import { graphql } from "gatsby";

const SearchData = ({ data, onDataFetched }) => {
  const hotels = data?.allHotel?.nodes || [];
  const airports = data?.allLocationAirport?.nodes || [];
  const city = data?.allLocationCity?.nodes || [];
  const cruise = data?.allLocationCruise?.nodes || [];
  const interest = data?.allLocationPointOfInterest?.nodes || [];

  // Pass the fetched data to the parent component
  onDataFetched({
    hotels,
    airports,
    city,
    cruise,
    interest,
  });

  // Return null as the component doesn't render anything
  return null;
};

export const query = graphql`
  query MyQuery {
    allHotel {
      nodes {
        id
        name
        phone
        hotel_code
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
    allLocationAirport {
      nodes {
        id
        name
        field_address {
          locality
          country_code
        }
      }
    }
    allLocationCity {
      nodes {
        id
        name
        population
      }
    }
    allLocationCruise {
      nodes {
        id
        google_place_id
        name
      }
    }
    allLocationPointOfInterest {
      nodes {
        id
        name
        google_place_id
      }
    }
  }
`;

export default SearchData;
