import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const GoogleAuth = () => {
  return (
    <div>
      <p className="mt-2">sign in with google</p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

const GoogleAuthentication = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="1099011761510-qbmcrmeboj3a114b6j07rvnle2n1fopn.apps.googleusercontent.com">
        <GoogleAuth />
        <p className="mt-2">sign in with google</p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuthentication;
