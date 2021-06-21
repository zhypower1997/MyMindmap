import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Avatar from "../Avatar";

import "./index.scss";

function PullDownMenu() {
  return (
    <div className="c-pull-down-menu">
      <Router>
        <Link to="/g/dss">
          <div>sdlskjdjdkjsldsd</div>
        </Link>
        <Route path="/g/dss" component={Avatar} />
      </Router>
    </div>
  );
}

export default PullDownMenu;
