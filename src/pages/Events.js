import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      date: data[key].date,
      description: data[key].description,
      image: data[key].image,
      title: data[key].title,
    });
  }

  return <EventsList events={events.reverse()} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch(
    "https://events-cc346-default-rtdb.firebaseio.com/events.json"
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    return response;
  }
}
