import React, { forwardRef } from "react";
import style from "./Footer.module.scss";
import { Row } from "../layouts/layout";
import LinkBox from "../LinkBox/LinkBox";
import {
  About,
  Link,
  Blog,
  Music,
  Tools,
  Project,
  Picture,
  GuestBook,
  Resource,
} from "../../assets";

const Footer = forwardRef<HTMLDivElement, { up: boolean }>(({ up }, ref) => {
  return (
    <footer
      style={{ opacity: `${up ? `1` : "0"}`, zIndex: `${up ? `999` : "-1"}` }}
      className={style.footer}
      ref={ref}
    >
      <Row>
        <div className={style.footerMenu}>
          <LinkBox image={About} url={"/About"} />
          <LinkBox image={Link} url={"/Link"} />
          <LinkBox image={Project} url={"/Project"} />
          <LinkBox image={Tools} url={"/Tools"} />
          <LinkBox image={Resource} url={"/Resource"} />
          <LinkBox image={Blog} url={"/Blog"} />
          <LinkBox image={GuestBook} url={"/GuestBook"} />
          <LinkBox image={Music} url={"/Music"} />
          <LinkBox image={Picture} url={"/Picture"} />
        </div>
      </Row>
    </footer>
  );
});

export default Footer;
