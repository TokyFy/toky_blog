import React from "react";
import style from "./Link.module.scss";
import { Row, Section } from "../../components/layouts/layout";
import LinkCard from "./LinkCard";
import Header from "../../components/header/header";

import {
  github,
  linkedIn,
  devto,
  npm,
  instagram,
  facebook,
  spotify,
  deezer,
  reddit,
} from "../../assets/icons";

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
            <LinkCard
              platform={"Github"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={github}
            />
            <LinkCard
              platform={"LinkedIn"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={linkedIn}
            />
            <LinkCard
              platform={"Dev.to"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={devto}
            />
            <LinkCard
              platform={"NPM"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={npm}
            />
            <LinkCard
              platform={"Reddit"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={reddit}
            />
            <LinkCard
              platform={"Instagram"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={instagram}
            />
            <LinkCard
              platform={"Facebook"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={facebook}
            />
            <LinkCard
              platform={"Deezer"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={deezer}
            />
            <LinkCard
              platform={"Spotify"}
              userName={"Toky_Fy"}
              link={"#"}
              icons={spotify}
            />
          </div>
        </div>
      </Section>
    </Row>
  );
};

export default Link;
