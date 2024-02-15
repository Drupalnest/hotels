import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pb-10 dark:bg-dark lg:pb-20 lg:pt-[120px] border border-green-400">
        <div className="container border border-red-300">
          <div className="-mx-4 flex flex-wrap border border-red-500">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                    alt="logo"
                    className="max-w-full dark:hidden"
                  />
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                    alt="logo"
                    className="max-w-full hidden dark:block"
                  />
                </a>
                {/* <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p> */}
                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="text-black">+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            <LinkGroup headerStyle="text-gray-500" header="Company">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup  className="text-dark" header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-black text-lg font-semibold ">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary dark:border-dark-3 hover:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary dark:border-dark-3 hover:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary dark:border-dark-3 hover:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary dark:border-dark-3 hover:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; 2024-2025 Sastoo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          

          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

// import React, { useState, useRef, useEffect } from "react";
// import styled from "styled-components";
// import { useStaticQuery, graphql, Link } from "gatsby";
// import { useSelector } from "react-redux";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Tooltip, Overlay } from "react-bootstrap";
// // import BrandLogos from "./BrandLogos";
// import Logo from "../images/svg/brand_logos/rlh_white.svg";
// import { borderColor } from "./styles/theme";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { getParagraph } from "../utils/paragraphHelpers";
// // import useMobileDetect from "../hooks/useMobileDetect";
// // import helloRewardsIcon from "../images/svg/hello-rewards.svg";
// // import GoNativeBrandBar from "./GoNativeBrandBarFooter";

// const FooterWrapper = styled.footer`
//   background-color: #404040;
//   color: #9f9f9f;
//   .footer-content {
//     padding-bottom: 15px;
//     justify-content: space-between;
//   }
//   .footer-content-logo {
//     flex: 0 0 10%;
//     @media only screen and (max-width: 991px) {
//       flex: 0 0 100%;
//       text-align: center;
//     }
//   }
//   .footer-content-links {
//     flex: 0 0 60%;
//     @media only screen and (max-width: 991px) {
//       margin-bottom: 30px;
//       flex: 0 0 100%;
//     }
//   }
//   .footer-content-hrcta {
//     flex: 0 0 20%;
//     text-align: center;
//     @media only screen and (max-width: 991px) {
//       flex: 0 0 100%;
//       margin-bottom: 20px;
//     }
//   }
//   .goNativeFooterBrand{
//     img {
//       filter: brightness(0) invert(1) opacity(0.5);
//     }
//     img:hover {
//       filter: brightness(0) invert(1) opacity(1);
//     }
//   }
//   .brand-logos {
//     margin-top: 0;
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     img {
//       filter: brightness(0) invert(1) opacity(0.5);
//     }
//     img:hover {
//       filter: brightness(0) invert(1) opacity(1);
//     }
//     @media only screen and (max-width: 991px) {
//       padding-top: 15px;
//       padding-left: 0px !important;
//       padding-right: 0px !important;
//     }
//   }
//   .brand-logos > div {
//     @media only screen and (max-width: 991px) {
//       margin-right: 0 !important;
//       flex: 1 0 25%;
//       &:nth-of-type(5) {
//         flex-basis: 15%;
//       }
//       &:nth-of-type(6) {
//         flex-basis: 15%;
//       }
//     }
//   }
//   .footerIcons > div {
//     padding-left: 27px;
//     padding-right: 27px;
//   }
//   .footer-inner {
//     border-top: 1px solid #e0e0e0;
//   }
//   .footer-links {
//     div {
//       text-transform: uppercase;
//       font-size: 13px;
//       line-height: 18px;
//       font-weight: 700;
//       cursor: pointer;
//       position: relative;
//       margin-bottom: 0.5rem;
//       h6 {
//         color: #fff;
//       }
//       svg {
//         z-index: 0;
//         position: absolute;
//         top: 50%;
//         transform: translateY(-50%);
//         display: none;
//       }
//     }
//     ul.menu {
//       margin: 0;
//       li {
//         span:hover {
//           color: #fff;
//         }
//         font-size: 14px;
//         margin-bottom: 10px;
//         color: #9f9f9f;
//         a {
//           cursor: pointer;
//           text-decoration: none;
//           color: #9f9f9f;
//           transition: color 0.2s ease-out;
//           &:focus,
//           &:hover {
//             color: #fff;
//           }
//         }
//       }
//     }
//     &.show {
//       svg {
//         transform: translateY(-50%) rotate(180deg);
//       }
//     }
//   }
//   @media (max-width: 991px) {
//     .footer-links {
//       div {
//         pointer-events: auto;
//         cursor: pointer;
//         padding: 8px 8px 8px 8px;
//         border-bottom: 1px solid ${borderColor};
//         margin: 0;
//         svg {
//           color: #fff;
//           display: block;
//           right: 8px;
//         }
//       }
//       &:first-child {
//         div {
//           border-top: 1px solid ${borderColor};
//         }
//       }
//       ul.menu {
//         display: none !important;
//         li {
//           margin: 0;
//           a,
//           span {
//             display: block;
//             padding: 8px 8px 8px 8px;
//           }
//         }
//       }
//       &.show {
//         ul.menu {
//           display: block !important;
//         }
//       }
//     }
//   }
//   .logo {
//     max-width: 85px;
//   }
// `;
// const CopyRight = styled.p`
//   margin: 0;
//   font-weight: 700;
//   font-size: 12px;
//   line-height: 18px;
// `;

// const Footer = ({ onBookNowClick }) => {
//   const isLoggedIn = useSelector((state) => state.member.isLoggedIn);
//   const [showBook, setShowBook] = useState(false);
//   const [showManage, setShowManage] = useState(false);
//   const [showSupport, setShowSupport] = useState(false);
//   const [showCompany, setShowCompany] = useState(false);
//   const [showCallUsPopup, setShowCallUsPopup] = useState(false);
//   const targetCallUsPopup = useRef(null);
//   // const isMobileOnly = useMobileDetect();
//   const [isGoNative, setIsGoNative] = useState(false);

//   const checkGonative = () => {
//     if (navigator.userAgent.indexOf("gonative") > -1) {
//       setIsGoNative(true);
//     }
//   };

//   const handleShowMenu = (event) => {
//     const menu = event.target.dataset.menu;
//     switch (menu) {
//       case "book":
//         setShowBook(!showBook);
//         setShowManage(false);
//         setShowCompany(false);
//         setShowSupport(false);
//         break;
//       case "manage":
//         setShowManage(!showManage);
//         setShowCompany(false);
//         setShowSupport(false);
//         setShowBook(false);
//         break;
//       case "support":
//         setShowSupport(!showSupport);
//         setShowManage(false);
//         setShowCompany(false);
//         setShowBook(false);
//         break;
//       case "company":
//         setShowCompany(!showCompany);
//         setShowManage(false);
//         setShowSupport(false);
//         setShowBook(false);
//         break;
//       default:
//     }
//   };
//   // const data = useStaticQuery(graphql`
//   //   {
//   //     site: rlhsite {
//   //       id
//   //       relationships {
//   //         footerCta: field_footer {
//   //           type: __typename
//   //           ...ParagraphFooterCta
//   //         }
//   //       }
//   //     }
//   //   }
//   // `);

//   // const handleBookNowClick = () => {
//   //   if (isMobileOnly) {
//   //     onBookNowClick && onBookNowClick();
//   //   } else {
//   //     window.scrollTo(0, 0);
//   //   }
//   // };

//   const handlePopupClickOutside = (event) => {
//     if (
//       targetCallUsPopup.current &&
//       !targetCallUsPopup.current.contains(event.target)
//     ) {
//       setShowCallUsPopup(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handlePopupClickOutside, true);
//     checkGonative();
//     return () => {
//       document.removeEventListener("click", handlePopupClickOutside, true);
//     };
//   }, []);

//   // const footerCta = data.site.relationships.footerCta.map(getParagraph);
//   return (
//     <FooterWrapper className="pt-4 pb-3 pt-sm-5 pb-sm-5">
//       <Container fluid="sm">
//         <Row className={`footer-content`}>
//           <Col className={`footer-content-logo`}>
//             {isGoNative ? (
//               <>
//                 <Link to={isLoggedIn ? "/account" : "/hellorewards"}>
//                   <img
//                     // src={helloRewardsIcon}
//                     className="logo mb-3"
//                     alt="Hello Rewards"
//                     style={{ marginRight: "5%", verticalAlign: "unset" }}
//                   />
//                 </Link>
//                 <span
//                   style={{
//                     borderLeft: "1px solid #adb5bd",
//                     display: "inline-block",
//                     height: "85%",
//                     marginRight: "5%",
//                     marginBottom: "10px",
//                   }}
//                 ></span>
//                 <Link to="/">
//                   <img
//                     src={Logo}
//                     className="logo mb-3"
//                     alt="RLH Corporation"
//                     style={{ verticalAlign: "unset" }}
//                   />
//                 </Link>
//               </>
//             ) : (
//               <Link to="/">
//                 <img src={Logo} className="logo mb-3" alt="RLH Corporation" />
//               </Link>
//             )}
//           </Col>
//           <Col className={`footer-content-links`}>
//             <Row>
//               <Col
//                 lg={3}
//                 className={`footer-links ${showBook ? "show" : ""} text-center`}
//               >
//                 <div onClick={handleShowMenu} data-menu="book">
//                   <span data-menu="book">{`Book`}</span>
//                   <FontAwesomeIcon icon="chevron-down" />
//                 </div>
//                 <ul className="menu list-unstyled">
//                   <li>
//                     <span
//                       // onClick={handleBookNowClick}
//                       role="button"
//                       tabIndex="0"
//                     >
//                       Book Now
//                     </span>
//                   </li>
//                   <li>
//                     <>
//                       <a
//                         ref={targetCallUsPopup}
//                         onClick={() => setShowCallUsPopup(!showCallUsPopup)}
//                       >
//                         Voice Reservations
//                       </a>
//                       <Overlay
//                         target={targetCallUsPopup.current}
//                         show={showCallUsPopup}
//                         // placement={isMobileOnly ? "bottom" : "right"}
//                       >
//                         {(props) => (
//                           <Tooltip {...props}>Call Us 1-800-REDLION</Tooltip>
//                         )}
//                       </Overlay>
//                     </>
//                   </li>
//                   <li>
//                     <Link to="/meetings-and-events">Meetings &amp; Events</Link>
//                   </li>
//                   <li>
//                     <Link to="/offers">Offers</Link>
//                   </li>
//                 </ul>
//               </Col>
//               <Col
//                 lg={3}
//                 className={`footer-links ${
//                   showManage ? "show" : ""
//                 } text-center`}
//               >
//                 <div onClick={handleShowMenu} data-menu="manage">
//                   <span data-menu="manage">{`Manage`}</span>
//                   <FontAwesomeIcon icon="chevron-down" />
//                 </div>
//                 <ul className="menu list-unstyled">
//                   <li>
//                     <Link to="/manage-reservation">View Reservations</Link>
//                   </li>
//                   <li>
//                     <Link to="/hellorewards">Hello Rewards</Link>
//                   </li>
//                   <li>
//                     <Link to="/hellorewardsapp">Get The App</Link>
//                   </li>
//                 </ul>
//               </Col>
//               <Col
//                 lg={3}
//                 className={`footer-links ${
//                   showSupport ? "show" : ""
//                 } text-center`}
//               >
//                 <div onClick={handleShowMenu} data-menu="support">
//                   <span data-menu="support">{`Support`}</span>
//                   <FontAwesomeIcon icon="chevron-down" />
//                 </div>
//                 <ul className="menu list-unstyled">
//                   <li>
//                     <Link to="/support">Need Help?</Link>
//                   </li>
//                   <li>
//                     <Link to="/privacy">Privacy</Link>
//                   </li>
//                   <li>
//                     <Link to="/sitemap">Sitemap</Link>
//                   </li>
//                   <li>
//                     <Link to="/RLH-Accessibility">Accessibility</Link>
//                   </li>
//                   <li>
//                     <Link to="/RLH-Cookie-Statement">Cookies Statement</Link>
//                   </li>
//                 </ul>
//               </Col>
//               <Col
//                 lg={3}
//                 className={`footer-links ${
//                   showCompany ? "show" : ""
//                 } text-center`}
//               >
//                 <div onClick={handleShowMenu} data-menu="company">
//                   <span data-menu="company">{`Company`}</span>
//                   <FontAwesomeIcon icon="chevron-down" />
//                 </div>
//                 <ul className="menu list-unstyled">
//                   <li>
//                     <Link to="/rlh-clean-2021">RLH Clean</Link>
//                   </li>
//                   <li>
//                     <a
//                       href="https://workforcenow.adp.com/jobs/apply/posting.html?client=RLHCO&ccId=19000101_000001&type=MP&lang=en_US"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <Link to="/about">About Us</Link>
//                   </li>
//                   <li>
//                     <a
//                       href="https://franchise.rlhco.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Franchising
//                     </a>
//                   </li>
//                   <li>
//                     <Link to="/RLH-Terms-Conditions">Terms of Use</Link>
//                   </li>
//                 </ul>
//               </Col>
//             </Row>
//           </Col>
//           {/* {!isGoNative && (
//             <Col className={`footer-content-hrcta`}>{footerCta}</Col>
//           )} */}
//         </Row>
//         <Row>
//           <Col>
//             <hr className="d-none d-lg-block" />
//             <Row className="pt-0 pt-lg-2">
//               {!isGoNative && (
//                 <Col xs={12} lg={4} className="mb-2">
//                   <CopyRight className="text-center text-lg-left">
//                     © {new Date().getFullYear()} RLH Corporation.
//                     <br />
//                     All rights reserved.
//                   </CopyRight>
//                 </Col>
//               )}
//               {!isGoNative ? (
//                 <Col className={`footerIcons`}>
//                   <Row className={`brand-logos`}>
//                     {/* <BrandLogos colored={false} isFooter={true} /> */}
//                   </Row>
//                 </Col>
//               ) : (<div className="goNativeFooterBrand">
//                 {/* <GoNativeBrandBar /> */}
//                 </div>
//               )}
//               {isGoNative && (
//                 <Col xs={12} lg={4} className="mb-2 mt-4">
//                   <CopyRight className="text-center text-lg-left">
//                     © {new Date().getFullYear()} RLH Corporation. All rights
//                     reserved.
//                   </CopyRight>
//                 </Col>
//               )}
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </FooterWrapper>
//   );
// };

// export default Footer;
