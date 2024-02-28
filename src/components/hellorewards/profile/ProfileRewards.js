import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  Row,
  Col,
} from "react-bootstrap";

import { Title4, Title2 } from "../../styles/theme";
import BucksDetails from "./BucksDetails.js";
import PerksDetails from "./PerksDetails.js";

const Greetings = styled.div`
  font-size: 29px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: normal;
`;
const Wrapper = styled.div`
  margin-bottom: 10px;
  h5 {
    margin-bottom: 18px;
  }
  p {
    margin: 0;
    color: #404040;
    font-size: 14px;
  }
  .fa-info-circle {
    position: absolute;
    top: 12px;
    right: 22px;
    color: #A0A0A0;
  }
`;
const ProfileRewards = () => {
  const crmProfile = useSelector((state) => {
    let member = state.member;
    return member && member.isLoggedIn ? member.crmProfile : null;
  });
  const bucks = crmProfile ? crmProfile.bucks.rewards : [];
  const perks = crmProfile ? crmProfile.perks.rewards : [];

  const bucksTotal = crmProfile && crmProfile.hellobucks && parseFloat(crmProfile.hellobucks) > 0 ? crmProfile.hellobucks.toLocaleString() : 0;
  const perksTotal = crmProfile && crmProfile.helloperks && parseFloat(crmProfile.helloperks) > 0 ? crmProfile.helloperks.toLocaleString() : 0;



  return <>
    {crmProfile && (
      <>
        {(crmProfile.hellobucks || crmProfile.helloperks) &&
        <Greetings className="mb-4 text-center text-lg-left">Congrats, here's what you've earned so far!</Greetings>
        }
        <Wrapper className="rounded text-center border">
          <Row>
            <Col className="py-2">
              <Title4>Hello Bucks</Title4>
              <Title2 className="mb-0">{bucksTotal}</Title2>
              <p>Credits Available</p>
              <BucksDetails bucks={bucks}/>
            </Col>
            <Col className="py-2 border-left">
              <Title4>Hello Perks</Title4>
              <Title2 className="mb-0">{perksTotal}</Title2>
              <p>Perks Earned</p>
              <PerksDetails perks={perks}/>
            </Col>
          </Row>
        </Wrapper>
      </>
    )}
  </>;
};
export default ProfileRewards;
