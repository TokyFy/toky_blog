import React from "react";
import style from "./Link.module.scss";
import Row from "../../components/layouts/layout";
import LinkCard from "./LinkCard";

const Link = () => {
  return (
    <Row>
      <div className={style.Link}>
        <h1>Link</h1>
        <p>All the links to reach me on the web :</p>

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
    </Row>
  );
};

export default Link;
