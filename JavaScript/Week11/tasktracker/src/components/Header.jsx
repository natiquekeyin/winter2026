import Button from "./Button";
import { FaBookReader } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header>
      <h1>
        <FaBookReader style={{ color: "blue", marginRight: "5px" }} />
        {title}
      </h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add Task"}
          onAdd={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
