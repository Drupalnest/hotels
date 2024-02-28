import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/autocomplete.css";
import locationIcon from "../../images/svg/icon-current-location.svg";
import pointsIcon from "../../images/svg/icon-points-of-interest.svg";
import citiesIcon from "../../images/svg/icon-regions.svg";
import airportsIcon from "../../images/svg/icon-airports.svg";
import hotelsIcon from "../../images/svg/icon-hotels.svg";
import styled from "styled-components";
import { theme } from "../styles/theme";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Autosuggest from "react-autosuggest";
import { slugify } from "transliteration";
import { getAddressStateName } from "../../apis/address";
// import loadable from '@loadable/component'
// const Autosuggest = loadable(() => import(`react-autosuggest`));

const Wrapper = styled.div`
  .react-autosuggest__suggestions-container {
    padding-bottom: unset !important;
  }
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 40;
  .searchIcon {
    position: absolute;
    top: 0;
    right: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    font-size: 13px;
  }
`;
const SectionContainer = styled.div`
  background-color: #ffffff;
  margin-top: 15px;
  bottom: unset !important;
`;
const SectionTitleText = styled.h6`
  line-height: 20px;
`;
const SectionTitle = styled.div`
  background-color: #fff;
  padding: 0 0.8125rem 0.375rem 2.5rem;
  font-size: 14px;
  font-weight: bold;
  background-position: 15px top;
  background-repeat: no-repeat;
  background-size: 15px auto;
  &.points {
    background-image: url(${pointsIcon});
    background-size: 15px 18px;
  }
  &.cities {
    background-image: url(${citiesIcon});
    background-size: 15px 16px;
  }
  &.airports {
    background-image: url(${airportsIcon});
    background-size: 15px 18px;
  }
  &.hotels {
    background-image: url(${hotelsIcon});
    background-size: 15px 13px;
    background-position-y: 3px;
  }
`;
const CurrentLocation = styled.div`
  padding: 10px 15px 10px 40px;
  background: transparent;
  border-bottom: 1px solid #d9d9d9;
  color: #404040;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  border-radius: 4px;
  &:focus,
  &:hover {
    background: #f2f2f2;
    color: ${theme.primaryColor};
  }
  img {
    height: auto;
    width: 18px;
    position: absolute;
    top: 13px;
    left: 13px;
  }
`;
const SearchResults = styled.div`
  max-height: calc(100vh - 300px);
  margin-right: 16px;
  overflow-y: scroll;
  padding-top: 20px;
  -webkit-overflow-scrolling: touch;
  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    .react-autosuggest__suggestion {
      cursor: pointer;
      padding: 6px 13px 6px 40px;
      margin: 0;
      font-size: 14px;
      font-weight: 400;
    }
    .react-autosuggest__suggestion--highlighted {
      background-color: #f2f2f2;
      color: ${theme.primaryColor};
    }
  }
`;

const SearchAutocomplete = ({
  searchString,
  setCoordinates,
  id,
  inputRef = null,
  brandId = null,
  setIsKeyInLocation,
  onSearchFocus,
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [isMyLocation, setIsMyLocation] = useState(false);

  useEffect(() => {
    setValue(searchString);
  }, [searchString]);

  const renderInputComponent = (inputProps) => (
    <InputWrapper>
      <span className="searchIcon">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </span>
      <input {...inputProps} />
    </InputWrapper>
  );
  const setOverlayTop = () => {
    var datesDiv = document.getElementById("global-search-autocomplete");
    if (
      datesDiv &&
      window.innerHeight - datesDiv.getBoundingClientRect().y < 350
    ) {
      if (document.getElementById("react-autowhatever-1")) {
        document.getElementById("react-autowhatever-1").style.bottom = "50px";
      }
    } else {
      if (document.getElementById("react-autowhatever-1")) {
        document.getElementById("react-autowhatever-1").style.bottom = "auto";
      }
    }
  };
  const onAutocompleteChange = (event, { newValue, method }) => {
    setOverlayTop();
    setValue(newValue);
  };

  const handleSearchFocus = (event) => {
    event.target.setSelectionRange(0, event.target.value.length);
    onSearchFocus && onSearchFocus();
  };

  const handleBlur = (event, { highlightedSuggestion }) => {
    if (!highlightedSuggestion && !isMyLocation) {
      setValue("");
      setCoordinates("", null, null);
    }
    setIsKeyInLocation(false);
  };

  const handleOnKeyPress = () => {
    setIsKeyInLocation(true);
    setIsMyLocation(false);
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <span>
      {suggestion.name}
      {suggestion.type == "hotel" && suggestion.state
        ? `, ${suggestion.state}`
        : ""}
    </span>
  );

  const parseSuggestionResponse = (data) => {
    for (const data_type in data) {
      data[data_type].splice(4);
    }
    const cities = data["cities"];
    const hotels = data["hotels"];
    const airports = data["airports"];
    const points = data["points"];
    let results = [];
    if (cities && cities.length > 0) {
      results.push({
        type: "Destinations",
        data: cities,
        class: "cities",
      });
    }
    if (hotels && hotels.length > 0) {
      results.push({
        type: "Hotels",
        data: hotels,
        class: "hotels",
      });
    }
    if (airports && airports.length > 0) {
      results.push({
        type: "Airports",
        data: airports,
        class: "airports",
      });
    }
    if (points && points.length > 0) {
      results.push({
        type: "Points of Interest",
        data: points,
        class: "points",
      });
    }
    return results;
  };
  const onSuggestionsFetchRequested = ({ value, reason }) => {
    /*
    if (reason === 'input-focused') {
      return;
    }*/
    setTimeout(() => {
      !value &&
        setSuggestions([
          {
            type: "",
            data: [{ name: "" }],
          },
        ]);
    }, 0);
    const source = Axios.CancelToken.source();
    const config = {
      cancelToken: source.token,
      headers: {
        "api-key": process.env.GATSBY_CORE_API_KEY,
      },
    };
    try {
      let escapedSearchValue = encodeURIComponent(value);
      let autocompleteUrl = `${process.env.GATSBY_CORE_BASE_URL}/api/autocomplete?search=${escapedSearchValue}&site=1`;
      // let autocompleteUrl = `http://rlhcoredev.prod.acquia-sites.com/api/autocomplete?search=${escapedSearchValue}&site=1`;

      if (brandId) {
        autocompleteUrl += `&brand=${brandId}`;
      }
      Axios.get(autocompleteUrl, config).then((res) => {
        const { data } = res;
        const parsedSuggestions = parseSuggestionResponse(data);
        setSuggestions(parsedSuggestions);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    setSelectedSuggestion(suggestion.name);
    let alias = null;
    if (suggestion.type === "city" && suggestion.country) {
      const country = suggestion.country.toLowerCase();
      const stateName = getAddressStateName(
        suggestion.country,
        suggestion.state
      );
      const state =
        stateName !== null
          ? slugify(stateName)
          : suggestion.state.toLowerCase();
      if (parseInt(suggestion.published)) {
        alias = `/locations/${country}/${state}/${slugify(
          suggestion.locality
        )}`;
      }
    }
    setCoordinates(
      suggestion.name,
      suggestion.lat,
      suggestion.lon,
      suggestion.brand_id,
      suggestion.type,
      suggestion.place_id || null,
      alias
    );
    setIsMyLocation(false);
  };
  const renderSectionTitle = (section) => {
    return (
      section.type && (
        <SectionTitle className={`${section.class}`}>
          <SectionTitleText className={`section-title-icon`}>
            {section.type}
          </SectionTitleText>
        </SectionTitle>
      )
    );
  };
  const renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
      <SectionContainer {...containerProps}>
        <CurrentLocation onClick={getLocation}>
          <img src={locationIcon} alt="Current Location" />
          <a tabIndex="0">Find hotels near me</a>
        </CurrentLocation>
        {value.trim().length > 2 && <SearchResults>{children}</SearchResults>}
      </SectionContainer>
    );
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition, getPositionError);
    }
  };
  const getPosition = (position) => {
    const coords = position.coords;
    setCoordinates("My Current Location", coords.latitude, coords.longitude);
    setIsMyLocation(true);
    setValue("My Current Location");
    setSuggestions([]);
  };
  const getPositionError = (error) => {
    /**
     * @todo
     * handle different errors and show message. For now just reset state.
     *
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }*/
    console.log(error);
    setValue("");
    setSuggestions([]);
    setIsMyLocation(false);
  };
  const getSectionSuggestions = (section) => {
    if (section !== undefined) {
      return section.data;
    }
    return null;
  };

  /* to render suggestion when input is null  */
  const shouldRenderSuggestions = () => {
    return true;
  };

  const inputProps = {
    placeholder: "City, airport, attraction or hotel",
    value,
    onChange: onAutocompleteChange,
    onBlur: handleBlur,
    onClick: handleSearchFocus,
    onKeyPress: handleOnKeyPress,
    className: "rounded",
    id: id,
    ref: inputRef,
  };
  return (
    <Wrapper>
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSuggestionsContainer={renderSuggestionsContainer}
      renderInputComponent={renderInputComponent}
      multiSection={true}
      highlightFirstSuggestion={true}
      focusInputOnSuggestionClick={false}
      renderSectionTitle={renderSectionTitle}
      getSectionSuggestions={getSectionSuggestions}
      alwaysRenderSuggestions={false}
      shouldRenderSuggestions={shouldRenderSuggestions}
      inputProps={inputProps}
    />
    </Wrapper>
  );
};

export default SearchAutocomplete;

SearchAutocomplete.propTypes = {
  searchString: PropTypes.string.isRequired,
  setCoordinates: PropTypes.func.isRequired,
  id: PropTypes.string,
};

SearchAutocomplete.defaultProps = {
  id: null,
};
