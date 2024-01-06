import { ResponsiveAppBarMenuItem } from "../types/responsiveAppBarMenuItem";
import Reset from "../pages/auth/Reset";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import IntakeLog from "../pages/IntakeLog";

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
    {
      label: "Intake Log",
      url: "intake-log",
      isProtected: true,
      element: <IntakeLog />,
    },
  ];
}
