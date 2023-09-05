import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface Iproduct {
  name_product: string;
  category: string;
  price: number;
  id: number;
  img: string;
  description: string;
  quantity?: number;
}

interface ICartProvider {
  products: Iproduct[];
  setProducts: React.Dispatch<React.SetStateAction<Iproduct[]>>;
  cartTotal: number | string | [];
  setCartTotal: React.Dispatch<React.SetStateAction<string | number | []>>;
  currentSale: Iproduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<Iproduct[]>>;
  handleClick: (id: number) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  filter: Iproduct[];
  filteredProducts: Iproduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFilteredProducts: any;
  handleRemoveFirstItem: (id: number) => void;
  removeClick: (id: number, prevSale: Iproduct[]) => Iproduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  consolidateProducts: (products: Iproduct[]) => any[];
  openModal: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IChildrenProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartProvider);

export const CartProvider = ({ children }: IChildrenProps) => {
  const [products, setProducts] = useState([] as Iproduct[]);
  const [cartTotal, setCartTotal] = useState<number | string | []>(0);
  const [currentSale, setCurrentSale] = useState<Iproduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const filter: Iproduct[] = products.filter((product: Iproduct) =>
    filteredProducts.length === 0
      ? true
      : product.name_product
          .toLowerCase()
          .includes(filteredProducts as unknown as string) ||
        product.category
          .toLowerCase()
          .includes(filteredProducts as unknown as string)
  );

  function handleClick(id: number) {
    const add = products.find((element) => element.id === id);
    setCurrentSale((prevSale) => prevSale.concat(add!));
    toast.success("produto adicionado no carrinho");
  }

  const consolidateProducts = (products: Iproduct[]) => {
    const productMap = new Map();

    products.forEach((product) => {
      const existingProduct = productMap.get(product.id);
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        productMap.set(product.id, { ...product });
      }
    });

    return Array.from(productMap.values());
  };

  const removeClick = (id: number, prevSale: Iproduct[]) => {
    const indexToRemove = prevSale.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      return prevSale.filter((_, index) => index !== indexToRemove);
    }
    return prevSale;
  };

  const handleRemoveFirstItem = (id: number) => {
    toast.success("produto excluido do carrinho");
    return setCurrentSale((prevSale) => removeClick(id, prevSale));
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await api.get(`products`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getList();

    const total = () => {
      const amount: number = currentSale?.reduce(
        (accumulator: number, currentValue: { price: number }) =>
          accumulator + Number(currentValue.price),
        0
      );
      setCartTotal(amount.toFixed(2));
    };
    total();
  }, [currentSale, products]);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        cartTotal,
        setCartTotal,
        currentSale,
        setCurrentSale,
        removeClick,
        handleRemoveFirstItem,
        handleClick,
        modal,
        setModal,
        handleCloseModal,
        handleOpenModal,
        filter,
        setFilteredProducts,
        filteredProducts,
        consolidateProducts,
        openModal,
        closeModal,
        modalIsOpen,
        setModalIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
