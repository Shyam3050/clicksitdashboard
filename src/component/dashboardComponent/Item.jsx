import Monster from "../../Img/d3.png";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const navigate = useNavigate();
  return (
    <tr className="border ">
      <td className="flex gap-5  p-4">
        <button
          onClick={() => {
            navigate("/itemlists/ki38la89nj973n");
          }}
        >
          <BsFillPencilFill className="text-lg" />
        </button>
        <button>
          <MdDelete className="text-lg" />
        </button>
      </td>
      <td className="">
        <div className="w-9 h-9">
          <img src={Monster} alt="" className="w-full h-full" />
        </div>
      </td>
      <td>Monster</td>
      <td>drink</td>
      <td>$ 23</td>
    </tr>
  );
};

export default Item;
