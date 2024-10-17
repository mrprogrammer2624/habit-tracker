import { AuthLayout, MainLayout } from "@/Layouts";
import { HabitManagement, HabitTracking, NotFound, Notification, Profile, UserHome } from "@/Pages";
import { Login, SignUp } from "@/Pages/Auth";

import { createBrowserRouter } from "react-router-dom";

const HabitManagementRoutes = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <UserHome />,
            },
            {
              path: "habit-management",
              element: <HabitManagement />,
            },
            {
              path: "habit-tracking",
              element: <HabitTracking />,
            },
            {
              path: "Profile",
              element: <Profile />,
            },
            {
              path: "notification",
              element: <Notification />,
            },
          ],
        },
        {
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <SignUp />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/",
  }
);

export default HabitManagementRoutes;
