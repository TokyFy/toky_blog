import React from "react";
import style from "./Link.module.scss";
import {Section} from "../../components/layouts/layout";
import LinkCard from "./LinkCard";
import Header from "../../components/header/header";

import LinkData from "../Data/link";

const Link = () => {
  return (
    <Section>
      <div className={style.Link}>
        <Header
            header={"Link"}
            description={"Here are the links to find me on the web :"}
        />
        <div className={style.list}>
          {LinkData.map((link, index) => (
            <LinkCard
              key={index}
              platform={link.platform}
              userName={link.userName}
              link={link.link}
              icons={link.icons}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Link;
