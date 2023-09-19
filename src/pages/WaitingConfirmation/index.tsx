import { z } from "zod";
import { Header } from "../../components/Header";
import YourComponent from "../../components/iconWhats";
import { Global } from "../Home/styles";
import { Footer } from "../../components/Footer";
import { CardContainer, TextClient, Title, Text } from "./styles";
import { Link } from "react-router-dom";
import { Data } from "../Finishing";

const AddressSchema = z.object({
  number: z.number(),
  street: z.string(),
  phone: z.string(),
  neighborhood: z.string(),
});

const PaymentSchema = z.object({
  type: z.string(),
  Troco: z.nullable(z.string()),
});

const PropsSchema = z.object({
  name: z.string(),
  address: AddressSchema,
  payment: PaymentSchema,
});

export type Props = z.infer<typeof PropsSchema>;

export const WaitingConfirmation = () => {
  const data: Data = JSON.parse(localStorage.getItem("Endereço")!);
  const { street, number, neighborhood, phone, type, Troco, name } = data;

  return (
    <Global isPrincipal>
      <YourComponent />
      <Header />
      <CardContainer>
        <Title>Compra Concluída!</Title>
        <TextClient>
          Olá, {name}! Seu pedido foi recebido e está sendo processado. Em breve
          você receberá a sua compra, Obrigado por comprar conosco.
        </TextClient>
        <Title>Endereço de Entrega</Title>
        <Text>{street}</Text>
        <Text>Número: {number}</Text>
        <Text>Bairro: {neighborhood}</Text>
        <Text>Telefone: {phone}</Text>
        <Text>Método de Pagamento: {type}</Text>
        {Troco !== null && <Text>Troco: R$ {Troco}</Text>}
        <Link to={"/"}>Voltar as Compras</Link>
      </CardContainer>
      <Footer />
    </Global>
  );
};
