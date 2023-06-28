import EventItem from "../components/EventItem";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data} />;
}

export default EventDetailPage;

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
