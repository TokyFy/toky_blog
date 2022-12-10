import React, { FunctionComponent } from "react";
import style from "./LinkBox.module.scss";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  url: string;
}

const LinkBox: FunctionComponent<Props> = ({ url, image }) => {
  return (
    <Link to={url}>
      <div className={style.LinkBox}>
        <img src={image} alt={""} />
      </div>
    </Link>
  );
};

export default LinkBox;
