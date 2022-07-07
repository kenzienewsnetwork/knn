import { Header } from "./components/header";
import { StyledMain } from "./components/main/style";
import CompanyRegistration from "./components/company-registration";
import Login from "./components/login";
import PersonRegistration from "./components/person-registration";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
    <StyledGlobal/>
        <Header />
      <Main>
      </Main>
    </>
  );
}

export default App;
