import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 7px;
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
    margin-bottom: 32px;
  }
`;

export const Picture = styled.div`
  height: 30px;
`;
