import React from "react";
import PullDownMenu from "/@component/PullDownMenu";
import Avatar from "/@component/Avatar";
import Home from "/@/containers/Home";

import "./App.scss";
import { isPC } from '../utils/index';
import MobilePage from './containers/MobilePage/index';

function App() {
  console.log(isPC)
  return (
    <div className="App">
      {!isPC ? <MobilePage/> : <Home />}
    </div>
  );
}

export default App;
