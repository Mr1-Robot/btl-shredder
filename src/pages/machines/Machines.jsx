import Card from "../../utils/machines/Card";
import { motion } from "framer-motion";
import { database } from "../../config/Firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const Machines = () => {
  const [data, setData] = useState([]);
  const { ID, Status, Capacity } = data;

  function fetchData() {
    const dbRef = ref(database, "test4/machine1");
    try {
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          setData(data);
        }
        console.log(data);
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
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
        <Card ID={ID} status={Status} capacity={Capacity} />
      </div>
    </motion.div>
  );
};

export default Machines;
