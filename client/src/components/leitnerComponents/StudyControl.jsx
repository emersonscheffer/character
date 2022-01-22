import React from "react";

const StudyControl = ({ area, studyBtnFN, studyBtnStatus }) => {
  return (
    <div style={{ gridArea: area, backgroundColor: "yellow", display: "grid" }}>
      <div
        onClick={studyBtnStatus ? studyBtnFN : null}
        style={{ width: "100px", height: "60px", backgroundColor: studyBtnStatus ?  "blue" : "gray"}}
      >
        study btn
      </div>
    </div>
  );
};

export default StudyControl;
