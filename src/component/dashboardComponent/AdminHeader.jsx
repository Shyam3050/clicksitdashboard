import { MdLogout } from "react-icons/md";
import Avatar from "../../Img/avatar.png";

const AdminHeader = () => {
  return (
    <div className=" bg-red-100 h-16 p-4 fixed bg-cardOverlay top-0 left-40 right-0 flex items-center justify-between ">
      <div>
        <p className="text-xl font-semibold">Welcome to Clickit</p>
        <p>
          Hello! <span className="text-sm">shyam sundar</span>
        </p>
      </div>
      <div className="   flex items-center gap-4">
        <MdLogout className="text-2xl cursor-pointer text-textColor"/>
        <div className="w-12 h-12 rounded-full bg-red-500 object-cover">
          <img
            src={Avatar}
            alt=""
            className="w-full h-full
        "
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
