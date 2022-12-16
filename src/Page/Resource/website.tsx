import React, { FunctionComponent } from "react";
import style from "./website.module.scss";

interface Props {
  url: string;
  icon?: string;
}

const website: FunctionComponent<Props> = ({ url, icon }) => {
  return (
    <a
      target={"_blank"}
      rel={"noreferrer"}
      href={`https://${url}`}
      className={style.websiteLink}
    >
      <span className={style.text}>
        {url}
      </span>

      <span className={style.icon}>
        <img src={icon} alt={""} />
      </span>
    </a>
  );
};

export default website;
