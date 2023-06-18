import { BiArrowBack } from "react-icons/bi";
import "./Card.css";
import { Link } from "react-router-dom";
import { cardItems } from "./CardItems";

const Card = () => {
  return (
    <>
      {cardItems?.map((item) => (
        <div key={item.id} className="w-[15rem]">
          <Link to={"/single-machine"}>
            <div className="machine-card w-[15rem] h-[18.75rem] p-4 flex flex-col justify-center items-center rounded-xl gap-6">
              <div className="img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="text flex items-center gap-8">
                <div>
                  <h1 className="text-sm text-[#499B98] font-medium">
                    ID{" "}
                    <span className="text-lg text-[#2B4641] font-semibold pl-1">
                      {item.title}
                    </span>
                  </h1>
                  <p className="text-sm text-[#499B98] font-medium ">
                    Status{" "}
                    <span
                      className={`status-span ${
                        item.status === "ON"
                          ? "text-[#48932F] on-status"
                          : "text-[#FF5D2B] off-status"
                      } text-lg pl-1`}
                    >
                      {item.status}
                    </span>
                  </p>
                  <p className="text-sm text-[#499B98] font-medium">
                    Capacity{" "}
                    <span
                      className={`${
                        item.capacity === "Full!" ? "text-[#FFC01D]" : ""
                      } text-lg pl-1 text-[#2B4641]`}
                    >
                      {item.capacity}
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
