import React from "react";
import PullDownMenu from "/@component/PullDownMenu";
import Avatar from "/@component/Avatar";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <PullDownMenu
        onSelect={(a, b) => {
          console.log(a, b);
        }}
      />
      <Avatar />
    </div>
  );
}

export default App;
