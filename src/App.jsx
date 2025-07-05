import { useEffect, useState } from "react";
import { Header, Main } from "./components";
import { useTranslation } from "react-i18next";
import { RingLoader } from "react-spinners";

function App() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!i18n.isInitialized || loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#000000]">
        <RingLoader color="#00bfff" size={140} />
      </div>
    );
  }

  return (
    <div className="scroll-smooth relative">
      <header>
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
