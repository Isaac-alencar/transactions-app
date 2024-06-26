import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { NewTransaction } from "./pages/transaction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/transaction/new",
    element: <NewTransaction />,
  },
]);
