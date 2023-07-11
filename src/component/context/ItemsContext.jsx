import { createContext, useEffect, useState } from "react";
import { getAllFoodItems } from "../../utils/firebaseFunctions";

const ItemsContext = createContext({
  allItems: "",
  getAllFoodItems: () => {},
});

export const ItemsContextProvider = (props) => {
  const [allItems, setAllItems] = useState("");
  useEffect(() => {
    getFoodItems();
  }, []);

  function getFoodItems() {
    getAllFoodItems().then((data) => {
      setAllItems(data);
    });
  }
  return (
    <ItemsContext.Provider
      value={{
        allItems: allItems,
        getAllFoodItems: getFoodItems,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
