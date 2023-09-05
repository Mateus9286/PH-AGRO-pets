import styled from "styled-components";
import background from "../../assets/Design.png";

export const Global = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 5px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  margin: 20px 0 10px;
  flex-wrap: wrap;
  justify-content: center;

  button {
    background-color: #ff7402;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 2px 10px;
    margin: 0 3px 7px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #ff8f3f;
    }
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin: 0 16px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ff7402;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  color: #333;
  max-width: 70%;
`;

export const SearchButton = styled.button`
  background-color: #ff7402;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  max-width: 70%;

  &:hover {
    background-color: #ff8f3f;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  padding: 0 16px;
  overflow: auto;
  width: 100%;

  @media (min-width: 900px) {
    padding: 20px 0 20px 80px;
  }

  img {
    width: 50% !important;
  }
`;

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  min-width: 250px;
  height: 346px;
  margin: 5px 56px 50px 0;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  :hover {
    border: solid 2px #ff7402;
  }

  @media (min-width: 900px) {
    max-width: 255px;
    min-width: 255px;
    justify-content: space-between;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #30303020;
`;

export const ContInformation = styled.div`
  display: flex;
  flex-direction: column;
  height: 196px;
  width: 100%;
  background-color: #ffff;
  padding: 23px 20px;
  border-radius: 5px;
`;

export const TitleProduct = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 14px;
`;

export const CategoryProduct = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #737373;
  margin-bottom: 14px;
`;

export const ProductPrice = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #ff7402;
  margin-bottom: 14px;
`;

export const whatsIcon = styled.img`
  width: 40px;
  cursor: pointer;
  position: fixed;
`;

export const ButtonAdd = styled.button`
  height: 40px;
  width: 106px;
  border-radius: 8px;
  padding: 0px 15px;
  background-color: #bdbdbd;
  border: solid 2px #bdbdbd;

  color: #ffff;

  :hover {
    background-color: #ff7402;
    border: solid 2px #ff7402;
  }
`;
