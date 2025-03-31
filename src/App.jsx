import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Section/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Section/Hero";
import Skilss from "./components/Section/Skills";
import Experince from "./components/Section/Experience";
import Education from "./components/Section/Education";
import StyledStarsCanvas from "./components/canvas/Stars";
import Projects from "./components/Section/Projects";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StyledStarsCanvas />
          <Hero />
          <Wrapper>
            <Skilss />
            <Experince />
          </Wrapper>
          <Projects/>
          <Wrapper>
            <Education />
          </Wrapper>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
