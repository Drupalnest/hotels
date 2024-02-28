import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { navigate } from "gatsby";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import SuccessModal from "../common/SuccessModal";
import PrivacyModal from "../common/PrivacyModal";
import TermsOfServiceModal from "../common/TermsOfServiceModal";
import {Subtitle, Title4, Title3} from "../styles/theme";

import { enrollMember } from '../../apis/crm';

const Disclaimer = styled.div`
  font-size: 12px;
  .btn-link {
    display: inline-block;
    padding: 0 0 0.1em 0;
    color: #404040 !important;
    font-size: 12px !important;
    font-weight: 400 !important;
    text-decoration: underline;
    &:hover, &:active {
      color: #404040 !important;
    }
  }
`;

const EMAIL_EXIST_ALERT = 'An account with this email address already exists. Please use the Need Help Signing In link to reset the account password.';

const SignupForm = (props) => {
  const {register, handleSubmit, errors, setError, reset} = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur"
  });
  const member = useSelector(state => state.member);
  const required = "This field is required.";
  const [firstname, setFirstname] = useState('');

  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSuccessClose = () => {
    setShowSuccess(false);
    props.hasOwnProperty('onSignUp') && props.onSignUp();
  }

  const handlePrivacyModalClose = () => {
    setShowPrivacyModal(false);
  }

  const handlePrivacyModalShow = () => {
    setShowPrivacyModal(true);
  }

  const handleTermsModalClose = () => {
    setShowTermsModal(false);
  }

  const handleTermsModalShow = () => {
    setShowTermsModal(true);
  }

  useEffect(() => {
    (async () => {
      if (member.isLoggedIn) {
        navigate('/account', {state: {isAuthenticated: true}});
      }
    })();
  }, [member.isLoggedIn]);

  const onSubmit = async(data, event) => {
    const initialValues = {
      rlhc_promotionalsignupcode: null
    }
    const request = {...initialValues, ...data};
    event.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const response = await enrollMember(request);

    if (!response || response.error) {
      let message = response.errorSummary && response.errorSummary.message;
      message = message && message.replace("{EMAIL}", data.rlhc_email);
      if (response.errorSummary.type == 'INVALID_PROMO') {
        setError("rlhc_promotionalsignupcode", {
          message: message
        });
      } else if (response.errorSummary.type == 'EMAIL_EXISTS') {
        setError("rlhc_email", {
          message: message
        });
        setErrorMessage(EMAIL_EXIST_ALERT);
      } else {
        setErrorMessage(message || 'Oops!! Something went wrong, please try again after some time.');
      }
    } else {
      setShowSuccess(true);
      setFirstname(data.rlhc_firstname);
      reset();
    }

    setIsSubmitting(false);
  };


  return (
      <>
        <Row>
          <Col lg={4}>
            <Subtitle>Create Account</Subtitle>
            <Title3 className="mb-4">Earning Your Rewards is Easier Than Ever!</Title3>
            <div className="font-weight-bold">Hello Rates</div>
            <p>Access our Members-only rates and save 5% or more at over 900+ properties across North America. </p>
            <div className="mt-3 font-weight-bold">Hello Bucks</div>
            <p>Earn 10 Hello Bucks on every qualifying stay, plus the longer you stay the more you earn!</p>
            <div className="mt-3 font-weight-bold">Hello Perks</div>
            <p>Get surprising extras along the way just for being a Member. Get things like free premium WiFi, digital gift cards, dining vouchers, birthday surprise and more!</p>
            <div className="mt-3 mb-3 font-weight-bold">
            <Button style={{ backgroundColor: '#AE1E03', borderColor: '#AE1E22' }} aria-label={`Learn More for Create Account`} className="text-uppercase w-100" onClick={() => navigate('/hellorewards')}>
                Learn More
            </Button>
            </div>
          </Col>
          <Col lg={{span: 7, offset: 1}}>
            {errorMessage && <Alert variant={`danger`}> {errorMessage}</Alert>}
            <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Form.Group as={Col} lg={6} controlId="firstname">
                  <Form.Label>First Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="rlhc_firstname"
                    ref={register({
                      required: required
                    })}
                    isInvalid={errors.rlhc_firstname}
                    aria-invalid={errors.rlhc_firstname ? "true" : "false"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.rlhc_firstname && errors.rlhc_firstname.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} lg={6} controlId="lastname">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="rlhc_lastname"
                    ref={register({
                      required: required
                    })}
                    isInvalid={errors.rlhc_lastname}
                    aria-invalid={errors.rlhc_lastname ? "true" : "false"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.rlhc_lastname && errors.rlhc_lastname.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} lg={6} controlId="email">
                  <Form.Label>Email Address*</Form.Label>
                  <Form.Control
                    type="email"
                    name="rlhc_email"
                    ref={register({
                      required: required,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "A valid Email address is required."
                      }
                    })}
                    isInvalid={errors.rlhc_email}
                    aria-invalid={errors.rlhc_email ? "true" : "false"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.rlhc_email && errors.rlhc_email.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} lg={6} controlId="promoCode">
                  <Form.Label>Promo Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="rlhc_promotionalsignupcode"
                    ref={register}
                    isInvalid={errors.rlhc_promotionalsignupcode}
                    aria-invalid={errors.rlhc_promotionalsignupcode ? "true" : "false"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.rlhc_promotionalsignupcode && errors.rlhc_promotionalsignupcode.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" className="text-uppercase w-100" disabled={isSubmitting}>
                {isSubmitting ? `Please wait...` : `Create Account`}
              </Button>
              <Disclaimer className="mt-3 d-block">
                <b>We need to add  more text here </b>By submitting this form I certify that I have read, understand, and accept the <Button variant="link" onClick={handleTermsModalShow}>Terms of Service</Button>&nbsp;and&nbsp;<Button variant="link" onClick={handlePrivacyModalShow}>Privacy Statement</Button>.
              </Disclaimer>
            </Form>
          </Col>
        </Row>
        <PrivacyModal show={showPrivacyModal} onHide={handlePrivacyModalClose}/>
        <TermsOfServiceModal show={showTermsModal} onHide={handleTermsModalClose}/>

        <SuccessModal show={showSuccess} onHide={handleSuccessClose}>
          <Subtitle className="text-center mb-1">CONFIRMATION</Subtitle>
          <Title4 className="m-3 text-capitalize">Welcome to Hello Rewards {firstname}! </Title4>
          <p className="p-2">Congratulations! Now you can save on your bookings with Hello Rewards.</p>
          <p className="m-0"><i className="font-weight-bold">You will receive a confirmation email shortly to finish your profile.</i></p>
        </SuccessModal>
      </>
  );
}

export default SignupForm;
