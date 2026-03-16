function Header({ title, text }) {
  //   let t = props.title;
  //   let tx = props.text;

  //   let { title, text } = props;
  return (
    <>
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
    </>
  );
}

export default Header;
