import earthImg from "../../assets/earthImg.svg";
import Logo from "../../utils/sidebar/Logo";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLock, AiFillCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import useAuth from "../../utils/hooks/useAuth";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signIn } = useAuth();

  const navigate = useNavigate("/");

  async function handleSubmit(event) {
    event.preventDefault();

    // Reset previous messages
    setEmailError("");
    setPasswordError("");

    // Email validation
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    try {
      // Authenticate the user with email and password
      await signIn(email, password);

      // User is authenticated
      setSuccessMessage("You are Authenticated!");

      // Timeout for animation
      setTimeout(() => {
        setSuccessMessage("");
        // Navigate to Dashboard
        navigate("/");
      }, 3000);
    } catch (error) {
      // User is not authenticated
      console.error("Error authenticating user: ", error);
      setErrorMessage("Authentication failed. Please check your credentials.");
      // Timeout for animation
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }
  }

  return (
    <motion.div
      className=" flex items-center gap-6 h-[100%] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="img overflow-hidden">
        <img src={earthImg} alt="Earth" width={730} />
      </div>

      <div className="form-logo flex flex-1 flex-col items-center gap-20">
        <div className="logo">
          <Logo />
        </div>

        <div className="form flex flex-col items-center">
          <h1 className="text-3xl text-[#2B4641] font-semibold">
            Welcome Back!
          </h1>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
            {/* Success message  */}
            <div className="flex justify-center flex-col items-center">
              {successMessage && (
                <>
                  <div className="animation-fade-in w-[23rem] bg-[#d4edda] text-[#155724] text-lg text-center font-medium rounded-lg p-1 py-2 border-2 border-[#c3e6cb]">
                    <p className="flex items-center justify-center gap-1">
                      <AiFillCheckCircle size={22} color="#42C3AA" />
                      {successMessage}
                    </p>
                  </div>

                  <span className="text-[#155724] ">
                    redirecting to Dashboard..
                  </span>
                </>
              )}

              {/* Error message   */}
              {errorMessage && (
                <div className="animation-fade-in w-[23rem] bg-[#f8d7da] text-[#721c24] text-lg font-medium rounded-lg p-2 border-2 border-[#f5c6cb]">
                  <h1 className="flex justify-center gap-1">
                    <BiErrorCircle size={30} color="#721c24" />
                    {errorMessage}
                  </h1>
                </div>
              )}
            </div>
            <div>
              <div
                className={`signup-input-container password relative w-[23rem] p-4 ${
                  emailError && "mb-5"
                } flex items-center justify-between gap-4 bg-[#EDFAFA] rounded-xl border-2 border-[#2B4641]`}
              >
                <label
                  htmlFor="email"
                  className="absolute -top-4 bg-gradient-to-b from-[#fff] to-[#EDFAFA] px-1 text-lg text-[#2B4641] font-semibold"
                >
                  Email
                </label>
                <input
                  className="signup-input bg-transparent w-full text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Emaill address"
                />
                <MdAlternateEmail size={26} color="#2B4641" />
              </div>
              {emailError && (
                <span className="error-message relative p-2 px-2 rounded-sm bg-[#f8d7da] text-[#FF5D2A] border-2 border-[#f5c6cb]">
                  {emailError}
                </span>
              )}
            </div>

            <div>
              <div
                className={`signup-input-container password relative w-[23rem] p-4 ${
                  passwordError && "mb-5"
                } flex items-center justify-between gap-4 bg-[#EDFAFA] rounded-xl border-2 border-[#2B4641]`}
              >
                <label
                  htmlFor="password"
                  className="absolute -top-4 bg-gradient-to-b from-[#fff] to-[#EDFAFA] px-1 text-lg text-[#2B4641] font-semibold"
                >
                  Password
                </label>
                <input
                  className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AiFillLock size={26} color="#2B4641" />
              </div>
              {passwordError && (
                <span className="error-message relative p-2 px-2 rounded-sm bg-[#f8d7da] text-[#FF5D2A] border-2 border-[#f5c6cb]">
                  {passwordError}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn bg-[#42c3aa] text-[#EDFAFA] text-2xl font-semibold cursor-pointer w-[23rem] p-4 rounded-xl"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className=" text-[#526D68]">
          Don't have an account yet?
          <Link
            to="/signup"
            className="ml-2 text-[#2B4641] text-lg font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
