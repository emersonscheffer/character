import React from "react";

const LeitnerTimeLineStudyButton = ({ pressedMe, buttonTxt, activeButton }) => {
  return (
    <div
      onClick={activeButton ? pressedMe : null}
      style={{
        width: "120px",
        height: "80%",
        backgroundColor: activeButton ? "beige" : "lightGrey",
        display: "grid",

        MozUserSelect: "none",
        WebkitUserSelect: "none",
        MsUserSelect: "none",
        unselectable: "on",

        justifySelf: "center",
        alignSelf: "center",
        gridArea: "studyBtn"
      }}
    >
      <h1 style={{ alignSelf: "center", justifySelf: "center" , color: activeButton ? "black" : "grey", }}>
        {buttonTxt}
      </h1>
    </div>
  );
};

export default LeitnerTimeLineStudyButton;


// <div 
//  style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" 
//  unselectable="on"
//  onselectstart="return false;" 
//  onmousedown="return false;">
//     Blabla
// </div>