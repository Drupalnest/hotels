// // import React, { useState, useEffect } from "react";
// // import { useFocus } from "../../hooks/useFocus";
// // import { useDispatch, useSelector } from "react-redux";
// // import { isIOS } from "react-device-detect";
// // import { setSearch, setSearchedHotelBrand } from "../../redux/actions";
// // import SearchAutocomplete from "./SearchAutocomplete";
// // import isAfter from "date-fns/isAfter";
// // import addDays from "date-fns/addDays";
// // import isDate from "date-fns/isDate";
// // import startOfToday from "date-fns/startOfToday";
// // import { DayPicker } from 'react-day-picker';
// // import 'react-day-picker/dist/style.css';
// // import { navigate } from "gatsby";
// // import Form from "react-bootstrap/Form";
// // import Row from "react-bootstrap/Row";
// // import Col from "react-bootstrap/Col";
// // import Dropdown from "react-bootstrap/Dropdown";
// // import styled from "styled-components";
// // import Button from "react-bootstrap/Button";
// // import StayDates from "../StayDates";
// // import {
// //   formatDate,
// //   parseSearchDate,
// //   searchDateFormat,
// // } from "../../apis/dates";
// // import GlobalOccupancy from "../GlobalOccupancy";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { useBrandPath } from "../../hooks/useBrandPath";

// // export const SearchForm = styled(Form)`
// //   .react-autosuggest__container {
// //     z-index: 1002;
// //   }
// //   padding: 10px 0;
// //   > div {
// //     > .form-group {
// //       display: flex;
// //       flex-direction: column;
// //       height: 100%;
// //       justify-content: center;
// //     }
// //   }

// //   .btn-search-dropdown {
// //     background-color: transparent !important;
// //   }

// //   .btn-search-dropdown:focus {
// //     background-color: white !important;
// //     & span {
// //       color: #495057 !important;
// //     }
// //   }

// //   .btn-search-dropdown span:focus,
// //   .btn-search-dropdown span:active {
// //     color: #495057 !important;
// //   }
// //   button[type="submit"] {
// //     height: 40px;
// //     padding: 0 20px;
// //     font-weight: 500;
// //     font-size: 14px;
// //   }
// //   .dropdown {
// //     .dropdown-toggle {
// //       &::after {
// //         display: none;
// //       }
// //     }
// //     .dropdown-menu {
// //       padding-bottom: 40px !important;
// //       margin-top: 15px;
// //       &.occupancy {
// //         .form-group {
// //           padding: 0 10px;
// //           label {
// //             margin: 0 0 5px 0;
// //           }
// //         }
// //       }
// //       .dropdown-item {
// //         > .form-group {
// //           margin: 0.5em 0;
// //         }
// //         > span {
// //           position: relative;
// //           padding-right: 20px;
// //           display: flex;
// //           align-items: center;
// //           svg {
// //             position: absolute;
// //             right: 0;
// //           }
// //         }
// //       }
// //     }
// //     &.occupancy {
// //       .dropdown-menu {
// //         z-index: 9999;
// //       }
// //       @media (max-width: 991px) {
// //         .dropdown-menu {
// //           width: 100%;
// //         }
// //       }
// //       @media (min-width: 992px) {
// //         .dropdown-menu {
// //           min-width: 320px !important;
// //           width: 100%;
// //         }
// //       }
// //     }
// //     &.discounts {
// //       .dropdown-menu {
// //         z-index: 9999;
// //       }
// //       @media (max-width: 991px) {
// //         .dropdown-menu {
// //           width: 100%;
// //         }
// //       }
// //       @media (min-width: 992px) {
// //         .dropdown-menu {
// //           min-width: 200px !important;
// //           width: 100%;
// //         }
// //       }
// //     }
// //   }
// //   input.form-control {
// //     margin: 0;
// //   }
// //   @media (min-width: 992px) {
// //     .search-occupancy {
// //       flex: 0 0 18%;
// //       max-width: 18%;
// //     }
// //   }
// //   .mobile-sticky-header {
// //     .map-icon {
// //       width: 0.5em;
// //     }
// //     .edit-icon {
// //       width: 1.5em;
// //       height: 1.8em;
// //     }
// //   }
// // `;

// // export const Location = styled.div`
// //   input {
// //     padding-right: 30px !important;
// //     background: transparent !important;
// //     color: #fff !important;
// //     border: 2px solid rgba(255, 255, 255, 0.3) !important;
// //     height: 40px;
// //     font-size: ${(props) => (props["is-ios"] == "true" ? "16px" : "14px")};
// //     text-overflow: ellipsis;
// //     &::placeholder {
// //       color: rgba(255, 255, 255, 0.3) !important;
// //       font-size: 13px;
// //     }
// //   }
// //   .hotel-name-container {
// //     @media (max-width: 991px) {
// //       text-align: center;
// //     }
// //   }
// //   .hotel-name {
// //     cursor: pointer;
// //     color: #fff;
// //     &:hover {
// //       text-decoration: underline;
// //     }
// //   }
// // `;
// // export const Dates = styled.div`
// //   position: relative;
// //   @media (min-width: 992px) {
// //     flex: 0 0 20%;
// //     max-width: 20%;
// //   }
// //   #stay-dates,
// //   .DayPickerInput {
// //     height: inherit;
// //     input {
// //       height: inherit;
// //       font-size: 24px;
// //       font-weight: 700;
// //     }
// //   }
// //   input {
// //     border: none;
// //     color: #fff;
// //     outline: none;
// //     cursor: pointer;
// //   }
// // `;
// // const DropdownClose = styled(Button)`
// //   border-radius: 0 0 4px 4px;
// //   width: 100%;
// //   border: none;
// //   position: absolute;
// //   bottom: 0;
// //   padding: 0 !important;
// //   height: 40px;
// //   line-height: 40px !important;
// //   text-transform: none !important;
// //   font-weight: 500;
// //   font-size: 14px;
// //   &:focus {
// //     outline: 1px solid black;
// //   }
// // `;

// // const MemberDiscountList = styled.ul`
// //   list-style: none;
// //   padding: 0;
// //   margin: 0;
// //   font-size: 14px;
// //   li {
// //     margin: 0;
// //     a {
// //       display: block;
// //       padding: 6px 13px;
// //       cursor: pointer;
// //       &:hover,
// //       &:focus,
// //       &.active {
// //         background: #f2f2f2;
// //       }
// //     }
// //   }
// // `;

// // const GlobalSearch = ({
// //   location,
// //   isHotelPage,
// //   isSearchModal = false,
// //   onSearchSubmit = null,
// //   brandId = null,
// //   isBrandHotelSearchModal = false,
// //   locationFocus = false,
// //   onSubmit,
// // }) => {
// //   const dispatch = useDispatch();
// //   const search = useSelector((state) => state.search);
// //   const brand = useSelector((state) => state.brand);
// //   const searched_hotel_brand_id = useSelector(
// //     (state) => state.searched_hotel_brand_id
// //   );
// //   const [searchStringBrandId, setSearchStringBrandId] = useState(
// //     searched_hotel_brand_id
// //   );
// //   const [searchStringGooglePlaceId, setSearchStringGooglePlaceId] =
// //     useState(null);
// //   const searchStringBrandPath = useBrandPath(searchStringBrandId);

// //   const [isKeyInLocation, setIsKeyInLocation] = useState(false);
// //   const [searchToggled, setSearchToggled] = useState(false);
// //   const [updateMode, setUpdateMode] = useState(isHotelPage);
// //   const [searchString, setSearchString] = useState(search.searchString);
// //   const [searchStringType, setSearchStringType] = useState(search.searchType);
// //   const [searchCityPath, setSearchCityPath] = useState("");
// //   const [latitude, setLatitude] = useState(search.latitude);
// //   const [longitude, setLongitude] = useState(search.longitude);
// //   const [distance, setDistance] = useState(search.distance);
// //   const [checkin, setCheckin] = useState(
// //     search.checkin !== null ? parseSearchDate(search.checkin) : new Date()
// //   );
// //   const [checkout, setCheckout] = useState(
// //     search.checkout !== null
// //       ? parseSearchDate(search.checkout)
// //       : addDays(new Date(), 1)
// //   );
// //   const [discount, setDiscount] = useState(search.discount);
// //   const [promotionCode, setPromotionCode] = useState(search.promotionCode);
// //   const [groupCode, setGroupCode] = useState(search.groupCode);
// //   const [rooms, setRooms] = useState(search.rooms);
// //   const [showDiscounts, setShowDiscounts] = useState(false);
// //   const [showOccupancy, setShowOccupancy] = useState(false);
// //   const [showStayDates, setShowStayDates] = useState(false);

// //   const [showPromoField, setShowPromoField] = useState(
// //     search.promotionCode !== null
// //   );
// //   const [showGroupField, setShowGroupField] = useState(
// //     search.groupCode !== null
// //   );
// //   const [autocompleteRef, setAutocompleteFocus] = useFocus();

// //   const path = location.pathname;
// //   const pathParts = path.split("/");
// //   const isCheckout = pathParts[1] === "checkout";
// //   const isSearch = pathParts[1] === "hotel-search";
// //   const isBrandSearch = brand.linkPath !== "/";
// //   const isCityPage = pathParts[1] === "locations" && pathParts.length === 5;
// //   // Update states if search object is updated from another component.
// //   useEffect(() => {
// //     setSearchString(search.searchString);
// //     setLatitude(search.latitude);
// //     setLongitude(search.longitude);
// //     setDiscount(search.discount);
// //     setPromotionCode(search.promotionCode);
// //     setGroupCode(search.groupCode);
// //     setCheckin(parseSearchDate(search.checkin));
// //     setCheckout(parseSearchDate(search.checkout));
// //     setRooms(search.rooms);
// //     // Update show state if search updates programatically outside of form.
// //     setShowPromoField(search.promotionCode !== null);
// //     setShowGroupField(search.groupCode !== null);
// //   }, [search]);

// //   // Ensure valid dates on first render.
// //   useEffect(() => {
// //     const currentDate = startOfToday(); // new Date();
// //     if (isAfter(currentDate, checkin)) {
// //       let updatedCheckin = currentDate;
// //       let updatedCheckout = addDays(currentDate, 1);
// //       setCheckin(updatedCheckin);
// //       setCheckout(updatedCheckout);

// //       if (search.checkin) {
// //         dispatch(
// //           setSearch({
// //             ...search,
// //             checkin: formatDate(updatedCheckin, searchDateFormat),
// //             checkout: formatDate(updatedCheckout, searchDateFormat),
// //           })
// //         );
// //       }
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (locationFocus) {
// //       // setAutocompleteFocus();
// //       setTimeout(setAutocompleteFocus, 0);
// //     }
// //   }, [locationFocus]);

// //   const handleOnSearchLocationClick = () => {
// //     setShowDiscounts(false);
// //     setShowOccupancy(false);
// //     setShowStayDates(false);
// //   };

// //   const setCoordinates = (
// //     search_string,
// //     latitude,
// //     longitude,
// //     brand_id,
// //     type = "",
// //     place_id,
// //     alias
// //   ) => {
// //     setSearchString(search_string);
// //     setSearchStringType(type);
// //     setSearchCityPath(alias ? alias : "");
// //     setLatitude(latitude);
// //     setLongitude(longitude);
// //     setSearchToggled(false);
// //     if (isHotelPage || isBrandSearch || isCheckout || isSearch || isCityPage) {
// //       setUpdateMode(
// //         search_string != "" && search_string === search.searchString
// //       );
// //     }
// //     setSearchStringBrandId(brand_id);
// //     setSearchStringGooglePlaceId(place_id);
// //   };
// //   const handleToggleSearch = () => {
// //     setSearchToggled(!searchToggled);
// //     setSearchString("");
// //     setSearchStringType("");
// //     setSearchCityPath("");
// //     setTimeout(setAutocompleteFocus, 0);
// //   };

// //   const handleSubmit = async (e) => {
// //     if (onSearchSubmit && onSearchSubmit instanceof Function) {
// //       onSearchSubmit();
// //     }
// //     e.preventDefault();
// //     setShowDiscounts(false);
// //     setShowOccupancy(false);
// //     setShowStayDates(false);
// //     const payload = {
// //       searchString: searchString.length ? searchString : search.searchString,
// //       searchType: searchStringType,
// //       latitude: latitude,
// //       longitude: longitude,
// //       distance: 25,
// //       checkin: formatDate(checkin, searchDateFormat),
// //       checkout: formatDate(checkout, searchDateFormat),
// //       rooms: rooms,
// //       discount: discount,
// //       promotionCode: promotionCode,
// //       groupCode: groupCode,
// //     };
// //     dispatch(setSearchedHotelBrand(searchStringBrandId));
// //     await dispatch(setSearch(payload));

// //     if (searchStringType === "city" && searchCityPath) {
// //       navigate(`${searchCityPath}`);
// //     } else if (
// //       (isBrandSearch && !updateMode) ||
// //       (isBrandSearch && brand.linkPath == path)
// //     ) {
// //       if (searchStringBrandPath && searchStringBrandPath != brand.linkPath) {
// //         navigate(`${searchStringBrandPath}/hotel-search`);
// //       } else {
// //         navigate(`${brand.linkPath}/hotel-search`);
// //       }
// //     } else if (
// //       (!isSearch && !isCityPage && !updateMode) ||
// //       (isSearchModal && updateMode)
// //     ) {
// //       navigate("/hotel-search");
// //     } else if (searchToggled) {
// //       setSearchToggled(false);
// //     }
// //     !searchToggled && onSubmit && onSubmit();
// //   };
// //   const handleCheckinChange = (checkin) => {
// //     if (isDate(checkin)) {
// //       setCheckin(checkin);
// //       setCheckout(undefined);
// //     }
// //   };
// //   const handleCheckoutChange = (checkoutDate) => {
// //     if (isDate(checkoutDate)) {
// //       setCheckout(checkoutDate);
// //     }
// //   };
// //   const handleDiscountChange = (eventKey) => {
// //     const discountSelected = eventKey !== discount ? eventKey : null;
// //     setDiscount(discountSelected);
// //     setPromotionCode(null);
// //     setGroupCode(null);
// //     setShowPromoField(false);
// //     setShowGroupField(false);
// //     setShowDiscounts(false);
// //   };
// //   const handleSetOccupancy = (rooms) => {
// //     setRooms(rooms);
// //   };
// //   const handlePromotionCodeChange = (event) => {
// //     const value = event.target.value.length ? event.target.value : null;
// //     setPromotionCode(value);
// //     setGroupCode(null);
// //     setDiscount(null);
// //   };
// //   const handlePromotionCodeBlur = (event) => {
// //     const value = event.target.value;
// //     if (value !== null) {
// //       setPromotionCode(value);
// //     }
// //   };
// //   const handleGroupCodeBlur = (event) => {
// //     const value = event.target.value;
// //     if (value !== null) {
// //       setGroupCode(value);
// //     }
// //   };
// //   const handleGroupCodeChange = (event) => {
// //     const value = event.target.value.length ? event.target.value : null;
// //     setPromotionCode(null);
// //     setGroupCode(value);
// //     setDiscount(null);
// //   };
// //   const handleDiscountsDropdown = () => {
// //     if (promotionCode !== null && promotionCode.trim().length < 1) {
// //       setPromotionCode(null);
// //       setShowPromoField(false);
// //     } else if (promotionCode === null && showPromoField) {
// //       setShowPromoField(false);
// //     }
// //     if (groupCode !== null && groupCode.trim().length < 1) {
// //       setGroupCode(null);
// //       setShowGroupField(false);
// //     } else if (groupCode === null && showGroupField) {
// //       setShowGroupField(false);
// //     }
// //     setShowDiscounts(!showDiscounts);
// //     if (showOccupancy) {
// //       setShowOccupancy(false);
// //     }
// //     document.getElementById("dropdown-discounts").focus();
// //   };
// //   const handleOccupancyDropdown = () => {
// //     setShowOccupancy(!showOccupancy);
// //     if (showDiscounts) {
// //       setShowDiscounts(false);
// //     }
// //   };
// //   const handleShowPromo = () => {
// //     setShowPromoField(true);
// //     setDiscount(null);
// //     setGroupCode(null);
// //     setShowGroupField(false);
// //   };
// //   const handleShowGroup = () => {
// //     setShowGroupField(true);
// //     setDiscount(null);
// //     setPromotionCode(null);
// //     setShowPromoField(false);
// //   };

// //   const handleOnStayDatesClick = () => {
// //     setShowOccupancy(false);
// //     setShowDiscounts(false);
// //     setShowStayDates(true);
// //   };

// //   const roomCount = rooms.length === 1 ? `1 Room` : `${rooms.length} Rooms`;
// //   let totalGuests = 0;
// //   rooms.forEach((room) => {
// //     const roomGuests = room.adults + room.children;
// //     totalGuests = totalGuests + roomGuests;
// //   });
// //   const guestCount = totalGuests === 1 ? "1 Guest" : `${totalGuests} Guests`;
// //   let discountToggleText = `Discounts`;
// //   if (discount !== null) {
// //     if (discount === "AARP") {
// //       discountToggleText = "Senior";
// //     } else if (
// //       discount === "AAA" ||
// //       discount === "AAAB" ||
// //       discount === "AAAX"
// //     ) {
// //       discountToggleText = "Auto";
// //     } else {
// //       discountToggleText = discount;
// //     }
// //   } else if (promotionCode !== null && promotionCode.length) {
// //     discountToggleText = `Promo: ${promotionCode}`;
// //   } else if (groupCode !== null && groupCode.length) {
// //     discountToggleText = `Group: ${groupCode}`;
// //   } else {
// //     discountToggleText = `Discounts`;
// //   }
// //   const mobileDisplayClass = "d-block"; //!searchString.length && !isSearchModal ? "d-none" : "d-block";
// //   return (
// //     <SearchForm
// //       className="global row align-items-lg-center justify-content-center"
// //       onSubmit={handleSubmit}
// //     >
// //       <Location
// //         as={Col}
// //         lg={isSearchModal ? 12 : 3}
// //         className={`${!isSearchModal ? "pr-lg-0 " : ""}`}
// //         is-ios={isIOS.toString()}
// //       >
// //         {!updateMode || searchToggled ? (
// //           <Form.Group className="mb-lg-0">
// //             <Form.Label htmlFor="global-search-autocomplete" srOnly>
// //               Location
// //             </Form.Label>
// //             <SearchAutocomplete
// //               setCoordinates={setCoordinates}
// //               searchString={searchString}
// //               id="global-search-autocomplete"
// //               inputRef={autocompleteRef}
// //               brandId={brandId}
// //               setIsKeyInLocation={setIsKeyInLocation}
// //               onSearchFocus={handleOnSearchLocationClick}
// //             />
// //           </Form.Group>
// //         ) : (
// //           <div className="d-none d-lg-flex d-flex hotel-name-container">
// //             <span
// //               className="hotel-name overflow-hidden text-truncate mb-sm-1 mb-lg-0"
// //               onClick={handleToggleSearch}
// //             >
// //               {searchString}
// //             </span>
// //           </div>
// //         )}
// //       </Location>
// //       <Dates
// //         as={Col}
// //         lg={isSearchModal ? 12 : 2}
// //         className={`${
// //           !isSearchModal ? "pr-lg-0" : ""
// //         } d-lg-block ${mobileDisplayClass}`}
// //       >
// //         <StayDates
// //           from={checkin}
// //           to={checkout}
// //           checkinDayChange={handleCheckinChange}
// //           checkoutDayChange={handleCheckoutChange}
// //           shouldHide={showOccupancy || showDiscounts || !showStayDates}
// //           onDateInputClick={handleOnStayDatesClick}
// //         />
// //       </Dates>
// //       <Col
// //         lg={isSearchModal ? 6 : 2}
// //         className={` d-lg-block ${
// //           !isSearchModal ? "search-occupancy pr-lg-0" : ""
// //         } ${mobileDisplayClass}`}
// //       >
// //         <Form.Group className="mb-lg-0">
// //           <Form.Label srOnly>Occupancy</Form.Label>
// //           <Dropdown className={`occupancy`} show={showOccupancy}>
// //             <Dropdown.Toggle
// //               variant="search-dropdown"
// //               className="form-control btn-search-dropdown"
// //               id="dropdown-occupancy"
// //               onClick={handleOccupancyDropdown}
// //             >
// //               <span>{`${roomCount}, ${guestCount}`}</span>
// //               <FontAwesomeIcon icon="chevron-down" />
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu className={`occupancy`}>
// //               <GlobalOccupancy
// //                 rooms={rooms}
// //                 setOccupancy={handleSetOccupancy}
// //                 checkin={checkin && formatDate(checkin, searchDateFormat)}
// //                 checkout={checkout && formatDate(checkout, searchDateFormat)}
// //                 searchString={searchString}
// //                 latitude={latitude}
// //                 longitude={longitude}
// //                 placeId={searchStringGooglePlaceId}
// //               />
// //               <DropdownClose
// //                 variant="secondary"
// //                 type={`button`}
// //                 onClick={handleOccupancyDropdown}
// //               >
// //                 Close
// //               </DropdownClose>
// //             </Dropdown.Menu>
// //           </Dropdown>
// //         </Form.Group>
// //       </Col>
// //       <Col
// //         lg={isSearchModal ? 6 : 2}
// //         className={`d-lg-block search-discounts ${mobileDisplayClass}`}
// //       >
// //         <Form.Group controlId="discount" className="mb-lg-0">
// //           <Form.Label srOnly>Discounts</Form.Label>
// //           <Dropdown className={`discounts`} show={showDiscounts !== false}>
// //             <Dropdown.Toggle
// //               variant="search-dropdown"
// //               className="form-control"
// //               id="dropdown-discounts"
// //               onClick={handleDiscountsDropdown}
// //               disabled={isSearchModal && !isBrandHotelSearchModal}
// //             >
// //               <span>{discountToggleText}</span>
// //               <FontAwesomeIcon icon="chevron-down" />
// //             </Dropdown.Toggle>
// //             <Dropdown.Menu>
// //               <div className={`discounts-members`}>
// //                 <MemberDiscountList>
// //                   <li>
// //                     <Dropdown.Item
// //                       eventKey={`AAA`}
// //                       onSelect={handleDiscountChange}
// //                       active={discount === `AAA`}
// //                       aria-label={`Auto Club`}
// //                     >
// //                       <span>
// //                         Auto Club
// //                         {discount === "AAA" && <FontAwesomeIcon icon="check" />}
// //                       </span>
// //                     </Dropdown.Item>
// //                   </li>
// //                   <li>
// //                     <Dropdown.Item
// //                       eventKey={`AARP`}
// //                       onSelect={handleDiscountChange}
// //                       active={discount === `AARP`}
// //                       aria-label={`Senior`}
// //                     >
// //                       <span>
// //                         Senior
// //                         {discount === "AARP" && (
// //                           <FontAwesomeIcon icon="check" />
// //                         )}
// //                       </span>
// //                     </Dropdown.Item>
// //                   </li>
// //                   <li>
// //                     <Dropdown.Item
// //                       eventKey={`GOV`}
// //                       onSelect={handleDiscountChange}
// //                       active={discount === `GOV`}
// //                       aria-label={`Government`}
// //                     >
// //                       <span>
// //                         Government
// //                         {discount === "GOV" && <FontAwesomeIcon icon="check" />}
// //                       </span>
// //                     </Dropdown.Item>
// //                   </li>
// //                   <li>
// //                     <Dropdown.Item
// //                       onSelect={handleShowPromo}
// //                       active={showPromoField}
// //                       aria-label="Corporate / Promo"
// //                     >
// //                       <span>
// //                         Corporate / Promo
// //                         {showPromoField && <FontAwesomeIcon icon="check" />}
// //                       </span>
// //                       {showPromoField && (
// //                         <Form.Group
// //                           controlId={`promotionCode`}
// //                           className={`discounts-promotion`}
// //                         >
// //                           <Form.Label srOnly>Corporate / Promo</Form.Label>
// //                           <Form.Control
// //                             className="input-wrapper"
// //                             name={`promotionCode`}
// //                             placeholder={`Enter code`}
// //                             onChange={handlePromotionCodeChange}
// //                             onBlur={handlePromotionCodeBlur}
// //                             defaultValue={promotionCode}
// //                           />
// //                         </Form.Group>
// //                       )}
// //                     </Dropdown.Item>
// //                   </li>
// //                   <li>
// //                     <Dropdown.Item
// //                       onSelect={handleShowGroup}
// //                       active={showGroupField}
// //                       aria-label="Group"
// //                     >
// //                       <span>
// //                         Group
// //                         {showGroupField && <FontAwesomeIcon icon="check" />}
// //                       </span>
// //                       {showGroupField && (
// //                         <Form.Group
// //                           controlId={`groupCode`}
// //                           className={`discounts-group`}
// //                         >
// //                           <Form.Label srOnly>Groups</Form.Label>
// //                           <Form.Control
// //                             className="input-wrapper"
// //                             name={`groupCode`}
// //                             placeholder={`Enter code`}
// //                             onChange={handleGroupCodeChange}
// //                             onBlur={handleGroupCodeBlur}
// //                             defaultValue={groupCode}
// //                           />
// //                         </Form.Group>
// //                       )}
// //                     </Dropdown.Item>
// //                   </li>
// //                 </MemberDiscountList>
// //               </div>
// //               <DropdownClose
// //                 variant="secondary"
// //                 type={`button`}
// //                 onClick={handleDiscountsDropdown}
// //               >
// //                 Close
// //               </DropdownClose>
// //             </Dropdown.Menu>
// //           </Dropdown>
// //         </Form.Group>
// //       </Col>
// //       <Col
// //         lg={isSearchModal ? 12 : "auto"}
// //         className={`${
// //           !isSearchModal ? "pl-lg-0" : ""
// //         } d-lg-flex ${mobileDisplayClass}`}
// //       >
// //         <Button
// //           type="submit"
// //           variant="secondary"
// //           className="mt-2 mt-lg-0 w-100"
// //           disabled={
// //             !searchString ||
// //             searchString.length === 0 ||
// //             isKeyInLocation ||
// //             !checkin ||
// //             !checkout
// //           }
// //         >
// //           {updateMode ? "Update" : "Find Hotel"}
// //         </Button>
// //       </Col>
// //     </SearchForm>
// //   );
// // };

// // export default GlobalSearch;

// import React, { useState, useEffect } from "react";
// import { useFocus } from "../../hooks/useFocus";
// import { useDispatch, useSelector } from "react-redux";
// import { isIOS } from "react-device-detect";
// import { setSearch, setSearchedHotelBrand } from "../../redux/actions";
// import SearchAutocomplete from "./SearchAutocomplete";
// import isAfter from "date-fns/isAfter";
// import addDays from "date-fns/addDays";
// import isDate from "date-fns/isDate";
// import startOfToday from "date-fns/startOfToday";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import { navigate } from "gatsby";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Dropdown from "react-bootstrap/Dropdown";
// import styled from "styled-components";
// import Button from "react-bootstrap/Button";
// import StayDates from "../StayDates";
// import {
//   formatDate,
//   parseSearchDate,
//   searchDateFormat,
// } from "../../apis/dates";
// import GlobalOccupancy from "../GlobalOccupancy";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useBrandPath } from "../../hooks/useBrandPath";

// export const SearchForm = styled(Form)`
//   .react-autosuggest__container {
//     z-index: 1002;
//   }
//   padding: 10px 0;
//   > div {
//     > .form-group {
//       display: flex;
//       flex-direction: column;
//       height: 100%;
//       justify-content: center;
//     }
//   }

//   .btn-search-dropdown {
//     background-color: transparent !important;
//   }

//   .btn-search-dropdown:focus {
//     background-color: white !important;
//     & span {
//       color: #495057 !important;
//     }
//   }

//   .btn-search-dropdown span:focus,
//   .btn-search-dropdown span:active {
//     color: #495057 !important;
//   }
//   button[type="submit"] {
//     height: 40px;
//     padding: 0 20px;
//     font-weight: 500;
//     font-size: 14px;
//   }
//   .dropdown {
//     .dropdown-toggle {
//       &::after {
//         display: none;
//       }
//     }
//     .dropdown-menu {
//       padding-bottom: 40px !important;
//       margin-top: 15px;
//       &.occupancy {
//         .form-group {
//           padding: 0 10px;
//           label {
//             margin: 0 0 5px 0;
//           }
//         }
//       }
//       .dropdown-item {
//         > .form-group {
//           margin: 0.5em 0;
//         }
//         > span {
//           position: relative;
//           padding-right: 20px;
//           display: flex;
//           align-items: center;
//           svg {
//             position: absolute;
//             right: 0;
//           }
//         }
//       }
//     }
//     &.occupancy {
//       .dropdown-menu {
//         z-index: 9999;
//       }
//       @media (max-width: 991px) {
//         .dropdown-menu {
//           width: 100%;
//         }
//       }
//       @media (min-width: 992px) {
//         .dropdown-menu {
//           min-width: 320px !important;
//           width: 100%;
//         }
//       }
//     }
//     &.discounts {
//       .dropdown-menu {
//         z-index: 9999;
//       }
//       @media (max-width: 991px) {
//         .dropdown-menu {
//           width: 100%;
//         }
//       }
//       @media (min-width: 992px) {
//         .dropdown-menu {
//           min-width: 200px !important;
//           width: 100%;
//         }
//       }
//     }
//   }
//   input.form-control {
//     margin: 0;
//   }
//   @media (min-width: 992px) {
//     .search-occupancy {
//       flex: 0 0 18%;
//       max-width: 18%;
//     }
//   }
//   .mobile-sticky-header {
//     .map-icon {
//       width: 0.5em;
//     }
//     .edit-icon {
//       width: 1.5em;
//       height: 1.8em;
//     }
//   }
// `;

// export const Location = styled.div`
//   input {
//     padding-right: 30px !important;
//     background: transparent !important;
//     color: #fff !important;
//     border: 2px solid rgba(255, 255, 255, 0.3) !important;
//     height: 40px;
//     font-size: ${(props) => (props["is-ios"] == "true" ? "16px" : "14px")};
//     text-overflow: ellipsis;
//     &::placeholder {
//       color: rgba(255, 255, 255, 0.3) !important;
//       font-size: 13px;
//     }
//   }
//   .hotel-name-container {
//     @media (max-width: 991px) {
//       text-align: center;
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
// export const Dates = styled.div`
//   position: relative;
//   @media (min-width: 992px) {
//     flex: 0 0 20%;
//     max-width: 20%;
//   }
//   #stay-dates,
//   .DayPickerInput {
//     height: inherit;
//     input {
//       height: inherit;
//       font-size: 24px;
//       font-weight: 700;
//     }
//   }
//   input {
//     border: none;
//     color: #fff;
//     outline: none;
//     cursor: pointer;
//   }
// `;
// const DropdownClose = styled(Button)`
//   border-radius: 0 0 4px 4px;
//   width: 100%;
//   border: none;
//   position: absolute;
//   bottom: 0;
//   padding: 0 !important;
//   height: 40px;
//   line-height: 40px !important;
//   text-transform: none !important;
//   font-weight: 500;
//   font-size: 14px;
//   &:focus {
//     outline: 1px solid black;
//   }
// `;

// const MemberDiscountList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   font-size: 14px;
//   li {
//     margin: 0;
//     a {
//       display: block;
//       padding: 6px 13px;
//       cursor: pointer;
//       &:hover,
//       &:focus,
//       &.active {
//         background: #f2f2f2;
//       }
//     }
//   }
// `;

// const GlobalSearch = () => {
//   return (
//     // <SearchForm className="global row align-items-lg-center justify-content-center">
//     //   {/* <Location>
//     //     <Form.Group className="mb-lg-0">
//     //       <Form.Label htmlFor="global-search-autocomplete" srOnly>
//     //         Location
//     //       </Form.Label>
//     //       <SearchAutocomplete />
//     //     </Form.Group>

//     //     <div className="d-none d-lg-flex d-flex hotel-name-container">
//     //       <span className="hotel-name overflow-hidden text-truncate mb-sm-1 mb-lg-0"></span>
//     //     </div>
//     //   </Location> */}
//     //   <Dates className="pr-lg-0 d-lg-block ">
//     //     {/* <StayDates /> */}
//     //   </Dates>
//     //   <Col className="d-lg-block search-occupancy pr-lg-0">
//     //     <Form.Group className="mb-lg-0">
//     //       <Form.Label srOnly>Occupancy</Form.Label>
//     //       <Dropdown className={`occupancy`}>
//     //         <Dropdown.Toggle
//     //           variant="search-dropdown"
//     //           className="form-control btn-search-dropdown"
//     //           id="dropdown-occupancy"
//     //         >
//     //           <span>{`${1}, ${1}`}</span>
//     //           <FontAwesomeIcon icon="chevron-down" />
//     //         </Dropdown.Toggle>
//     //         <Dropdown.Menu className={`occupancy`}>
//     //           <GlobalOccupancy />
//     //           <DropdownClose variant="secondary" type={`button`}>
//     //             Close
//     //           </DropdownClose>
//     //         </Dropdown.Menu>
//     //       </Dropdown>
//     //     </Form.Group>
//     //   </Col>
//     //   <Col className="d-lg-block search-discounts">
//     //     <Form.Group controlId="discount" className="mb-lg-0">
//     //       <Form.Label srOnly>Discounts</Form.Label>
//     //       <Dropdown className="discounts">
//     //         <Dropdown.Toggle
//     //           variant="search-dropdown"
//     //           className="form-control"
//     //           id="dropdown-discounts"
//     //         >
//     //           <span>fxgfhf</span>
//     //           <FontAwesomeIcon icon="chevron-down" />
//     //         </Dropdown.Toggle>
//     //         <Dropdown.Menu>
//     //           <div className={`discounts-dghhf`}>
//     //             <MemberDiscountList>
//     //               <li>
//     //                 <Dropdown.Item eventKey={`AAA`} aria-label={`Auto Club`}>
//     //                   <span>
//     //                     Auto Club
//     //                     <FontAwesomeIcon icon="check" />
//     //                   </span>
//     //                 </Dropdown.Item>
//     //               </li>
//     //               <li>
//     //                 <Dropdown.Item>
//     //                   <span>
//     //                     Senior
//     //                     <FontAwesomeIcon icon="check" />
//     //                   </span>
//     //                 </Dropdown.Item>
//     //               </li>
//     //               <li>
//     //                 <Dropdown.Item>
//     //                   <span>
//     //                     <FontAwesomeIcon icon="check" />
//     //                   </span>
//     //                 </Dropdown.Item>
//     //               </li>
//     //               <li>
//     //                 <Dropdown.Item aria-label="Corporate / Promo">
//     //                   <span>
//     //                     <FontAwesomeIcon icon="check" />
//     //                   </span>

//     //                   <Form.Group
//     //                     controlId={`promotionCode`}
//     //                     className={`discounts-promotion`}
//     //                   >
//     //                     <Form.Label srOnly>Corporate / Promo</Form.Label>
//     //                     <Form.Control
//     //                       className="input-wrapper"
//     //                       placeholder={`Enter code`}
//     //                     />
//     //                   </Form.Group>
//     //                 </Dropdown.Item>
//     //               </li>
//     //               <li>
//     //                 <Dropdown.Item aria-label="Group">
//     //                   <span>
//     //                     Group
//     //                     <FontAwesomeIcon icon="check" />
//     //                   </span>

//     //                   <Form.Group
//     //                     controlId={`groupCode`}
//     //                     className={`discounts-group`}
//     //                   >
//     //                     <Form.Label srOnly>Groups</Form.Label>
//     //                     <Form.Control
//     //                       className="input-wrapper"
//     //                       name={`groupCode`}
//     //                       placeholder={`Enter code`}
//     //                     />
//     //                   </Form.Group>
//     //                 </Dropdown.Item>
//     //               </li>
//     //             </MemberDiscountList>
//     //           </div>
//     //           <DropdownClose variant="secondary" type={`button`}>
//     //             Close
//     //           </DropdownClose>
//     //         </Dropdown.Menu>
//     //       </Dropdown>
//     //     </Form.Group>
//     //   </Col>
//     //   <Col className="pl-lg-0 d-lg-flex ">
//     //     <Button
//     //       type="submit"
//     //       variant="secondary"
//     //       className="mt-2 mt-lg-0 w-100"
//     //     >
//     //       Find Hotel
//     //     </Button>
//     //   </Col>
//     // </SearchForm>
//     <div>
//         <h1>sdvdf</h1>
//     </div>
//   );
// };

// export default GlobalSearch;
