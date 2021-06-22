import React from "react";
import PullDown from "/@component/PullDownMenu";
import Avatar from "/@component/Avatar";

import "./index.scss";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-item">
          <Avatar />
        </div>
        <div className="home-header-item">
          <PullDown
            title="sdsd"
            content={[{ label: "sdsfd", value: "sd" }]}
            onSelect={() => {}}
            width="200px"
          />
        </div>
      </div>
      <div className="home-content">
        <div className="home-content-left"></div>
        <div className="home-content-right"></div>
      </div>
    </div>
  );
}

export default Home;
