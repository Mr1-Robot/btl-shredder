import { Link } from "react-router-dom";
import homeImg from "../../assets/homeImg.svg";
import HomeCardItems from "../../utils/home/HomeCardItems";
import HomeCardItems1 from "../../utils/home/HomeCardItems1";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
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
            Good afternoon,{" "}
            <span className="font-bold text-[#2B4641] text-xl">Mr. Saif!</span>
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
        <h1 className="text-[#2B4641] text-[1.8rem]">
          We are responsible for our{" "}
          <span className="font-bold">Environment!</span>
        </h1>
        <p className="w-[33rem] mt-4 text-[1.1rem]">
          Environmental care is essential for the survival of our planet and all
          its inhabitants. It involves taking action to protect our natural
          resources and reduce our impact on the environment, ensuring a
          sustainable future for generations to come.
        </p>

        <Link to={"/machines"}>
          <motion.button
            className="txt-btn bg-[#3da691] text-white text-xl font-semibold p-4 px-6 rounded-lg mt-20"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            Discover Machines
          </motion.button>
        </Link>
      </div>
      {/* THE TEXT AND BUTTON  */}
    </motion.div>
  );
};

export default Home;
