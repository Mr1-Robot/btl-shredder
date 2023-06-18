import Logo from "../../utils/sidebar/Logo";
import "./sidebar.css";
import { SidebarLinks } from "../../utils/sidebar/SidebarLinks";
import LogoutIcon from "../../utils/sidebar/LogoutIcon";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import { motion } from "framer-motion";

const Sidebar = () => {
  const location = useLocation();

  const { signOut } = useAuth();

  return (
    <div className="w-[20rem] bg-[#F2F9F9]  rounded-l-3xl p-6 flex flex-col items-center h-full overflow-y-auto">
      <div className="logo mb-16 ">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <ul className="flex-1">
        {SidebarLinks?.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={
              location.pathname === item.path ? "sidebar-link-active" : ""
            }
          >
            <div className="sidebar-link-container w-full rounded-[.23rem] mb-2">
              <li className="sidebar-link font-semibold text-lg flex items-center gap-4 ml-2 p-[.6rem] px-6 rounded-r-lg">
                {item.icon}
                {item.title}
              </li>
            </div>
          </Link>
        ))}
      </ul>

      <div className=" flex flex-col justify-end">
        <motion.button
          onClick={signOut}
          className="flex gap-2 items-center justify-center text-xl text-[#FF5D2B] font-semibold pb-6"
          whileHover={{ scale: 1.05, x: -10, textShadow: "0 0 3px #FF5D2B" }}
        >
          <LogoutIcon class="logout-icon" />
          Logout
        </motion.button>
      </div>
    </div>
  );
};

export default Sidebar;
