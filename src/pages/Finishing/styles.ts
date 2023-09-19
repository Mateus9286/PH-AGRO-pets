import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 450px;
  margin-bottom: 6rem;

  h1 {
    text-align: center;
    margin: 20px 0;
    font-weight: 600;
    color: #ff7402;
  }

  h2 {
    text-align: center;
    margin: 20px 0;
    font-weight: 00;
    color: #ff7402;
  }
`;

export const Form = styled.form`
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--grey-one);
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  background-color: #ff7402;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
