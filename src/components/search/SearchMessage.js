import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Title3 } from "../styles/theme";

const Message = styled(Title3)`
  line-height: 24px;
  span {
    font-size: 1rem;
    vertical-align: middle;
  }
`;

const Wrapper = styled.div`
  position: absolute !important;
  font-size: 0 !important;
  clip: rect(0, 0, 0, 0);
`;

const CURRENT_LOCATION = "my current location";

const SearchMessage = ({ hotelCount, searchString, priceFilter }) => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(null);
  useEffect(() => {
    let didCancel = false;
    let newMessage = "No hotels found matching your criteria";
    let quantity = null;
    // if (hotelCount >= 1) {
    if (priceFilter !== null) {
      switch (priceFilter) {
        case "under_50":
          newMessage = `Hotels under $50 near ${searchString}`;
          break;
        case "between_50_100":
          newMessage = `Hotels $50-$100 near ${searchString}`;
          break;
        case `over_100`:
          newMessage = `Hotels over $100 near ${searchString}`;
          break;
        default:
          newMessage = "No hotels found matching your criteria";
      }
    } else {
      quantity = hotelCount;
      const modifiedMessage =
        searchString.toLowerCase() === CURRENT_LOCATION
          ? "near me"
          : "near " + searchString;
      newMessage = `hotel${hotelCount === 1 ? "" : "s"} ${modifiedMessage}`;
    }
    // }
    if (!didCancel) {
      setCount(quantity);
      setMessage(newMessage);
    }
    return () => {
      didCancel = true;
    };
  }, [hotelCount, searchString, priceFilter]);

  return (
    <>
      <Wrapper role="alert" aria-live="assertive">{`${
        count !== null ? count : ""
      } ${message}`}</Wrapper>
      <Message className="pr-3">
        {count !== null && count}{" "}
        <span className="font-weight-medium">{message}</span>
      </Message>
    </>
  );
};
export default SearchMessage;

SearchMessage.propTypes = {
  hotelCount: PropTypes.number.isRequired,
  searchString: PropTypes.string,
  priceFilter: PropTypes.string,
};
