import { useEffect, useState } from "react";
import HomeCardIcon1 from "./HomeCardIcon1";
import { motion } from "framer-motion";

const HomeCardItems1 = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const currentTimeString = date.toLocaleTimeString("en-US");
      setCurrentTime(currentTimeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="card w-[23rem] bg-[#42C3AA] rounded-xl p-4 px-12 flex justify-between items-center gap-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <HomeCardIcon1 />
      <div className="text">
        <h3 className="text-[#223a36] text-sm font-medium leading-3 ">
          Time Stamp
        </h3>
        <p className="font-semibold text-[#223a36] text-xl">{currentTime}</p>
      </div>
    </motion.div>
  );
};

export default HomeCardItems1;
