import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2026</p>
      <Link to="/about">About</Link> <br />
      <Link to="/temp1">Temp1</Link> <br />
      <Link to="/temp2">Temp2</Link>
      {/* <a href="/about">About</a> */}
    </footer>
  );
};

export default Footer;
