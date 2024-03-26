import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainSection = () => {
  return (
    <div>
      <div className="px-12">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainSection;
