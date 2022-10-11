import './App.css'
import Navbar from "./components/navbars/navbar";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {useRef} from "react";
import Separator from "./components/separator/Separator";

function App() {

    const style = {
    backgroundSize: 'cover',
    background: 'linear-gradient(46.74deg, #CCE5FE -36.12%, #FFF0EA 83.84%) center',
    }

    const containerRef = useRef(null)
  return (
      <LocomotiveScrollProvider
          options={
              {
                  smooth: true,
                  lerp : 0.09,
              }
          }

          watch={
              [
              ]
          }
          containerRef={containerRef}
      >
          <main data-scroll-container="0" ref={containerRef}>
              <div style={style} data-scroll-section="1">
                  <Navbar/>
                  <Header/>
              </div>
              <div data-scroll-section="1">
                  <Separator/>
              </div>

          </main>
          <Footer/>
      </LocomotiveScrollProvider>

  )
}

export default App
