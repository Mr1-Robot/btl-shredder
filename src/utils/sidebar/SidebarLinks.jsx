import { RiDashboard3Fill } from "react-icons/ri";
import { GiVendingMachine } from "react-icons/gi";
import { BsBuildingFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export const SidebarLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <RiDashboard3Fill size={25} className="sidebar-link-icon" />,
    path: "/",
  },

  {
    id: 1,
    title: "Machines",
    icon: <GiVendingMachine size={25} className="sidebar-link-icon" />,
    path: "/machines",
  },

  {
    id: 2,
    title: "Companies",
    icon: <BsBuildingFill size={25} className="sidebar-link-icon" />,
    path: "/companies",
  },

  {
    id: 3,
    title: "Add Machine",
    icon: <AiOutlinePlus size={25} className="sidebar-link-icon" />,
    path: "/add-machine",
  },
];
