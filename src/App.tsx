import { ThemeProvider } from "styled-components";
import theme from "./styled/theme";
import GlobalStyle from "./globalStyle";
import RoutesApp from "./routes/routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RoutesApp />
  </ThemeProvider>
);

export default App;
