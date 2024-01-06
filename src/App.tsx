import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { firebaseConfig } from "./configs/firebaseConfig";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { saveUser } from "./redux/slice/authSlice";
import { ResponsiveAppBarMenuItem } from "./types/responsiveAppBarMenuItem";
import { firebaseUserToUser } from "./utils/firebaseUserToUser";

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
  const auth = getAuth();
  const appDispatch = useAppDispatch();

  const user = useAppSelector(({ auth }) => auth.value);

  useEffect(() => {
    onAuthStateChanged(auth, (newUser) => {
      appDispatch(saveUser(firebaseUserToUser(newUser)));
    });
  }, [auth, appDispatch]);

  return (
    <BrowserRouter>
      <ResponsiveAppBar
        label={appLabel}
        navMenuItems={navMenuItems}
        userMenuItems={userMenuItems}
        getNavigateFn={useNavigate}
        user={user}
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
