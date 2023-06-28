import { Form, useNavigate, useRouteLoaderData } from "react-router-dom";
import classes from "./EventForm.module.css";

import React from "react";

function SignupForm() {
  const eventTitle = useRouteLoaderData("event-detail").title;
  const navigate = useNavigate();

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="POST" className={classes.form}>
      <input type="hidden" name="event-title" defaultValue={eventTitle} />
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" type="text" name="firstname" required />
      </p>
      <p>
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" type="text" name="lastname" required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Sign up</button>
      </div>
    </Form>
  );
}

export default SignupForm;
