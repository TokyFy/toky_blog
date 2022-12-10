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
                    Hi there, my name is Toky and I am a junior JavaScript developer and occasional UI/UX designer.
                    I&nbsp;am passionate about making the web accessible to everyone through a range of tools and
                    techniques. In&nbsp;addition to writing code, I&nbsp;enjoy sharing my knowledge with others through my blog and
                    I have a particular interest in math and 3D modeling. Thank you for taking the time to read about me.
                </h1>
            </div>
        </Row>
    );
}

export default Header;
