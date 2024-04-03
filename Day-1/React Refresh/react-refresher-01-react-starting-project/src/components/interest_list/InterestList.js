import React from "react";

import "./InterestList.css";

const InterestList = (props) => {
  return (
    <ul className="goal-list">
      {props.interests.map((interest) => (
        <li key={interest.id}>{interest.title}</li>
      ))}
    </ul>
  );
};

export default InterestList;
