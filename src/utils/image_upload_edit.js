import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase.config";
import { saveItem } from "../utils/firebaseFunctions";

export const clearData = ({
  setTitle,
  setPrice,
  setImageAsset,
  setunit,
  setUnitvalue,
  setCategory,
}) => {
  setTitle("");
  setImageAsset(null);
  setunit("");
  setUnitvalue("");
  setPrice("");
  setCategory("");
};

export const uploadImageToFirebase = ({
  e,
  setIsLoading,
  setFields,
  setMsg,
  setAlertStatus,
  setImageAsset,
}) => {
  setIsLoading(true);
  const imgFile = e.target.files[0];
  const storageRef = ref(storage, `images/${Date.now()}-${imgFile.name}`);
  const uploadTask = uploadBytesResumable(storageRef, imgFile);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const uploadProgress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(uploadProgress);
    },
    () => {
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setIsLoading(false);
      setTimeout(() => {
        setFields(false);
      }, 4000);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImageAsset(downloadURL);
        setIsLoading(false);
        setFields(true);
        setMsg("Image uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      });
    }
  );
};

export const deleteFromFirebase = ({
  setIsLoading,
  setImageAsset,
  setFields,
  setMsg,
  setAlertStatus,
  imageAsset,
}) => {
  setIsLoading(true);
  const deleteRef = ref(storage, imageAsset);
  deleteObject(deleteRef).then(() => {
    setImageAsset(null);
    setIsLoading(false);
    setFields(true);
    setMsg("Image deleted successfully 😊");
    setAlertStatus("success");
    setTimeout(() => {
      setFields(false);
    }, 4000);
  });
};

export const saveToFirebase = ({
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
}) => {
  setIsLoading(true);
  try {
    if (!title || !unitValue || !unit || !imageAsset || !price || !category) {
      setFields(true);
      setMsg("Required fields can't be empty🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 1000);
    } else {
      const data = {
        id: `${Date.now()}`,
        title: title,
        imageURL: imageAsset,
        category: category,
        unit,
        unitValue,
        qty: 1,
        price: price,
      };
      saveItem(data);
      setIsLoading(false);
      setFields(true);
      setMsg("Data Uploaded successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 2000);
      clearData({
        setTitle,
        setPrice,
        setImageAsset,
        setunit,
        setUnitvalue,
        setCategory,
      });
    }
  } catch (error) {
    console.log(error);
    setFields(true);
    setMsg("Error while uploading : Try AGain 🙇");
    setAlertStatus("danger");
    setTimeout(() => {
      setFields(false);
      setIsLoading(false);
    }, 4000);
  }
};
