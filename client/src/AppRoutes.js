import React from "react";
import HomePage from "./BeatMix/HomePage";
import AboutUs from "./BeatMix/AboutUs";
import Artists from "./BeatMix/Artists";
import Gallery from "./BeatMix/Gallery";
import WhyBeatMix from "./BeatMix/WhyBeatMix";
import ContactUs from "./BeatMix/ContactUs";
import Page404 from "./BeatMix/common/404";

import { Switch, Route } from "react-router-dom";

const AppRoutes = () =>
  <div className="container">
    <Switch>
      <Route name="HomePage" exact path="/" component={HomePage} />
      <Route name="AboutUs" exact path="/AboutUs" component={AboutUs} />
      <Route name="Artists" exact path="/Artists" component={Artists} />
      <Route name="Gallery" exact path="/Gallery" component={Gallery} />
      <Route
        name="WhyBeatMix"
        exact
        path="/WhyBeatMix"
        component={WhyBeatMix}
      />
      <Route name="ContactUs" exact path="/ContactUs" component={ContactUs} />
      <Route path="*" component={Page404} />
    </Switch>
  </div>;

export default AppRoutes;
