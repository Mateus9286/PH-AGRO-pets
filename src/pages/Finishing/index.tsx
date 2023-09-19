import { Header } from "../../components/Header";
import YourComponent from "../../components/iconWhats";
import { Global } from "../Home/styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Container, Form, Input, Label, Select } from "./styles";
import { Footer } from "../../components/Footer";
import { useContext } from "react";
import { CartContext } from "../../Providers/CartContext";
import { api } from "../../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const orderSchema = z.object({
  name: z.string(),
  number: z.string(),
  street: z.string(),
  phone: z.string(),
  neighborhood: z.string(),
  type: z.string(),
  Troco: z.string().nullable(),
});

export type Data = z.infer<typeof orderSchema>;

export const FinalizingPurchase = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Data>({
    resolver: zodResolver(orderSchema),
    mode: "onBlur",
  });

  const { currentSale, setCurrentSale } = useContext(CartContext);
  const navigate: NavigateFunction = useNavigate();

  const registerOrders = async (data: Data) => {
    try {
      const dataPost = {
        name: data.name,
        address: {
          number: data.number,
          street: data.street,
          phone: data.phone,
          neighborhood: data.neighborhood,
        },
        payment: {
          type: data.type,
          Troco: data.Troco ? parseFloat(data.Troco) : null,
        },
        productsList: currentSale.map(
          ({ category, name_product, price, description, img }) => ({
            category,
            name_product,
            price,
            description,
            img,
          })
        ),
      };

      await api.post(`user`, dataPost);
      setCurrentSale([]);
      navigate("/waitingConfirmation");
    } catch (error) {
      toast.error("O nome ja existe");
    }
  };

  const onSubmit = (data: Data) => {
    registerOrders(data);

    localStorage.setItem("Endereço", `${JSON.stringify(data)}`);
    reset();
  };

  return (
    <Global isPrincipal>
      <YourComponent />
      <Header />
      <Container>
        <h1>Endereço de entrega</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Nome
            <Input type="text" {...register("name")} required />
            {errors.name && <span>{errors.name.message} </span>}
          </Label>
          <h2>Endereço</h2>
          <Label>
            Número
            <Input type="number" {...register("number")} required />
            {errors.number && <span>{errors.number.message}</span>}
          </Label>
          <Label>
            Rua
            <Input type="text" {...register("street")} required />
            {errors.street && <span>{errors.street.message}</span>}
          </Label>
          <Label>
            Telefone
            <Input type="text" {...register("phone")} required />
            {errors.phone && <span>{errors.phone.message}</span>}
          </Label>
          <Label>
            Bairro
            <Input type="text" {...register("neighborhood")} required />
            {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
          </Label>
          <h2>Pagamento</h2>
          <Label>
            Tipo de pagamento
            <Select {...register("type")} required>
              <option value="card">Cartão</option>
              <option value="money">Dinheiro</option>
            </Select>
            {errors.type && <span>{errors.type.message}</span>}
          </Label>

          <Label>
            Troco
            <Input type="number" {...register("Troco")} />
            {errors.Troco && <span>{errors.Troco.message}</span>}
          </Label>

          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
      <Footer />
    </Global>
  );
};
