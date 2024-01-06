import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { firebaseConfig } from "./configs/firebaseConfig";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { saveUser } from "./redux/slice/authSlice";
import { firebaseUserToUser } from "./utils/firebaseUserToUser";
import { getNavMenuItems } from "./utils/getNavMenuItems";
import { getUserMenuItems } from "./utils/getUserMenuItems";

const appLabel = "CaffeineTrackr";
const navMenuItems = getNavMenuItems();
const userMenuItems = getUserMenuItems();

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

  const homePage = navMenuItems.filter(
    ({ isProtected }) => isProtected === !!user
  )[0]?.element;

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
        <Route path="*" element={homePage} />
        {navMenuItems.map(({ url, element }) => (
          <Route key={url} path={url} element={element} />
        ))}
        {userMenuItems.map(({ url, element }) => (
          <Route key={url} path={url} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
