import { Link } from "react-router-dom";
import usaid from "../../assets/usaid.svg";
import { BiArrowBack } from "react-icons/bi";
import { CoCardItems } from "./CoCardItems";

const CoCard = () => {
  return (
    <>
      {CoCardItems?.map((item) => (
        <div key={item.id}>
          <Link to="/machines">
            <div className="card company-card machine-card w-[15rem] h-[18.75rem] p-4 flex flex-col justify-center items-center rounded-xl gap-12">
              <div className="logo">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[12rem] h-[5rem]"
                />
              </div>

              <div className="text flex flex-col gap-1">
                <h1 className="text-[#2B4641] text-xl font-semibold">
                  {item.title}
                </h1>
                <p className="text-[#4A6A64] ">{item.description}</p>
                <button className="flex items-center gap-4 text-md mt-4">
                  <h1 className="text-[1.05rem] text-[#499B98] arrow-icon font-medium">
                    See Machines
                  </h1>
                  <BiArrowBack
                    size={22}
                    color="#499B98"
                    className="arrow-icon text-lg rotate-180"
                  />
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CoCard;
