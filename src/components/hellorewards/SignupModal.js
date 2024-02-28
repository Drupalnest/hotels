import React from "react";
import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";

import SignupForm from "./SignupForm";

const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 95%
  }
  .modal-header {
    padding-bottom: unset;
    border-bottom: unset;
  }
  .modal-body {
    // padding-top: 0;
  }
  .modal-footer {
    border: 0;
  }

`

const StyledContainer = styled(Container)`
  button[type='submit'] {
    margin: 0 auto 10px auto;
    width: 100%;
    display: block;
    background-color: #AE1E03 !important;
    border-color: #AE1E22 !important;
    border: none;
    color: #ffffff;
    &:hover {
      background-color: #570f11;
      border-color: #570f11;
    }

  }
`

const SignupModal = (props) => {
  return (
    <StyledModal
      size="lg"
      show={props.show}
      onHide={props.onHide}
      centered
      scrollable={true}
      aria-labelledby="signup-modal"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <StyledContainer fluid="sm" className="pt-5 px-1 px-lg-5 pb-3">
          <SignupForm
            onSignUp={props.onHide}
          />
        </StyledContainer>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </StyledModal>
  );
}

export default SignupModal;
