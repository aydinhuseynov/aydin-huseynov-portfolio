import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { Navbar } from "./components/Section/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/Section/Hero";
import { Skilss } from "./components/Section/Skills";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />
          <Skilss/>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
