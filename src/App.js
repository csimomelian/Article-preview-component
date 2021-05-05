import { Card } from "./components/Card";
import GlobalStyle from "./styled/global";
import { Footer, Main } from "./styled/layout";

function App() {

  return (
     <>
        <GlobalStyle />
        <Main>
            <Card />
        </Main>
        <Footer>
          <p class="attribution">
            Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a rel="noreferrer" href="https://github.com/csimomelian">omisc</a>.
          </p>
      </Footer>
    </>
  );

}

export default App;
