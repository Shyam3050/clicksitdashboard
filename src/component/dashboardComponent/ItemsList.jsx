import { useContext } from "react";
import Item from "./Item";
import Loader from "../UI/Loader";
import ItemsContext from "../context/ItemsContext";

const ItemsList = () => {
  const {allItems} = useContext(ItemsContext);
console.log(allItems)
  return (
    <>
      {allItems ? (
        <div className="relative">
          <div className="flex items-center justify-between px-4 mb-8 font-semibold">
            <p>List Of Items</p>
            <p>Search</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-white">
                <th className="font-medium p-4 bg-red-400 ">Actions</th>
                <th className="font-medium   bg-red-400">Images</th>
                <th className="font-medium  bg-red-400">Name</th>
                <th className="font-medium   bg-red-400 ">Category</th>
                <th className="font-medium  bg-red-400">Price</th>
              </tr>
            </thead>
            <tbody>
              {allItems?.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ItemsList;
