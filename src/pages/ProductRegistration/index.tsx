import { z } from "zod";
import { Footer } from "../../components/Footer";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Global } from "./styles";
import Trash from "../../assets/lixeira.png";
import {
  Button,
  ContInformation,
  ProductPrice,
  CategoryProduct,
  ContainerUl,
  FormContent,
  Input,
  Label,
  Picture,
  StyledProduct,
  Title,
  TitleProduct,
  Bin,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MenuModal } from "../../components/ModalMenu";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { CartContext } from "../../Providers/CartContext";
import { Select } from "../Finishing/styles";

const schema = z.object({
  category: z.string(),
  name_product: z.string(),
  price: z.string(),
  description: z.string(),
  img: z.string(),
});

export type Data = z.infer<typeof schema>;

export const ProductRegistration = () => {
  const { register, handleSubmit, reset } = useForm<Data>({
    resolver: zodResolver(schema),
  });
  const { RegistrationProduct, deleteProduct } = useContext(UserContext);
  const { products } = useContext(CartContext);

  const onSubmit = (data: Data) => {
    RegistrationProduct(data);
    console.log(data);
    reset();
  };

  return (
    <Global>
      <HeaderAdmin />

      <FormContent>
        <Title>Cadastro de Produto</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="category">Categoria</Label>
          <Select {...register("category")} required>
            <option>cães</option>
            <option>gatos</option>
            <option>peixes</option>
            <option>passaros</option>
            <option>outros</option>
          </Select>
          <Label htmlFor="name_product">Nome do Produto</Label>
          <Input
            type="text"
            id="name_product"
            {...register("name_product")}
            required
          />
          <Label htmlFor="price">Preço</Label>
          <Input type="text" id="price" {...register("price")} required />
          <Label htmlFor="description">Descrição</Label>
          <Input
            type="text"
            id="description"
            {...register("description")}
            required
          />
          <Label htmlFor="img">URL da Imagem</Label>
          <Input type="text" id="img" {...register("img")} required />
          <Button type="submit">Cadastrar Produto</Button>
        </form>
      </FormContent>
      <Title>Produtos</Title>
      <ContainerUl>
        {products &&
          products.map((product) => (
            <StyledProduct key={product.id}>
              <Bin src={Trash} onClick={() => deleteProduct(product.id)}></Bin>
              <Picture>
                <img src={product.img} alt={product.name_product} />
              </Picture>
              <ContInformation>
                <TitleProduct>{product.name_product}</TitleProduct>
                <CategoryProduct>{product.category}</CategoryProduct>
                <ProductPrice>R$ {product.price}</ProductPrice>
              </ContInformation>
            </StyledProduct>
          ))}
      </ContainerUl>
      <MenuModal />
      <Footer />
    </Global>
  );
};
