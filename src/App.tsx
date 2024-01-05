import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ResponsiveAppBarMenuItem } from "./types/responsiveAppBarMenuItem";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Logout from "./pages/auth/Logout";

const appLabel = "CaffeineTrackr";

const registerMenuItem: ResponsiveAppBarMenuItem = {
  label: "Register",
  url: "register",
};
const loginMenuItem: ResponsiveAppBarMenuItem = {
  label: "Login",
  url: "login",
};
const resetMenuItem: ResponsiveAppBarMenuItem = {
  label: "Reset Password",
  url: "reset-password",
};
const navMenuItems: ResponsiveAppBarMenuItem[] = [
  registerMenuItem,
  loginMenuItem,
  resetMenuItem,
];
const logoutMenuItem: ResponsiveAppBarMenuItem = {
  label: "Logout",
  url: "logout",
};
const userMenuItems: ResponsiveAppBarMenuItem[] = [logoutMenuItem];

export default function App() {
  initializeApp(firebaseConfig);

  return (
    <BrowserRouter>
      <ResponsiveAppBar
        label={appLabel}
        navMenuItems={navMenuItems}
        userMenuItems={userMenuItems}
        getNavigateFn={useNavigate}
      />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path={loginMenuItem.url} element={<Login />} />
        <Route path={registerMenuItem.url} element={<Register />} />
        <Route path={resetMenuItem.url} element={<Reset />} />
        <Route path={logoutMenuItem.url} element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
