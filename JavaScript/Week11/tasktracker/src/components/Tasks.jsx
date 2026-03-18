const Tasks = () => {
  const tasks = [
    { id: 1, text: "Shopping", day: "March 30th 2026", reminder: false },
    { id: 2, text: "Meeting", day: "March 29th 2026", reminder: true },
    { id: 3, text: "School day", day: "April 1, 2026", reminder: true },
  ];

  return (
    <>
      {tasks.map((task) => (
        <>
          <h3>{task.text}</h3>
          <h3>{task.day}</h3>
          <hr />
        </>
      ))}
    </>
  );
};

export default Tasks;
