import { useState, useEffect, useRef } from "react";
import "./App.css";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState(0);
  const addTaskInput = useRef();

  useEffect(() => {
    setRemainingTasks(
      tasks.filter((taskItem) => taskItem.done === false).length
    );
  }, [tasks]);

  function handleKey({ keyCode, target }) {
    if (keyCode === 13) {
      addTask();
    } else {
      if (!tasks.some((task) => task.text === target.value)) {
        addTaskInput.current.classList.remove("invalid");
      } else {
        addTaskInput.current.classList.add("invalid");
      }
    }
  }

  function addTask() {
    const newTask = addTaskInput.current.value;
    if (newTask && !tasks.some((task) => task.text === newTask)) {
      const newTaskObj = {
        text: newTask,
        done: false,
      };
      setTasks((tasks) => {
        return [...tasks, newTaskObj];
      });
      addTaskInput.current.value = "";
      addTaskInput.current.focus();
    }
  }

  return (
    <div className="main">
      <div className="todo">
        <div className="todo-header">
          <h1>Todo List</h1>
          <small>
            {" "}
            {tasks.length > 0 && remainingTasks === 0 ? (
              "All done! 😎"
            ) : (
              <>
                You have <b>{remainingTasks}</b> of <b>{tasks.length}</b> tasks
                remaining
              </>
            )}
          </small>
        </div>
        <div className="todo-form">
          <input
            ref={addTaskInput}
            type="text"
            placeholder="Add task..."
            onKeyUp={handleKey}
          />
          <button onClick={addTask}>+</button>
        </div>
        <div className="todo-body">
          <TaskList tasks={tasks} onSetTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
