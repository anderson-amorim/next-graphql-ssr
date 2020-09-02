import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#d3d3d3",
  },
};

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
