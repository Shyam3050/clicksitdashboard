import  OrderItem from "./OrderItem";

const OrdersList = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between px-4 mb-8">
        <p>Orders</p>
        <p>Sort</p>
      </div>

      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
};

export default OrdersList;
