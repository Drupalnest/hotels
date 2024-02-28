import React from "react";
import { useSelector } from "react-redux";
// import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import map from 'lodash/map';
import filter from 'lodash/filter';
import forOwn from 'lodash/forOwn';

import { convertArrayToObject } from "../../../apis/helpers";
import { useHotels } from "../../../hooks/useHotels";

import {
  parseDate,
  parseDateFormat
} from "../../../apis/dates";
import ReservationCard from "./ReservationCard";

const StyledReservationList = styled.div`
  h2 {
    border-bottom: 1px solid #E0E0E0;
    padding-bottom: 20px;
  }
`;

const AddHotelDetailsToRes = (bookings, hotels) => {
  forOwn(bookings, (reservation, key) => {
    reservation.hotel_details = hotels[reservation.pms_property_code];
  })
  return bookings;
}

const ReservationsList = (props) => {
  let hotelsData  = useHotels();

  let reservations = useSelector((state) => {
    switch (props.type) {
      case 'upcoming':
        return state.member.upcomingReservations;
      case 'recent' :
        return state.member.recentStays;
      case 'cancelled' :
        return state.member.cancelledReservations;
      default:
        return {};
    }
  });

  //get hotel code of all reservations
  let hotelIds = map(reservations, 'pms_property_code');
  let uniqueHotelIds = hotelIds.filter( hId => hId !== null);

  let reservedHotels = filter(hotelsData, (h, key) => {
    return h.crs_code && uniqueHotelIds.indexOf(h.crs_code) !== -1;
  });
  let hotelsByCode = convertArrayToObject(reservedHotels, 'crs_code');

  // assign hotel details to each reservation
  reservations = AddHotelDetailsToRes(reservations, hotelsByCode);

  const renderReservations = () => {
    if (reservations !== null) {
      let res = [];
      forOwn(reservations, (reservation, key) => {
        res.push(reservation);
      });
      let sortType = props.type !== 'upcoming' ? 'desc' : 'asc';
      res && res.sort((a, b) => {
        if (sortType === 'asc') {
          return parseDate(a.arrival, parseDateFormat) - parseDate(b.arrival, parseDateFormat);
        } else {
          return parseDate(b.arrival, parseDateFormat) - parseDate(a.arrival, parseDateFormat);
        }
      });
      return res.map((reservation) => {
        return (
          <ReservationCard
            key={reservation.crs_reservation_id}
            reservation={reservation}
            type={props.type}
            onCancel={props.onCancel}
          />
        );
      });
    }
    return;
  };

  const renderHeading = () => {
    let totalResStr = '';
    let totalRes = Object.keys(reservations).length || 0;
    let pluralS = totalRes > 1 ? 's' : '';
    switch (props.type) {
      case 'upcoming' :
        totalResStr = `Upcoming Reservation${pluralS}`;
        break;
      case 'recent' :
        totalResStr = `Recent Stay${pluralS}`;
        break;
      case 'cancelled' :
        totalResStr = `Cancelled Reservation${pluralS}`;
        break;
      default:
        break;
    }
    if (totalRes > 0) {
      totalResStr = `${totalRes} ${totalResStr}`;
      return (
        <h2>{totalResStr}</h2>
      )
    } else {
      return (
        <h4 className="text-center">No {totalResStr}s</h4>
      )
    }
  }

  return (
    <StyledReservationList>
      {renderHeading()}
      {renderReservations()}
    </StyledReservationList>
  );
};
export default React.memo(ReservationsList);
