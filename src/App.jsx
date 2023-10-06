import { useEffect, useRef, useState } from "react";
import Footer from "./Footer/Footer";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header/Header";
import Main from "./components/Main/Main";
import { Icon } from "@iconify/react";

function App() {
  const [show, setShow] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleShowBtn = () => {
      document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
        ? setShow(true)
        : setShow(false);
    };
    window.addEventListener("scroll", handleShowBtn);
    //cleanup
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <GlobalStyles>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <button
        className={show ? "btnTop active" : "btnTop"}
        onClick={handleScrollToTop}
      >
        <Icon icon="ep:top" />
      </button>
    </GlobalStyles>
  );
}

export default App;
