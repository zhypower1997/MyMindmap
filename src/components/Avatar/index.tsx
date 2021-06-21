import React, { useState } from "react";
import DefaultAvatar from "/@/assets/images/defaultAvatar.png";

import "./index.scss";

interface AvatarProps {
  img?: string;
  type?: "round" | "rect";
  border?: {
    color: string;
    thickness: string;
  };
  size?: string;
}

function Avatar(props: AvatarProps) {
  const {
    img,
    type = "round",
    size = "50px",
    border = { color: "#eee", thickness: "1px" },
  } = props;
  return (
    <div
      className="c-avatar"
      style={{
        width: size,
        height: size,
        border: `${border.color} solid ${border.thickness}`,
        backgroundImage: `url(${
          img == undefined ? DefaultAvatar : img
        }), url(${DefaultAvatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: `${type == "round" ? "50%" : "10px"}`,
      }}
    ></div>
  );
}

export default Avatar;
