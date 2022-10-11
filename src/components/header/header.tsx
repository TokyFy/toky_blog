import React, {useEffect, useRef, useState} from 'react';
import style from './header.module.scss';
import Row from "../layouts/layout";
import Span from "./span";
import useViewports from "../../hooks/useViewports";


function Header() {

    const [vh , vw] = useViewports()
    const ref = useRef<HTMLDivElement>(null);

    const [wrapperHeight, setWrapperHeight] = useState<Number | null>(null);

    useEffect(() => {859
        if(vw <= 859) {
            const headerHeight = ref.current!.clientHeight;
            if(headerHeight) {
                setWrapperHeight( headerHeight + 124);
            }
        }
    }, [ref , vh , vw]);


    return (
       <Row>
           <div style={wrapperHeight ? {height: `${wrapperHeight}`} : undefined } className={style.headerWrapper} >
               <h1 className={style.header} ref={ref}>
                   <Span color={"#313c49"}>Hellow</Span>, I'm a <Span color={"#313c49"}>Toky</Span> a junior Javascript
                   developer and occasional  <Span color={"#ffb54d"}>UI/UX</Span> designer
                   passionate about making the
                   web accessible to everyone through a
                   wide variety of <Span color={"#ef6191"}>Toolbox.</Span> I&nbsp;love <Span color={"#58a3f2"}>sharing </Span>
                   my knowledge with others&nbsp;, and I&nbsp;do that
                   through my little <Span color={"#f15a22"}>Blog.</Span> I&nbsp;also love Math
                   and 3D Stuff.
               </h1>
           </div>
       </Row>
    );
}

export default Header;