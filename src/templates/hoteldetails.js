import React from "react";
import { graphql } from "gatsby";

const HotelDetails = ({ data }) => {
  const hotel = data.allHotel.edges[0]?.node;

  if (!hotel) {
    return <p>No hotel details found.</p>;
  }

  return (
    <div className="container-fluid m-6">
      <div className="lg:flex lg:flex-row">
        {/* Main Hotel Image */}
        <div className="lg:w-8/12 mb-3  border border-gray-300">
          <img
            src="https://via.placeholder.com/500x200"
            className="w-full rounded"
            alt="Hotel Main Image"
          />
        </div>

        <div className="lg:w-4/12">
          {/* <h3 className="text-xl font-bold mb-3">Hotel Rooms</h3> */}
          <div className="lg:flex lg:flex-row lg:flex-wrap">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="lg:w-6/12 mb-3">
                <img
                  src="https://via.placeholder.com/250x200"
                  className="w-full rounded"
                  alt={`Room ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="card-title">{hotel.name}</h1>
          <p className="card-text">{hotel.rlh_status}</p>

          <div className="mb-4">
            <h2>Address:</h2>
            <p>{hotel.address.address_line1}</p>
            <p>{hotel.address.locality}</p>
            <p>{hotel.address.administrative_area}</p>
            <p>{hotel.address.postal_code}</p>
            <p>{hotel.address.country_code}</p>
          </div>

          <div>
            <h2>Amenities:</h2>
            <ul className="list-disc list-inside">
              {hotel.amenities.map((amenity) => (
                <li key={amenity.machine_name}>{amenity.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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
          rlh_status
          address {
            address_line1
            locality
            administrative_area
            postal_code
            country_code
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
