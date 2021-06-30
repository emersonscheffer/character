import React from "react";
import ABTab from "./ABTab";
import ABBar from "./ABBar";

const ActivityBar = () => {
  return (
    <div
      style={{
        //backgroundColor: "lightGray",
        height: "60px",
        display: "grid",
        gridTemplateRows: "repeat(2, 1fr)",
        gridTemplateColumns: "repeat(8, 1fr)",
      }}
    >
        <ABBar />
      <ABTab />
    </div>
  );
};

export default ActivityBar;
