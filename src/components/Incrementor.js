import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "./styles/theme";

const Wrapper = styled.div`
  //height: 36px;
  position: relative;
  margin: 0;
  display: flex;
`;
const InputWrapper = styled.div`
  pointer-events: none;
  width: 20px;
  input,
  input[type="text"] {
    width: 100%;
    padding: 0 !important;
    border: none;
    border-radius: 0 !important;
    text-align: center;
    margin: 0;
    box-shadow: none !important;
    font-size: 14px;
    font-weight: 500;
    &::placeholder {
      color: #595959 !important;
      font-family: "Roboto", Arial, sans-serif;
      font-weight: normal;
      opacity: 1;
    }
  }
`;
const Counter = styled.div`
  background: white;
  color: #404040;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: normal;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  user-select: none;
  text-align: center;
  a,
  a:hover,
  a:focus {
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    user-select: none;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
  }
  &:hover,
  &:focus {
    color: ${theme.primaryColor};
  }
`;

const Incrementor = ({ name, value, min, max, onChangeCount, index }) => {
  const [incrementValue, setIncrementValue] = useState(value);
  const [minReached, setMinReached] = useState(value <= min);
  const [maxReached, setMaxReached] = useState(value >= max);

  useEffect(() => {
    if (value !== incrementValue) {
      setIncrementValue(value);
    }
    setMaxReached(value >= max);
    setMinReached(value <= min);
  }, [incrementValue, minReached, maxReached, value, min, max]);

  const handleIncrementClick = () => {
    onChangeCount(index, incrementValue + 1);
  };

  const handleIncrementKeyPress = (event) => {
    const code = event.key;
    if (!maxReached && (code === "Enter" || code === " ")) {
      onChangeCount(index, incrementValue + 1);
    }
  };

  const handleDecrementKeyPress = (event) => {
    const code = event.key;

    if (!minReached && (code === "Enter" || code === " ")) {
      onChangeCount(index, incrementValue - 1);
    }
  };

  const handleDecrementClick = () => {
    onChangeCount(index, incrementValue - 1);
  };
  const onChange = (event) => {
    // Placeholder function to prevent eslint warning on input field.
  };

  const incrementPointerEvents = maxReached ? "none" : "initial";
  const decrementPointerEvents = minReached ? "none" : "initial";

  return (
    <Wrapper className="d-flex justify-content-between align-items-center">
      <Counter
        className="decrease"
        onClick={handleDecrementClick}
        onKeyPress={handleDecrementKeyPress}
        style={{ pointerEvents: decrementPointerEvents }}
      >
        <a tabIndex={"0"} aria-label={`Decrease ${name}`} role="button">
          <span>–</span>
        </a>
      </Counter>
      <InputWrapper>
        <input
          className={`increment`}
          name={name}
          type="text"
          value={incrementValue}
          onChange={onChange}
          placeholder={incrementValue}
        />
      </InputWrapper>
      <Counter
        className="increase"
        onClick={handleIncrementClick}
        onKeyPress={handleIncrementKeyPress}
        style={{ pointerEvents: incrementPointerEvents }}
      >
        <a tabIndex={"0"} aria-label={`Increase ${name}`} role="button">
          <span>+</span>
        </a>
      </Counter>
    </Wrapper>
  );
};

Incrementor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChangeCount: PropTypes.func.isRequired,
};
Incrementor.defaultProps = {
  min: 0,
  max: 10,
  index: 0,
};
export default Incrementor;
