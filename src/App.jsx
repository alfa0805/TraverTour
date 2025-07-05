import { Header, Main } from "./components";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="scroll-smooth relative">
      <header className="">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
