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

const BrandFilters =({crsCodes, brands, handleBrandsChange, crsCodesBrands}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    const source = Axios.CancelToken.source();
    let didCancel = false;
    (async () => {
      if (!didCancel) {
        if (crsCodesBrands !== null) {
          setIsLoading(true);
          const apiUrl = encodeURI(`/brand-filters?hotels=${crsCodesBrands}`);
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
      source.cancel('Request cancelled for brand filters.');
    }
  }, [crsCodes, crsCodesBrands]);

  useEffect(() => {
    const noFilters = filters === null || filters === undefined;
    const brandFilters = Object.keys(brands);
    // Remove non applicable filters.
    if (brandFilters.length) {
      brandFilters.forEach((brand) => {
        if (noFilters) {
          handleBrandsChange({
            key: brand
          }, 'delete');
        }
        else {
          const found = filters.find(filter => filter.brand_code === brand);
          if (found === undefined) {
            handleBrandsChange({
              key: brand
            }, 'delete');
          }
        }
      })
    }
  }, [filters, crsCodes, brands, handleBrandsChange]);

  const handleChange = (event) => {
    const method = event.target.checked ? 'add' : 'delete';
    handleBrandsChange(
      {key: event.target.name, value: event.target.value},
      method
    );
  };
  const brandCount = Object.keys(brands).length;

  if (crsCodes !== null && filters !== null && filters.length) {
    if (isLoading) {
      return null;
    }
    return (
      <StyledDropdown>
        <Dropdown.Toggle
          variant="filter-dropdown"
          id="dropdown-brands"
        >
          <span>{`Brand: ${brandCount} selected`}</span>
          <FontAwesomeIcon icon="chevron-down" />
        </Dropdown.Toggle>
        <Dropdown.Menu as={`ul`} className="p-3">
          {
            filters.map((filter) => {
              return (
                <li key={filter.brand_code}>
                  <Form.Check
                    name={filter.brand_code}
                    value={filter.brand_code}
                    type="checkbox"
                    custom
                    label={`${filter.name} (${filter.count})`}
                    id={`amenity-${filter.brand_code}`}
                    onChange={handleChange}
                    checked={brands.hasOwnProperty(filter.brand_code)}
                  />
                </li>
              )
            })
          }
        </Dropdown.Menu>
      </StyledDropdown>
    );
  }
  return null;
}

export default BrandFilters;

BrandFilters.propTypes = {
  crsCodes: PropTypes.string,
  crsCodesBrands: PropTypes.string,
  handleBrandsChange: PropTypes.func.isRequired,
  brands: PropTypes.object.isRequired
};
