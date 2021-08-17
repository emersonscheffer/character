import React, { useState } from "react";

const ABBar = () => {
  const [barHeight, setBarHeight] = useState("1/2");
  const [barStyle, setBarStyle] = useState("bar-style");

  return (
    <div
      className={barStyle}
      onMouseOver={() => setBarStyle("bar-style-hover")}
      onMouseOut={() => setBarStyle("bar-style")}
      style={{ gridColumn: "1/9" }}
    ></div>
  );
};

export default ABBar;
