import React, { useContext, useEffect, useState } from "react";
import GiftForm from "./components/GiftForm";
import GiftList from "./components/GiftList";
import GiftListContext, { initialData } from "./context/GiftListContext";
import styled from "styled-components";
import ModalList from "./modals/ModalList";
import "./App.css";

function App() {
  const { setGiftForm, giftList, setStorage, setIsEditing } =
    useContext(GiftListContext);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [keyCounter, setKeyCounter] = useState(1);

  useEffect(() => {
    setStorage(giftList);
    setIsOpenForm(false);
    setKeyCounter(keyCounter + 1);
  }, [giftList]);

  useEffect(() => {
    if (!isOpenForm) {
      setGiftForm(initialData);
      setIsEditing(false);
    }
  }, [isOpenForm]);

  return (
    <AppContainer>
      {isOpenForm && (
        <GiftForm setIsOpenForm={setIsOpenForm} keyCounter={keyCounter} />
      )}
      <GiftList setIsOpenForm={setIsOpenForm} setIsOpenModal={setIsOpenModal} />
      {isOpenModal && <ModalList setIsOpenModal={setIsOpenModal} />}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://estaticos.muyinteresante.es/uploads/images/dossier/5d47f5455cafe8f920a7633c/especial-navidad.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
