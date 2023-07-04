import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { DashBoard, OrdersList ,ItemsList} from "../component";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard/>,
    children: [
      {
        path: "/orders",
        element: <OrdersList/>,
      },
      {
        path: "/itemLists",
        element: <ItemsList/>
      }

     
    ],
  },
]);
