import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeckList from "../components/leitnerComponents/DeckList";
import DeckListItem from "../components/leitnerComponents/DeckListItem";
import ClockInfo from "./ClockInfo";
import HomeSideMenu from "./HomeSideMenu";
import LeitnerBox from "./LeitnerBox";

const AppHome = () => {

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.usersReducer);
  const [page, setPage] = useState("home");

  const selectPageFn = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "gray",
        width: "100%",
        display: "grid",
        gridTemplate: `
            "side_menu content"
            / 50px 1fr
        `,
      }}
    >
      <HomeSideMenu
        area="side_menu"
        selectFn={(selectedPage) => selectPageFn(selectedPage)}
      />

      {page === "home" ? (
        <div>
          <h1>This is Home </h1>

          <ClockInfo />
        </div>
      ) : null}
      {page === "leitner_box" ? (
        user.studyStarted ? (
          <LeitnerBox area="content" />
        ) : (
          <DeckList area="content" />
        )
      ) : null}
    </div>
  );
};

export default AppHome;
