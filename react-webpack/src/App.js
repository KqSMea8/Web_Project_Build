import React, { Component } from "react";
import { hot } from "react-hot-loader";
import {
  HashRouter as Router // HashRouter / BrowserRouter
} from "react-router-dom";
import { renderRoutes } from "react-router-config";

import "normalize.css";
import "./styles.scss";
import RouterLink from "./views/RouterLink";
import ContnetRouter from "./views/Content/router";

// 合并路由
const routes = [...ContnetRouter];

class App extends Component {
  render() {
    return (
      <div className="screen">
        <div className="slider-container">
          <RouterLink />
        </div>
        <div className="layout">{renderRoutes(routes)}</div>
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
