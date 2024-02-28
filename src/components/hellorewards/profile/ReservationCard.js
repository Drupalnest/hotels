import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {Link, navigate} from "gatsby";
import styled from "styled-components";
import filter from 'lodash/filter';

import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Title4, colors } from "../../styles/theme";
import fallbackImage from '../../../images/hotel_fallback.jpg';
import { fetchReservationDetails } from "../../../apis/crs";
import {
  resParseDateFormat,
  resDisplayDateFormat
} from "../../../apis/dates";
import { useHotels } from "../../../hooks/useHotels";
import EditReservationButton from "../EditReservationButton";
// import loadable from '@loadable/component'
import moment from 'moment-mini';

const StyledContainer = styled(Container)`
  margin: 20px 0;
  padding: 0;
  background: ${colors.light};

  @media(max-width: 991px) {
    margin-top: 0;
  }
  .image-hotel-wrapper {
    margin-bottom: 20px;
  }
  span, .phone-link {
    font-size :14px;
    line-height: 30px;
    font-weight: normal;
    a {
      color: ${colors.dark};
      text-decoration: underline;
      &:hover, &:focus, &:active {
        color: ${colors.dark};
      }
    }
  }
  .labels {
    font-weight: 600;
  }
  .image-wrapper {
    position: relative;
    height: 100%;
    img {
      width: 100%;
      margin: 0;
      border-radius: 4px 4px 0 0;
      min-height: 180px;
    }
  }
  .res-links {
      a, button {
      font-size: 13px;
      font-weight: 500;
      color: ${colors.primary};
      text-decoration: underline;
      text-transform: uppercase;
      &:hover {
        color: ${colors.primary};
      }
    }
  }
  .card {
    background: ${colors.light};
    margin: 0 10px;
    @media(min-width: 991px) {
      margin: 20px;
    }
    border-bottom: 0;
    .check-in {
      ::after {
        content: "|";
        margin: 20px;
      }
    }

    .total-cost {
      span {
        :first-child{
          font-size: 23px;
          font-weight: 500;
        }
        font-size: 28px;
        font-weight: 800;
      }
    }
  }

  .cancelled {
    color: ${colors.primary};
  }
  .addressMap {
    color: ${colors.dark};
    &:hover, &:active {
      color: ${colors.dark};
    }
  }

`;
const StyledTitle4 = styled(Title4)`
  &&& {
    a {
      color: ${colors.dark};
      text-decoration: underline;
    }
  }
`
const ReservationCard = (props) => {
  const {reservation, type, onCancel, page, onHotelDisplay, onReservationDetailLoad} = props
  const mountedRef = useRef(false);
  const member = useSelector(state => state.member);

  const [isLoadingDetail, setIsloadingDetail] = useState(false);
  const [resApiDetails, setResApiDetails] = useState(null);
  const [resDetails, setResDetails] = useState({
    checkInTime: '',
    checkOutTime: '',
    bedDesc: '',
    roomRates: null,
    cancelPolicies: {},
    cancelID: null
  });

  const {checkInTime, checkOutTime, bedDesc, roomRates, cancelPolicies, cancelID} = resDetails;
  const allHotels  = useHotels();

  const [hotel, setHotel] = useState(reservation.hotel_details);
  const [hotelDisplayData, setHotelDisplayData] = useState({
    hotelName: '',
    address: '',
    addressMapLink: '',
    phone: null,
    imageUrl: fallbackImage
  })

  const hrMemberlastName = useSelector((state) => {
    let member = state.member;
    return member && member.isLoggedIn && member.crmProfile ? member.crmProfile.last_name : null;
  });

  const lastName = hrMemberlastName || props.lastName;

  const stayDateStr = (() => {
    if (reservation.arrival) {
      const arrival = moment(reservation.arrival, resParseDateFormat);
      const departure = moment(reservation.departure, resParseDateFormat);
      const numberNights = departure.diff(arrival, 'days');

      const nightStr = numberNights > 1 ? ' Nights' : ' Night';
      const displayArrival = arrival.format(resDisplayDateFormat);
      const displayDeparture = departure.format(resDisplayDateFormat);
      return `${displayArrival} - ${displayDeparture} (${numberNights}${nightStr})`;
    } else {
      return '';
    }
  })();

  const totalCostStr = (() => {
    if (roomRates) {
      let totalCost = resDetails.roomRates[0].Total;
      if (totalCost > 0) {
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        return formatter.format(totalCost);
      }
    }
    return null;
  })();


  const handleCancelReservation = () => {
    onCancel({
      openDialog: true,
      res: {...reservation, ...{cancelPolicies: cancelPolicies}, ...{hotel_details: hotel}}
    });
  }

  const handleViewReservation =() => {
    navigate("/reservation", {
      state: {
        reservation: {
          crs_reservation_id: reservation.crs_reservation_id,
          arrival: reservation.arrival,
          departure: reservation.departure,
          type: type
        }
      }
    });
  }

  const getDetails = async (source) => {
    mountedRef.current && setIsloadingDetail(true);
    try {
      let details;
      if(reservation.details && reservation.details.Policies) { // if details already passed from reservation page then don't need to fetch again
        details = reservation.details;
      } else {
        details = await fetchReservationDetails({
          resId: reservation.crs_reservation_id,
          hotelCode: hotel ? hotel.crs_code : reservation.details && reservation.details.HotelCode,
          lastName: lastName,
          source: source
        });
        details = details.value;
        onReservationDetailLoad && onReservationDetailLoad(reservation.crs_reservation_id, details);
      }

      if (mountedRef.current) {
        if(details) {
          setResApiDetails(details);
          setResDetails({
            checkInTime: details.Policies ? details.Policies.CheckInTime : '',
            checkOutTime: details.Policies ? details.Policies.CheckOutTime : '',
            // bedDesc: details.RoomDescription && details.RoomDescription.Occupancy ? `${details.RoomDescription.Occupancy} ${details.RoomDescription.Name}` : '' ,
            bedDesc: details.RoomDescription ? details.RoomDescription.Name : '',
            roomRates: details.RoomRates,
            cancelPolicies: details.CancelPolicies || {},
            cancelID: details.CancelID
          });
          console.log("SETTING HOTEL DETAILs");
        }
          // add hotel details if hotel info was not initially available from fetchContact api response
        let hotelCode = details && details.HotelCode;
        if(!hotel && hotelCode) {
          let reservedHotel = filter(allHotels, (h, key) => {
            return hotelCode == h.crs_code;
          });
          reservedHotel[0] && setHotel(reservedHotel[0]);
        }
        setIsloadingDetail(false);
      }

    } catch (e) {
      mountedRef.current && setIsloadingDetail(false);
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    let source = Axios.CancelToken.source();

    if (reservation && (type === 'upcoming' || type === 'recent' || page == 'reservation' )) {
      if (mountedRef.current && !isLoadingDetail) {
        // (async () => {
          getDetails(source);
        // })();
      }
    }

    // Cleanup on unmount.
    return () => {
      mountedRef.current = false;
      source.cancel(`Request cancelled for ${reservation.crs_reservation_id} details`);
    }
  }, []);

  useEffect(()=> {
    if(hotel) {
      let address = hotel.address;
      let imageUrl = hotel.banner_images && hotel.banner_images.length ? hotel.banner_images[0].url : fallbackImage;
      let addressStr = address ? `${address.address_line1} ${address.address_line2 || ''} ${address.locality}, ${address.administrative_area_name}, ${address.country_code} ${address.postal_code}` : '';
      const addressParsed = addressStr.replace(/(<([^>]+)>)/gi, "").split(', ');
      const addressUrl = addressParsed.join('+').replace(/s/, "+");
      setHotelDisplayData({
        hotelName: hotel.name || '',
        address: addressStr,
        addressMapLink: `https://www.google.com/maps/dir/?api=1&destination=${addressUrl}`,
        phone: hotel.phone || null,
        imageUrl: imageUrl || fallbackImage
      });
      onHotelDisplay && onHotelDisplay(hotel);


    }
  }, [hotel]);

  useEffect(() => {
    if(type === 'cancelled' && props.reservation && props.reservation.details && props.reservation.details.CancelID) {
      setResDetails({...resDetails, cancelID: props.reservation.details.CancelID});
    }
  },[type])

  // useEffect(() => {
  //   if(type === 'upcoming' && cancelID) {
  //     // if reservation is upcoming as per fetchcontact api response but actually it's cancelled then move this reservation from upcoming res list to cancelled list.
  //     // setTimeout(function() {
  //     //   dispatch({
  //     //     type: 'CANCEL_RESERVATION',
  //     //     payload: reservation.crs_reservation_id,
  //     //   });
  //     // },0)
  //   }
  // },[type, cancelID])

  return (
    <StyledContainer>
      <Row className="image-hotel-wrapper" noGutters>
        <Col sm={12} md={6} className="image-wrapper">
          <img
            src={hotelDisplayData.imageUrl}
            alt={hotelDisplayData.hotelName}
          />
        </Col>
        <Col className="h-100">
          <Row noGutters className="h-100 px-md-4 pl-2 pt-3">
            <Col>
              <StyledTitle4 className="mb-2">
                {hotel && hotel.path
                  ?
                  <Link to={hotel.path.alias}>{hotelDisplayData.hotelName}</Link>
                  :
                hotelDisplayData.hotelName
              }
              </StyledTitle4>
              <div>
                <span className="labels">Reservation ID: </span>
                <span> {reservation.crs_reservation_id}</span>
              </div>
              {cancelID &&
                <div className="cancelled">
                  <span className="labels">Cancellation ID: </span>
                  <span> {cancelID}</span>
                </div>
              }
              {isLoadingDetail ?
                <Spinner animation="grow" size="sm"/> :
                <>
                  {bedDesc && <div>
                    <FontAwesomeIcon icon={faBed} className="mr-1"/>
                    <span>{bedDesc}</span>
                  </div>}
                </>
              }
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 "/><span><u>{stayDateStr}</u></span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Card>
        <Row className="mb-3 mt-3">
          <Col>
            {isLoadingDetail ?
              <Spinner animation="grow" size="sm"/> :
              <>
                {checkInTime &&
                <>
                  <span className="labels">Check-in: </span>
                  <span className="check-in">{checkInTime}</span>
                  <span className="labels">Check-out: </span>
                  <span>{checkOutTime}</span>
                </>
                }
              </>
            }
          </Col>
          {hotelDisplayData.address &&
          <Col xs={12}>
            <span className="labels">Address: </span>
            <span><u><a href={hotelDisplayData.addressMapLink} target="_blank" rel="noopener noreferrer" className="addressMap">{hotelDisplayData.address}</a></u></span>
          </Col>
          }
          {hotelDisplayData.phone &&
          <Col xs={12} className="phone-link">
            <span className="labels">Phone: </span>
            <a href={`tel:${hotelDisplayData.phone}`} >{hotelDisplayData.phone}</a>
          </Col>
          }
        </Row>
        {isLoadingDetail ?
          <Spinner animation="grow" size="sm"/> :
          <>
            {totalCostStr &&
            <Row className="border-top border-bottom ml-0 mr-0">
              <Col className="mt-3 mb-3 pl-0 pr-0 d-flex justify-content-between total-cost">
                <span className="d-inline">Total For Stay:</span>
                <span className="d-inline ">{totalCostStr}</span>
              </Col>
            </Row>
            }
          </>
        }
        <Row>
          <Col className="mt-4 mb-4  d-flex res-links">
            {type === 'upcoming' ?
              <>
                {member.isLoggedIn && resApiDetails && !cancelID &&
                  <EditReservationButton reservation={resApiDetails} hotel={hotel} confirmationID={reservation.crs_reservation_id} />
                }
                {!cancelID &&
                <Button variant="link" size="sm" onClick={handleCancelReservation}>
                  CANCEL RESERVATION
                </Button>
                }
              </>
              :
              <>
              {page != 'reservation' && type != 'recent' &&
                <Button onClick={handleViewReservation} variant="link" size="sm">
                  VIEW RESERVATION
                </Button>
              }
              </>
            }
          </Col>
        </Row>
      </Card>

    </StyledContainer>

  );
}

export default React.memo(ReservationCard);

ReservationCard.propTypes = {
  reservation: PropTypes.object.isRequired
};
