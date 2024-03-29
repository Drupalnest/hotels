import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import WifiIcon from "@mui/icons-material/Wifi";
import { green } from "@mui/material/colors";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
//import { setCheckInDate, setCheckOutDate } from "../../redux/actions";
import { navigate } from "gatsby";
//import { Dialog, DialogContent } from "@mui/material";
import RoomDetails from "./RoomDetails";

const RoomCard = ({ imageIndex, rooms }) => {
  //const dispatch = useDispatch();
  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);

  const [open, setOpen] = useState(false);

  console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);
  console.log("rooms", rooms);

  const handleButtonClick = () => {
    navigate("/checkout");
  };

  const {
    name,
    phone,
    description,
    address,
    amenities,
    lat_lon,
    email,
    field_rooms,
  } = rooms;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const roomDetails = {
    roomType: "Traditional 2 Beds, Guest room, 2 Double",

    roomDescription:
      "Offering free toiletries, this double room includes a private bathroom with a bath or a shower and a hairdryer. The spacious double room offers air conditioning, a tea and coffee maker, a seating area, a wardrobe, and a flat-screen TV with cable channels. The unit offers 2 beds.",
    cleanlinessRating: 8.4,
    reviewsCount: 1367,
    roomFacilities: [
      "Accessible by lift",
      "Air conditioning",
      "Alarm clock",
      "Bath or Shower",
      "Body soap",
      "Carpeting",
      "Closet",
      "Coffee/tea machine",
      "Conditioner",
      "Feather pillow(s)",
      "Flat-screen TV",
      "Hair dryer",
      "Heating",
      "Iron and ironing board",
      "Key card access",
      "Linens",
      "Non-feather pillow",
      "Phone",
      "Private bathroom",
      "Satellite/cable channels",
      "Seating area",
      "Smoke alarm",
      "Socket near the bed",
      "TV",
      "Toilet",
      "Toilet paper",
      "Toiletries",
      "Towels",
      "Trash cans",
      "Upper floors accessible by elevator",
      "Wake-up service",
    ],
  };

  // const roomData = JSON.parse(sessionStorage.getItem("roomData"));
  // console.log("roomData", roomData);



  // if (!roomData) {
  //   return <p>No room data available</p>;
  // }

  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    // Check if sessionStorage is available
    if (typeof sessionStorage !== 'undefined') {
      // Access sessionStorage
      const storedData = JSON.parse(sessionStorage.getItem('roomData'));
      console.log('roomData', storedData);
      setRoomData(storedData);
    } else {
      console.error('sessionStorage is not available.');
    }
  }, []); // Empty dependency array ensures useEffect runs only once after component mounts

  if (!roomData) {
    return <p>No room data available</p>;
  }

  return (
    <div className="mb-4">
      <div>
        {field_rooms && field_rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {field_rooms.map((room) => (
              <div key={room.drupal_internal__target_id}>
                <p>{room.drupal_internal__target_id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No rooms found</p>
        )}
      </div>

      <Card style={{ height: "100%" }}>
        <CardMedia
          component="img"
          alt={`Room ${imageIndex + 1}`}
          style={{ height: "200px" }} // Set a fixed height for the image
          // Use the actual image paths
          image={require(`../../assets/room${imageIndex + 1}.jpg`).default}
        />
        <p className="p-2 text-sm font-semibold">{roomData.room_title}</p>
        <CardContent className="flex flex-col">
          <div className="flex items-center mb-2">
            <WifiIcon sx={{ color: green[500], marginRight: 1 }} />
            <p className="text-green-500">Free WIFI</p>
          </div>
          <p
            className="mb-2 text-blue-500 cursor-pointer group hover:underline hover:font-semibold"
            onClick={handleClickOpen}
          >
            View Room Details and Photos
          </p>
          <span className="flex p-2  text-xl font-bold text-blue-600">$ {roomData.room_price}</span>
          <RoomDetails
            open={open}
            handleClose={handleClose}
            roomDetails={roomDetails}
          />

          <button
            variant="contained"
            onClick={handleButtonClick}
            className={`${
              !checkInDate || !checkOutDate
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-green-500 hover:bg-green-700"
            } text-white font-bold py-2 px-4 rounded-full`}
          >
            {!checkInDate || !checkOutDate ? "Select the date" : "Book Room"}
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomCard;
