import React, { useContext } from "react";
import styled from "styled-components";
import GiftListContext from "../context/GiftListContext";
import { RiDeleteBin2Fill, RiEdit2Fill, RiPrinterLine } from "react-icons/Ri";
import { CgDuplicate } from "react-icons/Cg";

const ListItem = ({ setIsOpenForm }) => {
  const { giftList, setGiftList, setGiftForm, setIsEditing } =
    useContext(GiftListContext);

  const handleDeleteItem = (id) => {
    const deletedItem = giftList.filter((gift) => gift.id !== id);
    setGiftList(deletedItem);
  };

  const handleEditItem = (id) => {
    const itemToEdit = giftList.find((gift) => gift.id === id);
    setIsEditing(true);
    setGiftForm(itemToEdit);
    setIsOpenForm(true);
  };

  const handleDuplicateItem = (id) => {
    const duplicatedItem = giftList.find((gift) => gift.id === id);
    setIsOpenForm(true);
    setGiftForm(duplicatedItem);
  };

  return (
    <>
      {giftList.map(({ id, gift, name, quantity, image, price }) => {
        return (
          <Item key={id}>
            <GiftData>
              <img src={image} alt={gift} style={{ width: "50px" }} />
              <div>
                <h4>
                  {gift} - ({quantity}).
                </h4>
                <h5>{name}</h5>
                <p>
                  Price: €{price} - Total: €{price * quantity}
                </p>
              </div>
            </GiftData>
            <div>
              <Button type="button" onClick={() => handleDeleteItem(id)}>
                {<RiDeleteBin2Fill />}
              </Button>
              <Button type="button" onClick={() => handleEditItem(id)}>
                {<RiEdit2Fill />}
              </Button>
              <Button type="button" onClick={() => handleDuplicateItem(id)}>
                {<CgDuplicate />}
              </Button>
            </div>
          </Item>
        );
      })}
    </>
  );
};

export default ListItem;

const Item = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GiftData = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  margin-left: 5px;
  padding: 5px;
  width: 30px;
  height: 30px;
  line-height: 1px;
  border: none;
  border-radius: 50%;
  background-color: #ee1f1f;
  color: white;
  cursor: pointer;
`;
