import React from "react";

const LeitnerAddCardModal = () => {
  return (
    <div
      style={{
        display: "block",
        position: "fixed",
        zIndex: "1",
        paddingTop: "100px",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgb(0,0,0,0.4)",
      }}
    >
      <div style={{
          backgroundColor: "#fefefe",
          margin: "auto",
          padding:"20px",
          border: "1px solid #888",
          width: "80%"
      }}>
          <form action="">
              <input type="text" />
                
          </form>
          <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default LeitnerAddCardModal;
