import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Button from "./components/Button";
function App() {
  let myClick = () => {
    console.log("my click here");
  };
  return (
    <>
      <h1>Testing App</h1>
      <Header
        title="To Do App"
        text="This is some text for To Do App"
        onClick={myClick}
      />

      <Button text="Play" color="green" onClick={myClick} />
      {/* <Button text="Stop" color="red" onClick={myClick} />
      <Button text="Pause" color="gray" />
      <Button text="Re-run" color="yellow" /> */}
      {/* <hr />
      <Header title="Calculator" text="Hello hello" />
      <hr />
      <About email="xyz@gmail.com" phone="56234237890" />
      <hr />
      <Footer /> */}
    </>
  );
}

export default App;
