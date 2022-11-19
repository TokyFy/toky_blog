import React from "react";
import style from "./LinkCard.module.scss";

interface props {
  platform: string;
  userName: string;
  link: string;
}

const LinkCard: React.FC<props> = ({ platform, userName, link }) => {
  return (
    <a
      href={`${link}`}
      target={"_blank"}
      rel={"noreferrer"}
      className={style.LinkCard}
    >
      {`${platform}`} // <span>{`@${userName}`}</span>
    </a>
  );
};

export default LinkCard;
