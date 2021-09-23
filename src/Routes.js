import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./casely/landing";
// import Footer from './components/footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
