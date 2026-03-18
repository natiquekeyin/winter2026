import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  let onClick = () => {
    console.log("on Click from App");
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onClick={onClick} />
      <Tasks />
    </div>
  );
}

export default App;
