import React from "react";
import {Section} from "../../components/layouts/layout";
import Header from "../../components/header/header";
import style from "./Resource.module.scss";
import HeaderSecond from "../../components/header/headerSecond";
import Website from "./website";

import {devto, frontendmentor, github, reddit, stackoverflow,} from "../../assets/icons";

const Resource = () => {
  return (
    <Section>
      <Header
        header={"Resource"}
        description={
          "All website , book and bootcamp course I wish i know earlier :"
        }
      />

      <HeaderSecond>Website collection :</HeaderSecond>

      <div className={style.websiteCollection}>
        <Website url={"www.frontendmentor.com"} icon={frontendmentor} />
        <Website url={"www.stackoverflow.com"} icon={stackoverflow} />
        <Website url={"www.github.com"} icon={github} />
        <Website url={"www.reddit.com"} icon={reddit} />
        <Website url={"www.dev.to"} icon={devto} />
      </div>

      <HeaderSecond>Books collection :</HeaderSecond>

        <div className={style.bookCollection}>
            <Website url={"www.frontendmentor.com"} icon={frontendmentor}/>
            <Website url={"www.stackoverflow.com"} icon={stackoverflow}/>
            <Website url={"www.github.com"} icon={github}/>
            <Website url={"www.reddit.com"} icon={reddit}/>
            <Website url={"www.dev.to"} icon={devto}/>
        </div>
    </Section>
  );
};

export default Resource;
