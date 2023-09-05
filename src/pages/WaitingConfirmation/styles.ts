import styled from "styled-components";

const MainColor = "#ff7402";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 18px;
  max-width: 400px;
  margin: 0 auto;

  a {
    background-color: ${MainColor};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    min-width: 300px;
    max-width: 400px;
    margin-top: 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: darken(${MainColor}, 10%);
    }
  }
`;

export const Title = styled.h2`
  color: ${MainColor};
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Text = styled.p`
  color: #333;
  font-size: small;
  line-height: 1.5;
`;

export const TextClient = styled.h3`
  color: #0e0e0e;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: ${MainColor};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 300px;
  margin-top: 15px;

  &:hover {
    background-color: darken(${MainColor}, 10%);
  }
`;
