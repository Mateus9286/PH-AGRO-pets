import { useContext } from "react";
import Ph_pets from "../../assets/PH-PETS.png";
import Menu from "../../assets/menu_FILL0_wght400_GRAD0_opsz48 1.png";

import { HeaderStyle, Picture } from "./styles";
import { CartContext } from "../../Providers/CartContext";

export const HeaderAdmin = () => {
  const { openModal } = useContext(CartContext);
  return (
    <>
      <HeaderStyle>
        <picture>
          <img src={Ph_pets} alt="logo"></img>
        </picture>
        <Picture onClick={openModal}>
          <img src={Menu} alt="cart"></img>
        </Picture>
      </HeaderStyle>
    </>
  );
};
