import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

import Header from "./BeatMix/common/Header";
import ContactUsPopOut from "./BeatMix/ContactUs-Popout";
import AppRoutes from "./AppRoutes";
import Footer from "./BeatMix/common/footer.js";


WebFont.load({
  google: {
    families: ["Oswald", "sans-serif", "Arimo"]
  }
});

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <ContactUsPopOut />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("react-app"));
