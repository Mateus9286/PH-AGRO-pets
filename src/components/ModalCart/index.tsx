import { useContext, useEffect, useState } from "react";
import { CartContext, Iproduct } from "../../Providers/CartContext";
import Trash from "../../assets/lixeira.png";
import ReactModal from "react-modal";
import {
  CartConteiner,
  CartDiv,
  CartItem,
  CartList,
  CartPurchases,
  CartTitleAddItems,
  CategoryCart,
  ContCart,
  ContTotal,
  EmptyCart,
  EmptyCartTitle,
  ImgCart,
  TitleAmount,
  TitleCart,
  TitleTotal,
} from "./styles";
import { Link } from "react-router-dom";

ReactModal.setAppElement("#root");

export const ModalCart = () => {
  const {
    currentSale,
    cartTotal,
    handleCloseModal,
    modal,
    consolidateProducts,
    handleRemoveFirstItem,
  } = useContext(CartContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, setCartItems] = useState<Iproduct[]>([]);

  useEffect(() => {
    const consolidated = consolidateProducts(currentSale);
    setCartItems(consolidated);
  }, [currentSale]);

  if (cartItems.length === 0) {
    return (
      <ReactModal
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto ",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            padding: "0",
            border: "none",
            maxHeight: "500px",
          },
          overlay: {
            background: "rgba(18, 18, 20, 0.5)",
          },
        }}
        isOpen={modal}
        onRequestClose={handleCloseModal}
      >
        <CartConteiner>
          <CartPurchases>
            Carrinho de compras
            <p onClick={handleCloseModal}>x</p>
          </CartPurchases>
          <EmptyCart>
            <EmptyCartTitle>Sua sacola está vazia</EmptyCartTitle>
            <CartTitleAddItems>Adicione itens</CartTitleAddItems>
          </EmptyCart>
        </CartConteiner>
      </ReactModal>
    );
  } else {
    return (
      <ReactModal
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto ",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            padding: "0",
            border: "none",
            maxHeight: "500px",
          },
          overlay: {
            background: "rgba(18, 18, 20, 0.5)",
          },
        }}
        isOpen={modal}
        onRequestClose={handleCloseModal}
      >
        <CartConteiner>
          <CartPurchases>
            Carrinho de compras
            <p onClick={handleCloseModal}>x</p>
          </CartPurchases>
          <CartList>
            {cartItems.map((productCart, index) => (
              <CartItem key={index}>
                <ContCart>
                  <ImgCart
                    src={productCart.img}
                    alt={productCart.name_product}
                  />
                  <CartDiv>
                    <TitleCart>{productCart.name_product}</TitleCart>

                    <CategoryCart>{productCart.category}</CategoryCart>
                  </CartDiv>
                </ContCart>
                <span>
                  {productCart.quantity && (
                    <strong> x{productCart.quantity}</strong>
                  )}
                  <button onClick={() => handleRemoveFirstItem(productCart.id)}>
                    <img src={Trash} alt="" />
                  </button>
                </span>
              </CartItem>
            ))}
          </CartList>
          <ContTotal>
            <TitleTotal>Total</TitleTotal>
            <TitleAmount>R$ {cartTotal}</TitleAmount>
            <Link to={"/finalizingPurchase"}>Finalizar compra</Link>
          </ContTotal>
        </CartConteiner>
      </ReactModal>
    );
  }
};
