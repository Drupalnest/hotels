import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import {
  useAccordionToggle,
  Button
} from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";

import ProfileIntro from "./ProfileIntro";
import ProfileAddress from "./ProfileAddress";
import ReservationsList from "./ReservationsList";
import ProfileRewards from "./ProfileRewards";
import ReservationCancelDialog from "../ReservationCancelDialog";
import Payment from "../Payment";
import {Subtitle, Title2} from "../../styles/theme";

const StyledAccordion = styled(Accordion)`
  @media(max-width: 991px) {
    .card-body {
      padding: 0;
      margin-top: 15px;
    }
  }
  .card {
    border-right: 0;
    border-left: 0;
    .card-header {
      padding-left: 0;
      padding-right: 0;
      background-color: #fff;
      cursor: pointer;
      &.open {
        border-bottom: none;
        padding-left: 0;
        padding-right: 0;
      }
    }
    .card-body {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }

  span.title {
    color: #AE1E22;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .icon {
    float: right;
    padding-right: 5px;
    font-weight: 500;
  }
`;

const StyledCTA = styled.div`
  display: grid;
  margin-bottom: 10px;
  .profile-cta {
    grid-area: 1/1;
    cursor: pointer;
  }
  .cta-copy {
    grid-area: 1/1;
    position: relative;
    padding: 1.5rem 0 0 1.5rem;
  }
  .cta-title {
    color: #fff;
    margin-bottom: 0.1rem;
  }
  .cta-sub-tiitle {
    color: #fff;
    margin-bottom: 0.5rem;
    text-transform: none;
  }
`;

const StyledLink = styled(Link)`
  color: #404040 !important;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 2px solid #AE1E22;
  &:hover, &:active {
    text-decoration: none;
  }
`;

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    (event) => {
      callback && callback(eventKey);
      let openedPanel = event.target;
      if (openedPanel) {
        window.scrollTo(0, 0);
      }
    },
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card.Header
      onClick={decoratedOnClick}
      className="open"
    >
      {children}
      <span className="icon">{isCurrentEventKey ? '-' : '+'}</span>
    </Card.Header>
  );

}

const ProfileMain = () => {

  const AllReservations = () => {
    const [reservationCancelDialogConfig, setReservationCancelDialogConfig] = useState({
      openDialog: false,
      res: null
    });

    const onDialogClose = () => {
      setReservationCancelDialogConfig({
        openDialog: false
      })
    }

    return (
      <>
        <StyledAccordion defaultActiveKey="0"  className="mb-5 mt-5">
          <Card key={0}>
            <ContextAwareToggle eventKey="0">
              <span className="title">Upcoming Stays</span>
            </ContextAwareToggle>
            <StyledAccordion.Collapse eventKey="0">
              <Card.Body>
                <ReservationsList type="upcoming" onCancel={setReservationCancelDialogConfig}/>
              </Card.Body>
            </StyledAccordion.Collapse>
          </Card>
          <Card key={1}>
            <ContextAwareToggle eventKey="1">
              <span className="title">Recent Stays</span>
            </ContextAwareToggle>
            <StyledAccordion.Collapse eventKey="1">
              <Card.Body>
                <ReservationsList type="recent"/>
              </Card.Body>
            </StyledAccordion.Collapse>
          </Card>
          <Card key={2}>
            <ContextAwareToggle eventKey="2">
              <span className="title">Cancelled Reservations</span>
            </ContextAwareToggle>
            <StyledAccordion.Collapse eventKey="2">
              <Card.Body>
                <ReservationsList type="cancelled"/>
              </Card.Body>
            </StyledAccordion.Collapse>
          </Card>
        </StyledAccordion>
        <ReservationCancelDialog
          config={reservationCancelDialogConfig}
          onHide={onDialogClose}
        />
      </>
    )
  }

  return <>
    <Container>
      <Row noGutters>
        <Col sm={12} lg={7} className="profileLHS">
          <ProfileIntro/>
          <AllReservations/>
        </Col>
        <Col sm={12} lg={{span: 4, offset: 1}} className="profileRHS">
          <Row>
            <Col>
              <Subtitle as="h2" className="text-center text-lg-left">Account Overview</Subtitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProfileRewards/>
            </Col>
          </Row>
          <Row>
            <StyledCTA as={Col}>
              <StaticImage
                src={'../../../images/profile-cta.jpg'}
                alt={'HR CTA'}
                className="profile-cta rounded"
              />
              <div className="cta-copy">
                <Title2 className="cta-title">HELLO PERKS</Title2>
                <Subtitle className="cta-sub-tiitle">Provided by Hello Rewards + Abenity</Subtitle>
                <a href="https://hellorewards.abenity.com/" rel="noreferrer" target="_blank">
                  <Button className="mb-2" type="button">Browse Discounts</Button>
                </a>
              </div>
            </StyledCTA>
          </Row>
          <Row>
            <Col>
              <ProfileAddress/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Payment/>
            </Col>
          </Row>
          <Row>
            <Col className="text-center p-2">
              <StyledLink to="/contact">
                Have Questions?
              </StyledLink>
            </Col>
          </Row>
          <Row>
            <Col className="text-center p-2">
              <StyledLink to="/support">
                View Hello Rewards FAQ
              </StyledLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>;
};
export default ProfileMain;
