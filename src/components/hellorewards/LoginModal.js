import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import helloRewardsIcon from "../../images/svg/hello-rewards.svg";

import LoginForm from "./LoginForm";

const StyledModal = styled(Modal)`
  .modal-content {
    @media(max-width: 991px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .modal-header {
    padding-bottom: unset;
    border-bottom: unset;
    .modal-title {
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
    }
  }
  .modal-body {
    @media (min-width: 991px) {
      margin: auto 90px;
      h5 {
        width: 50%;
        left: 50%;
        right: auto;
        transform: translateX(50%);
      }
    }
    padding-top: 0!important;
  }
  .modal-footer {
    justify-content: center;
    text-decoration: underline;
    button {
      color: #212529 !important;
      &:hover,
      &:active {
        text-decoration: none;
      }
    }
  }
`;
const StyledLoginForm = styled(LoginForm)`
  margin-top: 40px;
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

const LoginModal = (props) => {
  const member = useSelector(state => state.member);
  if (member.isLoggedIn && props.show) {
    props.onHide();
    return '';
  }
  return (
    <StyledModal
      {...props}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title className={`w-100 text-center`}>
          <div className="icon">
            <img src={helloRewardsIcon} alt={`Hello Rewards`}/>
            <span>simply rewarding</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <StyledLoginForm
          className='loginFormModal'
          onSignIn={props.onHide}
          welcomeSubHeading={props.welcomeSubHeading || 'Sign In To Hello Rewards to Complete this Reservation'}
          location={props.location}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" size="sm" onClick={props.onHide}>Continue without Signing In</Button>
      </Modal.Footer>
    </StyledModal>
  );
}

export default LoginModal;
