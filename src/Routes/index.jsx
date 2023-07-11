import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {
  DashBoard,
  OrdersList,
  ItemsList,
  CreateContainer,
} from "../component";
import Error from "../component/UI/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    errorElement: <Error />,
    children: [
      { index: true, element: "dashboard Charts" },
      {
        path: "/orders",
        element: <OrdersList />,
      },
      {
        path: "/itemLists",
        element: <ItemsList />,
      },
      {
        path: "/itemLists/:id",
        element:<CreateContainer />,
      },
      { path: "/users", element: "users" },
      {
        path: "/add-newitems",
        element: <CreateContainer />,
      },
    ],
  },
]);
