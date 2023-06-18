import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsAuthenticated(true);
    }
    console.log("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  async function signIn(email, password) {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", true);
    console.log("Authenticated user: ", userCredentials.accessToken);
  }

  function signOut() {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
    navigate("/login");
  }

  return { isAuthenticated, setIsAuthenticated, signIn, signOut };
};

export default useAuth;
