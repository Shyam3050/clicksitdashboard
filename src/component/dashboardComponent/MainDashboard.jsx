import {OrdersList} from "../";
import ItemsList from "./ItemsList";

const MainDashboard = () => {
  return (
    <div className="ml-40 mt-16 h-[calc(100vh-4rem)] overflow-y-scroll p-4">
      {/* <OrdersList /> */}
      <ItemsList /> 
    </div>
  );
};

export default MainDashboard;
