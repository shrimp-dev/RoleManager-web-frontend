import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
        --dark: #07004D;
        --white: #FFF;
        --violet-blue: #5D5FEF;
        --red:#F61067;
    }

html,
body {
  padding: 0;
  margin: 0;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
}
a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

    
`;
export default GlobalStyle;
