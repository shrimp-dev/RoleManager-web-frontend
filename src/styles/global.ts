import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
        --dark: #07004D;
        --white: #FFF;
        --violet-blue: #5D5FEF;
        --red:#F61067;
    }
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

    
`;
export default GlobalStyle;
