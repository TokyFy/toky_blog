import React, { FunctionComponent } from "react";
import style from "./Project.module.scss";
import ProjectCard from "./ProjectCard";
import Row from "../../components/layouts/layout";
import { MozikaApp, TokyblogApp } from "../../assets";

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
      <div className={style.projectList}>
        <ProjectCard
          title={"Mozika"}
          link={"mozika.netlify.app"}
          description={
            "A landing page to show all my local favorite artist , with a nice parallax effect on Desktop and a drag and drop on mobile."
          }
          image={MozikaApp}
          ambientColor={"rgba(0, 0, 0, 0.4)"}
        />
        <ProjectCard
          title={"TokyBlog"}
          link={"tokyblog.netlify.app"}
          description={
            "My portfolio and blog , so I can share my knowledge with other developer, I has a admin panel so i write article on the browser"
          }
          image={TokyblogApp}
        />
      </div>
    </Row>
  );
};

export default Project;
