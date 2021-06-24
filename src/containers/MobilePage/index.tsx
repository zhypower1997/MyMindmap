import React from "react";
import Pc from '/@/assets/svgs/Pc.svg'

import "./index.scss";

function MobilePage() {
  return (
    <div className="mobile-page">
        <div className="mobile-page-icon"><img src={Pc} alt="" /></div>
        <div className="mobile-page-text">请使用pc打开</div>
    </div>
  );
}

export default MobilePage;
