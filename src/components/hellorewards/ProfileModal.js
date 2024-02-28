import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';

import ProfilePageLayout from "./ProfilePageLayout";
import {updateProfileModalStatus} from "../../redux/actions";

const StyledModal = styled(Modal)`
  .modal-dialog {
    max-width: 95%
  }
  .modal-header {
    padding-bottom: unset;
    border-bottom: unset;
  }
  .modal-body {
    padding-top: 0;
  }
`;


const ProfileModal = (props) => {
  const dispatch = useDispatch();
  const member = useSelector(state => state.member);

  const [show, setShow] = useState(props.show);
  const handleClose = () => {
    setShow(false);

    props.onHide();
  }

  useEffect(() => {
    if(show) {
      dispatch(updateProfileModalStatus({...member, profileModal: true}))
    }

    return () => {
      dispatch(updateProfileModalStatus({...member, profileModal: false}))
    }
  }, [show]);

  return (
    <StyledModal show={show} onHide={handleClose} id="profile-modal">
      <Modal.Header closeButton/>
      <Modal.Body>
        <ProfilePageLayout/>
      </Modal.Body>
    </StyledModal>
  );
}

export default ProfileModal;
