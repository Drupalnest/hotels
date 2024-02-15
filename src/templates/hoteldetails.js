import React, { useEffect, useState } from "react";
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
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import RoomCard from "../components/RoomCard";
import Amenities from "../components/HotelDetails/Amenities ";
import AboutHotel from "../components/HotelDetails/AboutHotel";
import GuestPolicies from "../components/HotelDetails/GuestPolicies ";
import ReviewBox from "../components/HotelDetails/ReviewBox";
import RatingSection from "../components/HotelDetails/RatingBar";

const HotelDetails = ({ data }) => {
  const hotel = data.allHotel.edges[0]?.node;

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Handle date changes
    console.log("Selected Date:", selectedDate);
  }, [selectedDate]);
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

        <div className="flex flex-wrap justify-center items-start border border-green-500 sm:w-full ">
          <div className="flex-1 p-4 border border-gray-400 border-r-2">
            <h1 className="text-2xl font-bold mb-2">Top Reasons to Book</h1>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="flex mt-1">
                  <CachedIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5  " />
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
                  <ShoppingCartIcon className=" text-green-700 bg-green-300 hover:bg-green-700 rounded-full p-0.5" />
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
                  <CheckCircleIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5 " />
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
                  <EmojiEventsIcon className=" text-orange-500 bg-orange-200 hover:bg-orange-500 rounded-full p-0.5" />
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

        {/* Room Options */}
        <div className="  border border-yellow-700">
          <div className="flex flex-col  md:justify-between ">
            <div className="mb-4  border border-red-700">
              <div className="flex justify-between border border-b border-gray-500">
                <div className="flex flex-col justify-end ">
                  <span className="mt-auto">
                    <h1 className="text-2xl font-bold mb-2">Room Options</h1>
                  </span>
                </div>
                <span>
                  <p className="mb-2">Best Price. GUARANTEED.</p>
                  <p className="">Exclusively for Priceline membersDetails</p>
                </span>
              </div>

              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TextField
                    id="outlined-basic"
                    label="Check-in - check-out"
                    variant="outlined"
                  />
                  <DatePicker
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Check-in - check-out"
                        variant="outlined"
                      />
                    )}
                  />
                </LocalizationProvider> */}

              <div className="flex justify-between mt-4 m-2 gap-2 bg-slate-300 border rounded">
                <TextField
                  id="outlined-basic"
                  label="Check-in - check-out"
                  variant="outlined"
                  className="w-full bg-white" // This class sets the width to 100%
                />

                <TextField
                  id="outlined-basic"
                  label="Check-in - check-out"
                  variant="outlined"
                  className="w-full bg-white" // This class sets the width to 100%
                />

                <Button className="w-1/2 border text-white bg-orange-500 border-blue-500 rounded">
                  Update Search
                </Button>
              </div>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <RoomCard key={index} imageIndex={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        {/* <div>
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
        </div> */}
        <Amenities />

        <AboutHotel />

        {/* <div>
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
        </div> */}
        <GuestPolicies />

        <div className=" py-3 mt-4 border-b  border-gray-500">
          <h3 className="text-2xl font-bold mb-4">Important Info</h3>
          <span className="text-xl  mb-4 ">
            Guests are required to show a photo ID and credit card upon
            check-in. Please note that all Special Requests are subject to
            availability and additional charges may apply.
          </span>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-between border-b border-blue-500 p-4">
          <div className="mb-4 md:mb-0 border border-red-500 w-full md:w-auto">
            <span className="flex flex-col gap-4 md:flex-row items-center">
              <h1 className="text-xl font-bold mb-2 md:mb-0 md:mr-2">
                Guest Rating
              </h1>
              <span className="text-md text-white font-bold bg-orange-500 px-2 py-0 rounded-full mb-2 md:mb-0 md:ml-2">
                8.7
              </span>
            </span>
            <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
          </div>

          <div className="mb-4 md:mb-0 md:ml-4 w-full md:w-auto">
            <span className="flex flex-col gap-4 md:flex-row items-center">
              <p className="text-sm font-semibold mb-2 md:mb-0 md:mr-2">
                CLEANLINESS
              </p>
              <span className="text-lg font-bold">9.2</span>
            </span>
            <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
          </div>

          <div className="mb-4 md:mb-0 md:ml-4 w-full md:w-auto">
            <span className="flex flex-col gap-4 md:flex-row items-center">
              <p className="text-sm font-semibold mb-2 md:mb-0 md:mr-2">
                CLEANLINESS
              </p>
              <span className="text-lg font-bold">9.2</span>
            </span>
            <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
          </div>

          <div className="md:ml-4 w-full md:w-auto">
            <span className="flex flex-col gap-4 md:flex-row items-center">
              <p className="text-sm font-semibold mb-2 md:mb-0 md:mr-2">
                YET ANOTHER CATEGORY
              </p>
              <span className="text-lg font-bold">8.8</span>
            </span>
            <span className="w-full border rounded h-1.5 bg-orange-600 block mt-4 md:mt-0"></span>
          </div>
        </div> */}

        {/* <div className="flex flex-row">
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
        </div> */}
        <RatingSection />
        <ReviewBox />

        <div className="mt-5 p-0  border-b  border-gray-500">
          <h1 className="text-2xl  font-bold ">Location</h1>
          <span className="text-lg p-0 ">
            NOPSI Hotel, New Orleans 317 Baronne Street, New Orleans, LA
          </span>
          <div className="mt-5">
            <div style={containerStyle}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgUbEo8cfqokR5lP9_Wh_DaM&key=AIzaSyCzA00pEwAVjWLJ2tIMbNJY7tZjGfZeHWQ"
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