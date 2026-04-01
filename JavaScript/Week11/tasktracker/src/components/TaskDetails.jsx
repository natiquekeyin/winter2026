import { useState, useEffect } from "react";
import Button from "./Button";
import { useParams, useNavigate, Link } from "react-router-dom";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);

      const data = await res.json();

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <div className="task">
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <p>{task.id}</p>
      <p>{task.reminder.toString()}</p>
      <Link className="link" to="/">
        Go back
      </Link>
    </div>
  );
};

export default TaskDetails;
