import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import AllColleges from "../pages/AllColleges/AllColleges";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../components/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
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