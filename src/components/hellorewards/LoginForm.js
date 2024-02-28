import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { navigate } from "gatsby";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Storage } from "../../utils/storage";
import { auth } from "../../utils/auth";

import { Title5 } from "../styles/theme";
import { login } from "../../redux/actions";
import SignupModal from "./SignupModal";

const KEY_LOGIN_COOKIE = 'HR_login';

const WelcomeBlock = styled.div`
  display: ${props => props.displayWelcome || "block"};
  line-height: normal;
  text-align: center;
  span {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  hr {
    border-color: #F4F4F4 !important;
  }
`;
const StyledForm = styled(Form)`
  margin: 0;
  .form-actions {
    text-align: center;
    a {
      font-size: 12px;
      text-decoration: underline;
      color: #AE1E22;
      &:hover,
      &:active {
        text-decoration: none;
      }
    }
    .join-message {
      font-size: 12px;
      margin-top: 15px;
      padding: 15px 0 10px 0;
      // border-top: 1px solid #595959;
      a {
        color: #212529 !important;
        cursor: pointer;
      }
    }
  }
  .form-control {
    width: 100%;
  }
  .form-group {
    width: 100%;
  }
  button {
    margin: 0 auto 10px auto;
    width: 100%;
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
`;
const LoginForm = (props) => {
  const dispatch = useDispatch();
  const path = props.location.pathname.split('/');
  const isCheckout = path[1] === 'checkout';

  const {register, handleSubmit} = useForm({
    mode: "onBlur"
  });
  const [showSignupModal, setShowSignupModal] = useState(false);

  const fetchSavedData = (key) => {
    let data = Storage.GetLocalStorageValue(KEY_LOGIN_COOKIE);
    let parsedData = data ? JSON.parse(atob(data)) : null;
    return parsedData ? parsedData[key] : null;
  }
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [username, setUsername] = useState(() => {
    return fetchSavedData('username') || '';
  });

  const [password, setPassword] = useState(() => {
    return fetchSavedData('password') || '';
  });

  const [rememberMe, setRememberMe] = useState(() => {
    return !!username;
  });

  const firstname = fetchSavedData('firstname');
  const showWelcomeBlock = Storage.GetLocalStorageValue(KEY_LOGIN_COOKIE) && username ? true : false;


  const saveLoginInStorage = (firstname) => {
    const loginDetails = {
      username: username,
      password: password,
      firstname: firstname
    }
    Storage.SetLocalStorageValue(KEY_LOGIN_COOKIE, btoa(JSON.stringify(loginDetails)));
  }

  const clearLoginFromStorage = () => {
    Storage.ClearLocalStorageValue(KEY_LOGIN_COOKIE);
  }

  const reset = (e) => {
    e.preventDefault();
    // clearLoginFromStorage();
    setUsername('');
    setPassword('');
    setRememberMe(false);
    return false;
  }

  const onLoginSuccess = async (data) => {
    if (rememberMe) {
      saveLoginInStorage(data.user.profile.firstName);
    } else {
      clearLoginFromStorage();
    }
    dispatch(login(data));
    props.onSignIn && props.onSignIn();
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    let responseMessage = null;
    auth.authClient.signIn({
      username: username,
      password: password
    })
      .then(res => {
        switch (res.status) {
          case 'LOCKED_OUT':
            responseMessage = 'Your account has been locked.';
            setMessage(responseMessage);
            break;
          case 'PASSWORD_EXPIRED':
            responseMessage = '';
            break;
          case 'PASSWORD_RESET':
            responseMessage = '';
            break;
          case 'PASSWORD_WARN':
            responseMessage = '';
            break;
          case 'RECOVERY':
            responseMessage = '';
            break;
          case 'SUCCESS':
            onLoginSuccess(res);
            break;
          default:
            responseMessage = 'The username or password entered are invalid. Please try again.';
            setMessage(responseMessage);
            break;
        }
        setIsSubmitting(false);
      })
      .catch(err => {
        responseMessage = 'The username or password entered are invalid. Please try again.';
        setMessage(responseMessage);
        setIsSubmitting(false);
        console.log(err);
      });

  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSignup = (e) => {
    if (isCheckout) {
      if (props.hasOwnProperty('onSignUpLoad')) {
        props.onSignUpLoad();
      }
      setShowSignupModal(true);
      e.preventDefault();
      return false;
    } else {
      navigate("/joinhellorewards");
    }
  }

  const handleHideSignupModal = () => {
    setShowSignupModal(false);
    // handleDropdown();
  }

  return (
    <>
      {message !== null ? <p className={`okta-toggle-message text-danger text-center px-3`}>{message}</p> : null}
      {showWelcomeBlock ?
        <WelcomeBlock className={`loginWelcome`} displayWelcome={props.displayWelcome}>
          <span>Welcome Back!</span>
          <hr/>
          <Title5 className={`text-center`}>{props.welcomeSubHeading || 'Sign In'}</Title5>
        </WelcomeBlock> : ''
      }
      <StyledForm onSubmit={handleSubmit(onSubmit)} className={`${props.className}`}>
        <>
          <Form.Group controlId={`email`} as={`div`} lg={props.controlColSize || 6}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type={`email`}
              name={`email`}
              placeholder={`E-mail`}
              value={username}
              ref={register}
              onChange={handleUsernameChange}
              required
            />
          </Form.Group>
          <Form.Group controlId={`password`} as={`div`} lg={props.controlColSize || 6}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={`password`}
              name={`password`}
              placeholder={`Password`}
              value={password}
              ref={register}
              onChange={handlePasswordChange}
              data-private={`lipsum`}
              required
            />
          </Form.Group>
        </>
        <Row>
          <Form.Group controlId={`rememberUser`} as={Col}>
            <Form.Check name={`rememberMe`} label="Remember me" checked={rememberMe} onChange={handleRememberMe}/>
          </Form.Group>
        </Row>
        <div className={`form-actions`}>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? `Please wait...` : `SIGN IN`}
          </Button>
          <Link className={`help-link`} to={`/forgot-password`}>
            NEED HELP SIGNING IN?
          </Link>
          <div className={`join-message`}>
            {showWelcomeBlock ?
              <><span>Not {`${firstname}`}? </span>
                <a href={void (0)} onClick={reset}>Sign In</a> <span>or</span></>
              : null
            }
            <Link to={`/joinhellorewards`} onClick={handleSignup}>Join Now</Link>
          </div>
        </div>
      </StyledForm>
      {showSignupModal && <SignupModal show={showSignupModal} onHide={handleHideSignupModal}/>}
    </>
  );
};

export default LoginForm;
