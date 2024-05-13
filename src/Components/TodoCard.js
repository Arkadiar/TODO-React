import React from "react";

export default function TodoCard(props) {
  const { handleDel, handleEdit } = props;
  return (
    <>
      {props.task.map((e, i) => (
        <li className="todoItem" key={i}>
          {e}
          <div className="actionsContainer">
            <button onClick={() => handleEdit(i)}>🖋️</button>
            <button onClick={() => handleDel(i)}>🗑️</button>
          </div>
        </li>
      ))}
    </>
  );
}
