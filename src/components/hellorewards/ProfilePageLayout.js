import Axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import ProfileMain from "./profile/ProfileMain";
import {
  addCRMProfile,
  addReservations,
  clearError
} from "../../redux/actions";
import useAuthenticate from "../../hooks/useAuthenticate";

const ProfileContainer = styled(Container)`
  min-height: 100px;
  padding: 0;
  .spinner-border {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
  }
`;

const ProfilePageLayout = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const memberLoggedIn = useSelector(state => state.member.isLoggedIn);
  const isAuthenticated = useAuthenticate();
  const error = useSelector(state => state.member.error);

  useEffect(() => {
    if (!memberLoggedIn) {
      navigate("/login");
    }
  }, [memberLoggedIn, isAuthenticated]);

  useEffect(() => {
    let didCancel = false;
    const source = Axios.CancelToken.source();
    (async () => {
      if (isAuthenticated && memberLoggedIn && !didCancel) {
        await dispatch(addCRMProfile(source));
        await dispatch(addReservations());
        !didCancel && setIsLoading(false);
      }
    })();
    return () => {
      didCancel = true;
      source.cancel('Request cancelled for fetch profile');
      dispatch(clearError());
    }
  }, [isAuthenticated])

  return (
    <>
      {isAuthenticated && memberLoggedIn &&
      <ProfileContainer fluid="sm" className="pt-5">
        {!error ?
          isLoading ? <Spinner animation="border"/> : <ProfileMain/>
         :
          <Alert variant={`danger`} className="text-center"> An error occurred while loading your profile.</Alert>
        }
      </ProfileContainer>
      }
    </>
  );
}

export default ProfilePageLayout;
