import { Outlet } from "react-router-dom";
import Progress from "../../components/Progress";
import { useProfileContext } from "../../contexts/ProfileContext";

const ProtectedRoute = () => {
  const { isAuth } = useProfileContext();
  return !isAuth ? <Progress /> : <Outlet />;
};

export default ProtectedRoute;
