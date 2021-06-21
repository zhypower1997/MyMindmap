import React, { useState } from "react";
import Down from "/@/assets/svgs/Down.tsx";
import classnames from "classnames";

import "./index.scss";

interface PullDownMenuProps {
  title: string;
  content: {
    label: string;
    value: string;
  }[];
  onSelect: Function;
}

function PullDownMenu(props: PullDownMenuProps) {
  const {
    onSelect = () => null,
    content = [
      { label: "dssdsd", value: "sdsdsd" },
      { label: "dssssddsd", value: "sdsdsd" },
    ],
  } = props;
  const [showContent, setShowContent] = useState(false);
  const [hoverIndex, setHoverIndex] = useState();

  return (
    <div
      className="c-pull-down-menu"
      onMouseOver={() => setShowContent(true)}
      onMouseOut={() => setShowContent(false)}
    >
      <span className="c-pull-down-menu-title">
        下拉框
        <div style={{ fontSize: "16px" }}>
          <Down />
        </div>
      </span>
      <div
        className="c-pull-down-menu-content"
        style={{ display: `${showContent ? "block" : "none"}` }}
      >
        {content.map((item, index) => {
          return (
            <div
              onMouseOver={() => setHoverIndex(index)}
              onMouseOut={() => setHoverIndex()}
              onClick={() => onSelect(item, index)}
              className={classnames("c-pull-down-menu-content-item", {
                "c-pull-down-menu-content-item-selected": hoverIndex == index,
              })}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PullDownMenu;
