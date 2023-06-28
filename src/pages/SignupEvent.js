import { redirect, json } from "react-router-dom";
import SignupForm from "../components/SignupForm";

function SignupEventPage() {
  return <SignupForm />;
}

export default SignupEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const id = params.eventId;
  const signupData = {
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    email: data.get("email"),
  };

  const response = await fetch(
    `https://events-cc346-default-rtdb.firebaseio.com/signup/${id}.json`,
    {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    }
  );

  if (!response.ok) {
    throw json({ message: "Could sign up for this event." }, { status: 500 });
  }

  return redirect("../participants");
};
