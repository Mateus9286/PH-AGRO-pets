import styled from "styled-components";

export const CartConteiner = styled.div`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  background-color: #ffff;

  @media (min-width: 900px) {
    padding: 0;
  }
`;

export const CartPurchases = styled.div`
  height: 65px;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  background-color: #ff7402;
  color: #ffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    cursor: pointer;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const EmptyCart = styled.div`
  height: 158px;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: solid 1px rgba(255, 255, 255, 0.5);
`;

export const EmptyCartTitle = styled.h3`
  font-family: var(--Inter);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 17px;
  color: var(--grey-300);
`;

export const CartTitleAddItems = styled.span`
  font-family: var(--Inter);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: var(--grey-100);
`;

export const CartList = styled.ul`
  height: auto;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  padding: 10px 10px;
  background-color: #f5f5f5;
  border-bottom: solid 2px var(--grey-100);
  overflow: auto;
`;

export const CartItem = styled.li`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #f5f5f5;
  justify-content: space-between;
  margin-bottom: 10px;

  button {
    align-items: center;
    width: max-content;
    height: max-content;
    border: none;
    position: relative;
    top: 5px;
    right: 5px;
  }

  span {
    display: flex;
  }

  strong {
    margin-right: 30px;
    margin-top: 4px;
  }
`;

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleCart = styled.h2`
  font-family: var(--Inter);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: var(--grey-600);
`;

export const CategoryCart = styled.span`
  font-family: var(--Inter);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--grey-300);
  margin-top: 5px;
`;

export const RemoveCart = styled.span`
  font-family: var(--Inter);
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: #bdbdbd;
  margin: 5px 18px 0 0;
  cursor: pointer;
`;

export const ImgCart = styled.img`
  max-width: 100%;
  background-color: var(--grey-100);
  height: 70px;
  width: 70px;
  margin-right: 15px;
  border-radius: 5px;
  border: solid 3px var(--grey-100);
`;

export const ContCart = styled.div`
  display: flex;
  max-width: 100%;
`;

export const ContTotal = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
  background-color: #f5f5f5;
  padding-top: 20px;

  a {
    height: 60px;
    width: 100%;
    border-radius: 8px;
    padding: 0px 20px;
    background-color: #ff7402;
    border: solid 2px #ff7402;
    margin-bottom: 20px;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
`;

export const TitleTotal = styled.h3`
  font-family: var(--Inter);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: var(--grey-600);
  margin-bottom: 20px;
`;

export const TitleAmount = styled.h3`
  font-family: var(--Inter);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
  color: var(--grey-300);
`;
