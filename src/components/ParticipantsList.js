import { useLoaderData, useNavigate } from "react-router-dom";
import classes from "./ParticipantsList.module.css";
import { MdKeyboardBackspace } from "react-icons/md";

function ParticipantsList() {
  const data = useLoaderData();
  const navigate = useNavigate();

  const backHandler = () => {
    navigate("..");
  };

  const participants = [];

  for (const key in data) {
    participants.push({
      id: key,
      firstname: data[key].firstname,
      lastname: data[key].lastname,
      email: data[key].email,
    });
  }

  return (
    <div className={classes.participants}>
      <div onClick={backHandler}>
        <MdKeyboardBackspace className={classes.icon} />
      </div>
      {participants.map((participant) => (
        <div className={classes.participant} key={participant.id}>
          <div>
            {participant.firstname} {participant.lastname}
          </div>
          <div>{participant.email}</div>
        </div>
      ))}
    </div>
  );
}

export default ParticipantsList;
