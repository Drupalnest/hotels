// import React, { useState, useEffect } from "react";
// import { DayPickerInput } from "react-day-picker";

// import addDays from "date-fns/addDays";
// import differenceInMonths from "date-fns/differenceInMonths";
// import dateFnsFormat from "date-fns/format";
// import Button from "react-bootstrap/Button";
// import { parseDate } from "../apis/dates";
// import styled from "styled-components";
// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { colors } from "./styles/theme.js";
// import useMobileDetect from "../hooks/useMobileDetect";
// //import DayPickerInput from "react-day-picker/DayPickerInput";

// // import loadable from '@loadable/component';
// // const DayPickerInput = loadable(() => import(`react-day-picker/DayPickerInput`));

// const ENTER_KEY_CODE = 13;

// const CheckinCheckout = styled.div`
//   display: flex;
//   @media (min-width: 992px) {
//     &:hover:not(.hide-underline) {
//       border-bottom: 1px solid #fff;
//     }
//   }

//   #dates-divider {
//     width: 20px;
//     color: #fff;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
//   }
//   .DayPickerInput {
//     flex: 0 0 calc(50% - 10px);
//     max-width: calc(50% - 10px);
//     position: static;
//     .DayPickerInput-OverlayWrapper {
//       position: absolute;
//       margin-top: 15px;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       // @media(min-width: 768px) {
//       //   left: 30% !important;
//       // }
//       // @media(min-width: 992px) {
//       //   left: -165px !important;
//       // }
//       z-index: 1002;
//     }
//     .DayPickerInput-Overlay {
//       border-radius: 4px;
//       // top: 0;
//       left: 50%;
//       transform: translateX(-50%);
//     }
//     input {
//       box-shadow: none !important;
//       padding: 0;
//       width: 100%;
//       background: transparent;
//       border-radius: 4px;

//       &#checkin {
//         text-align: right;
//         padding-right: 4px;
//       }
//       &#checkout {
//         text-align: left;
//         padding-left: 4px;
//       }
//     }
//     input.selected {
//       // @media (max-width: 991px) {
//       border: 1px solid #fff;
//       // }
//       // @media (min-width: 992px) {
//       //   border-bottom: 1px solid #fff;
//       //   border-radius: 0;
//       // }
//     }
//     @media (max-width: 991px) {
//       input:not(.calendar-open) {
//         text-decoration: underline;
//       }
//     }
//   }
//   .DayPicker-Months {
//     flex-wrap: nowrap;
//     @media (max-width: 991px) {
//       flex-wrap: wrap;
//     }
//   }
//   .DayPicker-Day {
//     border-radius: 0 !important;
//   }
//   .DayPicker-Day--start {
//     border-top-left-radius: 3px !important;
//     border-bottom-left-radius: 3px !important;
//   }
//   .DayPicker-Day--end {
//     border-top-right-radius: 3px !important;
//     border-bottom-right-radius: 3px !important;
//   }

//   .DayPicker-NavButton--prev {
//     left: 1.5em !important;
//     right: auto !important;
//   }
//   .DayPicker-NavButton--next {
//     right: 1.5em !important;
//     prev: auto !important;
//   }

//   .DayPicker-Caption {
//     text-align: center;
//   }
//   .DayPicker-Day--selected:not(.DayPicker-Day--outside) {
//     background-color: ${colors.primary} !important;
//     color: #fff;
//   }
// `;

// const displayDateFormat = "MMM dd, yyyy";

// const CalendarClose = styled(Button)`
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
// `;

// export const searchBarDateFormat = (date, format, locale) => {
//   return dateFnsFormat(date, "MMM dd", { locale });
// };

// const StayDates = ({
//   from,
//   to,
//   checkinDayChange,
//   checkoutDayChange,
//   shouldHide,
//   onDateInputClick,
// }) => {
//   const isMobileOnly = useMobileDetect();
//   const [closeButtonClicked, setCloseButtonClicked] = useState(false);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   let dayPickerInputRef = null;
//   let numberOfMonths = isMobileOnly ? 1 : 2;
//   const showFromMonth = () => {
//     if (!from) {
//       return;
//     }
//     console.log(
//       differenceInMonths(new Date(to.getInput().value), new Date(from))
//     );
//     if (differenceInMonths(new Date(to.getInput().value), new Date(from)) < 2) {
//       to.getDayPicker().showMonth(from);
//     }
//   };

//   const handleFromChange = (value) => {
//     checkinDayChange(value);
//   };

//   const handleToChange = (value) => {
//     checkoutDayChange(value);
//     showFromMonth();
//   };

//   const setDayPickerTop = () => {
//     var datesDiv = document.getElementById("stay-dates");
//     if (
//       datesDiv &&
//       window.innerHeight - datesDiv.getBoundingClientRect().y < 350
//     ) {
//       if (document.getElementsByClassName("DayPickerInput-Overlay").length) {
//         document.getElementsByClassName(
//           "DayPickerInput-Overlay"
//         )[0].style.bottom = "70px";
//       }
//     } else {
//       if (document.getElementsByClassName("DayPickerInput-Overlay").length) {
//         document.getElementsByClassName(
//           "DayPickerInput-Overlay"
//         )[0].style.bottom = "auto";
//       }
//     }
//   };

//   const handleCheckOutHide = () => {
//     setDayPickerTop();
//     if (!closeButtonClicked && !shouldHide) {
//       dayPickerInputRef.showDayPicker();
//     }
//   };

//   const handleCheckInHide = () => {
//     setDayPickerTop();
//     if (!closeButtonClicked && !to.state.showOverlay && !shouldHide) {
//       to.showDayPicker();
//     }
//   };

//   const closeOverlay = () => {
//     setCloseButtonClicked(true);
//     if (to && to.getInput && !to.getInput().value) {
//       handleToChange(addDays(from, 1));
//       // checkoutDayChange(addDays(from, 1));
//     }
//     if (to && to.state && to.state.month) {
//       to.state.month = addDays(from, 1);
//     }
//     if (dayPickerInputRef) {
//       dayPickerInputRef.hideDayPicker && dayPickerInputRef.hideDayPicker();
//       dayPickerInputRef.input &&
//         dayPickerInputRef.input.classList.remove("selected");
//     }
//     if (to) {
//       to.hideDayPicker && to.hideDayPicker();
//       to.input && to.input.classList.remove("selected");
//     }
//     setIsCalendarOpen(false);
//   };

//   // const handleDayPickerShow = () => {
//   //   setDayPickerTop();
//   //   setCloseButtonClicked(false);
//   //   onDateInputClick && onDateInputClick()
//   //
//   // }
//   const handleCheckInShow = () => {
//     setDayPickerTop();
//     setCloseButtonClicked(false);
//     onDateInputClick && onDateInputClick();
//     setIsCalendarOpen(true);
//     dayPickerInputRef.input.classList.add("selected");
//     to.input.classList.remove("selected");
//   };
//   const handleCheckOutShow = () => {
//     setDayPickerTop();
//     setCloseButtonClicked(false);
//     onDateInputClick && onDateInputClick();
//     setIsCalendarOpen(true);
//     to.input.classList.add("selected");
//     dayPickerInputRef.input.classList.remove("selected");
//   };

//   const handleCheckInInputClick = () => {
//     if (to && to.state && to.state.showOverlay) {
//       setTimeout(
//         function (dayPickerInputRef) {
//           dayPickerInputRef.getInput().click(); //showDayPicker();
//         },
//         5,
//         dayPickerInputRef
//       );

//       closeOverlay();
//     }
//   };

//   useEffect(() => {
//     if (shouldHide) {
//       closeOverlay();
//     }
//   }, [shouldHide]);

//   useEffect(() => {
//     if (isCalendarOpen) {
//       dayPickerInputRef &&
//         dayPickerInputRef.input &&
//         dayPickerInputRef.input.classList.add("calendar-open");
//       to && to.input && to.input.classList.add("calendar-open");
//     } else {
//       dayPickerInputRef &&
//         dayPickerInputRef.input &&
//         dayPickerInputRef.input.classList.remove("calendar-open");
//       to && to.input && to.input.classList.remove("calendar-open");
//     }
//   }, [isCalendarOpen]);

//   const CustomOverlay = ({ selectedDay, classNames, children, ...props }) => {
//     return (
//       <div className={classNames.overlayWrapper} {...props}>
//         <div className={classNames.overlay}>
//           {children}
//           <hr />
//           <CalendarClose
//             variant="secondary"
//             type={`button`}
//             onClick={closeOverlay}
//           >
//             Close
//           </CalendarClose>
//         </div>
//       </div>
//     );
//   };

//   const handleCalendarKeyDown = (e, ref) => {
//     const { keyCode, shiftKey } = e;
//     if (!shiftKey && keyCode === ENTER_KEY_CODE) {
//       ref.getDayPicker().focus();
//     }
//   };

//   const modifiers = { start: from, end: to };
//   // const readOnly = isMobile ? {readOnly: true} : '';
//   return (
//     <CheckinCheckout
//       id="stay-dates"
//       className={isCalendarOpen && "hide-underline"}
//     >
//       <label htmlFor="checkin" className="sr-only">
//         From Date
//       </label>
//       <DayPickerInput
//         value={from}
//         ref={(ref) => (dayPickerInputRef = ref)}
//         placeholder="From"
//         format={displayDateFormat}
//         formatDate={searchBarDateFormat}
//         parseDate={parseDate}
//         overlayComponent={CustomOverlay}
//         keepFocus={false}
//         dayPickerProps={{
//           selectedDays: [from, { from, to }],
//           disabledDays: { before: new Date() },
//           month: from,
//           fromMonth: new Date(),
//           //toMonth: to,
//           modifiers,
//           numberOfMonths: numberOfMonths,
//           onDayClick: () => {
//             to.getInput().focus();
//           },
//         }}
//         onDayPickerShow={handleCheckInShow}
//         onDayPickerHide={handleCheckInHide}
//         onDayChange={handleFromChange}
//         inputProps={{
//           id: "checkin",
//           readOnly: true,
//           onClick: handleCheckInInputClick,
//           onKeyDown: (e) => handleCalendarKeyDown(e, dayPickerInputRef),
//           // className: isCalendarOpen && 'calender-open'
//         }}
//       />
//       <div id="dates-divider">
//         <span>
//           <FontAwesomeIcon icon="long-arrow-alt-right" />
//         </span>
//       </div>
//       <label htmlFor="checkout" className="sr-only">
//         To Date
//       </label>
//       <DayPickerInput
//         keepFocus={false}
//         ref={(el) => (to = el)}
//         value={to}
//         overlayComponent={CustomOverlay}
//         placeholder="To"
//         format={displayDateFormat}
//         formatDate={searchBarDateFormat}
//         parseDate={parseDate}
//         dayPickerProps={{
//           selectedDays: [from, { from, to }],
//           disabledDays: { before: addDays(from, 1) },
//           modifiers,
//           month: from,
//           fromMonth: from,
//           numberOfMonths: numberOfMonths,
//         }}
//         onDayPickerShow={handleCheckOutShow}
//         onDayChange={handleToChange}
//         onDayPickerHide={handleCheckOutHide}
//         inputProps={{
//           id: "checkout",
//           readOnly: true,
//           onKeyDown: (e) => handleCalendarKeyDown(e, to),
//           // className: isCalendarOpen && 'calender-open'
//         }}
//       />
//     </CheckinCheckout>
//   );
// };

// export default StayDates;

// StayDates.propTypes = {
//   from: PropTypes.instanceOf(Date).isRequired,
//   // to: PropTypes.instanceOf(Date).isRequired,
//   checkinDayChange: PropTypes.func.isRequired,
//   checkoutDayChange: PropTypes.func.isRequired,
// };



