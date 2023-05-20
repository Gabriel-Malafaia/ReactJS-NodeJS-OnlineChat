import SignInSide from "../components/LoginForm";
import { Route, Routes } from "react-router-dom";
import { SignUpSide } from "../pages/register";
import { LoginPage } from "../pages/login";
import { SignContextProvider } from "../contexts/SignContext";
import Profile from "../pages/profile";

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
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export { RoutesApp };
