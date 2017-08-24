import React from "react";
import HomePage from "./BeatMix/HomePage";
import AboutUs from "./BeatMix/AboutUs";
import WhyBeatMix from "./BeatMix/WhyBeatMix";
import Artists from "./BeatMix/Artists";
import Events from "./BeatMix/Events";
import ContactUs from "./BeatMix/ContactUs";
import Admin from "./BeatMix/Admin";
import Page404 from "./BeatMix/common/404";

import { Switch, Route } from "react-router-dom";

const AppRoutes = () =>
  <div>
    <Switch>
      <Route name="HomePage" exact path="/" component={HomePage} />
      <Route name="AboutUs" exact path="/AboutUs" component={AboutUs} />
      <Route
        name="WhyBeatMix"
        exact
        path="/WhyBeatMix"
        component={WhyBeatMix}
      />
      <Route name="Artists" exact path="/Artists" component={Artists} />
      <Route name="Events" exact path="/Events" component={Events} />
      <Route name="ContactUs" exact path="/ContactUs" component={ContactUs} />
      <Route name="Admin" exact path="/Admin" component={Admin} />
      <Route path="*" component={Page404} />
    </Switch>
  </div>;

export default AppRoutes;
