import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import addDays from "date-fns/addDays";

import { getLocationPlaceId } from "../apis/helpers";
import useGroupBookingLink from "../hooks/useGroupBookingLink";

const BookingLinkStyled = styled.a`
  .group-booking {
    padding-top: 1.5rem;
    a {
      text-decoration: underline;
      font-size: 13px;
    }
  }
`;

const GroupBookingLink = (props) => {
  const search = useSelector((state) => state.search);
  const propPlaceId = props.placeId;
  const [locationId, setLocationId] = useState(props.placeId);
  const searchString = props.searchString;// || search.searchString;
  const latitude = props.searchString && props.latitude;// ? props.latitude : search.latitude;
  const longitude = props.searchString && props.longitude;// ? props.longitude : search.longitude;
  // const distance = search.distance;
  const checkin = props.checkin || search.checkin || new Date();
  const checkout  = props.checkout || search.checkout || addDays(new Date(checkin), 1);

  const bookingLink = useGroupBookingLink(locationId, checkin, checkout);

  useEffect(() => {
    if(searchString && !propPlaceId) {
      (async() => {
        const searchLocationId = await getLocationPlaceId({
          location: searchString,
          lat: latitude,
          lon: longitude
        });
        setLocationId(searchLocationId);
      })()
    } else if(propPlaceId) {
      setLocationId(propPlaceId);
    }
  }, [searchString, latitude, longitude]);


  return (
    <BookingLinkStyled href={bookingLink} target="_new" className={props.className} disabled={!bookingLink}>
      {props.children}
    </BookingLinkStyled>
  );
};

export default GroupBookingLink;
