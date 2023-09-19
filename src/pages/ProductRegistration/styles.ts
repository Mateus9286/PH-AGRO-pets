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
  position: relative;

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const FormContent = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  height: 100%;
  margin: 30px 0px;
`;

export const ContainerUl = styled.ul`
  display: flex;
  padding: 0 16px;
  overflow: auto;
  width: 100%;
  margin-bottom: 6rem;

  @media (min-width: 900px) {
    padding: 20px 0 20px 80px;
  }

  img {
    width: 50% !important;
  }
`;

export const Bin = styled.img`
  max-width: 15px;
  color: black;
  position: absolute;
  right: 8px;
  top: 10px;
  cursor: pointer;
`;

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  height: 200px;
  margin: 5px 36px 30px 0;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  position: relative;

  :hover {
    border: solid 2px #ff7402;
  }

  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #30303020;
`;

export const CategoryProduct = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #737373;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #ff7402;
  margin-bottom: 4px;
`;

export const ButtonAdd = styled.button`
  height: 25px;
  width: 100%;
  border-radius: 8px;
  padding: 0px 20px;
  background-color: #bdbdbd;
  border: solid 2px #bdbdbd;
  cursor: pointer;
  color: #ffff;

  :hover {
    background-color: #ff7402;
    border: solid 2px #ff7402;
  }
`;

export const ContInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffff;
  padding: 8px 6px;
  border-radius: 5px;
`;

export const TitleProduct = styled.h1`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Title = styled.h1`
  color: #ff7402;
  text-align: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #ff7402;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
`;
