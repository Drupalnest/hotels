import React, { useState, useEffect } from "react";
import { Lightbox } from "react-modal-image";

import SearchResults from "./SearchResults";
import SearchMap from "./SearchMap";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import AmenityFilters from "./AmenityFilters";
import BrandFilters from "./BrandFilters";
import PriceFilters from "./PriceFilters";
import DistanceFilter from "./DistanceFilter";
import SearchSort from "./SearchSort";
import SearchMessage from "./SearchMessage";
import {
  setSearch,
  fetchHotels,
  addAmenity,
  deleteAmenity,
  addBrand,
  deleteBrand,
} from "../../redux/actions";
import styled from "styled-components";
import { fetchRoomsAndRates, buildFetchRatesUrl } from "../../apis/rates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { selectHotelRates } from "../../redux/selectors";
import { colors } from "../styles/theme.js";
import UnlockBanner from "../UnlockBanner";
import { addProductImpressionGTMDataLayer } from "../../utils/datalayers";

const SearchContainer = styled(Container)`
  padding-top: 2rem;
  @media(max-width: 991px) {
    padding: 2rem 0 0 0;
  }
  .search-header {
    padding-bottom: 20px;
    margin-bottom: 10px;
    .form-group {
      margin: 0;
    }
  }
  .search-filters-container {
    background-color: ${(props) => props.background || "#f8f8f8"};
    .search-filters {
      padding: 8px;
      border-radius: 4px;
    }
    .close-filters {
      background-color: ${colors.secondary}} !important;
      color: ${colors.dark} !important;

    }
  }


  .filters-wrapper {
    background: #f1f1f1;
    padding: 20px;
    border-radius: 0.4375rem;
    h4 {
      font-size: 16px;
    }
  }
`;

const EmptyHotelsRow = styled(Row)`
  color: #ae1e22;
  font-size: 14px;
  flex-wrap: unset;
  a {
    text-decoration: underline;
  }
`;

const DisplaySwitch = styled.div`
  height: 34px;
  width: 68px;
  border: 1px solid ${colors.dark};
  button {
    height: 100%;
    width: 100%;
    background: transparent;
    position: relative;
    z-index: 2;
    border: none;
    span {
      height: 34px;
      width: 34px;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      z-index: 100;
      transition: 0.15s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
      color: black;
      background-color: transparent;
      svg {
        vertical-align: bottom;
      }
      &.switch-map {
        left: auto;
        right: 0;
      }
    }
    &.list span.switch-list,
    &.map span.switch-map {
      background-color: #ae1e22;
      color: #fff;
    }
  }
`;

const MobileFilterToggle = styled(Button)`
  position: relative;
  && {
    background-color: ${colors.light};
    color: ${colors.dark};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.light} !important;
      color: ${colors.dark} !important;
    }
    svg {
      margin-left: 8px;
      font-size: 10px;
      position: absolute;
      top: 50%;
      right: 10px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
`;

const Search = (props) => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState(props.sortBy || "distance");
  const [sortOrder, setSortOrder] = useState("asc");
  const [openFilter, setOpenFilter] = useState(false);
  const [display, setDisplay] = useState("list");
  const [isLoading, setIsLoading] = useState(true);
  const [hotelCodes, setHotelCodes] = useState([]);
  const [showHotelZoomedImage, setShowHotelZoomedImage] = useState(false);
  const [isDataLayer, setIsDataLayer] = useState(false);

  const [hotelImageForZoom, setHotelImageForZoom] = useState({
    url: "",
    alt: "",
  });
  const search = useSelector((state) => state.search);
  const hotels = useSelector((state) => state.hotels);
  const rates = useSelector(selectHotelRates(hotelCodes));

  useEffect(() => {
    const source = Axios.CancelToken.source();
    let didCancel = false;

    (async () => {
      setIsLoading(true);
      setIsDataLayer(false);
      await dispatch(
        fetchHotels(
          props.distance ? props.distance : search.distance,
          search.latitude,
          search.longitude,
          1,
          source
        )
      );
      if (!didCancel) {
        setIsLoading(false);
        setIsDataLayer(true);
      }
    })();
    return () => {
      didCancel = true;
      source.cancel("Request cancelled for hotel search.");
    };
  }, [search, dispatch]);

  useEffect(() => {
    let didCancel = false;
    if (!didCancel) {
      if (hotels !== null) {
        setHotelCodes(Object.keys(hotels));
      } else {
        setHotelCodes([]);
      }
      if (
        !isLoading &&
        !Object.keys(hotels).length &&
        sortBy === "distance" &&
        distanceRadius >= 25 &&
        distanceRadius < 75
      ) {
        dispatch(setSearch({ distance: distanceRadius + 25 }));
      }

    }
    return () => {
      didCancel = true;
    };
  }, [hotels, isLoading]);

  useEffect(() => {
    props.sortBy && props.sortBy == "brand" && setSortBy("brand");
  }, [props.sortBy]);

  const handlePriceChange = (priceFilter) => {
    dispatch(setSearch({ priceFilter: priceFilter }));
  };
  const handleDistanceChange = (distanceFilter) => {
    dispatch(setSearch({ distance: distanceFilter }));
  };
  const handleAmenitiesChange = (amenity, method) => {
    if (method === "add") {
      dispatch(addAmenity(amenity));
    }
    if (method === "delete") {
      dispatch(deleteAmenity(amenity));
    }
  };
  const handleBrandsChange = (brand, method) => {
    if (method === "add") {
      dispatch(addBrand(brand));
    }
    if (method === "delete") {
      dispatch(deleteBrand(brand));
    }
  };
  const handleSortChange = (sortBy, sortOrder) => {
    setSortBy(sortBy);
    setSortOrder(sortOrder);
  };
  const handleSetDisplay = () => {
    const newDisplay = display === "list" ? "map" : "list";
    setDisplay(newDisplay);
  };
  const handleTogleMobileFilter = () => {
    setOpenFilter(!openFilter);
  };
  const handleClickHotelImage = (imgUrl, altText) => {
    setHotelImageForZoom({
      url: imgUrl,
      alt: altText,
    });
    setShowHotelZoomedImage(true);
  };

  const moveUnAvailableHotelDown = (hotels) => {
    let availableHotels = hotels.filter(h => !!h.bestPrice);
    let unAvailableHotels = hotels.filter(h => !!!h.bestPrice);
    return [...availableHotels, ...unAvailableHotels];
  }
  const {
    priceFilter,
    distance,
    promotionCode,
    groupCode,
    amenities,
    brands,
  } = search;
  const distanceRadius = distance
    ? distance
    : props.distance
    ? parseInt(props.distance)
    : 25;
  let hotelList = [];
  let crsCodes = [];
  let crsCodesBrands = [];
  let priceCount = 0;

  if (hotelCodes.length) {
    Object.keys(hotels).forEach(function (crsCode) {
      const hotel = hotels[crsCode];
      const miles = parseInt(hotel.miles);
      if (miles <= distanceRadius || isNaN(miles)) {
        const hotelAmenities = hotel.amenities;
        const amenityValues = Object.values(amenities);
        const brandValues = Object.values(brands);
        const rate = rates.hasOwnProperty(crsCode) ? rates[crsCode] : null;
        let price = null;
        if (
          rate !== undefined &&
          rate !== null &&
          rate.hasOwnProperty("Rooms")
        ) {
          const parsedRooms = fetchRoomsAndRates(
            rate.Rooms,
            search.discount,
            search.promotionCode,
            search.groupCode
          );
          if (parsedRooms !== null) {
            price = parsedRooms[0].FromRate;
          }
        }
        hotel.bestPrice = price !== null ? parseFloat(price) : null;
        let matched = true;
        if (amenityValues.length) {
          if (hotelAmenities.length) {
            matched = amenityValues.every((amenity) =>
              hotelAmenities.includes(amenity)
            );
          } else {
            matched = false;
          }
        }
        if (matched) {
          crsCodesBrands.push(crsCode);
        }
        if (brandValues.length) {
          matched = matched && brandValues.includes(hotel.brand_code);
        }
        if (matched) {
          hotelList.push(hotel);
          crsCodes.push(crsCode);
          if (rate !== null) {
            priceCount++;
          }

        }
      }
    });
  }
  const hotelCount = hotelList.length;
  let crsCodesString = crsCodes.length ? crsCodes.toString() : null;
  let crsCodesBrandsString = crsCodesBrands.length
    ? crsCodesBrands.toString()
    : null;

  if (hotelCount) {
    if (sortBy === "price" && priceCount === hotelCount) {
      if (sortOrder === "asc") {
        hotelList.sort(function (a, b) {
          return (
            (a.bestPrice === null) - (b.bestPrice === null) ||
            +(a.bestPrice > b.bestPrice) ||
            -(a.bestPrice < b.bestPrice)
          );
        });
      } else {
        hotelList.sort(function (a, b) {
          return (
            (a.bestPrice === null) - (b.bestPrice === null) ||
            -(a.bestPrice > b.bestPrice) ||
            +(a.bestPrice < b.bestPrice)
          );
        });
      }
    } else if (sortBy === "brand" && props.brandCode) {
      let brandFilteredHotels = [];
      let otherHotels = [];
      hotelList.forEach((h, i) => {
        let brandsToFilter;
        let brandCode = props.brandCode.toLowerCase();
        if (brandCode == "sig" || brandCode == "sig inn") {
          brandsToFilter = ["sig", "sig inn"];
        } else if (brandCode == "rlis" || brandCode == "red lion hotel") {
          brandsToFilter = ["rlis", "red lion hotel"];
        } else {
          brandsToFilter = [brandCode];
        }
        if (brandsToFilter.indexOf(h.brand_code.toLowerCase()) != -1) {
          brandFilteredHotels.push(h);
        } else {
          otherHotels.push(h);
        }
      });
      if (brandFilteredHotels.length > 0) {
        brandFilteredHotels.sort(
          (a, b) => parseFloat(a.miles) - parseFloat(b.miles)
        );
        otherHotels.sort((a, b) => parseFloat(a.miles) - parseFloat(b.miles));

        hotelList = [...brandFilteredHotels, ...otherHotels];
      } else {
        hotelList.sort((a, b) => parseFloat(a.miles) - parseFloat(b.miles));
      }
    } else {
      if (sortOrder === "asc") {
        hotelList.sort((a, b) => parseFloat(a.miles) - parseFloat(b.miles));
        // move searched hotel to first position in list
        hotelList.forEach(function (item, i) {
          if (item.name === search.searchString) {
            hotelList.splice(i, 1);
            hotelList.unshift(item);
          }
        });
      } else {
        hotelList.sort((a, b) => parseFloat(b.miles) - parseFloat(a.miles));
      }
      hotelList = moveUnAvailableHotelDown(hotelList);

    }
    if (hotelList && isDataLayer) {
      addProductImpressionGTMDataLayer(hotelList, search);
      setIsDataLayer(false);
    }

  }



  return (
    <SearchContainer
      background={props.background ? props.background : "#f8f8f8"}
      fluid="sm"
      className="mb-5"
    >
      {props.blockLocationAccess === true ? (
        <EmptyHotelsRow className="p-3">
          <div>
            <FontAwesomeIcon icon="exclamation-circle" className="mr-2" />
          </div>
          <div>
            Location needs to be enabled in order to discover hotels nearby.
            <br /> Please allow access to your location or check our{" "}
            <a href="/locations">hotel locations page</a>
          </div>
        </EmptyHotelsRow>
      ) : <>
      <Row className="search-header">
        {!isLoading && (
          <Col>
            <SearchMessage
              hotelCount={hotelCount}
              searchString={search.searchString}
              priceFilter={search.priceFilter}
            />
          </Col>
        )}

        {!isLoading && (
          <Col xs={{ span: 2 }} className="d-flex align-items-end flex-column">
            <DisplaySwitch>
              <button
                className={`d-flex ${display}`}
                onClick={handleSetDisplay}
              >
                <span className="switch-list" aria-label={"List View"}>
                  <FontAwesomeIcon icon={"list"} />
                </span>
                <span className="switch-map" aria-label={"Map View"}>
                  <FontAwesomeIcon icon="map-marker-alt" />
                </span>
              </button>
            </DisplaySwitch>
          </Col>
        )}
      </Row>

      {!isLoading && distanceRadius === 75 && !hotelList.length ? (
        <EmptyHotelsRow className="p-3">
          <div>
            <FontAwesomeIcon icon="exclamation-circle" className="mr-2" />
          </div>
          <div>
            We couldn't find any hotels for you in this area.
            <br /> Please try searching for another location or check our{" "}
            <a href="/locations">hotel locations page</a>
          </div>
        </EmptyHotelsRow>
      ) : (
        <>
          <MobileFilterToggle
            onClick={handleTogleMobileFilter}
            aria-controls="searchFilters"
            aria-expanded={openFilter}
            className={`w-100 text-left d-block d-lg-none ${
              !openFilter && "mb-4"
            }`}
          >
            Filter & Sort
            {openFilter ? (
              <FontAwesomeIcon icon="chevron-up" />
            ) : (
              <FontAwesomeIcon icon="chevron-down" />
            )}
          </MobileFilterToggle>
          <Collapse in={openFilter} className="d-lg-block">
            <div id="searchFilters" className="search-filters-container mb-4">
              <Row className="search-filters" noGutters>
                {priceCount > 0 && priceCount === hotelCount && (
                  <Col
                    lg={{ span: 3 }}
                    className={`text-left mt-3 mt-lg-0 ${openFilter && "mb-4"}`}
                  >
                    <SearchSort
                      display={display}
                      sortBy={sortBy}
                      sortOrder={sortOrder}
                      handleSortChange={handleSortChange}
                    />
                  </Col>
                )}
                <Col
                  lg={{
                    span: 8,
                    offset: priceCount > 0 && priceCount === hotelCount && 1,
                  }}
                >
                  <Row>
                    <Col xs={6} lg={3} className="pr-lg-0 mb-3 mb-lg-0">
                      <DistanceFilter
                        distance={distanceRadius}
                        handleDistanceChange={handleDistanceChange}
                      />
                    </Col>
                    {priceCount > 0 && priceCount === hotelCount && (
                      <Col
                        xs={6}
                        lg={3}
                        className="pr-lg-0 mb-3 mb-lg-0 pl-0 pl-lg-3"
                      >
                        <PriceFilters
                          priceFilter={priceFilter}
                          handlePriceChange={handlePriceChange}
                        />
                      </Col>
                    )}
                    <Col xs={12} lg={3} className="pr-lg-0 mb-3 mb-lg-0">
                      <AmenityFilters
                        crsCodes={crsCodesString}
                        handleAmenitiesChange={handleAmenitiesChange}
                        amenities={amenities}
                      />
                    </Col>
                    <Col xs={12} lg={3}>
                      <BrandFilters
                        handleBrandsChange={handleBrandsChange}
                        brands={brands}
                        crsCodes={crsCodesString}
                        crsCodesBrands={crsCodesBrandsString}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Button
                className="close-filters w-100 d-lg-none mt-3"
                variant="secondary"
                onClick={handleTogleMobileFilter}
              >
                Close
              </Button>
            </div>
          </Collapse>
          <Row>
            <Col>
              <UnlockBanner />
            </Col>
          </Row>
          <Row className="search-results">
            {display === "list" && (
              <SearchResults
                search={search}
                hotels={hotelList}
                isLoading={isLoading}
                onClickHotelImage={handleClickHotelImage}
              />
            )}
            {display === "map" && (
              <SearchMap
                search={search}
                hotels={hotelList}
                isLoading={isLoading}
                onClickHotelImage={handleClickHotelImage}
              />
            )}
            {showHotelZoomedImage && (
              <Lightbox
                large={hotelImageForZoom.url}
                alt={hotelImageForZoom.alt}
                hideZoom={true}
                hideDownload={true}
                showRotate={true}
                onClose={() => {
                  setShowHotelZoomedImage(false);
                }}
              />
            )}
          </Row>
        </>
      )}
      </>}
    </SearchContainer>
  );
};
export default Search;
