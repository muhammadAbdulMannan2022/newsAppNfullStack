import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import Newslayout from "../layouts/Newslayout";
import News from "../pages/News/News";
import Editorsinsights from "../pages/Home/NewsCard/Editorsinsights/Editorsinsights";
import Privateroute from "../Private/Privateroute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Loginlayout from "../layouts/Loginlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Category></Category>,
            loader: () =>
              fetch(
                `https://server-muhammadabdulmannan2022.vercel.app/category/0`
              ),
          },
          {
            path: "/category/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(
                `https://server-muhammadabdulmannan2022.vercel.app/category/${params.id}`
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/news",
    element: <Newslayout></Newslayout>,
    children: [
      {
        path: "/news/:id",
        element: (
          <Privateroute>
            <News />
            <Editorsinsights />
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-muhammadabdulmannan2022.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login" || "/register",
    element: <Loginlayout />,
    children: [
      {
        path: "/login/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/register",
    element: <Loginlayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
export default router;
