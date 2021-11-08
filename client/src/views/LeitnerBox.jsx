import React, { useState } from "react";

import LeitnerTimeLine from "../components/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineButton from "../components/LeitnerTimeLineButton";

const LeitnerBox = () => {
  const [selectedDate, setSelectedDate] = useState(11);

  const pressedMe = () => {
    setSelectedDate(selectedDate > 63 ? 1 : selectedDate + 1);
    console.log(selectedDate);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <LeitnerTimeLine selectedDay={selectedDate} />
      <LeitnerTimeLineDayIndicator selectedDay={selectedDate} />
      <LeitnerTimeLineButton pressedMe={pressedMe} />
    </div>
  );
};

export default LeitnerBox;
