import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Data } from "../pages/ProductRegistration";
import { CartContext } from "./CartContext";

interface IChildrenProps {
  children: React.ReactNode;
}

interface IformData {
  password: string | number;
  name: string;
}

interface Ipass {
  password: string | number;
}

interface Address {
  id: number;
  number: string;
  street: string;
  phone: string;
  neighborhood: string;
}

interface Payment {
  id: number;
  type: "card" | "money";
  Troco: string | null;
}

interface Product {
  id: number;
  category: string;
  name_product: string;
  price: string;
  description: string;
  img: string;
}

interface User {
  id: number;
  admin: boolean;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  address: Address;
  payment: Payment;
  productsList: Product[];
}

export interface IUserContext {
  UserLogin: (formData: IformData) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  user: User[] | null;
  deleteOrder: (id: number) => Promise<void>;
  RegistrationProduct: (formData: Data) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
  pathPassword: (data: Ipass) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const ContextProviders = ({ children }: IChildrenProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { setProducts } = useContext(CartContext);

  const UserLogin = async (formData: IformData) => {
    try {
      const request = await api.post("login", formData);
      localStorage.setItem("@Token", JSON.stringify(request.data.token));

      navigate("/dashboard");
    } catch (error) {
      toast.error("nome ou senha invalida");
    }
  };

  const RegistrationProduct = async (formData: Data) => {
    try {
      await api.post("products", formData);
      const updated = await api.get(`products`);
      setProducts(updated.data);
      toast.success("Produto cadastrado com sucesso");
    } catch (error) {
      toast.error("Erro ao Cadastrar");
    }
  };

  const pathPassword = async (data: Ipass) => {
    const token = JSON.parse(localStorage.getItem("@Token") || "");
    try {
      await api.patch(`user/4`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.info("Senha alterada");
    } catch (error) {
      toast.error("Erro ao alterar a senha");
    }
  };

  const deleteProduct = async (id: number) => {
    const token = JSON.parse(localStorage.getItem("@Token") || "");
    try {
      await api.delete(`products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updated = await api.get(`products`);
      setProducts(updated.data);
      toast.success("Produto excluido com sucesso");
    } catch (error) {
      toast.error("Erro ao excluir");
    }
  };

  const deleteOrder = async (id: number) => {
    const token = JSON.parse(localStorage.getItem("@Token") || "");

    try {
      await api.delete(`user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedUser = await api.get(`user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(updatedUser.data);
      toast.success("Pedido excluído com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = JSON.parse(localStorage.getItem("@Token")!);
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const request = await api.get(`user`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(request.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [user]);

  return (
    <>
      <UserContext.Provider
        value={{
          deleteProduct,
          UserLogin,
          loading,
          setLoading,
          setUser,
          user,
          deleteOrder,
          RegistrationProduct,
          pathPassword,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
