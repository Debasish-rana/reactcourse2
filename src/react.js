import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Restromenu from "./component/Restromenu";
//import Grocery from "./component/Grocery"; for create separate js file
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(()=> import("./component/Grocery"))


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense><Grocery /></Suspense>,
      },
      {
        path:"/restrurants/:resId",
        element:<Restromenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
