import Card from "../../utils/machines/Card";
import { motion } from "framer-motion";

const Machines = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-[#2B4641] text-lg font-semibold ">
        Machines You Have Added
      </h1>
      <p className="text-[#89C0BE]">A package of machines and their status.</p>

      <div className="mt-20 flex items-center flex-wrap gap-12">
        <Card />
      </div>
    </motion.div>
  );
};

export default Machines;
