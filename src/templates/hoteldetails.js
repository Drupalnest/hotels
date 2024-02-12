import React, { useState } from "react";
import { graphql } from "gatsby";
import { Button } from "@mui/material";

const HotelDetails = ({ data }) => {
  const hotel = data.allHotel.edges[0]?.node;

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  if (!hotel) {
    return <p>No hotel details found.</p>;
  }

  return (
    <div className="container m-6 border mx-auto   border-green-500">
      <div className="container-fluid flex flex-row overflow-x-auto">
        <div className="flex">
          {Array.from({ length: 15 }).map((_, index) => (
            <div key={index} className="w-96 h-80 p-2">
              <img
                src={`https://via.placeholder.com/800x600?text=Image${
                  index + 1
                }`}
                className="w-full h-full object-cover rounded"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container  ">
        <div className="flex flex-wrap list-none">
          <li
            className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
              selectedItem === 0 ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            Overview & Photos
          </li>
          <li
            className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
              selectedItem === 1 ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            Rooms
          </li>
          <li
            className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
              selectedItem === 2 ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Amenities
          </li>
          <li
            className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
              selectedItem === 3 ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            About
          </li>
          <li
            className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
              selectedItem === 4 ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            Reviews
          </li>
          <li
            className={`flex-shrink-0 px-4 py-2 m-2 text-blue-500 rounded cursor-pointer ${
              selectedItem === 5 ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleItemClick(5)}
          >
            Map
          </li>
        </div>

        <div className="flex flex-wrap p-4">
          <div className="w-full md:w-8/12 mb-4 md:mb-0">
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-gray-600">5-STAR HOTEL Luxury</p>
            <p className="text-gray-700">
              317 Baronne Street, New Orleans, LA - Downtown New Orleans View
              Map
            </p>
            <p className="text-gray-600">
              TOP BOOKED HOTEL - 30 people are looking at this hotel
            </p>
            <div className="flex mt-2">
              <Button variant="outlined" className="mr-2">
                Share
              </Button>
              <Button variant="outlined">Save</Button>
            </div>
          </div>
          <div className="w-full md:w-4/12 text-right">
            <h1 className="text-3xl font-bold mb-2">$312</h1>
            <p className="text-gray-600">Price per night</p>
            <Button variant="contained" color="primary" className="mt-4">
              Choose Your Room
            </Button>
          </div>
        </div>

        <div>
          <div>
            <h1>Top Reasons to Book</h1>
            <span>
              <h4>KIDS STAY FREE</h4>
              <p>
                Children 2 and under stay for free when using an available crib
                (details)
              </p>
            </span>
            <span>
              <h4>KIDS STAY FREE</h4>
              <p>
                Children 2 and under stay for free when using an available crib
                (details)
              </p>
            </span>
            <span>
              <h4>KIDS STAY FREE</h4>
              <p>
                Children 2 and under stay for free when using an available crib
                (details)
              </p>
            </span>
          </div>
          <div>
            <span>
              <span>8.7</span>
              <h1>Guest Rating</h1>
            </span>

            <span>
              <span>8.7</span>
              <h1>Guest Rating</h1>
            </span>

            <span>
              <p1>CLEANLINESS</p1>
              <span>9.2</span>
            </span>

            <span>
              <p1>STAFF</p1>
              <span>9.2</span>
            </span>

            <span>
              <p1>LOCATION</p1>
              <span>9.2</span>
            </span>

            <span>Verified ratings from 1788 guests</span>
          </div>
          <div>
            <h1>
            Top Amenities
            </h1>
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
