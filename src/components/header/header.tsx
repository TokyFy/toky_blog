import React from 'react';
import style from './header.module.scss';
import Row from "../layouts/layout";
import Span from "./span";

function Header() {
    return (
       <Row>
           <h1 className={style.header}>
               <Span color={"#313c49"}>Hellow</Span>, I'm a <Span color={"#313c49"}>Toky</Span> a junior Javascript
               developpper and occasional  <Span color={"#ffb54d"}>UI/UX</Span> designer
               passionate about making the
               web accessible to everyone through a
               wide variety of <Span color={"#ef6191"}>Toolbox</Span>. I love <Span color={"#58a3f2"}>sharing </Span>
               my knwoledge with others , and I do that
               through my little <Span color={"#f15a22"}>Blog</Span> . I also love Math
               and 3D Stuff.
           </h1>
       </Row>
    );
}

export default Header;