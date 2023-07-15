import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../config/Firebase";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (localStorage.getItem("isLoggedIn")) {
      setIsAuthenticated(true);
      setUserEmail(storedEmail);
    }
    console.log("isAuthenticated", isAuthenticated);
    console.log("User email: ", userEmail);
  }, [isAuthenticated]);

  async function signIn(email, password) {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userEmail", userCredentials.user.email);
  }

  function signOut() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setUserEmail("");
    navigate("/login");
  }

  return { isAuthenticated, userEmail, setIsAuthenticated, signIn, signOut };
};

export default useAuth;
