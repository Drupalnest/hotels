import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  Button,
  Modal,
  Form,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import {
  cancelReservation,
  clearUpdateRequestStatus
} from "../../redux/actions";

const StyledTooltip = styled(Tooltip)`
  z-index: 99999 !important;
`;

const StyledDialog = styled(Modal)`
  .modal-header {
    border: none
  }
  .modal-body {
    margin: 0 35px 45px 35px;
    text-align: center;
    padding: 25px;
    h2 {
      margin-bottom: 45px;
    }
    .form-check-label {
      padding: 0 0 0 5px;
      font-size: 14px;
      font-weight: 500;
      text-align: left;
      span {
        color: #ae1e22;
        text-decoration: underline;
      }
    }
    button {
      margin: 40px auto 0;
      padding: 8px 20px;
      display: block;
      background-color: #AE1E03;
      border-color: #AE1E22;
      border: none;
      color: #ffffff;
      &:hover {
        background-color: #570f11;
        border-color: #570f11;
      }

    }
    .error-phone {
      font-size: 14px;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
`

const ReservationCancelDialog = ({config, onHide}) => {
  const dispatch = useDispatch();
  const reqStatus = useSelector((state) => {
    let reqStatus = state.member.updateRequestStatus;
    let retObj = null;
    if(reqStatus && reqStatus.type === 'cancel-reservation') {
      retObj = {};
      retObj.status = reqStatus.status;
      retObj.cancelID = reqStatus.cancelID;
    };
    return retObj;
  });
  const [inProgress, setInProgress] = useState(false)
  const [readTerms, setReadTerms] = useState(false)

  const reservation = config.res;
  const hotel = reservation ? reservation.hotel_details : null;

  const renderTooltip = (props) => (
    <StyledTooltip id="cancelPolicy" {...props}>
      {reservation.cancelPolicies.Description}
    </StyledTooltip>
  );

  const TermsAndPolicies = () => {
    return (
      <OverlayTrigger
        placement="top"
        delay={{hide: 400}}
        overlay={renderTooltip}
      >
        <span>Terms and Policies</span>
      </OverlayTrigger>
    )
  }

  const handleOnReadTerms = (e) => {
    setReadTerms(e.target.checked);
  }

  const onConfirm = () => {
    setInProgress(true);
    reservation && dispatch(cancelReservation({
      resId: reservation.crs_reservation_id,
      hotelCode: hotel ? hotel.crs_code : (reservation.details ? reservation.details.HotelCode : null),
    }));
  }
  const onClose = () => {
    dispatch(clearUpdateRequestStatus());
    setInProgress(false);
    setReadTerms(false);
    onHide(reqStatus);
  }

  return (
    <StyledDialog
      show={config.openDialog}
      onHide={onClose}
      centered
      backdrop={inProgress && (!reqStatus || ( reqStatus.status !== 'success' && reqStatus.status !== 'error')) ? 'static' : true}
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        {reqStatus && reqStatus.status === 'success' &&
        <p className="text-success">Your reservation has been successfully cancelled.</p>
        }
        {reqStatus && reqStatus.status === 'error' &&
        <><p className="text-danger">We were unable to cancel your reservation.</p>{hotel && hotel.phone && <p>Please contact your hotel at <a className="text-dark error-phone" href={`tel:${hotel.phone}`}>{hotel.phone}</a></p>}</>
        }
        {(!reqStatus || ( reqStatus.status !== 'success' && reqStatus.status !== 'error')) && <>
          <h2 className="text-center font-weight-normal">Are you sure you want to cancel this reservation?</h2>
          <Form.Check onChange={handleOnReadTerms}>
            <Form.Check.Input onChange={handleOnReadTerms}/>
            <Form.Check.Label>I certify that I read and understand the <TermsAndPolicies/> of cancelling this
              reservation.</Form.Check.Label>
          </Form.Check>
          <Button
            onClick={onConfirm}
            disabled={inProgress || !readTerms}
          >
            {inProgress ? 'Please wait...' : 'Cancel Reservation'}
          </Button>
        </>
        }
      </Modal.Body>
    </StyledDialog>
  );
}

export default ReservationCancelDialog;
