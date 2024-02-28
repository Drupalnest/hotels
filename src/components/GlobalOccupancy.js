import React from "react";
import Incrementor from "./Incrementor";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Room } from "../models/room";
import GroupBookingLink from "./GroupBookingLink";

const RoomsWrapper = styled.div`
  .close-icon {
    color: white !important;
  }
  .close-icon-styles {
    width: 15px;
    height: 15px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
  }

  .add-room-styles:focus {
    outline: 1px solid black;
  }

  .room-row {
    border-bottom: 1px solid #d8dadf;
    font-size: 14px;
    > div {
      margin: 1rem 0;
      display: flex;
      align-items: center;
    }
  }
  .room-increment {
    max-width: 80px;
    flex: 0 0 80px;
  }
  .remove-room {
    max-width: 16px;
    flex: 0 0 16px;
    padding: 0;
    > span {
      border-radius: 50%;
      display: inline-block;
      font-weight: 500;
      padding: 0;
      height: 16px;
      width: 16px;
      font-size: 14px;
      line-height: 16px;
      color: #fff;
      cursor: pointer;
      text-align: center;
    }
  }
  .group-booking {
    padding-top: 1.5rem;
    a {
      text-decoration: underline;
      font-size: 13px;
    }
  }
  .labels {
    font-size: 12px;
    font-weight: 500;
    text-align: left;
  }
  .actions {
    padding-top: 1rem;
    margin-top: 0.5rem;
  }
`;

const GlobalOccupancy = ({
  rooms,
  setOccupancy,
  checkin,
  checkout,
  searchString,
  latitude,
  longitude,
  placeId
}) => {
  const handleChangeAdultsCount = (index, newValue) => {
    const currentRooms = [...rooms];
    currentRooms[index].adults = newValue;
    setOccupancy(currentRooms);
  };
  const handleChangeChildrenCount = (index, newValue) => {
    const currentRooms = [...rooms];
    currentRooms[index].children = newValue;
    setOccupancy(currentRooms);
  };
  const handleRemoveRoom = (index) => {
    const currentRooms = [...rooms];
    currentRooms.splice(index, 1);
    setOccupancy(currentRooms);
  };

  const handleRemoveRoomKeyPress = (index, code) => {
    if (code === "Enter" || code === " ") {
      const currentRooms = [...rooms];
      currentRooms.splice(index, 1);
      setOccupancy(currentRooms);
    }
  };

  const handleAddRoom = () => {
    const currentRooms = [...rooms];
    const newRoom = new Room();
    currentRooms.push(newRoom);
    setOccupancy(currentRooms);
  };
  const roomCount = rooms.length;
  return (
    <RoomsWrapper className="p-3">
      <Row className="labels justify-content-between" noGutters>
        <Col xs={3}>Rooms</Col>
        <Col className="room-increment text-center">Adults</Col>
        <Col className="room-increment text-center">Children</Col>
        {roomCount > 1 && <Col className="remove-room" />}
      </Row>
      {rooms.map((inputField, index) => (
        <Row
          key={`${inputField}~${index}`}
          className="room-row justify-content-between"
          noGutters
        >
          <Col xs={3}>
            <span className="room-label">Room {index + 1}</span>
          </Col>
          <Col className="room-increment">
            <Form.Label srOnly>Adults for Room {index + 1}</Form.Label>
            <Incrementor
              name="adults"
              value={inputField.adults}
              onChangeCount={handleChangeAdultsCount}
              min={1}
              max={6 - inputField.children}
              index={index}
            />
          </Col>
          <Col className="room-increment">
            <Form.Label srOnly>Children for Room {index + 1}</Form.Label>
            <Incrementor
              name="children"
              value={inputField.children}
              onChangeCount={handleChangeChildrenCount}
              min={0}
              max={6 - inputField.adults}
              index={index}
            />
          </Col>
          {roomCount > 1 && (
            <Col className="text-center remove-room">
              <a
                tabIndex={"0"}
                title="Remove room"
                className="bg-dark close-icon close-icon-styles"
                role="button"
                onClick={() => handleRemoveRoom(index)}
                aria-label={`remove room`}
                onKeyPress={(event) => {
                  const code = event.key;
                  handleRemoveRoomKeyPress(index, code);
                }}
              >
                &times;
              </a>
            </Col>
          )}
        </Row>
      ))}
      {roomCount < 3 && (
        <div className="actions">
          <Button
            onClick={handleAddRoom}
            variant="light"
            tabIndex={"0"}
            aria-label={`Add Room`}
            className="w-100 add-room-styles"
          >
            Add Room +
          </Button>
        </div>
      )}
      <div className="group-booking text-center">
        <GroupBookingLink
          className="text-body"
          checkin={checkin}
          checkout={checkout}
          searchString={searchString}
          latitude={latitude}
          longitude={longitude}
          placeId={placeId}
        >
          Book 4 or more rooms with group booking
        </GroupBookingLink>
      </div>
    </RoomsWrapper>
  );
};

export default GlobalOccupancy;

GlobalOccupancy.propTypes = {};
