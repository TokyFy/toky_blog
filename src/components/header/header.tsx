import React, { FunctionComponent } from "react";
import style from "./header.module.scss";

interface Props {
  header: String;
  description: String | String[];
}

const header: FunctionComponent<Props> = ({ header, description }) => {
  return (
    <div className={style.header}>
      <h1>{header}</h1>
      {typeof description === "string" ? (
        <p>{description}</p>
      ) : (
        [...description].map((value, index) => <p key={index}>{value}</p>)
      )}
    </div>
  );
};

export default header;
