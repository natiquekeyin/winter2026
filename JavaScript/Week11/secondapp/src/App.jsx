import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <>
      <h1>Testing App</h1>
      <Header title="To Do App" text="This is some text for To Do App" />
      <hr />
      <Header title="Calculator" text="Hello hello" />
      <hr />
      <About email="xyz@gmail.com" phone="56234237890" />
    </>
  );
}

export default App;
