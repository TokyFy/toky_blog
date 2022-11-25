import React from "react";
import style from "./LinkCard.module.scss";

interface props {
  platform: string;
  userName: string;
  link: string;
  icons?: string;
}

const LinkCard: React.FC<props> = ({ platform, userName, link, icons }) => {
  return (
    <a
      href={`${link}`}
      target={"_blank"}
      rel={"noreferrer"}
      className={style.LinkCard}
    >
      {`${platform}`} // <span>{`@${userName}`}</span>
      <div className={style.linkIcon}>
        <img src={icons} alt={""} />
      </div>
    </a>
  );
};

export default LinkCard;
