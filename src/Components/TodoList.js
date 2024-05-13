import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  let { task } = props;

  return (
    <ul className="main">{<TodoCard {...props} task={task}></TodoCard>}</ul>
  );
}
