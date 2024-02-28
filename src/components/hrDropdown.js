import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Link } from "gatsby";
import { navigate } from "gatsby";

import helloRewardsIcon from "../images/svg/logo-hello-rewards-rewarding.svg";

import { logout } from "../redux/actions";
import LoginForm from "./hellorewards/LoginForm";
import ProfileModal from "./hellorewards/ProfileModal";

import DropdownToggleIcon from "./DropdownToggleIcon";

const StyledDropdown = styled(Dropdown)`
  height: 48px;
  line-height: 48px;
  width: 100%;
  z-index: 21;
  @media (max-width: 991px) {
    height: 42px;
    line-height: 42px;
    padding: 0;
    .dropdown-menu {
      position: fixed !important;
      top: 45px !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      right: auto;
      z-index: 99;
    }
    #overlay {
      position: fixed;
      display: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 2;
      cursor: pointer;
    }
  }
  span.icon {
    width: 45px;
    display: inline-block;
    margin-right: 10px;

    @media (max-width: 991px) {
      width: 38px;
      margin-right: 2px;
    }
    img {
      // vertical-align: baseline !important;
    }
  }
  #oktaToggle {
    height: inherit;
    line-height: inherit;
    border-radius: 0;
    font-size: 13px;
    font-weight: 500;
    color: #595959;
    background: none;
    padding: 0 24px 0 10px;
    position: relative;
    box-shadow: none !important;
    text-transform: none;
    display: inline-flex;
    margin-top: -1px;
    &:before {
      content: "";
      background: transparent;
      opacity: 0;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      transform: scale(0);
      transition: opacity 0.2s cubic-bezier(0.4,0,0.2,1),transform 0.2s cubic-bezier(0.4,0,0.2,1);
    }
    &:hover:before {
      background: #d9d9d9;
      opacity: 1;
      transform: scale(1);
    }
    &:after {
      display: none;
    }
    .toggle-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .dropdown-menu {
    width: 290px;
    border-radius: 0.3rem;
    margin: 0;
    padding: 0;
    border: none;
    @media (min-width: 991px) {
      top: 5px !important;
      left: -50px !important;
      -webkit-box-shadow: 0 1px 10px rgba(0,0,0,.08);
      box-shadow: 0 1px 10px rgba(0,0,0,.08);
      -webkit-transition: opacity .2s ease-out,visibility .2s ease-out;
      transition: opacity .2s ease-out,visibility .2s ease-out;
    }
    .inner {
      padding-top: 8px
    }
    div.icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 10px;
      img {
        width: 70px;
      }
      span {
        font-size: 8px;
        line-height: 20px;
      }
    }


    p.okta-toggle-message {
      font-size: 12px;
      line-height: normal;
    }
  }
  &.show {
    #oktaToggle {
      .toggle-icon {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
  .toggle-text {
    text-transform: capitalize
  }
`;
const HrLoginForm = styled(LoginForm)`
  padding: 0 30px 10px;
  line-height: normal;
  label {
    margin-left: 0 !important;
    margin-bottom: 5px !important;
    font-weight: normal !important;
    font-size: 13px !important;
  }
  input {
    margin-bottom: 0 !important;
  }
`;

const Profile = styled.div`
  text-align: center;
  margin-top: -10px;
  a.profile-link {
    color: #212529 !important;
    text-decoration: none !important;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 15px 0 10px;
    display: block;
    &:hover,
    &:focus {
      opacity: .5;
    }
    svg {
      margin: 0 8px 1px 0;
    }
  }
  button {
    padding: 10px 30px;
    color: #212529 !important;
    font-size: 11px !important;
    text-decoration: underline !important;
  }
`;


const HelloRewardsDropdown = (props) => {
 // const path = props.location.pathname.split('/');
  //const isCheckout = path[1] === 'checkout';

  const dispatch = useDispatch();
  const member = useSelector(state => state.member);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleDropdown = () => {
    props.setShowDropdown(!props.showDropdown);
  }
  const handleSignin = (guest) => {
    props.setShowDropdown(false);
  };
  const handleSignout = async () => {
    props.setShowDropdown(false);
    // Set redux state.
    dispatch(logout());
  }

  const handleMyAccount = (e) => {
    // if (isCheckout) {
    //   setShowProfileModal(true);
    //   e.preventDefault();
    //   return false;
    // } else {
    //   navigate("/account");
    // }
  }

  const handleHideProfileModal = () => {
    setShowProfileModal(false);
    handleDropdown();
  }

  return (
    <StyledDropdown className="hello-rewards" show={props.showDropdown}>
      <span className="icon">
        {/* <Link to={ member.isLoggedIn ? "/account" :"/hellorewards"}>
          <img src={helloRewardsIcon} alt={`Hello Rewards`}/>
        </Link> */}

        <Link to="/hellorewards">
          <img src={helloRewardsIcon} alt={`Hello Rewards`}/>
        </Link>
      </span>
      <Dropdown.Toggle id={`oktaToggle`} onClick={handleDropdown}>
        <span dangerouslySetInnerHTML={{__html: props.toggleText}}></span>
        <DropdownToggleIcon/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className="inner">
          <div className="icon mb-4">
            <img src={helloRewardsIcon} alt={`Hello Rewards`}/>
          </div>
          {/* {!member.isLoggedIn ?
            <HrLoginForm
              location={props.location}
              onSignIn={handleSignin}
              controlColSize={12}
              onSignUpLoad={handleDropdown}
            /> : */}
            <>
              <Profile>
                <Link to={'/account'} className={`profile-link`} onClick={handleMyAccount}>
                  View My Account
                </Link>
                <Button onClick={handleSignout} variant="link" size="sm">
                  Sign Out
                </Button>
              </Profile>
              {showProfileModal && <ProfileModal show={showProfileModal} onHide={handleHideProfileModal}/>}

            </>
          {/* } */}
        </div>
        <Button onClick={handleDropdown} variant="secondary" block>Close</Button>
      </Dropdown.Menu>
    </StyledDropdown>
  );
}

export default HelloRewardsDropdown;
