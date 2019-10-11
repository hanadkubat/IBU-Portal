import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Dashboard from "./app/Dashboard";
import Logout from "./app/Logout";

import { Provider } from "react-redux";
import store from "./store";

//react-toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}

export default App;
