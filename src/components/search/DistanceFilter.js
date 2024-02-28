import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DistanceFilter = (props) => {
  const distance = props.distance ? parseInt(props.distance) : 25;
  const handleDistanceChange = (eventKey) => {
    const distance = parseInt(eventKey);
    props.handleDistanceChange(distance);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="filter-dropdown" id="dropdown-distance">
        <span>{`Distance: ${distance} Miles`}</span>
        <FontAwesomeIcon icon="chevron-down" />
      </Dropdown.Toggle>
      <Dropdown.Menu as={`ul`} className={`distance`}>
        <li>
          <Dropdown.Item
            eventKey={10}
            onSelect={handleDistanceChange}
            active={distance === 10}
            aria-label={`10 Miles`}
            aria-selected={distance === 10}
          >
            10 Miles
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item
            eventKey={25}
            onSelect={handleDistanceChange}
            active={distance === 25}
            aria-label={`25 Miles`}
            aria-selected={distance === 25}
          >
            25 Miles
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item
            eventKey={50}
            onSelect={handleDistanceChange}
            active={distance === 50}
            aria-label={`50 Miles`}
            aria-selected={distance === 50}
          >
            50 Miles
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item
            eventKey={75}
            onSelect={handleDistanceChange}
            active={distance === 75}
            aria-label={`75 Miles`}
            aria-selected={distance === 75}
          >
            75 Miles
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item
            eventKey={100}
            onSelect={handleDistanceChange}
            active={distance === 100}
            aria-label={`100 Miles`}
            aria-selected={distance === 100}
          >
            100 Miles
          </Dropdown.Item>
        </li>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default React.memo(DistanceFilter);

DistanceFilter.propTypes = {
  handleDistanceChange: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired,
};
