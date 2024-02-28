import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Title4 } from "../../styles/theme";
import ProfileCommunicationPref from "./ProfileCommunicationPref";
// import loadable from '@loadable/component'
import ProfileEditForm from "./ProfileEditForm";

const Wrapper = styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    padding: 10px;
    button {
      color: #AE1E22;
      font-weight: normal !important;
      text-decoration: underline;
      text-transform: uppercase;
      &:hover,
      &:active {
        color: #AE1E22 !important;
        text-decoration: none;
      }
    }
    form {
      padding-top: 15px;
      padding-bottom: 5px;
      .read-only, [readonly] {
        color: #BFBFBF;
      }
      [readonly] {
        color: #ADADAD;
        background-color: #fff;
      }
    }
    .form-label {
      font-size: 12px;
      font-weight: 400;
    }
`;

const ProfileInfo = styled.div`
  text-align: center;
  padding: 15px;
  h5 {
    margin-bottom: 18px;
  }
  p {
    margin: 0;
    color: #404040;
    font-size: 14px;
  }

`;
const ProfileAddress = (props) => {
  const crmProfile = useSelector((state) => {
    let member = state.member;
    return member && member.isLoggedIn ? member.crmProfile : null;
  });

  const [showEditForm, setShowEditForm] = useState(false);

  const onEditProfile = () => {
    setShowEditForm(true);
  }
  return <>
    {crmProfile && (
      <Wrapper>
        <Title4 className="text-center pt-3">Profile Details</Title4>
        {showEditForm ?
          <ProfileEditForm setShowEditForm={setShowEditForm}/>
          :
          <ProfileInfo>
            <h6>{crmProfile.first_name} {crmProfile.last_name}</h6>
            <p>{crmProfile.email}</p>
            <p>{crmProfile.address1} {crmProfile.address2}</p>
            <p>{crmProfile.city} {(crmProfile.city && (crmProfile.state || crmProfile.zip)) ? ',' : ''} {crmProfile.state} {crmProfile.zip}</p>
            <ProfileCommunicationPref editMode={false}/>

            <Button variant="link" size="sm" onClick={onEditProfile}>
              Edit Profile
            </Button>
          </ProfileInfo>
        }
      </Wrapper>
    )}
  </>;
};
export default ProfileAddress;
