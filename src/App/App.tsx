import './App.scss';
import Navbar from '../components/navbars/navbar';
import Header from '../Page/Home/header';
import Footer from '../components/footer/Footer';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useEffect, useRef, useState } from 'react';
import Separator from '../components/separator/Separator';
import useOnScreen from '../hooks/useOneScreen';
import Menu from '../components/Menu/Menu';

import { Route, Routes, useLocation } from 'react-router-dom';

import Tools from '../Page/Tools/Tools';
import Project from '../Page/Project/Project';
import useViewports from '../hooks/useViewports';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import Link from '../Page/Link/Link';
import Resource from '../Page/Resource/Resource';
import Guestbook from '../Page/Guestbook/guestbook';
import { AuthContext } from '../context/authContext';
import Redirect from '../components/redirect/Redirect';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const GRAPHQL_END_POINT = String(import.meta.env.VITE_GRAPHQL_END_POINT);

const client = new ApolloClient({
  uri: `${GRAPHQL_END_POINT}`,
  cache: new InMemoryCache()
});

function App() {
  const containerRef = useRef(null);
  const FooterRef = useRef<HTMLDivElement>(null);
  const SeparatorRef = useRef<HTMLDivElement>(null);
  let location = useLocation();
  let SeparatorHeight = 0;

  const SeparatorOnScreen = useOnScreen(SeparatorRef);
  const [vh, vw] = useViewports();

  useEffect(() => {
    if (FooterRef.current && SeparatorRef.current) {
      SeparatorHeight = FooterRef.current.offsetHeight;

      const footerPadding = Number(
        getComputedStyle(FooterRef.current).paddingBottom.replace('px', '')
      );

      SeparatorHeight += vw >= 876 ? footerPadding : footerPadding / 2;

      // IDK but locomotive keep hiding the of approx 69px (the footer padding) of the last element
      // when the viewport width is >= 876px and 69/2 otherwise

      SeparatorRef.current.style.height = `${SeparatorHeight}px`;
    }
  }, [vh, vw]);
  useEffect(() => {
    document.fonts.onloadingdone = () => {
      const loader = document.getElementById('loadingScreen')!;
      if (loader) {
        loader.remove();
      }
    };
  }, []);

  const [menuActive, setMenuActive] = useState(false);
  const menuTogglesHandlers = () => {
    setMenuActive(!menuActive);
  };

  const [auth, setAuth] = useState(false);
  const context = { auth, setAuth: (auth: boolean) => setAuth(auth) };

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.09,
          mobile: {
            breakpoint: 0,
            smooth: true
          },
          tablet: {
            breakpoint: 0,
            smooth: true
          }
        }}
        watch={[]}
        location={location}
        onLocationChange={(scroll: any) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
        containerRef={containerRef}
      >
        <Menu show={menuActive} clickHandler={menuTogglesHandlers} />
        <main data-scroll-container="0" ref={containerRef}>
          <div className={'contentWrapper'} data-scroll-section="1">
            <Navbar clickHandler={menuTogglesHandlers} />
            <AuthContext.Provider value={context}>
              <ApolloProvider client={client}>
                <Routes>
                  <Route path={''} element={<Header />} />
                  <Route path={'tools'} element={<Tools />} />
                  <Route path={'project'} element={<Project />} />
                  <Route path={'link'} element={<Link />} />
                  <Route path={'resource'} element={<Resource />} />
                  <Route path={'guestbook'} element={<Guestbook />} />
                  <Route path={'guestbook/:token'} element={<Redirect />} />
                  <Route path={'*'} element={<ComingSoon />} />
                </Routes>
              </ApolloProvider>
            </AuthContext.Provider>
          </div>
          <div data-scroll-section="1">
            <Separator ref={SeparatorRef} />
          </div>
        </main>
        <Footer ref={FooterRef} up={SeparatorOnScreen} />
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
