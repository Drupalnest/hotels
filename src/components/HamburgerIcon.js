import React from "react";
import styled from "styled-components";

const Hamburger = styled.div`
  height: 19px;
  width: 23px;
  position: absolute;
  top: 12px;
  span {
    height: 2px;
    width: 100%;
    background: #595959;
    border-radius: 3px;
    display: block;
    opacity: 1;
    position: absolute;
    left: 0;
    transform: rotate(0deg);
    transition: all 0.15s ease-out;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 8px;
    }
    &:nth-child(4) {
      top: 16px;
    }
  }
  &.open {
    span {
      &:nth-child(1) {
        opacity: 0;
        top: 16px;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        opacity: 0;
        top: 0;
      }
    }
  }
`;

const HamburgerIcon = ({toggledClass}) => {
  return (
    <Hamburger className={`hamburger ${toggledClass}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};

export default HamburgerIcon;