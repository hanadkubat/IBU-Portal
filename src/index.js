import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//global bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

//active directory setup
/*import b2cauth from "react-azure-adb2c";
b2cauth.initialize({
  instance: "https://login.microsoftonline.com/tfp/",
  tenant: "skikaportal.onmicrosoft.com",
  signInPolicy: "B2C_1_react_signup",
  applicationId: "415e7c68-fa05-4a25-8d84-a8a94f8f9afb",
  cacheLocation: "sessionStorage",
  scopes: ["https://skikaportal.onmicrosoft.com/api/user_impersonation"],
  redirectUri: "http://localhost:3000",
  postLogoutRedirectUri: window.location.origin
});

b2cauth.run(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  serviceWorker.unregister();
});*/

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
