import React, { useState, useEffect } from "react";

const ClockInfo = () => {
  const theDate = new Date();
  const hour = theDate.getHours();
  const minute = theDate.getMinutes();
  const day = theDate.getDate();
  const month = theDate.getMonth();
  const weekDay = theDate.getDay();

  const decimal = String((minute % 100) - (minute % 10));

  const hourMath = hour + 12 - 24;
  const hourSet = hourMath === 0 ? 12 : hourMath === -12 ? 12 : hourMath;

  const [hour1, setHour1] = useState();
  const [hour2, setHour2] = useState();
  const [minute1, setMinute1] = useState();
  const [minute2, setMinute2] = useState();
  const [divider, setDivider] = useState(true);
  const [dayMonth, setDayMonth] = useState();
  const [monthYear, setMonthYear] = useState();
  const [dayWeek, setDayWeek] = useState();
  const [am, setAm] = useState();

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

      setHour1(hourSet < 10 ? 0 : 1);
      setHour2(hourSet);
      setMinute1(decimal[0]);
      setMinute2(minute % 10);
      setDayMonth(day);
      setMonthYear(month);
      setDayWeek(weekDay);

      if (hour > 11) {
        setAm(false);
      } else {
        setAm(true);
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
          // backgroundColor: "gray",
          width: "50%",
          height: "40%",
          display: "grid",
          gridTemplate: `
            ". .. . ..... ..... . ....... . ....... ....... . ... . ....... ." 10px
            ". am . hour1 hour2 . divider . minute1 minute2 . bar . dayweek ." 1fr
            ". .. . hour1 hour2 . divider . minute1 minute2 . bar . month ." 0.3fr
            ". pm . hour1 hour2 . divider . minute1 minute2 . bar . day ." 1fr
            ". .. . ..... ..... . ....... . ....... ....... . ... . ....... ." 10px
            / 5px 1fr 2px 1fr 1fr 2px 15px 2px 1fr 1fr 2px 5px 2px 1fr 5px

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

        {/*   HOUR1   */}
        {/*   HOUR1   */}
        <div
          style={{
            gridArea: "hour1",
            alignSelf: "center",
            justifySelf: "end",
            // backgroundColor: "blue",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>{hour1}</h1>
        </div>

        {/*   HOUR2   */}
        {/*   HOUR2   */}
        <div
          style={{
            gridArea: "hour2",
            alignSelf: "center",
            justifySelf: "end",
            // backgroundColor: "blue",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>{hour2}</h1>
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

        {/*   MINUTE1   */}
        {/*   MINUTE1   */}
        <div
          style={{
            gridArea: "minute1",
            alignSelf: "center",
            // backgroundColor: "blue",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>{minute1}</h1>
        </div>

        {/*   MINUTE2   */}
        {/*   MINUTE2   */}
        <div
          style={{
            gridArea: "minute2",
            alignSelf: "center",
            // backgroundColor: "blue",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>{minute2}</h1>
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
