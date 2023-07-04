import Item from "./Item"

const ItemsList = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between px-4 mb-8 font-semibold">
        <p>List Of Items</p>
        <p>Search</p>
      </div>
      <table className="w-full">
        <tr className="text-left text-sm text-white">
          <th className="font-medium p-4 bg-red-400 ">Actions</th>
          <th className="font-medium   bg-red-400">Images</th>
          <th className="font-medium  bg-red-400">Name</th>
          <th className="font-medium   bg-red-400 ">Category</th>
          <th className="font-medium  bg-red-400">Price</th>
        </tr>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />  
        
      </table>
    </div>
  );
};

export default ItemsList;
