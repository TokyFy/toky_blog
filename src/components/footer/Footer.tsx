import React, { forwardRef } from "react";
import style from "./Footer.module.scss";
import Row from "../layouts/layout";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLDivElement, { up: boolean }>(({ up }, ref) => {
  return (
    <footer
      style={{ opacity: `${up ? `1` : "0"}`, zIndex: `${up ? `999` : "-1"}` }}
      className={style.footer}
      ref={ref}
    >
      <Row>
        <ul>
          <li>About</li>
          <li>
            <Link to={"project"}>Project</Link>
          </li>
          <li>
            <Link to={"tools"}>Tools</Link>
          </li>
          <li>Blog</li>
        </ul>

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
            </a>{" "}
          </li>
        </ul>
      </Row>
    </footer>
  );
});

export default Footer;
