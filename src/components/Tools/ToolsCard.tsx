import React from "react";
import style from "./toolsCard.module.scss";

interface props {
  image: string;
  title: string;
  description: string;
}

const ToolsCard = ({ image, title, description }: props) => {
  return (
    <div className={style.toolCard}>
      <div className={style.toolImageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div className={style.description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ToolsCard;
