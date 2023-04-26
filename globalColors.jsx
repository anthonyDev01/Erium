import { createGlobalStyle } from "styled-components";

export const GlobalColors = createGlobalStyle`

  body {
    background-color: ${(props) => props.theme.secundary};
    color: ${(props) => props.theme.fontColor};

  }

  a{
    color: ${(props) => props.theme.fontColor};
  }

  .container{
    background-color: ${(props) => props.theme.primary};
  }

  .item{
    background-color: ${(props) => props.theme.primary};
  }

  .navbarDrop{
    background-color: ${(props) => props.theme.secundary};
  }

  .cardEquipe{
    background-color: ${(props) => props.theme.secundary};
  }

  @media (max-width: 1092px){
    .item {
      background: none;
  }
  }
`;
