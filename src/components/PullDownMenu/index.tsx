import React, { useState } from "react";
import Up from "/@/assets/svgs/Up";
import classnames from "classnames";

import "./index.scss";

interface PullDownMenuProps {
  title: string;
  width?: string;
  content: {
    label: string;
    value: string;
  }[];
  onSelect: Function;
}

function PullDownMenu(props: PullDownMenuProps) {
  const {
    title = "下拉框",
    width = "auto",
    onSelect = () => null,
    content = [
      { label: "dssdsd", value: "sdsdsd" },
      { label: "dssssddsd", value: "sdsdsd" },
    ],
  } = props;
  const [showContent, setShowContent] = useState(false);
  const [showTitle, setShowTitle] = useState(title);
  const [firstHover, setFirstHover] = useState(false);

  const [hoverIndex, setHoverIndex] = useState();

  return (
    <div
      className="c-pull-down-menu"
      style={{ width: width }}
      onMouseOver={() => {
        setShowContent(true);
        setFirstHover(true);
      }}
      onMouseOut={() => setShowContent(false)}
    >
      <span
        className={classnames("c-pull-down-menu-title", {
          "c-pull-down-menu-title-hover": showContent,
        })}
      >
        {showTitle}
        <div
          className={classnames({
            down: showContent && firstHover,
            up: !showContent && firstHover,
          })}
          style={{ width: "20px", marginLeft: "5px" }}
        >
          <Up color={showContent ? "#60ceae" : "#666"} size="16" />
        </div>
      </span>
      <div
        className={classnames("c-pull-down-menu-content", {
          hover: showContent,
        })}
        style={{
          visibility: `${showContent ? "visible" : "hidden"}`,
          minWidth: width,
        }}
      >
        {content.map((item, index) => {
          return (
            <div
              key={`c-pull-down-menu-content-${index}`}
              onMouseOver={() => setHoverIndex(index)}
              onMouseOut={() => setHoverIndex()}
              onClick={() => {
                onSelect(item, index);
                setShowTitle(item.label);
                setShowContent(false);
              }}
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
