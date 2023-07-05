import { Outlet } from "react-router-dom";
import { AdminSidebar, AdminHeader } from "../component";

const DashBoard = () => {
  return (
    <div className="relative">
      <AdminSidebar />
      <AdminHeader />
      <div className="ml-40 mt-16 h-[calc(100vh-4rem)] overflow-y-scroll p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
