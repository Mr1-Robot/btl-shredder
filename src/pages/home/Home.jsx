import { Link } from "react-router-dom";
import homeImg from "../../assets/homeImg.svg";
import HomeCardItems from "../../utils/home/HomeCardItems";
import HomeCardItems1 from "../../utils/home/HomeCardItems1";
import "./Home.css";
import { motion } from "framer-motion";
import useAuth from "../../utils/hooks/useAuth";

const Home = () => {
  const { userEmail } = useAuth();
  const userName =
    userEmail.split("@")[0].charAt(0).toUpperCase() +
    userEmail.split("@")[0].slice(1);

  const currentYear = new Date().getFullYear();
  const currentHour = new Date().getHours();

  let greetings;
  if (currentHour >= 0 && currentHour < 12) {
    greetings = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetings = "Good afternoon";
  } else {
    greetings = "Good evening";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center gap-4 ">
        <img src={homeImg} alt="person" />
        <div className="text">
          <h1 className="text-black font-medium">
            {greetings},{" "}
            <span className="font-bold text-[#2B4641] text-xl">
              Mr. {userName}
            </span>
          </h1>
          <p className="text-[#89C0BE]">Here's an overview of your machines.</p>
        </div>
      </div>

      {/* THE CARDS  */}
      <div className="flex items-center gap-52 mt-20">
        <HomeCardItems />
        <HomeCardItems1 />
      </div>
      {/* THE CARDS  */}

      {/* THE TEXT AND BUTTON  */}
      <div className="mt-[10rem]">
        <motion.h1
          className="text-[#2B4641] text-[1.8rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          We are responsible for our{" "}
          <span className="font-bold">Environment!</span>
        </motion.h1>
        <motion.p
          className="w-[33rem] mt-4 text-[1.1rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Environmental care is essential for the survival of our planet and all
          its inhabitants. It involves taking action to protect our natural
          resources and reduce our impact on the environment, ensuring a
          sustainable future for generations to come.
        </motion.p>

        <Link to={"/machines"}>
          <motion.button
            className="txt-btn bg-[#3da691] text-white text-xl font-semibold p-4 px-6 rounded-lg mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Discover Machines
          </motion.button>
        </Link>
      </div>
      {/* THE TEXT AND BUTTON  */}

      <p className="text-center pt-8 text-[#2b4641f0] font-mono flex flex-col items-center justify-center">
        <span>
          &copy; 2020 - {currentYear} <b>Bottle-Shredder</b>
          <small className="leading-3"> powered by Makers</small>
        </span>
      </p>
    </motion.div>
  );
};

export default Home;
