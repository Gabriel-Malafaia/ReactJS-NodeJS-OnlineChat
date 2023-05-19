import { Route, Routes } from "react-router-dom";
import { SignUpSide } from "../pages/register";
import { LoginPage } from "../pages/login";
import SignInSide from "../components/LoginForm";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="/" element={<SignInSide />} />
        <Route path="/register" element={<SignUpSide />} />
      </Route>
    </Routes>
  );
};

export { RoutesApp };
