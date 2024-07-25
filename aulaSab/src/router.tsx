import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home/home";
import EditItem from "./page/EditItem/editItem";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
        path: "/itens",
        element:<EditItem/>,
    },
    {
        path: "/itens/:id",
        element:<EditItem/>,
    },
  ]);