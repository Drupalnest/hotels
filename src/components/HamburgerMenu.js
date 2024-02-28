import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brandColors, theme } from "./styles/theme";
import helloRewardsIcon from "../images/gonative/hello_rewards_icon.png";
import RLHLogoWhite from "../images/svg/brand_logos/rlh_white.svg";
import signInMenuIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_SignInProfile.svg";
import BrandsMenuIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_Brands.svg";
import helloRewardMenuIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_HelloRewards.svg";
import helpMenuIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_Help.svg";
import manageReservationIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_ManageReservations.svg";
import meetingAndEventsIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_Meetings&Events.svg";
import specialOffersIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_SpecialOffers.svg";
import HomeMenuIcon from "../images/gonative/menu_icons/HelloRewards-App-MenuIcons_Home.svg";
import HotleRL from "../images/gonative/brands/HotelRL-Logo-Gray.svg";
import ABVI from "../images/gonative/brands/ABVI-Logo-Gray.svg";
import CBVI from "../images/gonative/brands/CBVI-Logo-Gray.svg";
import GuestHouse from "../images/gonative/brands/GHES-Logo-Gray.svg";
import KnightsInn from "../images/gonative/brands/KnightsInn-Logo-Gray.svg";
import RLH from "../images/gonative/brands/RLH-Logo-Gray.svg";
import SignatureInn from "../images/gonative/brands/SignatureInn-Logo-Gray.svg";
import RLIS from "../images/gonative/brands/RLIS-Logo-Gray.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WHITE_THEME = "#ffffff";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 21;
`;

const Navigation = styled.nav`
  z-index: 22;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.7);
  width: 100%;
  position: sticky;
  background: #000000;
  [class*="col"]:nth-child(1) {
    svg {
      height: 15px;
      width: 15px;
    }
  }
  .hamburgerIcons {
    right: auto !important;
  }
  .signinIcon {
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    // float: right;
    // margin-right: 10px;
    // display: flex;
    // justify-content: center;
    svg {
      margin-top: 13px;
      margin-left: 8px;
      color: #ffffff;
    }
    span {
      font-size: 12px;
      margin-top: 12px;
      margin-left: 8px;
      width: 80px;
      text-transform: capitalize;
      color: ${(props) => (props.color ? props.color : "#AE1E22")} !important;
    }
    @media (max-width: 321px) {
      svg {
        font-size: 10px;
      }
      span {
        font-size: 10px;
        // margin-left: 5px;
      }
    }
  }
`;
const Branding = styled.div`
  display: flex;
  justify-content: center;
  height: 42px;
  img {
    max-height: 35px;
    width: 50px;
    margin-top: 5px;
  }
`;

const MainBranding = styled.div`
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
  height: 42px;
  flex: 0 0 85px;
  .backButton {
    svg {
      float: left;
      margin-top: 10px;
      height: 20px !important;
      width: 20px !important;
      color: ${(props) => (props.color ? props.color : "#AE1E22")};
    }
  }
`;
const Menu = styled.ul`
  display: block;
  list-style: none;
  text-align: left;
  background: #fff;
  width: 70vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border-top: 1px solid #000000;
  position: fixed;
  top: 42px;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 1000;
  transform: translate3d(-100vw, 0, 0);
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
  li {
    display: flex;
    align-items: center;
    font-weight: 400;
    height: auto;
    width: 100%;
    margin: 0;
    padding-left: 10px;
    font-size: 18px;
    text-align:left;
    float: none;
    border-bottom: .2px solid #e3e3e2;
    a {
      color: #000000;
      text-decoration: none;
      position: relative;
      width: 100%;
      padding: 8px 8px 8px 0px;
      display: block;
      span{
        padding-left: 8px;
      }
    }
    svg{
      color: #000000;
      margin-left: 10px;
      margin-right: 10px;
      ${(props) => (props.brandOpen ? "" : "margin: 10px;")}
      ${(props) =>
        props.brandOpen ? "transform: translateY(-50%) rotate(180deg);" : ""}
      ${(props) => (props.brandOpen ? "margin-top: 15px;" : "")}
    }
    &.activeMenu{
      background-color: #000000;
      img{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(306deg) brightness(103%) contrast(101%);
      }
      .brand-list {
        img{
          filter: invert(99%) sepia(6%) saturate(83%) hue-rotate(54deg) brightness(124%) contrast(100%);
        }
      }
      a{
          color: #ffffff;
      }
      svg{
        color: #ffffff;
      }
    }
  }
  &.open {
    transform: translate3d(0vw, 0, 0);
  }
  .brand-list{
    border-bottom: .2px solid #e3e3e2;
    li {
      display: ${(props) => (props.brandOpen ? "flex;" : "none;")}
      align-items: center;
      font-weight: 400;
      height: auto;
      width: 100%;
      margin: 0;
      padding-left: 10px;
      font-size: 14px;
      text-align:left;
      float: none;
      border-bottom: none;
    }

  }
  .brandDropdownIcon{
    width: 15%;
    border-left: .5px solid #e3e3e2;
    svg{
      height:18px !important;
      width:18px !important;
    }
  }
`;

const Hamburger = styled.div`
  height: 19px;
  width: 23px;
  position: absolute;
  top: 12px;
  span {
    height: 2px;
    width: 100%;
    background: ${(props) =>
      props.color ? props.color : "#AE1E22"} !important;
    border-radius: 3px;
    display: block;
    opacity: 1;
    position: absolute;
    left: 0;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 8px;
    }
    &:nth-child(4) {
      top: 16px;
    }
  }
`;

const HamburgerMenuIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const HamburgerMenu = ({ member, signin, brand, siteTitle }) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allRlhsite {
  //       edges {
  //         node {
  //           relationships {
  //             field_brands {
  //               id
  //               name
  //               path {
  //                 alias
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // let brands = data.allRlhsite.edges[0].node.relationships.field_brands;
  // if (brands[5]["name"] == "Knights Inn") {
  //   const knight_brand = brands[5];
  //   const MenuSubBrand = brands.splice(5, 1);
  //   brands.push(knight_brand);
  // }

  const [menuOpen, setMenuOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [fontChange, setFontChange] = useState(false);
  const hotel_arr = ["Hotel RL", "Red Lion Hotel", "RLIS", "SIG INN"];
  // const brandIconArray = [
  //   HotleRL,
  //   RLH,
  //   RLIS,
  //   SignatureInn,
  //   GuestHouse,
  //   ABVI,
  //   CBVI,
  //   KnightsInn,
  // ];
  // if (brand) {
  //   if (hotel_arr.includes(brand)) {
  //     if (!fontChange) {
  //       setFontChange(true);
  //     }
  //   }
  // }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleMenuOpen = (e) => {
    setMenuOpen(!menuOpen);
    e.preventDefault();
  };

  const targetCallUsPopup = useRef(null);

  const handleMenuClick = (e) => {
    e.preventDefault();
  };

  const handlePopupClickOutside = (event) => {
    if (
      targetCallUsPopup.current &&
      !targetCallUsPopup.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  const handleBrandDropdown = (e) => {
    e.preventDefault();
    setBrandOpen(!brandOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handlePopupClickOutside, true);
    return () => {
      document.removeEventListener("click", handlePopupClickOutside, true);
    };
  }, []);

  return (
    <>
      {menuOpen ? <Overlay /> : ""}
      <Navigation
        id="goNativeHamburgerMenu"
        color={WHITE_THEME}
        fontChange={fontChange}
      >
        <Container>
          <Row>
            <Col style={{ flex: "0 0 30%" }}>
              <MenuWrapper
                ref={targetCallUsPopup}
                role="navigation"
                color={WHITE_THEME}
              >
                <a
                  id={"mobile-trigger-gonative"}
                  className="d-block"
                  href={`#`}
                  title={"Menu"}
                  onClick={handleMenuOpen}
                  aria-label="Menu"
                >
                  {!menuOpen ? (
                    <Hamburger
                      className={`hamburger ${menuOpen ? `open` : null}`}
                      color={WHITE_THEME}
                      fontChange={fontChange}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Hamburger>
                  ) : (
                    <div className="backButton">
                      <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                    </div>
                  )}
                </a>
                <Menu
                  className={menuOpen ? `open` : null}
                  color={brandColors[brand]}
                  onClick={handleMenuClick}
                  fontChange={fontChange}
                  brandOpen={brandOpen}
                >
                  {!member.isLoggedIn ? (
                    <li id="1">
                      <Link to="#" onClick={() => signin()}>
                        <HamburgerMenuIcon src={signInMenuIcon} />
                        <span>Sign In or Join</span>
                      </Link>
                    </li>
                  ) : (
                    <li id="1">
                      <Link to="#" onClick={() => signin()}>
                        <HamburgerMenuIcon src={signInMenuIcon} />
                        <span>Hello {member.profile.firstName}</span>
                      </Link>
                    </li>
                  )}
                  <li
                    id="2"
                    className={` ${
                      window.location.pathname == "/" ? `activeMenu` : null
                    }`}
                  >
                    <Link to="/">
                      <HamburgerMenuIcon src={HomeMenuIcon} />
                      <span> Home </span>
                    </Link>
                  </li>
                  <li
                    id="3"
                    className={` ${
                      window.location.pathname == "/our-brands"
                        ? `activeMenu`
                        : null
                    }`}
                  >
                    <Link to="/our-brands" style={{ width: "90%" }}>
                      <HamburgerMenuIcon src={BrandsMenuIcon} />
                      <span>Our Brands</span>
                    </Link>
                    <div
                      className="brandDropdownIcon"
                      onClick={handleBrandDropdown}
                    >
                      <FontAwesomeIcon icon="chevron-down" />
                    </div>
                  </li>
                  <ul className="brand-list list-unstyled">
                    {/* {brands.map((item, index) => {
                      return (
                        <li
                          key={item.id}
                          className={` ${
                            window.location.pathname == item.path.alias
                              ? `activeMenu`
                              : null
                          }`}
                        >
                          <Link to={item.path.alias}>
                            <img
                              src={brandIconArray[index]}
                              style={{ height: "30px", width: "45px" }}
                            />
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })} */}
                  </ul>
                  <li
                    id="4"
                    className={` ${
                      window.location.pathname == "/offers"
                        ? `activeMenu`
                        : null
                    }`}
                  >
                    <Link to="/offers">
                      <HamburgerMenuIcon src={specialOffersIcon} />
                      <span>Special Offers</span>
                    </Link>
                  </li>
                  <li
                    id="5"
                    className={` ${
                      window.location.pathname == "/meetings-and-events"
                        ? `activeMenu`
                        : null
                    }`}
                  >
                    <Link to="/meetings-and-events">
                      <HamburgerMenuIcon src={meetingAndEventsIcon} />
                      <span> Meetings &amp; Events </span>
                    </Link>
                  </li>
                  <li
                    id="6"
                    className={` ${
                      window.location.pathname == "/hellorewards"
                        ? `activeMenu`
                        : null
                    }`}
                  >
                    <Link to="/hellorewards">
                      <HamburgerMenuIcon src={helloRewardMenuIcon} />
                      <span> Hello Rewards</span>
                    </Link>
                  </li>
                  <li
                    id="7"
                    className={` ${
                      window.location.pathname == "/manage-reservation"
                        ? `activeMenu`
                        : null
                    }`}
                  >
                    <Link to="/manage-reservation">
                      <HamburgerMenuIcon src={manageReservationIcon} />
                      <span> Manage Reservations</span>
                    </Link>
                  </li>
                  <li
                    id="8"
                    className={` ${
                      window.location.pathname == "/support"
                        ? `activeMenu`
                        : null
                    }`}
                  >
                    <Link to="/support">
                      <HamburgerMenuIcon src={helpMenuIcon} />
                      <span> Help</span>
                    </Link>
                  </li>
                </Menu>
              </MenuWrapper>
            </Col>

            <Col className="justify-content-center">
              <Branding className="text-center">
                <Link
                  id={`logo`}
                  to="/hellorewards"
                  style={{ marginRight: "6px" }}
                >
                  <img src={helloRewardsIcon} />
                </Link>
                <span
                  style={{
                    borderLeft: "1px solid #adb5bd",
                    display: "inline-block",
                    height: "80%",
                    marginRight: "6px",
                    marginBottom: "10px",
                    marginTop: "4px",
                  }}
                ></span>
                <Link to="/">
                  <img
                    src={RLHLogoWhite}
                    className="logo mb-3"
                    alt="RLH Corporation"
                  />
                </Link>
              </Branding>
            </Col>

            {/* <MainBranding as={Col}>
              <Link id={`logo`} to="/">
                <img src={theme.logo} alt={siteTitle} />
              </Link>
            </MainBranding> */}
            <Col
              className="justify-content-center"
              style={{
                flex: "0 0 30%",
                display: "flex",
                padding: "0px",
                overflow: "hidden",
              }}
            >
              <div className="signinIcon">
                {/* {member.isLoggedIn ? ( */}
                <>
                  <FontAwesomeIcon
                    icon={["far", "user"]}
                    onClick={() => signin()}
                  />
                  <span onClick={() => signin()}>
                    Hello
                    {/* {member.profile.firstName} */}
                  </span>
                </>
                {/* ) : ( */}
                <>
                  <FontAwesomeIcon
                    icon={["far", "user"]}
                    onClick={() => signin()}
                  />
                  <span onClick={() => signin()}>Sign In / Join</span>
                </>
                {/* )} */}
              </div>
            </Col>
          </Row>
        </Container>
      </Navigation>
    </>
  );
};

export default HamburgerMenu;
