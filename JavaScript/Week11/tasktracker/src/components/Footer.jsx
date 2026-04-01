import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2026</p>
      <Link className="link" to="/about">
        About
      </Link>{" "}
      <br />
      {/* <a href="/about">About</a> */}
    </footer>
  );
};

export default Footer;
