import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cetagory from "../../Pages/Cetagory/Cetagory";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Cetagory></Cetagory>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
    ],
  },
]);
