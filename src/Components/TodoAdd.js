import React from "react";
import { useState } from "react";

export default function TodoAdd(props) {
  const { func, target, setTarget } = props;
  const caseTask = "Add a new task!";
  const caseNoTask = "No task was added";
  const [placehold, setPlacehold] = useState(caseTask);

  return (
    <header>
      <input
        value={target}
        placeholder={placehold}
        onChange={(e) => setTarget(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && target) {
            func(target);
            setTarget("");
            setPlacehold(caseTask);
          } else if (e.key === "Enter" && !target) {
            setPlacehold(caseNoTask);
          }
        }}
      ></input>
      <button
        onClick={() => {
          if (target) {
            func(target);
            setTarget("");
            setPlacehold(caseTask);
          } else {
            setPlacehold(caseNoTask);
          }
        }}
      >
        Enter 👍
      </button>
    </header>
  );
}
