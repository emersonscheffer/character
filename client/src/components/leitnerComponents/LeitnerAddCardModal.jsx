import React, { useState } from "react";

const LeitnerAddCardModal = ({
  openCloseModal,
  displayModal,
  addCardToDeck,
}) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  return (
    <div
      style={{
        display: displayModal ? "block" : "none",
        position: "fixed",
        zIndex: "1",
        paddingTop: "100px",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgb(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          backgroundColor: "#fefefe",
          margin: "auto",
          padding: "20px",
          border: "1px solid #888",
          width: "80%",
        }}
      >
        <input
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Front"
          name="front"
          value={cardFront}
          onChange={(e) => setCardFront(e.target.value)}
        />
        <input
          type="text"
          placeholder="Back"
          name="back"
          value={cardBack}
          onChange={(e) => setCardBack(e.target.value)}
        />

        <button
          onClick={addCardToDeck.bind(this, { cardTitle, cardFront, cardBack })}
        >
          Add
        </button>
        <button onClick={openCloseModal} type="">
          Close ×
        </button>

        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
      </div>
    </div>
  );
};

export default LeitnerAddCardModal;
