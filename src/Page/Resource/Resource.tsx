import React from "react";
import { Row, Section } from "../../components/layouts/layout";
import Header from "../../components/header/header";
import style from "./Resource.module.scss";
import HeaderSecond from "../../components/header/headerSecond";
import Website from "./website";
import Book from "./Book";

import {
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
} from "../../assets";

import {
  frontendmentor,
  stackoverflow,
  github,
  reddit,
  devto,
  dribble,
  csstricks,
  medium,
  awwwards,
} from "../../assets/icons";

const Resource = () => {
  return (
    <Row>
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
          <Website url={"www.dribble.com"} icon={dribble} />
          <Website url={"www.awwwwards.com"} icon={awwwards} />
          <Website url={"www.csstrick.com"} icon={csstricks} />
          <Website url={"www.medium.com"} icon={medium} />
        </div>

        <HeaderSecond>Books collection :</HeaderSecond>

        <div className={style.bookCollection}>
          <Book image={book1} />
          <Book image={book2} />
          <Book image={book3} />
          <Book image={book4} />
          <Book image={book5} />
          <Book image={book6} />
          <Book image={book7} />
          <Book image={book8} />
          <Book image={book9} />
        </div>
      </Section>
    </Row>
  );
};

export default Resource;
