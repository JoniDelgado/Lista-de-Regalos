import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GiftListContext from "../context/GiftListContext";
import { RiCloseCircleFill } from "react-icons/Ri";

const portalPath = document.getElementById("form");

const ModalList = ({ setIsOpenModal }) => {
  const { giftList } = useContext(GiftListContext);
  return ReactDOM.createPortal(
    <ModalListContainer>
      <ModalCard>
        <ExitButton onClick={() => setIsOpenModal(false)}>
          {<RiCloseCircleFill />}
        </ExitButton>
        <h1>Regalos a comprar</h1>
        {giftList.map(({ id, gift, name, image, quantity }) => {
          return (
            <GiftData key={id}>
              <img src={image} alt={gift} />
              <div>
                <h4>
                  {gift} - ({quantity}).
                </h4>
                <h5>{name}</h5>
              </div>
            </GiftData>
          );
        })}
      </ModalCard>
    </ModalListContainer>,
    portalPath
  );
};

export default ModalList;

const ModalListContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalCard = styled.div`
  padding: 2rem;
  width: 30%;
  position: relative;
  background-color: #fffdfd;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: fill;
    margin-right: 0.5rem;
  }
`;

const GiftData = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const ExitButton = styled.button`
  font-size: 1.5rem;
  border: none;
  position: absolute;
  top: 10px;
  right: 30px;
  background-color: transparent;
  cursor: pointer;
`;
