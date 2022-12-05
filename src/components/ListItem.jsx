import React, { useContext } from "react";
import styled from "styled-components";
import Icons from "../assets/Icons";
import GiftListContext from "../context/GiftListContext";

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
              <img src={image} alt={gift} />
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
                <Icons className="icono" icon="delete" />
              </Button>
              <Button type="button" onClick={() => handleEditItem(id)}>
                <Icons className="icono" icon="edit" />
              </Button>
              <Button type="button" onClick={() => handleDuplicateItem(id)}>
                <Icons className="icono" icon="copy" />
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

  @media screen and (max-width: 470px) {
    & > div:last-of-type {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .icono {
        width: 100%;
      }
    }
  }
`;

const GiftData = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
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

  @media screen and (max-width: 470px) {
    height: 20px;
    width: 20px;
  }
`;
