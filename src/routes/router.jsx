import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../views/layouts/AuthLayout";
import { LoginPage, MainPage, ProfilePage, RegisterPage } from "../views/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    path: "main",
    element: <MainPage />,
  },
  { path: "profile", element: <ProfilePage /> },
]);
