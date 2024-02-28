import Axios from "axios";
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux"
import { navigate } from "gatsby";

import Button from "react-bootstrap/Button";
import { buildFetchRatesUrl, fetchRoomsAndRates } from "../../apis/rates";
import { coreGet } from "../../apis/core";
import { Room } from "../../models/room";
import { setEditReservationCheckout } from "../../redux/actions";
import { convertArrayToObject } from "../../apis/helpers";
import { useRoomDetail } from "../../hooks/useRoomDetail";
// import loadable from '@loadable/component'
import moment from 'moment-mini';

const EditReservationButton = ({reservation, confirmationID, hotel}) => {
  const dispatch = useDispatch();
  const [showEditButton, setShowEditButton] = useState(false);
  const [isRateAdvance, setIsRateAdvance] = useState(null);
  const [rooms, setRooms] = useState(null);
  const rateCode = reservation.RatePlanCode;
  const roomCode = reservation.RoomTypeCode;
  const [loadingRoomDetail, roomDetail, allRooms] = useRoomDetail(reservation.HotelCode, roomCode, confirmationID );

  let is24HoursBefore = moment().add(1, "days").isBefore(reservation.Start + " 13:00");

  let groupCode = null;
  if(rateCode.indexOf("G:") == 0) {// if rate code is group code
    groupCode = rateCode.replace("G:", "");
  }
  const handleEditReservation = () => {
    let newRoom = [new Room(reservation.Count.Adult, reservation.Count.Children)];

    let room = rooms[roomCode] ;
    if(!room && roomDetail) {
      room = {
        Name: roomDetail.Name,
        Description: roomDetail.Description,
        Occupancy: roomDetail.Occupancy,
        Image: roomDetail.Images && roomDetail.Images[0] && roomDetail.Images[0].url || null,
        RoomCode: reservation.RoomTypeCode,
        FromRate :reservation.RoomRates && reservation.RoomRates[0].RoomRate,
        FromRateCode: reservation.RatePlanCode,
        FromRateType: '',
        BaseRate: 0,
        BaseRateCode: '',
        BaseRateType: "",
        Rates: []
      }
    }
    const rate = room.Rates && room.Rates.filter(r => r.RateCode == rateCode)[0];
    newRoom[0] = {...newRoom[0], room: room, rate: rate, services: null};
    const newRoomObj = convertArrayToObject(newRoom, 'id');

    let editCheckout = {
      Start: reservation.Start,
      End: reservation.End,
      Crs: reservation.Crs,
      HotelCode: reservation.HotelCode,
      discount: null,
      promotionCode: null,
      groupCode: null,
      Rooms: newRoomObj,
      Services: null,
      GuestDetails: {
        firstName: reservation.ResGuests[0].GivenName,
        lastName: reservation.ResGuests[0].Surname,
        email: reservation.ResGuests[0].Email
      },
      Step: 'start'
    }
    dispatch(setEditReservationCheckout(editCheckout));
    navigate("/edit-reservation", {
      state: {
        reservation: reservation,
        confirmationID: confirmationID,
        room: room,
        rate: rate,
        hotel: hotel
      }
    });
  }

  // Fetch pricing.
  useEffect(() => {
    const source = Axios.CancelToken.source();
    let didCancel = false;

    const fetchRooms = async (apiUrl) => {
      let fetchedRooms = null;

      const data = await coreGet(apiUrl, source);
      if (data !== null) {
        fetchedRooms = Object.values(data)[0].Rooms;
        if (!didCancel) {
          // setRooms(fetchedRooms);
          let thisRoomRates = fetchRoomsAndRates(fetchedRooms, null, null, groupCode);
          setRooms(convertArrayToObject(thisRoomRates, 'RoomCode'));
          // setRoomRates(thisRoomRates);
        }
      }
    }

    (async () => {
      const apiUrl = buildFetchRatesUrl(
        reservation.Crs,
        reservation.HotelCode,
        reservation.Start,
        reservation.End,
        reservation.Count.Adult,
        reservation.Count.children || 0,
        null,
        groupCode,
        rateCode
      );
      if (apiUrl && !rooms) {
        await fetchRooms(apiUrl);
      }
    })();

    return () => {
      didCancel = true;
      // source.cancel(`Request cancelled for fetch rates services`);
    }

  }, [rateCode]);

  useEffect(() => {
    if(rooms) {
	  let resRoomRates = rooms[roomCode] && rooms[roomCode].Rates;
	  let reservationRoomRate;
		if(resRoomRates) {
			if(resRoomRates[rateCode]) {
				reservationRoomRate = resRoomRates[rateCode];
			} else {
				reservationRoomRate = resRoomRates.filter(r => r.RateCode == rateCode)[0];
			}
		}

     // let reservationRoomRate = rooms[roomCode] && rooms[roomCode].Rates[rateCode];
      let isRateAdvance = reservationRoomRate && reservationRoomRate.Advanced;
      setIsRateAdvance(isRateAdvance);
    }

  }, [rooms]);


  useEffect(() => {
    let isHelloBucksUsed = false;
    if (reservation.ResBucksRedeemed) {
      let bucksSplitArr = reservation.ResBucksRedeemed.split("=");
      let bucksRedeemed = bucksSplitArr[1] ? bucksSplitArr[1].replace(";", "").trim() : 0;
      isHelloBucksUsed = parseInt(bucksRedeemed) > 0;
    }
    let showEditButton = isRateAdvance !== null && !isRateAdvance && is24HoursBefore && !isHelloBucksUsed && roomDetail;
    setShowEditButton(showEditButton);
  }, [isRateAdvance, roomDetail, is24HoursBefore])

  return (
    rooms && showEditButton ?
    <Button variant="link" size="sm" className="p-0" onClick={handleEditReservation}>
      EDIT RESERVATION
    </Button>
    : null
  )
};

export default EditReservationButton;
