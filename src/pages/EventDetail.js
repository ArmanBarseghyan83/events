import EventItem from "../components/EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

function EventDetailPage() {
  // If the loader does not passed to the same route use useRouteLoaderData with the id defined in the parent route.
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data} />;
}

export default EventDetailPage;

// This data will be available to the route where it passed, and it's child routes, 
// if used useRouteLoaderData() instead of useLoaderData.
// Get the event data by the id.
export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch(
    `https://events-cc346-default-rtdb.firebaseio.com/events/${id}.json`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

// This action gets the form data based on to which route it will be passed in App.js.
// Delete event by it's id.
export async function action({ request, params }) {
  const id = params.eventId;
  const response = await fetch(
    `https://events-cc346-default-rtdb.firebaseio.com/events/${id}.json`,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not delete the event." }, { status: 500 });
  }
  return redirect("/events/all");
}
