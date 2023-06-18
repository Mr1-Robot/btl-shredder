import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  console.log("protected route", isAuthenticated);
  useEffect(() => {
    localStorage.getItem("isLoggedIn")
      ? setIsAuthenticated(true)
      : navigate("/login");
  }, [navigate]);

  return isAuthenticated && <Outlet />;
};

export default ProtectedRoute;
