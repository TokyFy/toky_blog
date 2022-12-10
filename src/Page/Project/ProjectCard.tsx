import React, { FunctionComponent } from "react";
import style from "./ProjectCard.module.scss";
import { Arrow } from "../../assets";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  ambientColor?: string;
}

const ProjectCard: FunctionComponent<Props> = ({
  title,
  description,
  image,
  link,
  ambientColor,
}) => {
  return (
    <div
      style={{ backgroundColor: `${ambientColor}` }}
      className={style.ProjectCards}
    >
      <div className={style.projectImage}>
        <div className={style.inner}>
          <img src={image} alt={title} />
        </div>
      </div>
      <div className={style.projectDescription}>
        <h2>{title}</h2>
        <p>{description}</p>

        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={`https://${link}`}
          className={style.btnProject}
        >
          <span>{link}</span>
          <img src={Arrow} alt={"arrow"} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
