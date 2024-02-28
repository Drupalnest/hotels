import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { theme } from "./styles/theme";
import HelloRewardsDropdown from "./hrDropdown";
import HamburgerIcon from "./HamburgerIcon";
import { auth } from "../utils/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = styled.nav`
  width: 100%;
  position: relative;
  background: #ffffff;
  a#mobile-trigger {
    height: inherit;
    color: #595959;
    font-weight: 500;
    font-size: 12px;
    position: relative;
  }
  @media (max-width: 991px) {
    z-index: 100000;
    a#mobile-trigger {
      text-decoration: none !important;
    }
    [class*="col"]:nth-child(2) {
      order: 3;
      max-width: 54px;
      padding: 0 15px;
      position: absolute;
      right: 0;
    }
    [class*="col"]:nth-child(3) {
      order: 2;
      position: absolute;
      // right: 54px;
    }
    .hrDropDown {
      left: 50%;
      transform: translateX(-50%);
      right: auto;
      z-index: 21;
    }
  }
`;
const Branding = styled.div`
  flex: 0 0 100px;
  max-width: 100px;
  a#logo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    img {
      width: auto;
      max-height: 34px;
      display: block;
      margin: 0;
    }
  }
  @media (max-width: 991px) {
    height: 42px;
    flex: 0 0 85px;
    max-width: 85px;
    a#logo {
      height: inherit;
      width: 100%;
      img {
        width: auto;
      }
    }
  }
`;

const MenuWrapper = styled.nav`
  height: 48px;
  @media (max-width: 991px) {
    height: 42px;
  }
`;
const Menu = styled.ul`
  display: block;
  height: inherit;
  margin: 0 0 0 -15px;
  padding: 0;
  list-style: none;
  text-align: left;
  li {
    display: flex;
    align-items: center;
    height: inherit;
    margin: 0 15px;
    font-weight: 500;
    font-size: 13px;
    float: left;
    a {
      color: #595959;
      text-decoration: none;
      position: relative;
      transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
      display: block;
    }
  }
  @media (max-width: 991px) {
    height: max-content;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: #ffffff;
    border-top: 1px solid #f2f2f2;
    position: fixed;
    top: 42px;
    bottom: 0;
    left: auto;
    right: 0;
    display: none;
    overflow: auto;
    z-index: 1000;
    li {
      height: auto;
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: 14px;
      text-align: center;
      float: none;
      a {
        width: 100%;
        padding: 12px 15px;
        border-bottom: 1px solid #f2f2f2;
        display: block;
      }
    }
    &.open {
      display: block;
    }
  }
`;

const PreHeader = ({ siteTitle, member, location }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  // const isLoggedIn = useSelector((state) => state.member.isLoggedIn);
  useEffect(() => {
    if (menuOpen || loginOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleMenuOpen = (e) => {
    setMenuOpen(!menuOpen);
    setLoginOpen(false);
    e.preventDefault();
  };
  const handleLoginOpen = () => {
    setLoginOpen(loginOpen === false);
    setMenuOpen(false);
  };
  // const toggleText = member.isLoggedIn
  //   ? `Hello <span class="toggle-text">${member.profile.firstName}</span>`
  //   : `Sign In or Join`;
  return (
    <>
      <div
        className={`mobile-overflow-hidden ${menuOpen ? "d-block" : "d-none"}`}
      ></div>
      <Navigation role="navigation">
        <Container fluid>
          <Row>
            <Branding as={Col}>
              <Link id={`logo`} to="/">
                <img src={theme.logo} alt={siteTitle} />
              </Link>
            </Branding>
            <Col>
              <MenuWrapper role="navigation">
                <h2 className="visually-hidden">Main Navigation</h2>
                <a
                  id={"mobile-trigger"}
                  className="d-block d-lg-none"
                  href={`#`}
                  title={"Menu"}
                  onClick={handleMenuOpen}
                  aria-label="Menu"
                >
                  <HamburgerIcon toggledClass={menuOpen ? `open` : null} />
                </a>
                <Menu className={menuOpen ? `open` : null}>
                  <li>
                    <Link to="/our-brands" activeClassName="active">
                      Our Brands
                    </Link>
                  </li>
                  <li>
                    <Link to="/offers" activeClassName="active">
                      Special Offers
                    </Link>
                  </li>
                  <li>
                    <Link to="/meetings-and-events" activeClassName="active">
                      Meetings &amp; Events
                    </Link>
                  </li>
                  <li className="d-lg-none">
                    <Link to="/manage-reservation" activeClassName="active">
                      Manage Reservations
                    </Link>
                  </li>
                  <li className="d-lg-none">
                    <Link to="/support" activeClassName="active">
                      Help
                    </Link>
                  </li>
                </Menu>
              </MenuWrapper>
            </Col>
            <Col xs="auto" className="pl-0 pr-0 hrDropDown">
              <HelloRewardsDropdown
                auth={auth}
                //toggleText={toggleText}
                location={location}
                showDropdown={loginOpen}
                setShowDropdown={handleLoginOpen}
              />
            </Col>
            <Col id="secondary-nav" xs="auto" className="d-none d-lg-block">
              <MenuWrapper role="navigation">
                <h2 className="visually-hidden">Secondary Navigation</h2>
                <Menu>
                  <li>
                    <Link
                      //to={isLoggedIn ? "/account" : "/manage-reservation"}
                      activeClassName="active"
                    >
                      Manage Reservations
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" activeClassName="active">
                      Help
                    </Link>
                  </li>
                </Menu>
              </MenuWrapper>
            </Col>
          </Row>
        </Container>
      </Navigation>
    </>
  );
};

PreHeader.propTypes = {
  siteTitle: PropTypes.string,
  member: PropTypes.object.isRequired,
};
PreHeader.defaultProps = {
  siteTitle: ``,
};

export default React.memo(PreHeader);
