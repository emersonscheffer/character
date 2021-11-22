import React from "react";

const LeitnerTimeLineButton = ({ pressedMe, buttonTxt, isDisabled }) => {
  return (
    <div
      onClick={isDisabled ? null : pressedMe}
      style={{
        width: "120px",
        height: "80%",
        backgroundColor: isDisabled ? "lightGrey" : "beige",
        display: "grid",
        //margin: "20px",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        MsUserSelect: "none",
        unselectable: "on",
        //gridColumn: "1/6",
        justifySelf: "center",
        alignSelf: "center"
      }}
    >
      <h1 style={{ alignSelf: "center", justifySelf: "center" , color: isDisabled ? "grey" : "black", }}>
        {buttonTxt}
      </h1>
    </div>
  );
};

export default LeitnerTimeLineButton;



// <div 
//  style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" 
//  unselectable="on"
//  onselectstart="return false;" 
//  onmousedown="return false;">
//     Blabla
// </div>