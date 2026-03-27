import Button from "./Button";
import { FaBookReader } from "react-icons/fa";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1>
        <FaBookReader style={{ color: "blue", marginRight: "5px" }} />
        {title}
      </h1>

      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add Task"}
        onAdd={onAdd}
      />
    </header>
  );
};

export default Header;
