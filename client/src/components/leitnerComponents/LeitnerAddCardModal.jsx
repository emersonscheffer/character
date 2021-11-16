import React, { useState } from "react";

const LeitnerAddCardModal = ({
  openCloseModal,
  displayModal,
  addCardToDeck,
}) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardFormality, setCardFormality] = useState("-");
  const [cardMeaning, setCardMeaning] = useState("");
  const [cardExample1, setCardExample1] = useState("");
  const [cardExample2, setCardExample2] = useState("");
  const [cardExample3, setCardExample3] = useState("");

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

        <label htmlFor="Formality">Formality</label>
        <select
          name="Formality"
          id=""
          onChange={(e) => setCardFormality(e.target.value)}
        >
          <option value="-">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <input
          type="text"
          placeholder="Meaning"
          name="meaning"
          value={cardMeaning}
          onChange={(e) => setCardMeaning(e.target.value)}
        />
        <input
          type="text"
          placeholder="Example 1"
          name="example1"
          value={cardExample1}
          onChange={(e) => setCardExample1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Example 2"
          name="example2"
          value={cardExample2}
          onChange={(e) => setCardExample2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Example 3"
          name="example3"
          value={cardExample3}
          onChange={(e) => setCardExample3(e.target.value)}
        />

        <button
          onClick={addCardToDeck.bind(this, {
            cardTitle,
            cardFormality,
            cardMeaning,
            cardExample1,
            cardExample2,
            cardExample3,
          })}
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
