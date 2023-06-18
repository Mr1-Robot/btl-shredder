import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
import Home from "../../pages/home/Home";
import Machines from "../../pages/machines/Machines";
import Companies from "../../pages/companies/Companies";
import AddMachine from "../../pages/addMachine/AddMachine";
import SingleMachine from "../../pages/singleMachine/SingleMachine";
import ProtectedRoute from "../../pages/protectedRoute/ProtectedRoute";

import { Routes, Route, useLocation } from "react-router-dom";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/add-machine" element={<AddMachine />} />
        <Route path="/single-machine" element={<SingleMachine />} />
      </Route>
    </Routes>
  );
};

export default AnimatedRoutes;
