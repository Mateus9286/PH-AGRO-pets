import { useContext } from "react";
import Ph_pets from "../../assets/Picsart_.png";
import Cart from "../../assets/cart.png";

import { CartCont, HeaderStyle, Picture } from "./styles";
import { CartContext } from "../../Providers/CartContext";

export const Header = () => {
  const { handleOpenModal, currentSale } = useContext(CartContext);

  return (
    <>
      <HeaderStyle>
        <picture>
          <img src={Ph_pets} alt="logo"></img>
        </picture>
        <Picture>
          <CartCont>
            <p>{currentSale.length}</p>
          </CartCont>
          <img onClick={handleOpenModal} src={Cart} alt="cart"></img>
        </Picture>
      </HeaderStyle>
    </>
  );
};
