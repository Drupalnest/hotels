import React, { useState } from "react";
import { graphql } from "gatsby";
import { Button, Card, Input, PopoverPaper } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import PlaceIcon from "@mui/icons-material/Place";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CachedIcon from "@mui/icons-material/Cached";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import WifiIcon from "@mui/icons-material/Wifi";
import PetsIcon from "@mui/icons-material/Pets";
import VapeFreeIcon from "@mui/icons-material/VapeFree";
import AccessibleIcon from "@mui/icons-material/Accessible";

const HotelDetails = ({ data }) => {
  const hotel = data.allHotel.edges[0]?.node;

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  if (!hotel) {
    return <p>No hotel details found.</p>;
  }

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const scrollLeft = () => {
    document.getElementById("image-gallery").scrollLeft -= 300; // Adjust scroll distance as needed
  };

  const scrollRight = () => {
    document.getElementById("image-gallery").scrollLeft += 300; // Adjust scroll distance as needed
  };

  const getAmenityIcon = (amenityName) => {
    switch (amenityName) {
      case "Wifi":
        return <WifiIcon className="mr-2" />;
      case "Pets":
        return <PetsIcon className="mr-2" />;
      case "VapeFree":
        return <VapeFreeIcon className="mr-2" />;
      case "Accessible":
        return <AccessibleIcon className="mr-2" />;
      default:
        return <FiberManualRecordIcon className="mr-2" />; // Default icon
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <ImageSlider />

      {/* <div className="container-fluid flex flex-row overflow-x-auto">
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
      </div> */}
      <div className="container-fluid  flex  justify-center border-b border-gray-500">
        <div className="container ">
          <div className="hidden md:flex flex-wrap list-none">
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
        </div>
      </div>

      <div className="container p-0 mx-auto flex flex-col justify-center border border-red-500">
        <div className="flex flex-wrap p-1 border-b border-gray-500">
          <div className="w-full md:w-8/12 mb-4 md:mb-0">
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>

            <span className="flex items-center">
              <p className="text-gray-600">5-STAR HOTEL Luxury</p>
              <p className="text-gray-700 ml-2">
                <PlaceIcon className="text-blue-500" />
              </p>
              <p className="text-blue-500 ml-1">View Map</p>
            </span>

            <span className="flex mt-1 items-center">
              <p className="text-gray-600 bg-gray-300 px-1 py-1 rounded-full mr-1">
                TOP BOOKED HOTEL
              </p>
              <p className="text-red-600">
                30 people are looking at this hotel
              </p>
            </span>

            <div className="flex mt-1 gap-1">
              <Button className="border border-blue-700 bg-white-500 hover:bg-blue-700 text-blue hover:text-white font-bold py-2 px-4 rounded-full">
                <IosShareIcon className="text-md" />
                Share
              </Button>

              <Button className="bg-white-500 hover:bg-blue-700 text-blue hover:text-white font-bold py-2 px-4 rounded-full">
                <FavoriteBorderIcon className="text-md" />
                Save
              </Button>
            </div>
          </div>

          <div className="w-full md:w-4/12 text-left md:text-right">
            <h1 className="text-3xl font-bold mb-2">$312</h1>
            <p className="text-gray-600">Price per night</p>
            <Button color="primary" className="mt-4">
              Choose Your Room
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-start border border-blue-500 ">
          <div className="flex-1 p-4 border border-gray-400 border-r-2">
            <h1 className="text-2xl font-bold mb-2">Top Reasons to Book</h1>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="flex mt-1">
                  <CachedIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full " />
                </span>
                <span>
                  <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                  <p>
                    Children 2 and under stay for free when using an available
                    crib (details)
                  </p>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="flex mt-1">
                  <ShoppingCartIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full " />
                </span>
                <span>
                  <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                  <p>
                    Children 2 and under stay for free when using an available
                    crib (details)
                  </p>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="flex mt-1">
                  <CheckCircleIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full " />
                </span>
                <span>
                  <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                  <p>
                    Children 2 and under stay for free when using an available
                    crib (details)
                  </p>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="flex mt-1">
                  <EmojiEventsIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full " />
                </span>
                <span>
                  <h4 className="text-lg font-bold">KIDS STAY FREE</h4>
                  <p>
                    Children 2 and under stay for free when using an available
                    crib (details)
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 border border-blue-500  p-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl text-white font-bold bg-orange-500 px-2 py-0 rounded-full mr-2">
                  8.7
                </span>
                <h1 className="text-xl font-bold">Guest Rating</h1>
              </div>

              <div className="">
                <span className="flex justify-between">
                  <p className="text-sm font-semibold">CLEANLINESS</p>
                  <span className="text-lg font-bold">9.2</span>
                </span>
                <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
              </div>

              <div className="">
                <span className="flex justify-between">
                  <p className="text-sm font-semibold">CLEANLINESS</p>
                  <span className="text-lg font-bold">9.2</span>
                </span>
                <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
              </div>
              <div className="">
                <span className="flex justify-between">
                  <p className="text-sm font-semibold">CLEANLINESS</p>
                  <span className="text-lg font-bold">9.2</span>
                </span>
                <span className="w-full border rounded h-1.5 bg-orange-600 block"></span>
              </div>
              <div className="p-0">
                <span className="text-sm text-blue-600  ">
                  Verified ratings from 1788 guests
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-3 border-l border-gray-500">
            <h1 className="text-2xl font-bold mb-2">Top Amenities</h1>
            <div className="grid grid-cols-2 gap-4">
              {hotel.amenities.map((amenity) => (
                <div key={amenity.machine_name} className="flex items-center">
                  {getAmenityIcon(amenity.name)}{" "}
                  {/* Use a function to determine the appropriate icon */}
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-4">Show All Amenities</p>
          </div>
        
        </div>

        <div className="container mx-auto  border border-yellow-700">
          <div className="flex flex-col  md:justify-between ">
            <div className="mb-4  md:mr-4 border border-red-700">
              <div className="flex justify-between">
                <span>
                  <h1 className="text-2xl font-bold mb-2">Room Options</h1>
                </span>
                <span>
                  <p className="mb-2">Best Price. GUARANTEED.</p>
                  <p className="mb-4">
                    Exclusively for Priceline membersDetails
                  </p>
                </span>
              </div>
              <div className="flex justify-between">
                <Input placeholder="Check-in" className="mr-2 mb-2 md:mb-0" />
                <Input placeholder="Check-out" className="mr-2 mb-2 md:mb-0" />
                <Button>Update Search</Button>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="mb-4">
                    <Card>
                      <img
                        src={`your-image-url-${index + 1}.jpg`}
                        alt={`Room ${index + 1}`}
                        className="w-full h-40 object-cover mb-4"
                      />
                      <div className="flex flex-col">
                        <p className="mb-2">Free WIFI</p>
                        <p className="mb-4">View Room Details and Photos</p>
                        <Button>Select dates for prices</Button>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>Amenities</h1>
          <div className="flex ">
            <span>
              <h3>Room Amenities (34)</h3>
              <li>Allergy-free rooms available</li>
              <li>Coffee/tea maker</li>
              <li>Ironing amenities</li>
              <li>Fire extinguishers</li>
              <li>Carpeting</li>
              <li>Room towels provided</li>
              <li>Telephone</li>
            </span>
            <span>
              <h3>Room Amenities (34)</h3>
              <li>Allergy-free rooms available</li>
              <li>Coffee/tea maker</li>
              <li>Ironing amenities</li>
              <li>Fire extinguishers</li>
              <li>Carpeting</li>
              <li>Room towels provided</li>
              <li>Telephone</li>
            </span>
            <span>
              <h3>Room Amenities (34)</h3>
              <li>Allergy-free rooms available</li>
              <li>Coffee/tea maker</li>
              <li>Ironing amenities</li>
              <li>Fire extinguishers</li>
              <li>Carpeting</li>
              <li>Room towels provided</li>
              <li>Telephone</li>
            </span>
          </div>
          <div className="flex justify-center p-3">
            <Button>Show All Amenities</Button>
          </div>
        </div>

        <div>
          <h1>About the Hotel</h1>
          <h3>About the Hotel</h3>
          <p>
            Featuring free WiFi and a restaurant, NOPSI Hotel, New Orleans
            offers pet-friendly accommodations within walking distance of the
            French Quarter in New Orleans. The hotel has a year-round outdoor
            pool and sun terrace, and guests can enjoy a meal at the restaurant.
            Breakfast inclusive rates include the Crescent City breakfast - It
            includes 2 eggs, meat, toast, potatoes or grits. Every room is
            equipped with a flat-screen TV with satellite channels. Certain
            units include a seating area for your convenience. Each room is
            equipped with a private bathroom. There is a 24-hour front desk. The
            hotel also offers bike hire and car hire. Bourbon Street is 0.6 mi
            from NOPSI Hotel, New Orleans, while Mercedes-Benz Superdome is 0.7
            mi from the property. The nearest airport is Louis Armstrong New
            Orleans International Airport, 11 mi from the property.
          </p>
        </div>

        <div>
          <div>Guest Policies</div>
          <div className="flex flex-row ">
            <span>Check-in</span>
            <span>After 4:00 PM</span>
          </div>
          <div className="flex flex-row ">
            <span>Check-in</span>
            <span>After 4:00 PM</span>
          </div>
          <div className="flex flex-row ">
            <span>Check-in</span>
            <span>After 4:00 PM</span>
          </div>
          <div className="flex flex-row ">
            <span>Check-in</span>
            <span>After 4:00 PM</span>
          </div>
          <div className="flex flex-row ">
            <span>Check-in</span>
            <span>After 4:00 PM</span>
          </div>
          <div className="flex flex-row ">
            <span>Check-in</span>
            <span>After 4:00 PM</span>
          </div>
        </div>

        <div>
          <h3>Important Info</h3>
          <span>
            Guests are required to show a photo ID and credit card upon
            check-in. Please note that all Special Requests are subject to
            availability and additional charges may apply.
          </span>
        </div>

        <div>
          <h1>1788 Verified Guest Ratings</h1>
          <div>
            <span>
              <p>Overall Score</p> <p>8.7</p> <span></span>
            </span>
          </div>
          <div>
            <span>
              <p>Overall Score</p> <p>8.7</p> <span></span>
            </span>
          </div>
          <div>
            <span>
              <p>Overall Score</p> <p>8.7</p> <span></span>
            </span>
          </div>
          <div>
            <span>
              <p>Overall Score</p> <p>8.7</p> <span></span>
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <span> 10 Perfect Feb 7, 2024 Mary Traveling as Couple</span>
          <span>
            <p>
              This guest had nothing but positive things to say about the
              property and rated it as perfect.
            </p>
            <span>
              What did you like most? We had a slight issue on check in but it
              was very professionally handled by the manager. She clearly cared
              about us having a pleasant stay & went out of her way to ensure
              that happened. We were very happy with our room & the service we
              received. Thanks Was there anything you didn't like? No
            </span>
          </span>
        </div>

        <div>
          <h1>Location</h1>
          <span>
            NOPSI Hotel, New Orleans 317 Baronne Street, New Orleans, LA
          </span>
          <div>
            <div style={containerStyle}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:YOUR_PLACE_ID&key=YOUR_API_KEY"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <Footer />
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
