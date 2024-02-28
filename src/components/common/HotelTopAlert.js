import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const StyledWrapper = styled.div`
  width: 100%;
  background-color: #F8F8F8;
  color: #404040;
  font-size: 14px;
  .fa-times-circle {
    float: right;
    font-size: 16px;
    cursor: pointer;
    color: #777 !important;
    text-decoration: none !important;
    @media (max-width: 991px) {
      right: 20px;
      top: 15px;
    }
  }
}
`;


const HotelTopAlert = (props) => {
  const message = props.message || null;
  const [hideBanner, setHideBanner] = useState(true);
  const messageTitle = message ? message.field_title : '';
  const messageDesc = message ? message.field_description : '';
  const hotelCode = props.hotelCode || '';

  const handleClose = (e) => {
    setHideBanner(true);
    let storeObj = {
      dismissed: true,
      message: message
    }

    sessionStorage[`${hotelCode}_hotelMessage`] = JSON.stringify(storeObj);
  }

  useEffect(() => {
    if (!message) {
      setHideBanner(true);
    } else {
      let storedObj = sessionStorage[`${hotelCode}_hotelMessage`];
      if (storedObj) {
        storedObj = JSON.parse(storedObj);
        if (storedObj.message.field_title === messageTitle && storedObj.message.field_description === messageDesc) {
          !storedObj.dismissed && setHideBanner(false);
        } else {
          setHideBanner(false);
        }
      } else {
        setHideBanner(false)
      }
    }

  }, [])

  return (
    !hideBanner &&
    <StyledWrapper className="px-4 px-lg-5 py-3">
      <Container className="px-lg-5 ">
        <span className="font-weight-bold">{messageTitle}</span>
        <span> {messageDesc}</span>
        <FontAwesomeIcon icon={faTimesCircle} size="sm" onClick={handleClose}/>
      </Container>
    </StyledWrapper>
  )

}
export default HotelTopAlert;
