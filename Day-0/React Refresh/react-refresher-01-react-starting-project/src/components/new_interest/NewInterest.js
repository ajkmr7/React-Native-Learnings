import React, { useState } from "react";

import "./NewInterest.css";

const NewInterest = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const addNewInterestHandler = (event) => {
    event.preventDefault();
    const newInterest = {
      id: Math.random().toString(),
      title: enteredText,
    };
    setEnteredText('')
    props.onAddInterest(newInterest);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-interest" onSubmit={addNewInterestHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Interest</button>
    </form>
  );
};

export default NewInterest;
