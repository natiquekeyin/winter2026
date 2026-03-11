import "./App.css";
import Header from "./components/Header";

function App() {
  let x = "Alan Smith";
  return (
    <>
      <div>
        <Header />
        <h2 style={{ color: "red" }}>Hello {x.toUpperCase()}!</h2>
        <p>This is my project</p>
        <Header />
      </div>
    </>
  );
}

export default App;
