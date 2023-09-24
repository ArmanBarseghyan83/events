import { NavLink } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.list}>
        <NavLink to="" className={({ isActive }) => (isActive ? classes.active : "")} end >
          All Events
        </NavLink>
        <NavLink to="new" className={({ isActive }) => (isActive ? classes.active : "")}>
          New Event
        </NavLink>
      </div>
    </header>
  );
}

export default EventsNavigation;
