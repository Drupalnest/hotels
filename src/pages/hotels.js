import React, { useEffect, useState } from "react";
import axios from "axios";

const HotelDetails = () => {
  const [roomData, setRoomData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get(
          "http://165.227.127.224/jsonapi/hotels/9841d933-3e17-429e-9524-519b941bfbb5"
        );
        setRoomData(response.data.data.relationships.field_rooms.room);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
        setIsLoading(false);
      }
    };

    fetchHotelData();
  }, []);

  return (
    <div>
      <h2>Room Details</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Room Type: {roomData.room_type}</p>
          <p>Room Price: {roomData.room_price}</p>
          <p>Room Title: {roomData.room_title}</p>
          <h4>Room Images:</h4>
          <div>
            {roomData.room_images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Room ${index + 1}`}
                style={{ width: "200px", height: "auto", margin: "5px" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetails;
