import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  let [tasks, setTasks] = useState([
    { id: 1, text: "Shopping", day: "March 30th 2026", reminder: false },
    { id: 2, text: "Meeting", day: "March 29th 2026", reminder: true },
    { id: 3, text: "School day", day: "April 1, 2026", reminder: false },
  ]);

  const [showAddTask, setShowAddTask] = useState(true);
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
    // go to the particular task and changes/toggles the reminder part of it...
    // ... rest of operator?

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    );
  };

  // Add a task

  const addTask = (task) => {
    // console.log(task);

    const id = Math.floor(Math.random() * 10000) + 1;

    // const id = Date.now()+1;

    // const id = tasks.length+1;

    const newTask = { id, ...task }; // spreads the task from AddTask...and then adds id to it...

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
