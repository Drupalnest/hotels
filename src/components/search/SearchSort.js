import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors, remCalc } from "../styles/theme.js";

const SortWrapper = styled.div`
  &&.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  span {
    font-size: ${remCalc(12)};
  }
`;

const SortByButton = styled(Button)`
  &&:not(.sortByActive) {
    background: transparent;
    color: ${colors.dark};
  }
  && {
    border: 1px solid #979797;
    border-radius: 1px;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  position: absolute !important;
  font-size: 0 !important;
  clip: rect(0, 0, 0, 0);
`;

const SortOrderButton = styled(Button)`
    &&{
      background: transparent !important;
      color: #7c7c7c94 !important;
      border: none
      font-size: 1rem;
      font-weight: 500;
      &:hover, &:active, &:focus {
        background: transparent !important;
        color: #7c7c7c94 !important;
        opacity: .8;
      }
    }
    .sortOrderActive {
      color: ${colors.dark};
    }
    .icon {
      font-size: ${remCalc(18)};
      font-weight: normal;
    }
`;

const SearchSort = ({ sortBy, sortOrder, handleSortChange, display }) => {
  if (display == "map") {
    sortBy = "";
    sortOrder = "";
  }
  const handleSetSort = (event) => {
    let newSortBy = event.target.dataset["sortby"];
    handleSortChange(newSortBy, sortOrder);
  };

  const handleOrderToggle = () => {
    let toggledSortOrder = sortOrder == "asc" ? "desc" : "asc";
    handleSortChange(sortBy, toggledSortOrder);
  };

  return (
    <SortWrapper className={`${display === "map" && "disabled"}`}>
      <span className="small mx-2 font-weight-bold">Sort By</span>

      <SortByButton
        aria-pressed={sortBy == "distance" && true}
        className={`border-right-0 ${sortBy == "distance" && "sortByActive"}`}
        onClick={handleSetSort}
        data-sortby="distance"
      >
        Distance
      </SortByButton>
      <SortByButton
        aria-pressed={sortBy == "price" && true}
        className={`mr-1 ${sortBy == "price" && "sortByActive"}`}
        onClick={handleSetSort}
        data-sortby="price"
      >
        Price
      </SortByButton>

      <SortOrderButton
        onClick={handleOrderToggle}
        aria-label={"Sort"}
        className="pl-2 pr-0"
      >
        <FontAwesomeIcon
          className={`icon mr-1 ${sortOrder == "asc" && "sortOrderActive"} `}
          icon="long-arrow-alt-down"
        />
        <FontAwesomeIcon
          className={`icon ${sortOrder == "desc" && "sortOrderActive"} `}
          icon="long-arrow-alt-up"
        />
      </SortOrderButton>
      <Wrapper role="alert" aria-live="assertive">{`${
        sortOrder == "asc" ? "Ascending" : "Descending"
      }`}</Wrapper>
    </SortWrapper>
  );
};
export default React.memo(SearchSort);

SearchSort.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};
