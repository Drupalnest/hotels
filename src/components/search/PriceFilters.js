import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PriceFilters = ({priceFilter, handlePriceChange}) => {
  const handleSetPrice = (eventKey) => {
    const value = eventKey !== 'show_all' ? eventKey : null;
    handlePriceChange(value, null);
  };
  let toggleText = '';
  switch(priceFilter) {
    case 'under_50':
      toggleText = "Under $50";
      break;
    case 'between_50_100':
      toggleText = "$50-$100";
      break;
    case 'over_100':
      toggleText = "Over $100";
      break;
    default:
      toggleText = "Show all results"
  }
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="filter-dropdown"
        id="dropdown-price"
      >
        <span>{`Price: ${toggleText}`}</span>
        <FontAwesomeIcon icon="chevron-down"/>
      </Dropdown.Toggle>
      <Dropdown.Menu as="ul">
        <li>
          <Dropdown.Item
            eventKey={'show_all'}
            onSelect={handleSetPrice}
            active={priceFilter === 'show_all' || priceFilter === null}
            aria-label={`Show all results`}
          >
            Show all results
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item
            eventKey={'under_50'}
            onSelect={handleSetPrice}
            active={priceFilter === 'under_50'}
            aria-label={`Under $50`}
          >
            Under $50
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item
            eventKey={'between_50_100'}
            onSelect={handleSetPrice}
            active={priceFilter === 'between_50_100'}
            aria-label={`$50-$100`}
          >
            $50-$100
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item
            eventKey={'over_100'}
            onSelect={handleSetPrice}
            active={priceFilter === 'over_100'}
            aria-label={`Over $100`}
          >
            Over $100
          </Dropdown.Item>
        </li>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export default PriceFilters;
