import Monster from "../../Img/d3.png";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { id, category, imageURL, price, qty, title, unit, unitValue } = item;

  const navigate = useNavigate();
  return (
    <tr className="border ">
      <td className="flex gap-5  p-4">
        <button
          onClick={() => {
            navigate(`/itemlists/${id}`);
          }}
        >
          <BsFillPencilFill
            className="text-lg transititext-primary transition duration-75 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
            data-te-toggle="tooltip"
            title="Edit Title"
          />
        </button>
        <button>
          <MdDelete className="text-lg transititext-primary transition duration-75 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
            data-te-toggle="tooltip"
            title="Delete Item"/>
        </button>
      </td>
      <td className="">
        <div className="w-9 h-9">
          <img src={imageURL} alt={title} className="w-full h-full" />
        </div>
      </td>
      <td>{title}</td>
      <td>{category}</td>
      <td>$ {price}</td>
    </tr>
  );
};

export default Item;
