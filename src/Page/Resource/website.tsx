import React, {FunctionComponent} from "react";
import style from "./website.module.scss";
import {Arrow} from "../../assets";

interface Props {
    title: string,
    founder: string,
    url: string;
}

const website: FunctionComponent<Props> = ({url, title, founder}) => {
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
                        {title}
                    </h3>
                    <p className={style.owner}>
                        {founder}
                    </p>
                </div>
                <p className={style.link}>
                    {url}
                </p>
            </div>

            <span className={style.icon}>
        <img src={Arrow} alt={""}/>
      </span>
        </a>
    );
};

export default website;
