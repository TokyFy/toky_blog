import "./App.scss";
import Navbar from "./components/navbars/navbar";
import Header from "./Page/Home/header";
import Footer from "./components/footer/Footer";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Separator from "./components/separator/Separator";
import useOnScreen from "./hooks/useOneScreen";
import Menu from "./components/Menu/Menu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tools from "./Page/Tools/Tools";
import Project from "./Page/Project/Project";

function App() {
  const containerRef = useRef(null);
  const FooterRef = useRef<HTMLDivElement>(null);
  const SeparatorRef = useRef<HTMLDivElement>(null);

  let SeparatorHeight = 0;

  const SeparatorOnScreen = useOnScreen(SeparatorRef);

  useEffect(() => {
    document.fonts.onloadingdone = () => {
      const loader = document.getElementById("loadingScreen")!;
      if (loader) {
        loader.remove();
      }
    };

    if (FooterRef.current && SeparatorRef.current) {
      SeparatorHeight = FooterRef.current.offsetHeight;
      SeparatorRef.current.style.height = `${SeparatorHeight * 2}px`;
    }
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  const clickHandler = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.09,
          mobile: {
            breakpoint: 0,
            smooth: true,
          },
          tablet: {
            breakpoint: 0,
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <Router>
          <Menu show={menuActive} clickHandler={clickHandler} />
          <main data-scroll-container="0" ref={containerRef}>
            <div className={"contentWrapper"} data-scroll-section="1">
              <Navbar clickHandler={clickHandler} />
              <Routes>
                <Route path={"/"} element={<Header />} />
                <Route path={"/tools"} element={<Tools />} />
                <Route path={"/project"} element={<Project />} />
              </Routes>
            </div>
            <div data-scroll-section="1">
              <Separator ref={SeparatorRef} />
            </div>
          </main>
          <Footer ref={FooterRef} up={SeparatorOnScreen} />
        </Router>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
