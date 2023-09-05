import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../Providers/CartContext";
import { MenuContainer } from "./styles";

const customStyles = {
  content: {
    top: "0",
    right: "0",
    left: "auto",
    bottom: "auto",
    backgroundColor: "white",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

Modal.setAppElement("#root");

export const MenuModal = () => {
  const { modalIsOpen, closeModal } = useContext(CartContext);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Menu"
      >
        <MenuContainer>
          <strong onClick={closeModal}>x</strong>
          <a href="/Dashboard" style={{ color: "#ff7402 " }}>
            Pedidos
          </a>
          <a href="/profile" style={{ color: "#ff7402 " }}>
            Perfil
          </a>
          <a href="/product" style={{ color: "#ff7402 " }}>
            Produtos
          </a>
        </MenuContainer>
      </Modal>
    </div>
  );
};
