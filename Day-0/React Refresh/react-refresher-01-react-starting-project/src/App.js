import React, { useState } from "react";

import InterestList from "./components/interest_list/InterestList";
import NewInterest from "./components/new_interest/NewInterest";
import "./App.css";

const App = () => {
  const [interests, setNewInterest] = useState([
    { id: "#1", title: "Revisiting Flutter" },
    { id: "#2", title: "SOLID Principles with Flutter" },
    { id: "#3", title: "Design patterns with Flutter" },
  ]); 

  const addNewInterestHandler = (newInterest) => {
    setNewInterest(prevInterests => prevInterests.concat(newInterest))
  }

  return (
    <div className="learning-interests">
      <h1 className="title">Learning Interests</h1>
      <NewInterest onAddInterest = {addNewInterestHandler}/>
      <InterestList interests = {interests}/>
    </div>
  );
};

export default App;
