import Button from "./Button";
function Header({ title, text, onClick }) {
  //   let t = props.title;
  //   let tx = props.text;

  //   let { title, text } = props;
  return (
    <header>
      <h2>{title}</h2>
      <p style={{ color: "red" }}>{text}</p>
      <p
        style={{
          border: "1px solid green",
          width: "300px",
          margin: "20px auto",
        }}
      >
        {title}
      </p>
      <Button text="Head" color="blue" onClick={onClick} />
    </header>
  );
}

export default Header;
