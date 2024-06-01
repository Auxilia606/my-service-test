import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "@pages/TestPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TestPage />,
  },
]);
