// import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import { graphql, useStaticQuery } from "gatsby";
// import PreHeader from "./PreHeader";
// import Header from "./Header";
// import Footer from "./Footer";
// import LoginModal from "./hellorewards/LoginModal";
// import GoNativeOverlay from "./GoNativeOverlay";
// import GoNativeLogin from "./GoNativeLogin";
// import Toast from "react-bootstrap/Toast";
// import LoadingOverlay from "react-loading-overlay";
// //import HotelTopAlert from "./common/HotelTopAlert";
// import "./styles/layout.css";
// import { Location } from "@reach/router";
// import styled from "styled-components";
// import { theme } from "./styles/theme";
// import SearchBreadCrumb from "./SearchBreadCrumb";
// import useAuthenticate from "../hooks/useAuthenticate";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faAngleDown,
//   faAngleUp,
//   faChevronDown,
//   faChevronUp,
//   faChevronLeft,
//   faChevronRight,
//   // faUser,
//   faHome,
//   faCalendarWeek,
//   faTrophy,
//   faDrum,
//   faArrowLeft,
//   faInfoCircle,
//   faList,
//   faMapMarkerAlt,
//   faShoppingCart,
//   faLongArrowAltRight,
//   faLongArrowAltDown,
//   faLongArrowAltUp,
//   faPhoneAlt,
//   faImage,
//   faUserFriends,
//   faBed,
//   faTag,
//   faCheck,
//   faExpand,
//   faCreditCard,
//   faPlusCircle,
//   faMinusCircle,
//   faDollarSign,
//   faConciergeBell,
//   faDharmachakra,
//   faCopy,
//   faExclamationCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faCalendar,
//   faHandshake,
//   faUser,
// } from "@fortawesome/free-regular-svg-icons";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { remCalc, fontWeights } from "./styles/theme";

// library.add(
//   faAngleDown,
//   faAngleUp,
//   faChevronDown,
//   faChevronUp,
//   faChevronLeft,
//   faChevronRight,
//   faUser,
//   faHome,
//   faCalendarWeek,
//   faTrophy,
//   faHandshake,
//   faDrum,
//   faDharmachakra,
//   faArrowLeft,
//   faInfoCircle,
//   faList,
//   faMapMarkerAlt,
//   faShoppingCart,
//   faLongArrowAltRight,
//   faLongArrowAltDown,
//   faLongArrowAltUp,
//   faPhoneAlt,
//   faImage,
//   faUserFriends,
//   faBed,
//   faCalendar,
//   faTag,
//   faCheck,
//   faExpand,
//   faCreditCard,
//   faPlusCircle,
//   faMinusCircle,
//   faDollarSign,
//   faConciergeBell,
//   faCopy,
//   faExclamationCircle
// );

// const colors = {
//   primary: "#AE1E22",
//   secondary: "#D8D8D8",
//   dark: "#404040",
//   light: "#F8F8F8",
// };
// const borderColor = "#e0e0e0";
// const LayoutWrapper = styled.div`
//   .text-body {
//     color: #404040 !important;
//   }
//   hr {
//     border-color: ${borderColor};
//   }
//   .border,
//   .border-left,
//   .border-right,
//   .border-top,
//   .border-bottom {
//     border-color: ${borderColor} !important;
//   }
//   // Breadcrumb styles
//   .breadcrumb {
//     font-size: 14px;
//     margin: 1rem 0;
//   }
//   // Nav styles
//   .nav-pills {
//     .nav-link {
//       color: ${colors.dark};
//       background-color: #fff;
//       margin-bottom: 5px;
//       font-weight: 500;
//       &.active {
//         background-color: ${colors.dark};
//         color: #fff;
//       }
//     }
//   }
//   // Badge styles
//   .badge {
//     &.badge-primary {
//       background: ${colors.primary};
//     }
//   }
//   a {
//     color: ${theme.primaryColor};
//     &:hover,
//     &:focus,
//     &.active {
//       color: ${theme.primaryColor};
//     }
//   }
//   // Link styles
//   .teaser-link {
//     font-size: ${remCalc(14)};
//     text-decoration: none;
//     color: #404040;
//     border-bottom: 2px solid ${colors.primary};
//     font-weight: 700;
//     &:hover {
//       border-color: transparent;
//     }
//   }
//   /* Button overrides */
//   .btn {
//     font-size: ${remCalc(14)};
//     font-weight: ${fontWeights.medium};
//     &:focus,
//     &.focus {
//       box-shadow: none;
//     }
//   }
//   .btn-link {
//     color: ${colors.primary};
//     text-decoration: underline;
//     &:hover {
//       text-decoration: none;
//     }
//   }
//   .btn-primary {
//     background-color: ${theme.primaryColor};
//     border-color: ${theme.primaryColor};
//     border: none;
//     color: #ffffff;
//     &:hover,
//     &:active,
//     &:focus {
//       color: #ffffff;
//     }
//     &:hover,
//     &:not(:disabled):not(.disabled):active {
//       background-color: ${theme.primaryColorDark};
//       border-color: ${theme.primaryColorDark};
//     }
//   }
//   .btn-secondary {
//     background-color: ${colors.secondary};
//     border: none;
//     color: #404040;
//     &:hover,
//     &:not(:disabled):not(.disabled):active {
//       background-color: #d8dadf;
//       //border-color: #595959;
//       color: black;
//     }
//   }
//   .btn-light {
//     background-color: ${colors.light} !important;
//     border: none;
//     box-shadow: none !important;
//   }
//   .btn-search-dropdown {
//     background: transparent;
//     color: #fff;
//     border: 2px solid rgba(255, 255, 255, 0.3);
//     height: 40px;
//     width: 100%;
//     border-radius: 4px;
//     font-size: 14px;
//     padding: 10px 40px 10px 20px;
//     line-height: 1;
//     position: relative;
//     text-align: left;
//     &:hover {
//       box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.5);
//     }
//     &:after {
//       display: none;
//     }
//     svg {
//       margin-left: 8px;
//       font-size: 10px;
//       position: absolute;
//       top: 50%;
//       right: 10px;
//       transform: translateY(-50%);
//     }
//   }
//   .btn-filter-dropdown {
//     background: transparent;
//     border: 1px solid #979797;
//     border-radius: 2px;
//     font-size: 12px;
//     font-weight: 500;
//     text-align: left;
//     width: 100%;
//     &:after {
//       display: none;
//     }
//     svg {
//       margin-left: 8px;
//       font-size: 10px;
//       position: absolute;
//       top: 50%;
//       right: 10px;
//       transform: translateY(-50%);
//     }
//   }
//   .dropdown:not(.hello-rewards) {
//     .dropdown-menu {
//       box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.25);
//       border: none;
//       padding-bottom: 25px;
//       border-radius: 4px;
//       min-width: 100%;
//       li {
//         margin: 0;
//         font-size: 14px;
//         .dropdown-item {
//           cursor: pointer;
//           &:hover,
//           &:focus,
//           &.active {
//             background: #f2f2f2;
//           }
//         }
//       }
//     }
//     &.show {
//       .dropdown-toggle {
//         box-shadow: none;
//         z-index: 1003;
//       }
//     }
//   }
//   .DayPicker-Day--start:not(.DayPicker-Day--outside),
//   .DayPicker-Day--end:not(.DayPicker-Day--outside) {
//     background-color: ${colors.primary} !important;
//     color: #ffffff !important;
//   }
//   .custom-range {
//     &::-webkit-slider-thumb {
//       background: #ae1e22;
//     }
//     &::-moz-range-thumb {
//       background: #ae1e22;
//     }
//     &::-ms-thumb {
//       background: #ae1e22;
//     }

//     &:focus {
//       &::-webkit-slider-thumb {
//         box-shadow: none;
//       }
//       &::-moz-range-thumb {
//         box-shadow: none;
//       }
//       &::-ms-thumb {
//         box-shadow: none;
//       }
//     }
//   }
//   // Form overides.
//   .custom-control .custom-control-label {
//     &::before,
//     &::after {
//       top: ${remCalc(1)};
//     }
//   }
//   .custom-checkbox .custom-control-label {
//     &::before {
//       border-radius: 2px;
//     }
//   }
//   .custom-control-input:checked ~ .custom-control-label {
//     &::before {
//       border-color: ${colors.primary};
//       color: #000;
//       background-color: #fff;
//     }
//     &::after {
//       background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
//     }
//   }
//   // Hide hotel cards from priceFilters
//   .filtered-by-price {
//     display: none;
//   }
//   // Unset sticky header on mobile.
//   @media (max-width: 991px) {
//     // .sticky-header {
//     //   transform: none !important;
//     //   width: 100% !important;
//     //   position: relative !important;
//     //   top: unset !important;
//     // }
//   }
//   .bg-primary {
//     background-color: ${colors.primary} !important;
//   }
//   .bg-secondary {
//     background-color: ${colors.secondary} !important;
//   }
//   .bg-dark {
//     background-color: ${colors.dark} !important;
//   }
//   .bg-light {
//     background-color: ${colors.light} !important;
//   }
//   // Desktop styles.
//   @media (min-width: 992px) {
//     .react-autosuggest__suggestions-container {
//       min-width: 300px;
//     }
//   }
//   .toast {
//     position: fixed;
//     top: 85vh;
//     left: 25%;
//     width: 50%;
//     z-index: 99;
//     background-color: rgb(0, 0, 0);
//     @media (max-width: 320px) {
//       width: 58%;
//     }
//   }
//   .toast-header {
//     color: #ffffff;
//     background-color: #000000;
//     justify-content: center;
//   }
// `;

// const StyledButton = styled.button`
//   position: absolute;
//   top: -9999px;
//   left: -9999px;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 99999;
//   svg {
//     margin-top: 50vh;
//   }
// `;

// const Layout = (props) => {
//   const member = useSelector((state) => state.member);
//   const isAuthenticated = useAuthenticate();
//   const children = props.children;
//   const brand = props.brand || null;
//   const brandId = props.brandId || null;
//   const [loginModalShow, setLoginModalShow] = React.useState(false);
//   const showLogo = props.showLogo || false;
//   const isHotelPage = props.isHotelPage || false;
//   const hotelTopAlert = props.topAlert;
//   const [showEditSearch, setShowEditSearch] = React.useState(false);
//   const [showGonativeLogin, setShowGoNativeLogin] = useState(false);
//   const [isGoNative, setIsGoNative] = useState(false);
//   const [logoutToast, setLogoutToast] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");
//   const notInitialRender = useRef(false);
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);

//   const handleBookNowClick = () => {
//     setShowEditSearch(true);
//   };

//   const handleGoNativeLogin = () => {
//     setShowGoNativeLogin(true);
//   };

//   const checkGonative = () => {
//     if (navigator.userAgent.indexOf("gonative") > -1) {
//       setIsGoNative(true);
//     }
//   };

//   const handleHamburgerClick = () => {
//     document.getElementById("goNativeLogin").click();
//   };

//   useEffect(() => {
//     if (!isGoNative) {
//       checkGonative();
//     }
//   }, []);

//   useEffect(() => {
//     if (notInitialRender.current) {
//       if (!member.isLoggedIn) {
//         setToastMessage("Logged out successfully!");
//         setIsLoggingOut(false);
//       } else {
//         setToastMessage("Logged in successfully!");
//       }
//       setLogoutToast(true);
//     } else {
//       notInitialRender.current = true;
//     }
//   }, [member.isLoggedIn]);

//   return (
//     <Location>
//       {({ location }) => (
//         <LayoutWrapper className={theme.wrapperClass}>
//           {!isGoNative ? (
//             <PreHeader
//               location={location}
//               siteTitle={data.site.siteMetadata.title}
//               member={member}
//             />
//           ) : (
//             <div>
//               <StyledButton
//                 id="goNativeLogin"
//                 onClick={() => handleGoNativeLogin()}
//               >
//                 {" "}
//                 Click
//               </StyledButton>
//               {showGonativeLogin ? (
//                 <GoNativeLogin
//                   show={showGonativeLogin}
//                   onHide={() => setShowGoNativeLogin(false)}
//                   location={location}
//                   isLoggingOut={() => setIsLoggingOut(true)}
//                 />
//               ) : (
//                 ""
//               )}
//               <GoNativeOverlay />
//               <div className="logoutToastMessage">
//                 <Toast
//                   show={logoutToast}
//                   onClose={() => setLogoutToast(false)}
//                   delay={2000}
//                   autohide
//                 >
//                   <Toast.Header closeButton={false}>
//                     <span>{toastMessage}</span>
//                   </Toast.Header>
//                 </Toast>
//               </div>
//               {isLoggingOut && (
//                 <Overlay>
//                   <LoadingOverlay active={true} spinner={true}></LoadingOverlay>
//                 </Overlay>
//               )}
//             </div>
//           )}
//           <Header
//             location={location}
//             brand={brand}
//             brandId={brandId}
//             showLogo={showLogo}
//             isHotelPage={isHotelPage}
//             showEditSearch={showEditSearch}
//             onShowEditSearch={setShowEditSearch}
//             signin={() => handleHamburgerClick()}
//             member={member}
//             gonative={isGoNative}
//             hideSearch={props.hideSearch}
//             siteTitle={data.site.siteMetadata.title}
//           />
//           <SearchBreadCrumb
//             location={location}
//             step={props.searchBreadCrumbStep}
//           />
//           <main>{children}</main>
//           <LoginModal
//             show={loginModalShow}
//             onHide={() => setLoginModalShow(false)}
//           />
//           <Footer onBookNowClick={handleBookNowClick} />
//         </LayoutWrapper>
//       )}
//     </Location>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Layout;


import React from 'react'

const layout = () => {
  return (
    <div>
      
    </div>
  )
}

export default layout
