import React from "react";
import style from "./Link.module.scss";
import { Row, Section } from "../../components/layouts/layout";
import LinkCard from "./LinkCard";
import Header from "../../components/header/header";

const Link = () => {
  return (
    <Row>
      <Section>
        <div className={style.Link}>
          <Header
            header={"Link"}
            description={"All the links to reach me on the web :"}
          />
          <div className={style.list}>
            <LinkCard platform={"Github"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"LinkedIn"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"Dev.to"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"NPM"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"Redit"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"Instagram"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"Facebook"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"Deezer"} userName={"Toky_Fy"} link={"#"} />
            <LinkCard platform={"Spotify"} userName={"Toky_Fy"} link={"#"} />
          </div>
        </div>
      </Section>
    </Row>
  );
};

export default Link;
