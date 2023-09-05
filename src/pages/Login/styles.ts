import styled from "styled-components";

const MainColor = "#ff7402";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f7f7f7 transparent !important;

  img {
    height: 60px !important;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  min-width: 300px;
`;

export const Title = styled.h2`
  color: ${MainColor};
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: ${MainColor};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
`;
