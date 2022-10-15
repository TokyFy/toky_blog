import React, { FunctionComponent } from "react";
import style from "./ProjectCard.module.scss";

import { MozikaApp } from "../../assets";

interface Props {}

const ProjectCard: FunctionComponent<Props> = () => {
  return (
    <div className={style.ProjectCards}>
      <div className={style.projectImage}>
        <div className={style.inner}>
          <img src={MozikaApp} alt={"Mozika"} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
