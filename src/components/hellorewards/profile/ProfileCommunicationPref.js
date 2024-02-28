import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Title4, Switch } from "../../styles/theme";

const Wrapper = styled.div`
    margin: 10px auto;
    padding: 25px 25px 10px 25px;
    h4 {
      margin-bottom: 18px;
    }

    .prefLabel {
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
    }
`;
const ProfileCommunicationPref = (props) => {
  const isLoggedIn = useSelector(state => state.member.isLoggedIn);

  const [byPhoneInitial, byEmailInitial] = useSelector((state) => {
    let member = state.member;
    if (member && member.isLoggedIn) {
      return [!member.crmProfile.doNotCall, !member.crmProfile.doNotEmail]
    }
    return null;
  });
  const [byPhone, setByPhone] = useState(byPhoneInitial);
  const [byEmail, setByEmail] = useState(byEmailInitial);

  const updatePref = async (e) => {
    let id = e.target.id;
    let valueToUpdate = e.target.checked;
    if (id === 'doNotCall') {
      setByPhone(valueToUpdate);

    } else {
      setByEmail(valueToUpdate);
    }

  };

  useEffect(() => {
    props.onUpdatePref && props.onUpdatePref({
      doNotCall: !byPhone,
      doNotEmail: !byEmail
    })
  }, [byPhone, byEmail])

  return <>
    {isLoggedIn && (
      <>
        <Wrapper className="text-center rounded">
          <Title4>Communication Preferences</Title4>
          {props.editMode ?
            <Row>
              <Col>
                <span className="prefLabel">By Email</span>
                <Switch className="switch">
                  <input
                    type="checkbox"
                    id="doNotEmail"
                    checked={byEmail}
                    onChange={updatePref}
                  />
                  <span className="slider round"/>
                </Switch>
              </Col>
              <Col>
                <span className="prefLabel">By Phone</span>
                <Switch className="switch">
                  <input
                    type="checkbox"
                    id="doNotCall"
                    checked={byPhone}
                    onChange={updatePref}
                  />
                  <span className="slider round"/>
                </Switch>
              </Col>
            </Row>
            :
            <Row>
              <Col>
                <span className="prefLabel">
                  {byEmail && <>By Email</>}
                  {byEmail && byPhone && <>,</>}
                  {byPhone && <> By Phone</>}
                </span>
                {!byPhone && !byEmail && <span className="prefLabel">Do Not Contact</span>}
              </Col>
            </Row>
          }
        </Wrapper>
      </>
    )}
  </>;
};
export default ProfileCommunicationPref;
