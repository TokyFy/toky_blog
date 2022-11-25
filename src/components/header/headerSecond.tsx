import React, { FunctionComponent } from "react";
import style from "./headerSecond.module.scss";

interface Props {
  children: string;
}

const headerSecond: FunctionComponent<Props> = ({ children }) => {
  return <h2 className={style.headerSecond}>{children}</h2>;
};

export default headerSecond;
