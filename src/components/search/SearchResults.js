import React, { useEffect, useState } from "react";
import HotelCard from "../HotelCard";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";

const SearchResults = ({hotels, search, isLoading, onClickHotelImage}) => {
  const hotelListRef = React.useRef();
  const [totalHotels, setTotalHotels] = useState(null);
  const showPriceFilterNoResultMsg = !!search.priceFilter;

  const renderHotelList = () => {
    if (hotels.length) {
      return hotels.map((hotel, i) => {
        return (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            stacked={false}
            onClickHotelImage={onClickHotelImage}
            positionInSearchResult={i+1}
          />
        );
      });
    }
    return null;
  };

  useEffect(() => {
    let canceledRequest = false;
    !canceledRequest && setTotalHotels(-1);
    if(!isLoading) {
      const filteredHotels = Object.values(hotelListRef.current.childNodes).filter(ele => ele.classList.contains('no-price-filter'));
      !canceledRequest && setTotalHotels(filteredHotels.length);
    }

    return () => {
      canceledRequest = true;
    }
  }, [isLoading])

  return (
    <Col>
      {
        isLoading ?
          <Spinner animation="border" />
        :
         <>
         {totalHotels == 0 && showPriceFilterNoResultMsg && <div className="text-center mb-5 pb-5">No hotels found matching your criteria</div> }
         <div ref={hotelListRef}>{renderHotelList()}</div>
         </>
      }
    </Col>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  search: PropTypes.object.isRequired,
  hotels: PropTypes.array.isRequired,
};
