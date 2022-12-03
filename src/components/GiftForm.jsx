import React, { useContext } from "react";
import GiftListContext from "../context/GiftListContext";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/Gi";
import randomGift from "../assets/randomGifts";

const portalPath = document.getElementById("form");

const GiftForm = ({ setIsOpenForm, keyCounter }) => {
  const { giftForm, setGiftForm, giftList, setGiftList, isEditing } =
    useContext(GiftListContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGiftForm({ ...giftForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { gift, name, quantity, image, price } = giftForm;

    if (!gift || !name) return alert("Falta rellenar campos");

    if (isEditing) {
      const editedList = giftList.map((gift) =>
        gift.id === giftForm.id ? giftForm : gift
      );
      setGiftList(editedList);
    } else {
      const item = {
        id: keyCounter,
        gift,
        name,
        quantity,
        image: image || "https://acortar.link/LRGyqu",
        price,
      };

      setGiftList([...giftList, item]);
    }
  };

  const handleRandomGift = () => {
    const randomItem = Math.floor(Math.random() * randomGift.length);
    const { gift, image, price } = randomGift[randomItem];
    setGiftForm({ ...giftForm, price, gift, image });
  };

  return ReactDOM.createPortal(
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <h1>{!isEditing ? "Agreguemos regalitos" : "Editemos el regalo"}</h1>
        <div>
          <input
            type="text"
            name="gift"
            onChange={handleInputChange}
            value={giftForm.gift}
            placeholder="Regalo"
          />
          {!isEditing && (
            <Button type="button" onClick={handleRandomGift}>
              {<GiPerspectiveDiceSixFacesRandom />}
            </Button>
          )}
        </div>
        <input
          type="number"
          name="quantity"
          onChange={handleInputChange}
          value={giftForm.quantity}
          min="1"
          placeholder="Cantidad"
        />
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={giftForm.name}
          placeholder="Nombre del destinatario"
        />
        <input
          type="url"
          name="image"
          onChange={handleInputChange}
          value={giftForm.image}
          placeholder="URL imagen"
        />
        <input
          type="number"
          name="price"
          onChange={handleInputChange}
          value={giftForm.price}
          min="0"
          placeholder="Precio"
        />
        <button type="submit">{isEditing ? "Editar" : "Agregar"}</button>
        <button onClick={() => setIsOpenForm(false)}>Cancelar</button>
      </Form>
    </FormContainer>,
    portalPath
  );
};

export default GiftForm;

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;

const Form = styled.form`
  width: 35%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-image: url("https://img.freepik.com/fotos-premium/gracioso-grito-gesto-santa-claus-explicando-reglas-fondo-negro_394555-767.jpg?w=2000");
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 1px 1px 5px black;
  background-color: #fff;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  h1 {
    color: #f7f7f7;
    text-shadow: 1px 1px 10px red, 1px 1px 20px white, 1px 1px 30px red;
  }

  input {
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 5px black;
  }

  & > div {
    display: flex;
    justify-content: space-between;

    input {
      width: ${({ isEditing }) => (isEditing ? "70%" : "100%")};
    }
  }

  button {
    width: 30%;
    margin: auto;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-left: 10px !important;
  padding: 1px !important;
  width: 20% !important;
  height: 30px;
  line-height: 1px;
  border: none;
  background-color: #ee1f1f;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;
