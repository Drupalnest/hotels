import React from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";


const StyledDialog = styled(Modal)`
  margin-top: 100px;
  .modal-header {
    border: none
  }
  .modal-body {
    margin: 0 35px 30px 35px;
    text-align: center;
    padding: 0 25px 25px;
    h2 {
      margin-bottom: 45px;
    }
  }
`

const SuccessModal = (props) => {
  return (
    <StyledDialog
      show={props.show}
      onHide={props.onHide}
      size="lg"
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        {props.children}
      </Modal.Body>
    </StyledDialog>
  );
}

export default SuccessModal;
