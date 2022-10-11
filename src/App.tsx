import './App.css'
import Navbar from "./components/navbars/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {useEffect, useRef} from "react";
import Separator from "./components/separator/Separator";
import useOnScreen from "./hooks/useOneScreen";

function App() {

    const style = {
    backgroundSize: 'cover',
    background: 'linear-gradient(46.74deg, #CCE5FE -36.12%, #FFF0EA 83.84%) center',
    }

    const containerRef = useRef(null)
    const FooterRef = useRef(null)
    const SeparatorRef = useRef(null)

    const SeparatorOnScreen = useOnScreen(SeparatorRef);

    useEffect(() => {
        document.fonts.onloadingdone = () => {
            const loader = document.getElementById("loadingScreen")!;
            if (loader) {
                loader.remove();
            }
        };
    }, []);

    useEffect(() => {
        console.log(SeparatorRef)
    }, [SeparatorOnScreen]);


  return (
      <LocomotiveScrollProvider
          options={
              {
                  smooth: true,
                  lerp : 0.09,
                  mobile : {
                      breakpoint : 0,
                      smooth: true,
                  },
                  tablet : {
                      breakpoint : 0,
                      smooth: true,
                  }
              }
          }
          watch={[]}
          containerRef={containerRef}
      >
          <main data-scroll-container="0" ref={containerRef}>
              <div style={style} data-scroll-section="1">
                  <Navbar/>
                  <Header/>
              </div>
              <div data-scroll-section="1">
                  <Separator ref={SeparatorRef}/>
              </div>
          </main>
          <Footer ref={FooterRef} up={SeparatorOnScreen}/>
      </LocomotiveScrollProvider>

  )
}

export default App
