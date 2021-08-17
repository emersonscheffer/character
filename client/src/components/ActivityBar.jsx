import React from "react";
import ABTab from "./ABTab";
import ABBar from "./ABBar";

const ActivityBar = () => {
  return (
    <div
      style={{
        //backgroundColor: "lightGray",
        height: "auto",
        display: "grid",
        gridAutoRows: "minmax(30px, 30px)",
        gridTemplateColumns: "repeat(8, 1fr)",
      }}
    >
      <ABBar />
      <ABTab />
    </div>
  );
};

export default ActivityBar;
