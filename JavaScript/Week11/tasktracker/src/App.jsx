import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, text: "Shopping", day: "March 30th 2026", reminder: false },
    { id: 2, text: "Meeting", day: "March 29th 2026", reminder: true },
    { id: 3, text: "School day", day: "April 1, 2026", reminder: true },
  ]);
  let onClick = () => {
    console.log("on Click from App");
  };
  // Delete the task

  let deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  let toggleReminder = (id) => {
    console.log(id);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" onClick={onClick} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
