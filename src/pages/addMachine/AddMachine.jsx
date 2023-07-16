import { useEffect, useState } from "react";
import "./AddMachine.css";
import { motion } from "framer-motion";
import { ref, set } from "firebase/database";
import { database } from "../../config/Firebase";
import { AiFillCheckCircle } from "react-icons/ai";

const AddMachine = () => {
  const [folderName, setFolderName] = useState("");
  const [ID, setID] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [total, setTotal] = useState(0);
  const [bottleShreddes, setBottleShreddes] = useState(0);
  const [status, setStatus] = useState("OFF");
  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState("");

  async function sendData() {
    const dbRef = ref(database, folderName);
    await set(dbRef, {
      ID,
      Capacity: capacity,
      Total: total,
      BottleShreddes: bottleShreddes,
      Status: status,
      Location: location,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      folderName.trim().length !== 0 &&
      ID.trim().length !== 0 &&
      total !== 0 &&
      capacity !== 0 &&
      bottleShreddes !== 0
    ) {
      await sendData();
      setSuccess("true");
      setFolderName("");
      setID("");
      setCapacity(0);
      setTotal(0);
      setBottleShreddes(0);
      setStatus("OFF");
      setLocation("");
    } else {
      setSuccess("false");
    }
  }

  useEffect(() => {
    if (success.length !== 0)
      setTimeout(() => {
        setSuccess("");
      }, 3000);
  }, [success]);

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

      <div className="w-full flex justify-center items-center rounded-3xl mt-[8rem]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="machine-form bg-[#D4F4F3] py-6 px-6 rounded-3xl flex flex-col gap-6 items-center justify-center"
        >
          {success === "true" && (
            <h1 className="fade flex items-center gap-2 mb-4 bg-teal-200 font-medium text-teal-900 p-2 border-t-2 border-teal-900 rounded-b">
              <AiFillCheckCircle size={20} />
              Machine added successfully.
            </h1>
          )}

          {success === "false" && (
            <p className="fade text-red-900 bg-red-300 border-t-2 border-red-600 p-2 rounded-b">
              Try to add some data
            </p>
          )}
          <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
            <label
              htmlFor="folderName"
              className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
            >
              Folder name
            </label>
            <input
              className="signup-input w-full bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
              type="text"
              id="folderName"
              placeholder="Enter folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </div>
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
                type="text"
                id="id"
                placeholder="Enter ID"
                value={ID}
                onChange={(e) => setID(e.target.value)}
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
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
          </div>

          {/* STATUS - TOTAL SHREDS  */}
          <div className="status-totalShreds flex items-center gap-6">
            <div className="signup-input-container id relative  p-3  flex items-center justify-between gap-4 bg-[#82CBC8] rounded-lg border-2 border-transparent">
              <label
                htmlFor="my-select"
                className="absolute -top-4 rounded-lg bg-gradient-to-b from-[#D4F4F3] to-[#82CBC8] px-1  text-[#2B4641] font-semibold"
              >
                Status
              </label>
              <select
                className="group signup-input w-[13.5rem] bg-transparent text-[#2B4641] text-lg font-semibold outline-none placeholder:text-[#2B4641] placeholder:opacity-60 placeholder:font-normal placeholder:text-base"
                id="my-select"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option
                  className="bg-[#82CBC8]  font-semibold"
                  value="ON"
                  id="option"
                >
                  ON
                </option>
                <option
                  className="bg-[#82CBC8] hover:bg-[#407876]  font-semibold"
                  value="OFF"
                >
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
                value={total}
                onChange={(e) => setTotal(e.target.value)}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                value={bottleShreddes}
                onChange={(e) => setBottleShreddes(e.target.value)}
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
          <button
            type="submit"
            className="txt-btn bg-[#3da691] text-white text-xl font-semibold p-4 px-6 rounded-lg"
          >
            Add Machine
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default AddMachine;
