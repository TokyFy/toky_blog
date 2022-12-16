import React, {Suspense} from "react";
import style from "./header.module.scss";
import {Row} from "../../components/layouts/layout";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import {Model} from "../../components/three/square";
import Span from "./span";

function Header() {
    return (
        <Row>
            <div className={style.header}>
                <div className={style.threeDLogo}>
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <Suspense fallback={null}>
                            <Model/>
                            <OrbitControls enableZoom={false} enablePan={false}/>
                        </Suspense>
                        <Environment preset={"city"} blur={1}/>
                    </Canvas>
                </div>
                <h1 className={style.header}>
                    Hi there, my name is <Span color={"#feb54d"}>Toky</Span> and I am a junior <Span color={"#db81ff"}>JavaScript</Span> developer and occasional <Span color={"#ef6493"}>UI/UX</Span> designer.
                    I&nbsp;am passionate about making the <Span color={"#ed5350"}>web</Span> accessible to everyone through a range of tools and
                    techniques. In&nbsp;addition to writing <Span color={"#2d803e"}>code</Span>, I&nbsp;enjoy sharing my knowledge with others through my <Span color={"#58a2f2"}>blog</Span> and
                    I have a particular interest in math and <Span color={"#f05d26"}>3D modeling</Span>. Thank you for taking the time to read about me.
                </h1>
            </div>
        </Row>
    );
}

export default Header;
