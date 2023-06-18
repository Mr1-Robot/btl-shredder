import machineImg from "../../assets/machine.svg";
import { motion } from "framer-motion";

const SingleMachine = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-[#2B4641] text-lg font-semibold">
        ZainIQ machine and it's status
      </h1>
      <p className="text-[#89C0BE]">All status of ZainIQ machine.</p>

      <div className="flex justify-center items-center">
        <div className="flex gap-32 mt-20">
          <motion.div
            className="img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={machineImg} alt="Machine" width={400} />
          </motion.div>

          <div className="text flex flex-col gap-6">
            <motion.div
              className="ID "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-medium text-[#499b98a7] text-lg leading-3">
                ID
              </p>
              <h1 className="text-[#2B4641] text-2xl font-semibold">Zain IQ</h1>
            </motion.div>

            {/* STATUS  */}
            <motion.div
              className="status "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-medium text-[#499b98a7] text-lg leading-3">
                Status
              </p>
              <h1 className="text-[#48932F] on-status text-2xl font-semibold">
                ON
              </h1>
            </motion.div>

            {/* BOTTLES SHRED  */}
            <motion.div
              className="bottleShred "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-medium text-[#499b98a7] text-lg leading-3">
                Bottles Shred
              </p>
              <h1 className="text-[#2B4641] text-2xl font-semibold">20</h1>
            </motion.div>

            {/* LOCATION  */}
            <motion.div
              className="location "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="font-medium text-[#499b98a7] text-lg leading-3">
                Location
              </p>
              <a
                href="https://www.google.com/maps/place/Makers/@33.3006074,44.4087339,13z/data=!4m6!3m5!1s0x15578159577aad4b:0x94ec1623c6cde080!8m2!3d33.3069064!4d44.4487706!15sCgZtYWtlcnOSAQ9jb3dvcmtpbmdfc3BhY2XgAQA?coh=164777&entry=tt&shorturl=1"
                target="_blank"
                className="text-[#2B4641] text-2xl font-semibold"
              >
                Iraq, Baghdad, Makers IQ
              </a>
            </motion.div>

            {/* CAPACITY  */}
            <motion.div
              className="capacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-medium text-[#499b98a7] text-lg leading-3">
                Capacity
              </p>
              <h1 className="text-[#ffcc4a] text-2xl font-semibold">FULL!</h1>
            </motion.div>

            {/* TOTAL SHREDS  */}
            <motion.div
              className="totalShreds"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="font-medium text-[#499b98a7] text-lg leading-3">
                Total Shreds
              </p>
              <h1 className="text-[#2B4641] text-2xl font-semibold">400</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleMachine;
