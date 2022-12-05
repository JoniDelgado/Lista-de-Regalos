import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GiftListContext from "../context/GiftListContext";
import ListItem from "./ListItem";

const GiftList = ({ setIsOpenForm, setIsOpenModal }) => {
  const { setGiftList, giftList } = useContext(GiftListContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = giftList.reduce((total, price) => {
      return (total = total + price.price * price.quantity);
    }, 0);
    setTotalPrice(total);
  }, [giftList]);

  return (
    <ListContainer>
      <h1>Lista De Regalos</h1>
      <List>
        <ListItem setIsOpenForm={setIsOpenForm} />
      </List>
      <ShowPrice>
        <h2>Total Price: €{totalPrice}</h2>
      </ShowPrice>
      <Button onClick={() => setIsOpenForm(true)}>Agregar</Button>
      <Button onClick={() => setGiftList([])}>Vaciar</Button>
      <Button onClick={() => setIsOpenModal(true)}>Previsualizar</Button>
    </ListContainer>
  );
};

export default GiftList;

const ListContainer = styled.div`
  padding: 1rem;
  width: 45%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 50px;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  transition: all linear 0.5s;

  @media screen and (max-width: 950px) {
    position: static;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    position: static;
    width: 90%;
  }
`;

const List = styled.ul`
  height: 200px;
  margin: 1rem 0;
  width: 80%;
  list-style: none;
  overflow-y: scroll;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 20%;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    width: 35%;
  }
`;

const ShowPrice = styled.div`
  margin: 1.5rem 0;
  padding: 0.5rem;
  width: 100%;
  border-top: thin solid black;
  text-align: center;
`;
