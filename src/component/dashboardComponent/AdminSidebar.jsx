import logo from "../../Img/logo.png";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const sideBarList = [
    "Home",
    "Orders",
    "Itemlists",
    "Add-NewItems",
    "Users",
    "Logout",
  ];

  console.log("sjtj");
  return (
    <div className="w-40 h-screen bg-red-400 fixed top-0 left-0 flex flex-col justify-between pt-2 pl-2 text-white">
      <div className="">
        <div className="mb-14 mr-2 flex items-center justify-between">
          <img src={logo} alt="" className="w-14 h-14" />
          <p className="text-2xl font-bold">Clickit</p>
        </div>
        <nav className="flex flex-col text-xl gap-4">
          {sideBarList.map((item) => (
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              key={item}
              className={({ isActive }) =>
                [
                  "hover:text-red-200 text-base cursor-pointer p-1",
                  isActive ? "bg-white text-red-400 text-lg -ml-2 pl-3" : "",
                ].join(" ")
              }
              end
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-2 bg-red-500  pt-6 pb-8 -ml-2">
        <p className="text-5xl">8</p>
        <p className="text-sm">Pending Orders</p>
      </div>
    </div>
  );
};

export default AdminSidebar;
