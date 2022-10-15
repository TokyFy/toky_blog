import React, { FunctionComponent } from "react";
import style from "./Project.module.scss";
import ProjectCard from "./ProjectCard";
import Row from "../../components/layouts/layout";

const Project: FunctionComponent = () => {
  return (
    <Row>
      <div className={style.projectsHeader}>
        <h1>Project</h1>
        <p>
          I like building project so Here is a small collection of my personal
          project and Experience.
        </p>
      </div>
      <ProjectCard />
    </Row>
  );
};

export default Project;
