import React from "react";
import "../../css/style.css";

const DeckListItem = ({ subject, quantity, added, addFn }) => {
  return (
    <div
      style={{
        height: "45px",
        backgroundColor: "rgb(10, 10, 10)",
        width: "450px",
        display: "grid",
        gridTemplate: `
            ". title . info add_btn"
            / 15px 1fr 5px 50px 50px
        `,
        borderRadius: "10px",
        boxShadow: "1px 2px 5px",
        marginBottom: "20px",
      }}
    >
      <h1
        style={{
          color: "white",
          alignSelf: "center",
          justifySelf: "start",
          gridArea: "title",
        }}
      >
        {subject}
      </h1>

      {/*     Info     */}
      {/*     Info     */}
      <div
        style={{
          gridArea: "info",
          backgroundColor: "rgb(150, 150, 150)",
          display: "grid",
        }}
      >
        <h1 style={{ alignSelf: "center", justifySelf: "center" }}>
          {quantity}
        </h1>
      </div>

      {/*     Add Btn     */}
      {/*     Add Btn     */}
      <div
        className={added ? "add_btn_added" : "add_deck_btn"}
        onClick={()=>addFn()}
        style={{
          height: "45px",
            // backgroundColor: "rgb(200, 200, 200)",
          width: "100%",
          gridArea: "add_btn",
          display: "grid",
          borderRadius: "0px 10px 10px 0px",
        }}
      >
          <div style={{width:"100%", height: "100%", borderRadius: "0px 10px 10px 0px", display:"grid"}}>

          <h1 style={{ alignSelf: "center", justifySelf: "center" }}>{added ? "Added" : "Add"}</h1>

          </div>
        {/*  */}
      </div>
    </div>
  );
};

export default DeckListItem;
