import React from "react";
import style from "./Menu.module.scss";
import Navbar from "../navbars/navbar";
import Row from "../layouts/layout";
import { Link } from "react-router-dom";

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

      <Row>
        <ul className={style.navMenu}>
          <li>About</li>
          <li>
            <Link to={"project"}>Project</Link>
          </li>
          <li>
            <Link to={"tools"}>Tools</Link>
          </li>
          <li>Blog</li>
        </ul>
      </Row>

      <Row>
        <ul className={style.menuRight}>
          <li>
            <a
              href={"https://www.linkedin.com/in/tokyfy/"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              LinkedIn{" "}
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/TokyFy"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Github
            </a>{" "}
          </li>
          <li>
            <a
              href={"mailto:tokyfydev@gmail.com"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Mail
            </a>
          </li>
        </ul>
      </Row>

      <div className={style.circleWrapper}>
        <div className={style.circleOne}></div>
        <div className={style.circleTwo}></div>
        <div className={style.circleThree}></div>
      </div>
    </div>
  );
};

export default Menu;
