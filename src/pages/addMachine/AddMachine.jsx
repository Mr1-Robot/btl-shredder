import "./AddMachine.css";
import { motion } from "framer-motion";

const AddMachine = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-[#2B4641] text-lg font-semibold">
        Add a New Machine
      </h1>
      <p className="text-[#89C0BE]">Here you can add a new machines.</p>

      <div className="w-full flex justify-center items-center overflow-hidden mt-[8rem]">
        <form
          action=""
          className="machine-form bg-[#D4F4F3] py-14 px-6 rounded-3xl flex flex-col gap-6 items-center justify-center"
        >
          <div className="id-capacity flex items-center gap-6">
            <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
              <label
                htmlFor="id"
                className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
              >
                ID
              </label>
              <input
                className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                type="number"
                id="id"
                placeholder="Enter ID"
              />
            </div>

            <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
              <label
                htmlFor="capacity"
                className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
              >
                Capacity
              </label>
              <input
                className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                type="number"
                id="capacity"
                placeholder="Enter Capacity"
              />
            </div>
          </div>

          {/* STATUS - TOTAL SHREDS  */}
          <div className="status-totalShreds flex items-center gap-6">
            <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
              <label
                htmlFor="status"
                className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
              >
                Status
              </label>
              <select
                className="signup-input w-[13.5rem] bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                id="status"
              >
                <option className="bg-[#82CBC8] font-semibold" value="ON">
                  ON
                </option>
                <option className="bg-[#82CBC8] font-semibold" value="OFF">
                  OFF
                </option>
              </select>
            </div>

            <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
              <label
                htmlFor="total"
                className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
              >
                Total Shreds
              </label>
              <input
                className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                type="number"
                id="total"
                placeholder="Enter Total Shreds"
              />
            </div>
          </div>

          {/* BOTTELS SHRED - LOCATION  */}
          <div className="bottlesShred-location flex items-center gap-6">
            <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
              <label
                htmlFor="location"
                className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
              >
                Location
              </label>
              <input
                className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                type="url"
                id="location"
                placeholder="Enter URL of Location"
              />
            </div>

            <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
              <label
                htmlFor="bottelsShred"
                className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
              >
                Bottels Shred
              </label>
              <input
                className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                type="number"
                id="bottelsShred"
                placeholder="Enter Bottels Shred"
              />
            </div>
          </div>

          {/* IMAGE  */}
          <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
            <label
              htmlFor="image"
              className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
            >
              Image
            </label>
            <input
              className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
              type="file"
              id="image"
              placeholder="Enter URL of Location"
            />
          </div>
          <button className="txt-btn bg-[#3da691] text-white text-xl font-semibold p-4 px-6 rounded-lg">
            Add Machine
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddMachine;
