import React from "react";
import PullDownMenu from "/@component/PullDownMenu";
import Avatar from "/@component/Avatar";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <PullDownMenu
        title="肥宅的选择"
        width="200px"
        content={[
          { label: "吃dssdd饭", value: "sdsdd" },
          { label: "睡觉", value: "sdsd水d" },
        ]}
        onSelect={(a, b) => {
          console.log(a, b);
        }}
      />
      <PullDownMenu
        title="肥宅的选择"
        width="200px"
        content={[
          { label: "吃饭", value: "sdsdd" },
          { label: "睡s觉", value: "sdsd水d" },
        ]}
        onSelect={(a, b) => {
          console.log(a, b);
        }}
      />
      <Avatar />
    </div>
  );
}

export default App;
