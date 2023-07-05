import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// Create object in firestore for new user
export const newUserDb = async (uid) => {
  await setDoc(
    doc(firestore, "userDetails", uid),
    {
      address: [],
    },
    {
      merge: true,
    }
  );
};
// update the adress of signin user
export const updateUserAdress = async (uid, newAddress) => {
  const userRef = doc(firestore, "userDetails", uid);
  await updateDoc(userRef, {
    address: arrayUnion(newAddress),
  });
};

// get add address of user
export const getAllAddress = async (uid) => {
  const docRef = doc(firestore, "userDetails", uid);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
