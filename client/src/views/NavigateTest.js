import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const NavigateTest = () => {
  let navigate = useNavigate();

  const [gotoPage, setGotopage] = useState(false);

  const gotoFn = () => {
    if (gotoPage) {
      return navigate("/character");
    }
  };

  return (
    <div style={{ backgroundColor: "gray", width: "500px", height: "400px" }}>
      {gotoFn()}
      hello
      <button onClick={() => setGotopage(true)}>Prees Me</button>
    </div>
  );
};

export default NavigateTest;
