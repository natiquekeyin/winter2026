import Button from "./Button";
import { FaBookReader } from "react-icons/fa";
const Header = ({ title, onClick }) => {
  return (
    <header>
      <h1>
        <FaBookReader style={{ color: "blue", marginRight: "5px" }} />
        {title}
      </h1>

      <Button color="green" text="Add Task" onClick={onClick} />
    </header>
  );
};

export default Header;
