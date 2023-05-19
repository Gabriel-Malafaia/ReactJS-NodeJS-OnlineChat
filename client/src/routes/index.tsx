import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/register";
import { LoginPage } from "../pages/login";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export { RoutesApp };
