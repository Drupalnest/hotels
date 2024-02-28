import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import { colors } from "../styles/theme";

import GlobalSearch, { Dates, Location, SearchForm } from "../search/GlobalSearch";

const StyledModal = styled(Modal)`
  .modal-dialog {
    @media(min-width: 992px) {
      max-width: 50%;
      top:0;
    }
  }
  .modal-header {
    padding-bottom: unset;
    border-bottom: unset;
  }
  .modal-body {
    @media(min-width: 992px) {
      padding: 0 30px 20px 30px;
      margin: 0 30px;
    }
    @media(min-width: 1200px) {
      padding: 0 50px 30px 50px;
      margin: 0 50px;
    }
  }
  .modal-footer {
    border: none;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    img {
      height: 60px;
    }
    span {
      font-size: 8px;
      line-height: 20px;
    }
  }
`
const StyledContainer = styled(Container)`
  ${SearchForm} {
    .dropdown {
      margin-bottom: 20px;
      height: 35px;
    }
    .btn-search-dropdown {
      border: 1px solid ${colors.secondary};
      height: 35px;
      width: 100%;
      border-radius: 4px;
      font-size: 14px;
      padding: 10px 40px 10px 20px;
      line-height: 1;
      position: relative;
      text-align: left;
      &:hover {
        box-shadow: 0 0.5rem 1.25rem rgba(0,0,0,0.5);
      }
      svg {
        margin-left: 8px;
        font-size: 10px;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
    }
    .discounts-members {
      .dropdown-item {
        color: ${colors.primary} !important;
      }
    }
  }
  .searchIcon {
    color: ${colors.dark};
  }
  ${Location} {
    input {
      color: ${colors.dark} !important;
      border: 1px solid ${colors.secondary} !important;
      height: 35px;
      &::placeholder {
        color: rgba(0, 0, 0, .3) !important;
      }
    }
    .hotel-name {
      color: ${colors.dark} !important;
    }
  }
  ${Dates} {
    @media (min-width: 992px) {
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    margin: 30px auto;
    input {
      color: ${colors.dark};
    }
    #dates-divider {
      color: ${colors.dark};
    }
  }
  .search-discounts {
    padding-left: 10px;
  }
  .btn-secondary {
    color: #000;
    background-color: ${colors.secondary};
    border-color: ${colors.secondary};
    height: 33px !important;
    margin-bottom: 3px !important;
  }
`;

const Note = styled.div`
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
`;

const HotelSearchModal = (props) => {
  const logo = useSelector(state => state.brand);
  const location = props.location || window.location;
  const [findHotelClicked, setFindHotelClicked] = useState(false);


  const handleOnHide = () => {
    props.onHide();
  }

  const handleOnSearchSubmit = () => {
    setFindHotelClicked(true); // so that we can differentiate if user clicked on find hotel or simply closed the modal
  }

  return (
    <StyledModal
      {...props}
      onHide={handleOnHide}
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center mt-2 logo">
          <Link to={logo.linkPath}>
            <img src={logo.url} alt={logo.alt}/>
          </Link>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledContainer>
          <Row>
            <Col className="justify-content-center mt-5">
              <GlobalSearch location={location} brandId={props.id} isSearchModal={true}  isBrandHotelSearchModal={true} onSearchSubmit={handleOnSearchSubmit}/>
            </Col>
          </Row>
        </StyledContainer>
      </Modal.Body>
    </StyledModal>
  );
}

export default HotelSearchModal;
