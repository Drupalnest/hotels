import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room4.jpg";
import room5 from "../../assets/room5.jpg";
import room6 from "../../assets/room6.jpg";

const RoomDetails = ({ open, handleClose, roomDetails }) => {
  const {
    roomType,

    roomDescription,
    cleanlinessRating,
    reviewsCount,
    roomFacilities,
  } = roomDetails;

  // Imported room images
  const roomImages = [room1, room2, room3, room4, room5, room6];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: 50,
          right: 0,
          color: "red",
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <IconButton
        className="hover:bg-blue-500 text-white"
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        sx={{ position: "absolute", right: 12, top: 2 }}
      >
        <CloseIcon className="text-blue-500 hover:text-white " />
      </IconButton>

      <DialogContent>
        <div>
          <div className="py-2">
            <p className="font-bold text-2xl">Room Details</p>
          </div>
          <div className="py-2">
            <p className="text-lg ">{roomType}</p>
          </div>
          <div className="py-2 border border-red-400 rounded-xl">
            <Slider {...sliderSettings}>
              {roomImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Room ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="py-2">
            <p className="text-sm">{roomDescription}</p>
          </div>
          <div className="py-2 border-b border-gray-500">
            <div className="py-2 font-bold text-sm">
              CLEANLINESS {cleanlinessRating}
            </div>
            <div
              className="h-1"
              style={{
                width: `${cleanlinessRating * 10}%`,
                backgroundColor: "orange",
              }}
            ></div>
            <div className="py-2 text-sm">Based on {reviewsCount} reviews</div>
          </div>
          <div className="py-3">
            {roomFacilities && roomFacilities.length > 0 && (
              <div>
                <p className="py-2 font-bold text-sm">ROOM FACILITIES</p>
                <ul className="columns-2">
                  {roomFacilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomDetails;
