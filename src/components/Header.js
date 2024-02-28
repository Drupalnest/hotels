import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import MobileGlobalSearchSummary from "./search/MobileGlobalSearchSummary";
import HamburgerMenu from "./HamburgerMenu";

import Sticky from "react-sticky-el";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { graphql, useStaticQuery, Link } from "gatsby";
import DefaultLogo from "../images/svg/brand_logos/rlh_white.svg";

import { convertArrayToObject } from "../apis/helpers";
import { brandColors } from "./styles/theme";
import { addBrandLogo } from "../redux/actions";

import useMobileDetect from "../hooks/useMobileDetect";
import useVisible from "../hooks/useVisible";
import GlobalSearch from "./search/GlobalSearch";

// import loadable from '@loadable/component'
// const GlobalSearch = loadable(() => import(`./search/GlobalSearch`));

const DARK_THEME = "#000000";

const StyledHeader = styled.header`
  z-index: 20;
  position: relative;
  width: 100%;
  background: ${(props) => props.color || "#AE1E22"};
  .logo {
    height: 60px;
  }
  .search-logo {
    text-align: left;
    @media (min-width: 992px) {
      text-align: center;
    }
  }
`;

const StickyHeader = styled(Sticky)`
  > div {
    z-index: 10;
    &.sticky-header {
      z-index: 1200;
    }
    position: relative;
    @media (max-width: 991px) {
      transform: unset !important;
      z-index: auto;
    }
  }
`;

const Header = ({
  location,
  brand,
  showLogo,
  isHotelPage,
  showEditSearch,
  onShowEditSearch,
  signin,
  member,
  gonative,
  siteTitle,
}) => {
  const dispatch = useDispatch();
  const searchString = useSelector(
    (state) => state.search && state.search.searchString
  );
  const [locationFocus, setLocationFocus] = useState(false);
  const isMobileOnly = useMobileDetect();
  const { ref, isVisible, setIsVisible } = useVisible(!isMobileOnly);

  const [theme, setTheme] = useState({
    color: brandColors.default,
    logo: DefaultLogo,
    alt: "RLH Corporation",
    linkPath: "/",
  });
  // const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //     rlhsite {
  //       relationships {
  //         field_brands {
  //           brand_id: drupal_internal__id
  //           brand_code
  //           name
  //           path {
  //             alias
  //           }
  //           relationships {
  //             field_logo_alternate {
  //               localFile {
  //                 publicURL
  //               }
  //             }
  //             field_logo {
  //               localFile {
  //                 publicURL
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // const brands = convertArrayToObject(
  //   data.rlhsite.relationships.field_brands,
  //   "brand_code"
  // );
  // const brandId =
  //   brand && brands[brand] !== undefined ? brands[brand].brand_id : null;

  const handleEditSearch = useCallback(() => {
    if (isMobileOnly) {
      setIsVisible(!isVisible);
      !searchString && setLocationFocus(true);
      onShowEditSearch && onShowEditSearch(false);
    }
  });

  const handleOnSearchSubmit = () => {
    if (isMobileOnly) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    showEditSearch && handleEditSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showEditSearch]);

  // useEffect(() => {
  //   let logoUrl = null;
  //   let coloredLogoUrl = null;
  //   let color = brandColors.default;
  //   let alt = "RLH Corporation";
  //   let linkPath = "/";
  //   if (brand && brands[brand] !== undefined) {
  //     alt = brands[brand].name;
  //     linkPath = brands[brand].path.alias;
  //     const brandLogo = brands[brand].relationships.field_logo_alternate;
  //     if (brandLogo !== null) {
  //       logoUrl = brandLogo.localFile.publicURL;
  //     }
  //     if (brandColors[brand] !== undefined) {
  //       color = brandColors[brand];
  //     }

  //     const brandLogoColored = brands[brand].relationships.field_logo;
  //     if (brandLogoColored) {
  //       coloredLogoUrl = brandLogoColored.localFile.publicURL;
  //     }
  //   }
  //   setTheme({ color: color, logo: logoUrl, alt: alt, linkPath: linkPath });
  //   dispatch(
  //     addBrandLogo({
  //       url: coloredLogoUrl,
  //       alt: alt,
  //       linkPath: linkPath,
  //     })
  //   );
  // }, [brand]);

  return (
    <StickyHeader stickyClassName="sticky-header" positionRecheckInterval={1}>
      {gonative ? (
        <HamburgerMenu
          // member={member}
          // signin={signin}
          // brand={brand}
          // siteTitle={siteTitle}
        />
      ) : (
        ""
      )}
      <StyledHeader color={gonative ? DARK_THEME : theme.color} ref={ref}>
        <Container>
          <Row className="py-4">
            {!isMobileOnly || isVisible ? (
              <>
                <Col
                  lg={2}
                  className={`search-logo ${showLogo ? "d-block" : "d-none"}`}
                >
                  <Link to={theme.linkPath}>
                    {theme.logo && (
                      <img src={theme.logo} className="logo" alt={theme.alt} />
                    )}
                  </Link>
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                  <GlobalSearch
                    // location={location}
                    // isHotelPage={isHotelPage}
                    // brandId={brandId}
                    // locationFocus={locationFocus}
                    // onSubmit={handleOnSearchSubmit}
                  />
                </Col>
              </>
            ) : (
              <>
                <Col className="d-flex flex-column px-1 px-md-3">
                  <MobileGlobalSearchSummary
                    onEdit={handleEditSearch}
                    theme={theme}
                    showLogo={showLogo}
                  />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </StyledHeader>
    </StickyHeader>
  );
};

export default Header;
