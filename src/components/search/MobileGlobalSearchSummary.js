// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "gatsby";

// import addDays from "date-fns/addDays";
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import styled from "styled-components";
// import {
//   formatDate,
//   parseSearchDate,
// } from "../../apis/dates";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-regular-svg-icons";

// export const Location = styled.div`
//   input {
//     padding-right: 30px !important;
//     background: transparent !important;
//     color: #fff !important;
//     border: 2px solid rgba(255, 255, 255, 0.3) !important;
//     height: 40px;
//     font-size: 14px;
//     text-overflow: ellipsis;
//     &::placeholder {
//       color: rgba(255, 255, 255, 0.3) !important;
//       font-size: 13px;
//     }
//   }
//   .hotel-name {
//     cursor: pointer;
//     color: #fff;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const MobileInputWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   z-index: 40;
//   .searchIcon {
//     position: absolute;
//     top: 0;
//     right: 10px;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     color: #fff;
//     font-size: 13px;
//   }
// `;

// const MobileGlobalSearchSummary = ({onEdit, theme, showLogo}) => {
//   const search = useSelector((state) => state.search);
//   const [searchString, setSearchString] = useState(search.searchString);
//   const [checkin, setCheckin] = useState(
//     search.checkin !== null ? parseSearchDate(search.checkin) : new Date()
//   );
//   const [checkout, setCheckout] = useState(
//     search.checkout !== null
//       ? parseSearchDate(search.checkout)
//       : addDays(new Date(), 1)
//   );

//   // Update states if search object is updated from another component.
//   useEffect(() => {
//     setSearchString(search.searchString);
//     setCheckin(parseSearchDate(search.checkin));
//     setCheckout(parseSearchDate(search.checkout));
//   }, [search]);




//   return (
//     <div onClick={onEdit}>
//       {(!searchString || searchString.length == 0) &&
//         <Row className="no-gutters">
//         {showLogo &&
//         <Col xs={2} className="mx-2">
//           <Link to={theme.linkPath} className={`${showLogo ? "d-block" : "d-none"}`}>

//             <img src={theme.logo} className="logo" alt={theme.alt}/>
//           </Link>
//         </Col>
//         }
//         <Location
//           as={Col}
//           xs={showLogo ? '9' : '12'}
//           className={`align-self-center ${!showLogo && 'px-2'}`}
//         >
//             <Form.Group className="mb-0">
//               <Form.Label htmlFor="global-search-autocomplete" srOnly>
//                 Location
//               </Form.Label>
//               <MobileInputWrapper className="w-100">
//                 <span className="searchIcon"><FontAwesomeIcon icon="map-marker-alt" /></span>
//                 <input placeholder="City, airport, attraction or hotel" className="rounded w-100 px-2"/>
//               </MobileInputWrapper>
//             </Form.Group>
//         </Location>
//       </Row>
//       }
//       {searchString && searchString.length > 0 &&
//       <Row className="d-lg-none text-white pl-1 pr-3 mobile-sticky-header align-items-center  w-100 no-gutters" >
//         <Col xs={2} >
//           <Link to={theme.linkPath} className={`${showLogo ? "d-block" : "d-none"}`}>
//             {theme.logo &&
//             <img src={theme.logo} className="logo" alt={theme.alt}/>}
//           </Link>
//         </Col>
//         <Col xs={9} sm className="text-right pl-2">
//           <Row className="no-gutters">
//             <Col xs={12} className="d-flex justify-content-end">
//               <span
//                 className="hotel-name overflow-hidden text-truncate mr-2 "
//               >
//                 {searchString}

//               </span>
//               <span>
//                 <FontAwesomeIcon icon="map-marker-alt" className="map-icon" />
//               </span>
//             </Col>
//             <Col>
//               {checkin && checkout &&
//                 <>
//                   {formatDate(checkin, "MMM dd, yyyy")} - {formatDate(checkout, "MMM dd, yyyy")}
//                 </>
//               }
//             </Col>
//          </Row>
//         </Col>
//         <Col xs={1} sm="auto" className="align-self-center pl-3">
//           <span>
//             <FontAwesomeIcon icon={faEdit} className="edit-icon" />
//           </span>
//         </Col>
//       </Row>
//      }
//    </div>
//  );
// };

// export default MobileGlobalSearchSummary;
