import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import {coreGet} from "../../apis/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledDropdown = styled(Dropdown)`
  .dropdown-menu {
    min-width: 240px !important;
  }
`;

const AmenityFilters = ({crsCodes, amenities, handleAmenitiesChange}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    let didCancel = false;
    (async () => {
      if (!didCancel) {
        if (crsCodes !== null) {
          setIsLoading(true);
          const apiUrl = encodeURI(`/amenity-filters?hotels=${crsCodes}`);
          const data = await coreGet(apiUrl, source);
          if (!didCancel) {
            setFilters(data);
            setIsLoading(false);
          }
        }
      }
    })();
    return () => {
      didCancel = true;
      source.cancel('Request cancelled for amenity filters.');
    }
  }, [crsCodes]);

  useEffect(() => {
    const noFilters = filters === null || filters === undefined;
    const amenityFilters = Object.keys(amenities);
    // Remove non applicable filters.
    if (amenityFilters.length) {
      amenityFilters.forEach((amenity) => {
        if (noFilters) {
          handleAmenitiesChange({
            key: amenity
          }, 'delete');
        }
        else {
          const found = filters.find(filter => filter.machine_name === amenity);
          if (found === undefined) {
            handleAmenitiesChange({
              key: amenity
            }, 'delete');
          }
        }
      })
    }
  }, [filters, crsCodes, amenities, handleAmenitiesChange]);

  const handleChange = (event) => {
    const method = event.target.checked ? 'add' : 'delete';
    handleAmenitiesChange(
      {key: event.target.name, value: event.target.value},
      method
    );
  };
  const amenityCount = Object.keys(amenities).length;

  if (crsCodes !== null && filters !== null && filters.length) {
    if (isLoading) {
      return null;
    }
    return (
      <StyledDropdown>
        <Dropdown.Toggle
          variant="filter-dropdown"
          id="dropdown-amenities"
        >
          <span>{`Amenities: ${amenityCount} selected`}</span>
          <FontAwesomeIcon icon="chevron-down"/>
        </Dropdown.Toggle>
        <Dropdown.Menu as={`ul`} className="p-3">
          {
            filters.map((filter) => {
              return (
                <li key={filter.machine_name}>
                  <Form.Check
                    name={filter.machine_name}
                    value={filter.id}
                    type="checkbox"
                    custom
                    label={`${filter.name} (${filter.count})`}
                    id={`amenity-${filter.machine_name}`}
                    onChange={handleChange}
                    checked={amenities.hasOwnProperty(filter.machine_name)}
                  />
                </li>
              )
            })
          }
        </Dropdown.Menu>
      </StyledDropdown>
    );
  }
  else {
    return null;
  }
}

export default AmenityFilters;

AmenityFilters.propTypes = {
  crsCodes: PropTypes.string,
  handleAmenitiesChange: PropTypes.func.isRequired,
  amenities: PropTypes.object.isRequired
};
