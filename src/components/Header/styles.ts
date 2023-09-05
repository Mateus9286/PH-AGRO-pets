import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 5px;
  justify-content: space-between;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  picture {
    height: 35px;
    width: auto;
    display: flex;
  }

  @media (min-width: 900px) {
    padding: 20px 80px;
  }
`;

export const CartCont = styled.div`
  height: 24px;
  width: 20px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 15px;
  top: 5px;
  position: absolute;

  p {
    font-size: 14px;
    font-weight: 800;
    color: #ff7402;
    margin-right: 20px;
    margin-bottom: 37px;
  }
`;

export const Picture = styled.div`
  position: relative;
  margin-top: 17px;
`;
