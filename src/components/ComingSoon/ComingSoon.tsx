import React from "react";

import style from "./ComingSoon.module.scss";
import { Row, Section } from "../layouts/layout";

const ComingSoon = () => {
  return (
    <Row>
      <Section>
        <div className={style.comingSoon}>
          <h1>Coming Sooonnn !</h1>
          <p>Sorry , This section is under active development !!</p>
        </div>
      </Section>
    </Row>
  );
};

export default ComingSoon;
