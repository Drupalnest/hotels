import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Autosuggest from "react-autosuggest";
import { hotelAutoComplete } from "../../apis/support.js";
import { theme } from "../styles/theme";
import "../styles/autocomplete.css";
// import loadable from '@loadable/component'
// const Autosuggest = loadable(() => import(`react-autosuggest`));

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 40;
  .searchIcon {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 100%;
    font-size: 13px;
  }
  input {
    padding-left: 27px;
  }
`;
const SectionContainer = styled.div`
  background-color: #ffffff;
  padding: 10px 0 !important;
  z-index: 2;
`;

const SearchResults = styled.div`
  max-height: calc(100vh - 300px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    .react-autosuggest__suggestion {
      cursor: pointer;
      padding: 6px 20px;
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

const HotelAutocomplete = (props) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(props.suggestions || []);

  let { onHotelSelection, id, name, inputRef } = props;
  let [errors, setErrors] = useState(props.errors);

  const onAutocompleteChange = (event, { newValue, method }) => {
    setValue(newValue);
    errors && setErrors(null);
  };

  const handleSearchFocus = (event) => {
    event.target.setSelectionRange(0, event.target.value.length);
  };

  const inputProps = {
    value,
    onChange: onAutocompleteChange,
    onClick: handleSearchFocus,
    className: `rounded form-control ${errors && "is-invalid"}`,
    id: id,
    name: name,
    ref: inputRef,
  };

  const renderInputComponent = (inputProps) => (
    <InputWrapper>
      <span className="searchIcon">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </span>
      <input {...inputProps} aria-required={true} />
      <Form.Control.Feedback type="invalid">
        {errors && errors.message}
      </Form.Control.Feedback>
    </InputWrapper>
  );

  const onSuggestionsFetchRequested = ({ value, reason }) => {
    (async () => {
      try {
        const data = await hotelAutoComplete(value);
        setSuggestions(data);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
      <SectionContainer {...containerProps}>
        <SearchResults>{children}</SearchResults>
      </SectionContainer>
    );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => <span>{suggestion.name}{suggestion.field_address_administrative_area ? `, ${suggestion.field_address_administrative_area}`: ''}</span>;

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    onHotelSelection(suggestion);
  };

  const shouldRenderSuggestions = (value) => {
    return value.trim().length > 0;
  };

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSuggestionsContainer={renderSuggestionsContainer}
      renderInputComponent={renderInputComponent}
      highlightFirstSuggestion={true}
      shouldRenderSuggestions={shouldRenderSuggestions}
      inputProps={inputProps}
    />
  );
};

export default HotelAutocomplete;
