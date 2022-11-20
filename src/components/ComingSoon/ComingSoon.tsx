import React from "react";

import style from "./ComingSoon.module.scss";
import { Row } from "../layouts/layout";

const ComingSoon = () => {
  return (
    <Row>
      <div className={style.comingSoon}>
        <div>
          <h1>Coming Sooonnn !</h1>
          <p>Sorry , This section is under active development !!</p>
        </div>
      </div>
    </Row>
  );
};

export default ComingSoon;
