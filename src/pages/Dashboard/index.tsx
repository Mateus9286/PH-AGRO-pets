import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { ContainerUl, Global } from "../Home/styles";
import Trash from "../../assets/lixeira.png";
import {
  Bin,
  CustomerInfo,
  OrderContainer,
  ProductItem,
  ProductList,
  Requests,
} from "./styles";
import { UserContext } from "../../Providers/UserContext";
import { useContext } from "react";
import { MenuModal } from "../../components/ModalMenu";
import { Navigate } from "react-router-dom";

export const Dashboard = () => {
  const { user, deleteOrder } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("@Token")!);
  return (
    <>
      {token ? (
        <Global>
          <HeaderAdmin />
          <Requests>Pedidos</Requests>
          <ContainerUl>
            {user?.map((order) => (
              <OrderContainer key={order.id}>
                <Bin
                  src={Trash}
                  onClick={() => deleteOrder(Number(order.id))}
                ></Bin>
                <CustomerInfo>
                  <div>
                    <strong>{order.name}</strong>
                    <p>
                      {order.address.street}, {order.address.number}
                    </p>
                    <p>{order.address.neighborhood}</p>
                    <p>{order.address.phone}</p>
                  </div>
                  <div>
                    {order.payment.Troco != "null" ? (
                      <>
                        <p>Troco</p>
                        <p>R$ {order.payment.Troco}</p>
                      </>
                    ) : order.payment.type == "card" ? (
                      <p> Cartão</p>
                    ) : (
                      <p> Dinheiro</p>
                    )}
                  </div>
                </CustomerInfo>
                <ProductList>
                  {order.productsList.map((product) => (
                    <ProductItem key={product.id}>
                      <img src={product.img} alt={product.name_product} />
                      <div>
                        <p>{product.name_product}</p>
                        <p>Price ${product.price}</p>
                      </div>
                    </ProductItem>
                  ))}
                </ProductList>
              </OrderContainer>
            ))}
          </ContainerUl>
          <MenuModal />
          <Footer />
        </Global>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};
