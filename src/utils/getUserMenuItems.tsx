import Logout from "../pages/auth/Logout";
import { ResponsiveAppBarMenuItem } from "../types/responsiveAppBarMenuItem";

export function getUserMenuItems(): ResponsiveAppBarMenuItem[] {
  return [
    {
      label: "Logout",
      url: "logout",
      isProtected: false,
      element: <Logout />,
    },
  ];
}
