import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { categories } from "../utils/data";

import Loader from "./UI/Loader";
import {
  clearData,
  deleteFromFirebase,
  saveToFirebase,
  uploadImageToFirebase,
} from "../utils/image_upload_edit";

const CreateContainer = (props) => {
  const [title, setTitle] = useState("");
  const [unit, setunit] = useState("");
  const [unitValue, setUnitvalue] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (e) => {
    uploadImageToFirebase({
      e,
      setIsLoading,
      setFields,
      setMsg,
      setAlertStatus,
      setImageAsset,
    });
  };

  const deleteImage = () => {
    deleteFromFirebase({
      setIsLoading,
      setImageAsset,
      setFields,
      setMsg,
      setAlertStatus,
      imageAsset,
    });
  };
  const saveDetails = () => {
    saveToFirebase({
      setIsLoading,
      setFields,
      setMsg,
      setAlertStatus,
      setTitle,
      setPrice,
      setImageAsset,
      setunit,
      setUnitvalue,
      setCategory,
      title,
      unitValue,
      unit,
      imageAsset,
      price,
      category,
    });
  };

  const clearinpData = () => {
    clearData({
      setTitle,
      setPrice,
      setImageAsset,
      setunit,
      setUnitvalue,
      setCategory,
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <div className="w-[90%] md:w-[60%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title"
            className="w-full h-full text-lg bg-transparent font-semibold text-textColor px-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <select
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option className="bg-white">Select Category</option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      name="uploadimage"
                      className="w-0 h-0"
                      onChange={uploadImage}
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full w-full">
                    <img
                      src={imageAsset}
                      alt="uploaded"
                      className=" m-auto  h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input
              type="text"
              required
              value={unitValue}
              onChange={(e) => setUnitvalue(e.target.value)}
              placeholder="unitValue"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
            <select value={unit} onChange={(e) => setunit(e.target.value)}>
              <option>select</option>
              <option value="pieces">pieces</option>
              <option value="ml">ml</option>
              <option value="pack">pack</option>
              <option value="gm">gm</option>
              <option value="kg">kg</option>
              <option value="plate">plate</option>
            </select>
          </div>

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
        </div>
        <div className="flex gap-5 flex-col md:flex-row w-full">
          <motion.button
            type="button"
            className={` border border-gray-500 px-10  py-2 rounded-lg text-lg  font-semibold  outline-none`}
            onClick={clearinpData}
            whileTap={{ scale: 0.75 }}
          >
            Reset
          </motion.button>

          <motion.button
            type="button"
            className={` ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold `}
            onClick={saveDetails}
            whileTap={{ scale: 0.75 }}
          >
            Save
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
