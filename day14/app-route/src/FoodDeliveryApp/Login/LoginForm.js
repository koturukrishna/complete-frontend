import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./Login.css";
import GoogleAuthentication from "../Authentication/GoogleAuth";

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      navigate("/");
    }
  }, [navigate]);

  const [state, setState] = useState({
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
  });

  const onChangeUsername = (event) => {
    setState((prevState) => ({ ...prevState, username: event.target.value }));
  };

  const onChangePassword = (event) => {
    setState((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
      path: "/",
    });
    console.log("succeed");

    navigate("/");
  };

  const onSubmitFailure = (errorMsg) => {
    setState((prevState) => ({
      ...prevState,
      showSubmitError: true,
      errorMsg,
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = state;
    const userDetails = { username, password };
    let re = /\S+@\S+\.\S+/;
    if (re.test(username) && password.length > 6) {
      console.log("login success");
      onSubmitSuccess("JSON WEBTOKEN CORRECT");
    } else {
      console.log("login not success error");
      onSubmitFailure("please enter correct email and password");
    }
  };

  return (
    <React.Fragment>
      <div className="login-form-container">
        <form className="form-container" onSubmit={submitForm}>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              EMAIL-ID
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="username-input-field"
              value={state.username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input-field"
              value={state.password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <GoogleOAuthProvider clientId="1099011761510-qbmcrmeboj3a114b6j07rvnle2n1fopn.apps.googleusercontent.com">
              <p className="mt-2 text-center">sign in with google</p>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // console.log(credentialResponse.credential);
                  onSubmitSuccess(credentialResponse.credential);
                }}
                onError={() => {
                  console.log("Login Failed");
                  onSubmitFailure("google authentication failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {state.showSubmitError && (
            <p className="error-message">{state.errorMsg}</p>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
