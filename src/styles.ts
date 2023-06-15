import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  brancoRosa: '#F5F5F5',
  rosaClaro: '#FFEBD9',
  branco: '#FFF'
}

const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto , sans-serif;
  list-style: none;
  text-decoration: none;
}
body{
  background-color: ${cores.brancoRosa}
}
`
export default GlobalCss
