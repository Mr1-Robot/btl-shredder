import { useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
// import useAuth from "../../utils/hooks/useAuth";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebarRoutes = ["/signup", "/login"];

  // const { isAuthenticated } = useAuth();

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex p-10  rounded-4xl">
      {!shouldHideSidebar && (
        <div className="w-[20rem]">
          <Sidebar />
        </div>
      )}
      <div
        className={`flex-1 overflow-auto rounded-r-3xl bg-white p-10 h-[53rem]
        ${location.pathname === "/" && "pb-0"}
        ${location.pathname === "/signup" && "rounded-3xl pl-0 pt-0"}
        ${location.pathname === "/login" && "rounded-3xl pl-0 pt-0"}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
