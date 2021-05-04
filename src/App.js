import { Card } from "./components/Card";
import GlobalStyle from "./styled/global";
import { Main } from "./styled/layout";

function App() {

  return (
     <>
        <GlobalStyle />
        <Main>
            <Card />
        </Main>
    </>
  );

}

export default App;
