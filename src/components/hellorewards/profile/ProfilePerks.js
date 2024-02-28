import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledPerks = styled.div`
  font-weight: 600;
`;
const ProfilePerks = (props) => {
  const totalPerks = useSelector((state) => {
    let member = state.member;
    let perks = member.crmProfile.helloperks;
    return member && member.isLoggedIn && perks ? perks.toLocaleString() : null;
  });

  return <>
    {totalPerks && (
      <StyledPerks className={`${props.className || ''}`}>{totalPerks} Hello Perks</StyledPerks>
    )}
  </>;
};
export default ProfilePerks;
