import React, { useState, useEffect } from "react";

import LeitnerTimeLine from "../components/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineButton from "../components/LeitnerTimeLineButton";
import LeitnerCardList from "../components/LeitnerCardsList";

const LeitnerBox = () => {
  const currentTodayDate = new Date();
  const todayDay = currentTodayDate.getDate();
  const todayMonth = currentTodayDate.getMonth();

  // compare date with the saved one,

  // localStorage.setItem(
  //   "mdat",
  //   JSON.stringify({
  //     name: "mig",
  //     leitnerDay: 1,
  //     currentDay: 1,
  //     currentMonth: 1,
  //     studyStarted: false
  //   })
  // );

  const mDat = JSON.parse(localStorage.getItem("mdat"));

  if (mDat) {
    if (todayMonth === mDat["currentMonth"]) {
      if(todayDay === mDat["currentDay"]){
        //console.log("got here")
        //disable button here




      } else {
        // button status : Able -  button pressed moves leitnerDay to next day and save in localStorage



      }
    } else {

      // if studyStarted === false
      // start study
      // else 
      // move to next day and save new leitnerDay



      // save new date in local storage
      
      localStorage.setItem(
        "mdat",
        JSON.stringify({
          name: "mig",
          leitnerDay: 1,
          currentDay: todayDay,
          currentMonth: todayMonth,
          studyStarted: false
        })
      );
  
    }
  } else {
    localStorage.setItem(
      "mdat",
      JSON.stringify({
        name: "mig",
        leitnerDay: 1,
        currentDay: todayDay,
        currentMonth: todayMonth,
        studyStarted: false
      })
    );
  }
  


  const [leitnerDay, setLeitnerDay] = useState(mDat["leitnerDay"]);

  const pressedMe = () => {
    setLeitnerDay(leitnerDay > 63 ? 1 : leitnerDay + 1);

    localStorage.setItem(
      "mdat",
      JSON.stringify({
        name: "mig",
        leitnerDay: leitnerDay + 1,
        currentDay: todayDay,
        currentMonth: todayMonth,
        studyStarted: false
      })
    );
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <LeitnerTimeLine leitnerDay={leitnerDay} />
      <LeitnerTimeLineDayIndicator leitnerDay={leitnerDay} />
      <LeitnerTimeLineButton pressedMe={pressedMe} isDisabled={false} buttonTxt={"Study"}/>
      <LeitnerCardList />
    </div>
  );
};

export default LeitnerBox;
