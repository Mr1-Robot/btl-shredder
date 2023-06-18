import CoCard from "../../utils/companies/CoCard";
import { motion } from "framer-motion";

const Companies = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-[#2B4641] text-lg font-semibold">
        Companies Who Published Their Machines
      </h1>
      <p className="text-[#89C0BE]">A list of companies who make machines.</p>

      <div className="mt-20 flex flex-wrap items-center gap-12">
        <CoCard />
      </div>
    </motion.div>
  );
};

export default Companies;
