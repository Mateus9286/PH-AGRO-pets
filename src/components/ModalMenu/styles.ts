import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100%;
  max-width: 500px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  padding: 15px 0px 0 0;
  position: relative;

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: medium;
    margin-bottom: 10px;
    padding: 0 10px;
  }

  strong {
    position: absolute;
    top: -15px;
    right: -7px;
    font-size: large;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;
