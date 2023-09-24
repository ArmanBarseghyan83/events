import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import SignupEventPage from "./pages/SignupEvent";
import ParticipantsPage, {
  loader as participantsLoader,
} from "./pages/Participants";
import { action as createOrEditAction } from "./components/EventForm";
import { action as signUpAction } from "./pages/SignupEvent";

const router = createBrowserRouter([
  {
    path: "/events",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "all",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: createOrEditAction,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: createOrEditAction,
              },
              {
                path: "signup",
                element: <SignupEventPage />,
                action: signUpAction,
              },
              {
                path: "participants",
                element: <ParticipantsPage />,
                loader: participantsLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
