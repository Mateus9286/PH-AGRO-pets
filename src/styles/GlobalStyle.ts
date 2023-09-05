import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border-style: none;
    }
  
    :root{
    --primary-color: #0089FA;
    --second-color: #0BB7DE;
    --grey-one: #3C3C3C;
    --grey-two: #515151;
    --grey-three: #666666;
    --white-color: #FFFFFF;
    --red-alert: #CC3333;
  }
`;
