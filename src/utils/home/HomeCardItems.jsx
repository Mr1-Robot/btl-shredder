import HomeCardIcon from "./HomeCardIcon";
import { motion } from "framer-motion";

const HomeCardItems = () => {
  const currentDate = new Date().toLocaleDateString("en-US");

  return (
    <motion.div
      className="card w-[23rem] border-2 rounded-xl p-4 px-12 flex justify-between items-center gap-16"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <HomeCardIcon />
      <div className="text">
        <h3 className="text-[#89C0BE] text-sm font-medium leading-3 ">
          Daily Date
        </h3>
        <p className="font-semibold text-[#2B4641] text-xl">{currentDate}</p>
      </div>
    </motion.div>
  );
};

export default HomeCardItems;
