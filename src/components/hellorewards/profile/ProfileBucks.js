import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const StyledBucks = styled.div`
  font-weight: 800;
`;
const ProfileBucks = (props) => {
  const totalBucks = useSelector((state) => {
    let member = state.member;
    let bucks = member.crmProfile.hellobucks;
    return member && member.isLoggedIn && bucks ? bucks.toLocaleString() : null;
  });

  return <>
    {totalBucks && (
      <StyledBucks className={`${props.className || ''}`}>{totalBucks} Hello Bucks</StyledBucks>
    )}
  </>;
};
export default ProfileBucks;
