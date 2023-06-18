import earthImg from "../../assets/earthImg.svg";
import Logo from "../../utils/sidebar/Logo";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLock, AiFillCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";
import { motion } from "framer-motion";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    // Reset previous error messages
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
      // Create new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User creation successful
      const user = userCredential.user;
      console.log("User Created", user);

      // Display success message
      setSuccessMessage("User Successfully Created!");
      setTimeout(() => {
        setSuccessMessage("");

        // Navigate to the login page
        navigate("/login");
      }, 3000);
    } catch (error) {
      // User creation failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user", errorCode, errorMessage);

      // Display error message
      setErrorMessage("Error creating user. Please try again.");
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
        <div className="logo-container">
          <Logo />
        </div>

        <div className="form flex flex-col items-center">
          <h1 className="text-3xl text-[#2B4641] font-semibold">
            Register an Account
          </h1>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
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
                  minLength={6}
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
              Sign Up
            </button>
            <div className="flex justify-center flex-col items-center">
              {successMessage && (
                <>
                  <div className="animation-fade-in w-[20rem] bg-[#2B4641] text-white text-lg text-center font-medium rounded-lg p-1 shadow-md shadow-[#2b464165]">
                    <p className="flex items-center justify-center gap-1">
                      <AiFillCheckCircle size={22} color="#42C3AA" />
                      {successMessage}
                    </p>
                  </div>

                  <span className="text-[#2B4641] ">
                    redirecting to login page..
                  </span>
                </>
              )}

              {/* Error message   */}
              {errorMessage && (
                <div className="animation-fade-in w-[23rem] bg-[#fff] text-[#FF5D2A] text-lg font-medium rounded-lg p-1 shadow-sm shadow-[#ff5c2a30]">
                  <h1 className="flex items-center justify-center gap-1">
                    <BiErrorCircle size={25} color="#FF5D2A" />
                    {errorMessage}
                  </h1>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className=" text-[#526D68]">
          Already have an account?
          <Link
            to="/login"
            className=" ml-2 text-[#2B4641] text-lg font-semibold hover:underline "
          >
            Sign In
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
