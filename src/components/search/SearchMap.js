import React, {useState, useEffect} from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import {Icon} from "leaflet";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import RedPin from "../../images/svg/icon-pin-red.svg";
import Col from "react-bootstrap/Col";
import HotelMapMarker from "../HotelMapMarker";
import HotelCard from "../HotelCard";
import {fontWeights, colors, remCalc} from "../styles/theme";
const StyledMap = styled(Map)`
  height: 100%;
  height: 100vh;
  max-height: 540px;
  z-index: 1;
  .hotel-icon {
    background: #fff;
    width: 60px !important;
    height: auto !important;
    text-align: center;
    padding: .25rem;
    border-radius: 4px;
    box-shadow: 0 3px 14px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      max-height: 32px !important;
      max-width: 32px;
      min-width: 32px !important;
    }
    .price {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
      padding: 0 2px 2px 2px;
      margin: 0;
    }
  }
  .hotel-icon.active {
    width: 70px !important;
    height: auto !important;
    border: 2px solid ${colors.primary};
    .price {
      font-size: 22px;
    }
  }
  .leaflet-tile-pane {
    filter: grayscale(100%);
  }
  .custom-icon {
    background: #ae1e22;
    color: #fff;
    font-size: 12px;
    font-weight: ${fontWeights.medium};
    text-align: center;
    height: 24px !important;
    width: 24px !important;
    border-radius: 50%;
    line-height: 22px;
  }
  .filtered-by-price {
    display: none;
  }
`;
const HotelEmpty = styled.div`
  h2 {
    font-size: ${remCalc(20)};
    line-height: ${remCalc(26)};
  }
`;

const SearchMap = ({search, hotels, isLoading, onClickHotelImage}) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [center, setCenter] = useState([search.latitude, search.longitude]);

  useEffect(() => {
    setSelectedHotel(null);
    setCenter([search.latitude, search.longitude]);
  }, [search.latitude, search.longitude]);

  const handleSetHotel = (event) => {
    const hotel = event.target.options.data;
    const newCenter = event.target.options.position;
    // const apiUrl = buildFetchRatesUrl(
    //   hotel.crs_name,
    //   hotel.crs_code,
    //   search.checkin,
    //   search.checkout,
    //   search.rooms[0].adults,
    //   search.rooms[0].children,
    //   search.promotionCode,
    //   search.groupCode
    // );
    // const price = hotel.bestPrice !== null ? hotel.bestPrice : null;
    //setCenter(newCenter);
    setSelectedHotel({
      hotel: hotel
    })
  }
  if (isLoading) {
    return (
      <Col><Spinner animation="border" /></Col>
    )
  }
  else if (typeof window !== 'undefined' && hotels.length) {
    let bounds = [center];
    const CenterPin = new Icon({
      iconUrl: RedPin,
      iconSize: [36, 36]
    });
    if (!isLoading) {
      hotels.map((hotel) => {
        bounds.push(hotel.coordinates.split(' '));
      })
    }
    const options = {
      zoom: 13,
      center: center,
      bounds: bounds,
      scrollWheelZoom: false
    }
    return (
      <React.Fragment>
        <Col xs={12} lg={4}>
          {selectedHotel !== null ?
            <HotelCard {...selectedHotel} stacked={true} display="map" onClickHotelImage={onClickHotelImage} />
            :
            <HotelEmpty className="h-100 border rounded d-flex align-items-center p3">
              <h2 className="w-100 text-center">Select a Hotel</h2>
            </HotelEmpty>
          }
        </Col>
        <Col xs={12} lg={8}>
          <StyledMap {...options}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={center}
              icon={CenterPin}
            />
            {
              hotels.map((hotel, index) => {
                if (hotel.coordinates !== null) {
                  let isSelected = selectedHotel && selectedHotel.hotel.crs_code == hotel.crs_code;
                  return (
                    <HotelMapMarker
                      key={index}
                      onMarkerClick={handleSetHotel}
                      priceFilter={search.priceFilter}
                      hotel={hotel}
                      className={isSelected ? 'active' : ''}
                    />
                  )
                }
              })
            }
          </StyledMap>
        </Col>
      </React.Fragment>
    );
  }
  return null;
}
export default SearchMap;
