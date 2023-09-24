import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const procced = window.confirm("Are you sure?");

    if (procced) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <article className={classes.event}>
      <menu className={classes.actions}>
        <Link to="signup">Sign Up</Link>
        <Link to="participants">Participants</Link>
      </menu>
      <img src={event.image} alt={event.title} />

      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <div className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </div>
    </article>
  );
}

export default EventItem;
