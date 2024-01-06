import { ResponsiveAppBarMenuItem } from "../types/responsiveAppBarMenuItem";
import Reset from "../pages/auth/Reset";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

export function getNavMenuItems(): ResponsiveAppBarMenuItem[] {
  return [
    {
      label: "Login",
      url: "login",
      isProtected: false,
      element: <Login />,
    },
    {
      label: "Register",
      url: "register",
      isProtected: false,
      element: <Register />,
    },
    {
      label: "Reset Password",
      url: "reset-password",
      isProtected: false,
      element: <Reset />,
    },
  ];
}
