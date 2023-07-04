import logo from "../../Img/logo.png";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const sideBarList = [
    "Home",
    "Orders",
    "Itemlists",
    "Add-NewItems",
    "Users",
    "Logout",
  ];
  return (
    <div className="w-40 h-screen bg-red-400 fixed top-0 left-0 flex flex-col justify-between p-2 text-white">
      <div className="">
        <div className="mb-14 flex items-center justify-between">
          <img src={logo} alt="" className="w-14 h-14" />
          <p className="text-2xl font-bold">Clickit</p>
        </div>
        <div className="flex flex-col text-xl gap-4">
          {sideBarList.map((item) => (
            <Link to={}
              key={item}
              className="hover:text-red-200 cursor-pointer text-base"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 bg-red-500 -m-2 pt-6 pb-8">
        <p className="text-5xl">8</p>
        <p className="text-sm">New Orders</p>
      </div>
    </div>
  );
};

export default AdminSidebar;
