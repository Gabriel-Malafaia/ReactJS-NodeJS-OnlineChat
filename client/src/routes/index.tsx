import SignInSide from "../components/LoginForm";
import { Route, Routes } from "react-router-dom";
import { SignUpSide } from "../pages/register";
import { LoginPage } from "../pages/login";
import { SignContextProvider } from "../contexts/SignContext";
import Profile from "../pages/profile";
import ProtectedRoute from "./ProtectedRoute";
import { ProfileContextProvider } from "../contexts/ProfileContext";

const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignContextProvider>
            <LoginPage />
          </SignContextProvider>
        }
      >
        <Route path="/" element={<SignInSide />} />
        <Route path="/register" element={<SignUpSide />} />
      </Route>
      <Route
        path="/profile"
        element={
          <ProfileContextProvider>
            <ProtectedRoute />
          </ProfileContextProvider>
        }
      >
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export { RoutesApp };
