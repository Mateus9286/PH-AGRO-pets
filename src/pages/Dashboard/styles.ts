import styled from "styled-components";

export const PrimaryColor = "#ff7402";

export const Requests = styled.h1`
  color: #ff7402;
  margin: 18px 0;
`;

export const Bin = styled.img`
  max-width: 15px;
  position: absolute;
  right: 10px;
  top: 12px;
  cursor: pointer;
`;

export const OrderContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  min-width: 250px;
  margin: 0px 40px 30px 10px;
  position: relative;
  height: max-content;

  p {
    font-size: small;
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  margin-bottom: 50px;
`;

export const CustomerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-direction: column;

  span {
    flex-direction: row;
    display: flex;
  }

  p {
    margin-right: 20px;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  p {
    width: max-content;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 4px;
  }
`;
