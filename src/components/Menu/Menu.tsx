import React from "react";
import style from "./Menu.module.scss";
import Navbar from "../navbars/navbar";
import {Row} from "../layouts/layout";
import LinkBox from "../LinkBox/LinkBox";
import {About, GuestBook, Link, Project, Tools,} from "../../assets";

const Menu = ({
  show,
  clickHandler,
}: {
  show: boolean;
  clickHandler?: () => void;
}) => {
  return (
    <div
      onClick={clickHandler}
      className={`${style.menu} ${show ? style.show : ""}`}
    >
      <div className={style.navWrapper}>
        <Navbar action={"Home"} />
      </div>

      <div className={style.navMenu}>
        <Row>
          <LinkBox image={About} url={"/About"}/>
          <LinkBox image={Link} url={"/Link"}/>
          <LinkBox image={Project} url={"/Project"}/>
          <LinkBox image={Tools} url={"/Tools"}/>
          <LinkBox image={GuestBook} url={"/GuestBook"}/>
          {/*<LinkBox image={Resource} url={"/Resource"} />*/}
          {/*<LinkBox image={Blog} url={"/Blog"} />*/}
          {/*<LinkBox image={Music} url={"/Music"} />*/}
          {/*<LinkBox image={Picture} url={"/Picture"} />*/}
        </Row>
      </div>
    </div>
  );
};

export default Menu;
