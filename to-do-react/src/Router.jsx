import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TaskDescription from "./pages/TaskDescription";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-description",
    element: <TaskDescription />,
  },
]);

export default Router;
