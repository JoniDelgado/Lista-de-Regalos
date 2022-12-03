import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const GiftListContext = createContext();

export const initialData = {
  gift: "",
  quantity: 1,
  name: "",
  image: "",
};

export const ListProvider = ({ children }) => {
  const [storage, setStorage] = useLocalStorage("gift");
  const [giftForm, setGiftForm] = useState(initialData);
  const [giftList, setGiftList] = useState(storage);
  const [isEditing, setIsEditing] = useState(false);

  const data = {
    giftForm,
    setGiftForm,
    giftList,
    setGiftList,
    setStorage,
    isEditing,
    setIsEditing,
  };
  return (
    <GiftListContext.Provider value={data}>{children}</GiftListContext.Provider>
  );
};

export default GiftListContext;
