import React from "react";

const HomeSideMenu = ({ area, selectFn }) => {

  const selectAndSend = (page) => {
    selectFn(page)
  }

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100%",
        height: "100vh",
        gridArea: area,
        display: "grid",
        gridTemplateRows: "50px"
      }}
    >
      
      <h1 onClick={()=> selectAndSend("home")}>Home</h1>
      <h1 onClick={()=> selectAndSend("leitner_box")}>Leitner Box</h1>
    </div>
  );
};

export default HomeSideMenu;
