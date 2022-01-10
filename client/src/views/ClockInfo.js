import React, { useState, useEffect } from "react";

const ClockInfo = () => {
  const theDate = new Date();
  const hour = theDate.getHours();
  const minute = theDate.getMinutes();
  const day = theDate.getDate();
  const month = theDate.getMonth();
  const weekDay = theDate.getDay();

  //  console.log(theDate.getDate()); // day of the month
  //  console.log(theDate.getMonth()); // month 0 - 11
  //   console.log(theDate.getDay()); // day of week 0 - 6

  const [hours, setHours] = useState(hour);
  const [minutes, setMinutes] = useState(minute);
  const [divider, setDivider] = useState(true);
  const [dayMonth, setDayMonth] = useState(day);
  const [monthYear, setMonthYear] = useState(month);
  const [dayWeek, setDayWeek] = useState(weekDay);
  const [am, setAm] = useState(true);

  const renderMonth = () => {
    switch (monthYear) {
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "Mar";
      case 3:
        return "Apr";
      case 4:
        return "May";
      case 5:
        return "Jun";
      case 6:
        return "Jul";
      case 7:
        return "Ago";
      case 8:
        return "Set";
      case 9:
        return "Out";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
      default:
        return "";
    }
  };

  const renderDayWeek = () => {
    switch (dayWeek) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      default:
        return "";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDivider(!divider);
      setHours(hour + 12 - 24);
      setMinutes(minute);
      setDayMonth(day);
      setMonthYear(month);
      setDayWeek(weekDay);

      if (hour > 11) {
        setAm(false);
      }

    }, 1000);
    return () => clearInterval(interval);
  }, [divider, hour, minute, day, month, weekDay]);

  return (
    <div
      style={{
        backgroundColor: "rgb(200, 200, 200)",
        width: "400px",
        height: "300px",
        display: "grid",
      }}
    >
      <div
        style={{
          fontFamily: "helveticaNeue",
          justifySelf: "center",
          alignSelf: "center",
          //   backgroundColor: "gray",
          width: "50%",
          height: "40%",
          display: "grid",
          gridTemplate: `
            ". .... . ..... . ....... . ....... . ... . ..... ." 10px
            ". am . hours . divider . minutes . bar . dayweek ." 1fr
            ". . . hours . divider . minutes . bar . month ." 0.3fr
            ". pm . hours . divider . minutes . bar . day ." 1fr
            ". .... . ..... . ....... . ....... . ... . ..... ." 10px
            / 5px 1fr 2px 2fr 2px 15px 2px 2fr 2px 5px 2px 1fr 5px

          `,
        }}
      >
        {/*   AM PM   */}
        {/*   AM PM   */}
        <div
          style={{
            gridArea: "am",
            fontSize: "14px",
            alignSelf: "end",
            // backgroundColor: "blue",
          }}
        >
          {am ? "AM" : ""}
        </div>

        {/*   AM PM   */}
        {/*   AM PM   */}
        <div
          style={{
            gridArea: "pm",
            fontSize: "14px",
            alignSelf: "start",
            // backgroundColor: "blue",
          }}
        >
          {am ? "" : "PM"}
        </div>

        {/*   HOURS   */}
        {/*   HOURS   */}
        <div
          style={{
            gridArea: "hours",
            alignSelf: "center",
            justifySelf: "end",
            // backgroundColor: "blue",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>{hours === 0 ? 12 : hours === -12 ? 12 : hours}</h1>
        </div>
        {/* font-size: calc(2vw + 2vh + 2vmin); */}

        {/*   DIVIDER   */}
        {/*   DIVIDER   */}
        <div
          style={{
            gridArea: "divider",
            alignSelf: "center",
            // backgroundColor: "blue",
          }}
        >
          {divider ? <h1 style={{ fontSize: "50px" }}>:</h1> : null}
        </div>

        {/*   MINUTES   */}
        {/*   MINUTES   */}
        <div
          style={{
            gridArea: "minutes",
            alignSelf: "center",
            // backgroundColor: "blue",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>{minutes}</h1>
        </div>

        {/*   BAR   */}
        {/*   BAR   */}
        <div
          style={{
            backgroundColor: "rgb(100,100,100)",
            width: "100%",
            height: "50%",
            gridArea: "bar",
            alignSelf: "center",
          }}
        ></div>

        {/*   DAY WEEK   */}
        {/*   DAY WEEK   */}
        <div
          style={{
            gridArea: "dayweek",
            fontSize: "14px",
            alignSelf: "end",
            justifySelf: "center",
            // backgroundColor: "blue",
          }}
        >
          {renderDayWeek()}
        </div>

        {/*   MONTH   */}
        {/*   MONTH   */}
        <div
          style={{
            gridArea: "month",
            fontSize: "14px",
            alignSelf: "end",
            justifySelf: "center",
            // backgroundColor: "blue",
          }}
        >
          {renderMonth()}
        </div>

        {/*   DAY   */}
        {/*   DAY   */}
        <div
          style={{
            gridArea: "day",
            fontSize: "14px",
            alignSelf: "start",
            justifySelf: "center",
          }}
        >
          {dayMonth}
        </div>
      </div>
    </div>
  );
};

export default ClockInfo;
