import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./BeatMix/common/Header";
import AppRoutes from "./AppRoutes";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <AppRoutes />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("react-app"));
