import TodoAdd from "./Components/TodoAdd";
import TodoList from "./Components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [target, setTarget] = useState("");

  function retrieve(tasks) {
    localStorage.setItem("todo-list-storage", JSON.stringify({ task: tasks }));
  }

  function handleUpdate(newTask) {
    const arr = [...task, newTask];
    retrieve(arr);
    setTask(arr);
  }

  function handleDelete(delTask) {
    const newArr = task.filter((e, i) => i !== delTask);
    setTask(newArr);
  }

  function handleEdit(editTask) {
    const edit = task[editTask];
    setTarget(edit);
    handleDelete(editTask);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let local = localStorage.getItem("todo-list-storage");
    if (!local) {
      return;
    }
    local = JSON.parse(local).task;
    setTask(local);
  }, []);
  return (
    <>
      <TodoAdd
        target={target}
        setTarget={setTarget}
        func={handleUpdate}
      ></TodoAdd>
      <TodoList
        handleEdit={handleEdit}
        handleDel={handleDelete}
        task={task}
      ></TodoList>
    </>
  );
}

export default App;
