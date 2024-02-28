import React, { useState, useEffect, useRef } from "react";
import {
  useSelector,
  useDispatch
} from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import {parseDate} from '../../../apis/dates'
import isMatch from 'date-fns/isMatch';
import subYears from 'date-fns/subYears';
import isAfter from 'date-fns/isAfter'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import styled from "styled-components";
import {
  updateCRMProfile,
  clearUpdateRequestStatus
} from "../../../redux/actions";

import { regions } from "../../../apis/address";
import ProfileCommunicationPref from "./ProfileCommunicationPref";

const StyledForm = styled(Form)`
  .required:after {
    content:" *";
  }
`;

const ProfileEditForm = (props) => {
  const isMountedRef = useRef(null);
  const dispatch = useDispatch();
  const showEditForm = props.setShowEditForm;

  const {register, handleSubmit, errors, watch, getValues, setValue, control} = useForm({
    mode: "onBlur",
    reValidateMode: 'onBlur',
  });
  const required = "This field is required.";

  const profile = useSelector((state) => {
    let member = state.member;
    return member && member.isLoggedIn ? member.crmProfile : null;
  });

  const [isSaving, setIsSaving] = useState(false);
  const updateRequestStatus = useSelector((state) => {
    let reqStatus = state.member.updateRequestStatus;
    return reqStatus && reqStatus.type === 'edit-profile' ? reqStatus.status : null;
  });

  const handleUpdatePref = (pref) => {
    setValue('doNotCall', pref.doNotCall);
    setValue('doNotEmail', pref.doNotEmail);
  }

  const saveProfile = async(data, event) => {
    const initialValues = getValues();
    const request = {...initialValues, ...data};

    // update comm pref with boolen values, as setValue changes boolean value to string
    request.doNotCall = request.doNotCall == 'true' ? true : false;
    request.doNotEmail = request.doNotEmail == 'true' ? true : false;
    request.doNotSendSMS = true;

    event.preventDefault();
    setIsSaving(true);


    await dispatch(updateCRMProfile(request));
    isMountedRef.current && setIsSaving(false);
    return false;
  };

  let statesUS = Object.entries(regions['US']).map(([stateKey, stateObj]) => {
    return <option value={stateKey} key={stateKey}>{stateObj.name}</option>;
  });

  let statesCA = Object.entries(regions['CA']).map(([stateKey, stateObj]) => {
    return <option value={stateKey} key={stateKey}>{stateObj.name}</option>;
  });

  const validateDOB = (dob) => {
    if(dob) {
      if(!isMatch(dob, 'MM/dd/yyyy')) {
        return 'Date is invalid.'
      }

      let minAgeDate = subYears(new Date(), 18);
      if(isAfter(parseDate(dob, 'MM/dd/yyyy'), minAgeDate)) {
        return 'Minimum age should be 18.'
      }
    }
    return true;
  }

  const closeEditForm = () => {
    dispatch(clearUpdateRequestStatus());
    isMountedRef.current && showEditForm(false);
  }

  useEffect(() => {
    setValue('first_name', profile.first_name);
    setValue('last_name', profile.last_name);
    setValue('email', profile.email);
    setValue('phone', profile.phone || '');
    setValue('address1', profile.address1 || '');
    setValue('address2', profile.address2 || '');
    setValue('city', profile.city || '');
    setValue('zip', profile.zip || '');
    setValue('country_code', profile.country_code || '');
    setValue('state', profile.state || '');
    setValue('gender', profile.gender || '');
    setValue('date_of_birth', profile.date_of_birth);
    setValue('doNotCall', profile.doNotCall);
    setValue('doNotEmail', profile.doNotEmail);
    setValue('doNotSendSMS', true);

  }, [profile, setValue])

  useEffect(() => {
    isMountedRef.current = true;
    updateRequestStatus === 'success' && closeEditForm();

    return () => {
      isMountedRef.current = false;
    }
  }, [updateRequestStatus]);

  let stateLabel = watch('country_code') == 'CA' ? 'Province' : 'State';

  return <>
    {profile && (
      <>
        {updateRequestStatus === 'error' &&
        <Alert variant={`danger`}>An error occurred updating profile details. Please try again.</Alert>
        }
        <StyledForm onSubmit={handleSubmit(saveProfile)}>
          <Form.Control
            type="hidden"
            name="doNotCall"
            ref={register}
          />
          <Form.Control
            type="hidden"
            name="doNotEmail"
            ref={register}
          />
          <Form.Control
            type="hidden"
            name="doNotSendSMS"
            ref={register}
          />
          <Form.Row>
            <Form.Group as={Col} controlId={`firstname`}>
              <Form.Label className="read-only">Frist Name</Form.Label>
              <Form.Control
                type={`text`}
                name={`first_name`}
                placeholder={`First Name`}
                ref={register}
                readOnly
              />
            </Form.Group>
            <Form.Group as={Col} controlId={`lastname`}>
              <Form.Label className="read-only">Last Name</Form.Label>
              <Form.Control
                type={`text`}
                name={`last_name`}
                placeholder={`Last Name`}
                ref={register}
                readOnly
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`email`}>
              <Form.Label className="read-only">Email</Form.Label>
              <Form.Control
                type={`text`}
                name={`email`}
                placeholder={`Email`}
                ref={register}
                readOnly
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`phonenumber`}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                ref={register}
                isInvalid={errors.phone}
                maxLength="15"
                aria-invalid={errors.phone ? "true" : "false"}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId={`address1`}>
              <Form.Label>Address 1</Form.Label>
              <Form.Control
                type="text"
                name="address1"
                ref={register}
                isInvalid={errors.address1}
                aria-invalid={errors.address1 ? "true" : "false"}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`address2`}>
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                type="text"
                name="address2"
                ref={register}
                isInvalid={errors.address2}
                aria-invalid={errors.address2 ? "true" : "false"}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`city`}>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                ref={register}
                isInvalid={errors.city}
                aria-invalid={errors.city ? "true" : "false"}
                maxLength="50"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`zipcode`}>
              <Form.Label>Zip/Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                ref={register}
                isInvalid={errors.zip}
                maxLength="20"
                aria-invalid={errors.zip ? "true" : "false"}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`country`}>
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" name={`country_code`} ref={register}  >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`state`}>
              <Form.Label>{ stateLabel }</Form.Label>
              <Form.Control
                as="select"
                name={`state`}
                ref={register}
                isInvalid={errors.state}
              >
                <option value="">--Select State--</option>
                <optgroup label="United States">
                  {statesUS}
                </optgroup>
                <optgroup label="Canada">
                  {statesCA}
                </optgroup>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`gender`}>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name={`gender`}
                ref={register}
                >
                <option value="">--Select Gender--</option>
                <option value="2">Female</option>
                <option value="1">Male</option>
                <option value="3">Other</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId={`dateofbirth`}>
              <Form.Label>Birthday</Form.Label>
              <Controller
                as={
                  <MaskedInput
                    mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                    className={`form-control ${errors.date_of_birth && 'is-invalid'}`}
                    placeholder="mm/dd/yyyy"
                    guide={true}
                    name="date_of_birth"
                    ref={register({
                      name: 'date_of_birth'
                    })}
                  />}
                control={control}
                rules={{
                  validate: validateDOB,
                }}
                name="date_of_birth"
                defaultValue={profile.date_of_birth}
              />
              <Form.Control.Feedback type="invalid">
                {errors.date_of_birth && errors.date_of_birth.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <ProfileCommunicationPref editMode={true} onUpdatePref={handleUpdatePref}/>
          <Row className="pt-2">
            <Col className="text-center">
              <Button type="submit" variant="link" size="sm" disabled={isSaving}>
                {isSaving ? 'Saving...' : 'SAVE CHANGES'}
              </Button>
              <Button variant="link" size="sm" onClick={closeEditForm} disabled={isSaving}>
                CANCEL CHANGES
              </Button>
            </Col>
          </Row>
        </StyledForm>
      </>
    )}
  </>;
};
export default ProfileEditForm;
