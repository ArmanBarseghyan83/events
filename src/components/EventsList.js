import { Link } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h2>All Events</h2>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h3>{event.title}</h3>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
