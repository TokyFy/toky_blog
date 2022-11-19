import React, { Suspense } from "react";
import style from "./header.module.scss";
import Row from "../../components/layouts/layout";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "../../components/three/square";
import Span from "./span";

function Header() {
  return (
    <Row>
      <div className={style.header}>
        <div className={style.threeDLogo}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <Model />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Suspense>
            <Environment preset={"city"} blur={1} />
          </Canvas>
        </div>
        <h1 className={style.header}>
          Hello , I'm a Toky a junior Javascript developer and occasional
          <Span color={"#E63946"}> UI/UX</Span> designer passionate about making
          the web accessible to everyone through a wide variety of
          <Span color={"#f4acb7"}> Tool</Span> . I love
          <Span color={"#fcbf49"}> sharing</Span> my knowledge with others, and
          I do that through my little <Span color={"#06d6a0"}> Blog</Span>. I
          also love Math and 3D Stuff.
        </h1>
      </div>
    </Row>
  );
}

export default Header;
