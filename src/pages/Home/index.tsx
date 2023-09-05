import { Header } from "../../components/Header";
import {
  ButtonAdd,
  CategoryProduct,
  ContInformation,
  Container,
  ContainerUl,
  Global,
  Picture,
  ProductPrice,
  SearchButton,
  SearchContainer,
  SearchInput,
  StyledProduct,
  TitleProduct,
} from "./styles";
import banner from "../../assets/banner.jpg";
import { Footer } from "../../components/Footer";
import YourComponent from "../../components/iconWhats";
import { ModalCart } from "../../components/ModalCart";
import { useContext, useState } from "react";
import { CartContext } from "../../Providers/CartContext";

export const Home = () => {
  const { handleClick, filter, setFilteredProducts } = useContext(CartContext);

  const [target, setTarget] = useState("");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    setFilteredProducts(target);
    event.preventDefault();
  };

  return (
    <Global>
      <YourComponent />
      <Header />
      <img src={banner} alt="banner"></img>
      <Container>
        <button>cães</button>
        <button>gatos</button>
        <button>peixes</button>
        <button>passaros</button>
        <button>outros</button>
      </Container>
      <SearchContainer onSubmit={submit}>
        <SearchInput
          onChange={(event) => setTarget(event.target.value)}
          placeholder="Digite sua pesquisa"
        />
        <SearchButton>Pesquisar</SearchButton>
      </SearchContainer>
      <br />
      <br />
      <ContainerUl>
        {filter.map((product) => (
          <StyledProduct key={product.id}>
            <Picture>
              <img src={product.img} alt={product.name_product} />
            </Picture>
            <ContInformation>
              <TitleProduct>{product.name_product}</TitleProduct>
              <CategoryProduct>{product.category}</CategoryProduct>
              <ProductPrice>R$ {product.price}</ProductPrice>
              <ButtonAdd onClick={() => handleClick(product.id)}>
                Adicionar
              </ButtonAdd>
            </ContInformation>
          </StyledProduct>
        ))}
      </ContainerUl>
      <ModalCart />
      <Footer />
    </Global>
  );
};
