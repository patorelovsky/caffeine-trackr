import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { firebaseConfig } from "./configs/firebaseConfig";
import {
  editIntakeMenuItem,
  intakeLogMenuItem,
  loginMenuItem,
  logoutMenuItem,
  newIntakeMenuItem,
  registerMenuItem,
  resetPasswordMenuItem,
} from "./pages";
import EditIntake from "./pages/EditIntake";
import IntakeLog from "./pages/IntakeLog";
import NewIntake from "./pages/NewIntake";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { saveUser } from "./redux/slice/authSlice";
import { firebaseUserToUser } from "./utils/firebaseUserToUser";

const appLabel = "CaffeineTrackr";

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

  const navMenuItems = user
    ? [intakeLogMenuItem, newIntakeMenuItem]
    : [loginMenuItem, registerMenuItem, resetPasswordMenuItem];
  const userMenuItems = user ? [logoutMenuItem] : [];

  return (
    <BrowserRouter>
      <ResponsiveAppBar
        label={appLabel}
        navMenuItems={navMenuItems}
        userMenuItems={userMenuItems}
      />
      <Routes>
        <Route path="*" element={user ? <IntakeLog /> : <Login />} />
        user ? (
        <Route path={logoutMenuItem.url} element={<Logout />} />
        <Route path={intakeLogMenuItem.url} element={<IntakeLog />} />
        <Route path={newIntakeMenuItem.url} element={<NewIntake />} />
        <Route path={editIntakeMenuItem.url} element={<EditIntake />} />
        ) : (
        <Route path={loginMenuItem.url} element={<Login />} />
        <Route path={registerMenuItem.url} element={<Register />} />
        <Route path={resetPasswordMenuItem.url} element={<ResetPassword />} />)
      </Routes>
    </BrowserRouter>
  );
}
