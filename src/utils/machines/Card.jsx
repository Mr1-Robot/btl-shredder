import { BiArrowBack } from "react-icons/bi";
import "./Card.css";
import { Link } from "react-router-dom";
import { cardItems } from "./CardItems";

const Card = ({ ID, status, capacity }) => {
  return (
    <>
      {cardItems?.map((item) => (
        <div key={item.id} className="w-[15rem]">
          <Link to={"/single-machine"}>
            <div className="machine-card w-[15rem] h-[18.75rem] p-4 flex flex-col justify-center items-center rounded-xl gap-6">
              <div className="img  w-full flex items-center justify-center overflow-hidden">
                <img src={item.img} alt={item.title} width={75} />
              </div>

              <div className="text flex items-center gap-8">
                <div>
                  <h1 className="text-sm text-[#499B98] font-medium">
                    ID{" "}
                    <span className="text-lg text-[#2B4641] font-semibold pl-1">
                      {ID}
                    </span>
                  </h1>
                  <p className="text-sm text-[#499B98] font-medium ">
                    Status{" "}
                    <span
                      className={`status-span ${
                        status === "ON"
                          ? "text-[#48932F] on-status"
                          : "text-[#FF5D2B] off-status"
                      } text-lg pl-1`}
                    >
                      {status}
                    </span>
                  </p>
                  <p className="text-sm text-[#499B98] font-medium">
                    Capacity{" "}
                    <span
                      className={`${
                        capacity === "1000" ? "text-[#FFC01D]" : ""
                      } text-lg pl-1 text-[#2B4641]`}
                    >
                      {capacity === "1000" ? "Full!" : capacity}
                    </span>
                  </p>
                </div>

                <div className="arrow">
                  <BiArrowBack
                    size={25}
                    color="#499B98"
                    className="arrow-icon text-lg rotate-180"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
