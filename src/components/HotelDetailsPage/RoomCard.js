import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import WifiIcon from "@mui/icons-material/Wifi";
import { green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { setCheckInDate, setCheckOutDate } from "../../redux/actions";
import { navigate } from "gatsby";
import { Dialog, DialogContent } from "@mui/material";
import RoomDetails from "./RoomDetails";

const RoomCard = ({ imageIndex, rooms }) => {
  const dispatch = useDispatch();
  const checkInDate = useSelector((state) => state.date.checkInDate);
  const checkOutDate = useSelector((state) => state.date.checkOutDate);

  const [open, setOpen] = useState(false);

  console.log("checkInDate", checkInDate, "checkOutDate", checkOutDate);
  console.log("rooms", rooms);

  const handleButtonClick = () => {
    navigate("/cart");
  };

  const {
    name,
    phone,
    description,
    address,
    amenities,
    lat_lon,
    email,
    field_rooms_ajay,
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

  return (
    <div className="mb-4">
      <div>
        {field_rooms_ajay && field_rooms_ajay.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {field_rooms_ajay.map((room) => (
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
        <CardContent className="flex flex-col">
          <div className="flex items-center mb-2">
            <WifiIcon sx={{ color: green[500], marginRight: 1 }} />
            <p className="text-green-500">Free WIFI</p>
          </div>
          <p
            className="mb-4 text-blue-500 cursor-pointer group hover:underline hover:font-semibold"
            onClick={handleClickOpen}
          >
            View Room Details and Photos
          </p>
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
