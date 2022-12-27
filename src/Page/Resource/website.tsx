import React, {FunctionComponent} from "react";
import style from "./website.module.scss";
import {Arrow} from "../../assets";

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
          <div className={style.wrapper}>
              <div>
                  <h3 className={style.description}>
                      Microsoft inclusive Design
                  </h3>
                  <p className={style.owner}>
                      Microsoft
                  </p>
              </div>
              <p className={style.link}>
                  Microsoft.com
              </p>
          </div>

          <span className={style.icon}>
        <img src={Arrow} alt={""}/>
      </span>
      </a>
  );
};

export default website;
