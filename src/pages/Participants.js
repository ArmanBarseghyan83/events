import { json } from "react-router-dom";
import ParticipantsList from "./../components/ParticipantsList";

function ParticipantsPage() {
  return <ParticipantsList />;
}

export default ParticipantsPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch(
    `https://events-cc346-default-rtdb.firebaseio.com/signup/${id}.json`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for participants." },
      { status: 500 }
    );
  } else {
    return response;
  }
};
