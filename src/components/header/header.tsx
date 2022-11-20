import React, { FunctionComponent } from "react";
import style from "./header.module.scss";

interface Props {
  header: String;
  description: String;
}

const header: FunctionComponent<Props> = ({ header, description }) => {
  return (
    <div className={style.header}>
      <h1>{header}</h1>
      <p>{description}</p>
    </div>
  );
};

export default header;
