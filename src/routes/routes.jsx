import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/collegeDetails/:id",
            element: <CollegeDetails></CollegeDetails>,
        },
      ]
    },
  ]);

export default router;