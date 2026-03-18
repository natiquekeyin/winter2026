import Button from "./Button";
const Header = ({ title, onClick }) => {
  return (
    <header>
      <h1>{title}</h1>

      <Button color="green" text="Add Task" onClick={onClick} />
    </header>
  );
};

export default Header;
