import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import AllColleges from "../pages/AllColleges/AllColleges";

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
            path: "/allColleges",
            element: <AllColleges></AllColleges>
        },
        {
            path: "/collegeDetails/:id",
            element: <CollegeDetails></CollegeDetails>,
        },
      ]
    },
  ]);

export default router;