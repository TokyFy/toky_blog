import React, { FunctionComponent } from "react";
import style from "./Project.module.scss";
import ProjectCard from "./ProjectCard";
import { Row, Section } from "../../components/layouts/layout";
import { MozikaApp, TokyblogApp } from "../../assets";
import Header from "../../components/header/header";

const Project: FunctionComponent = () => {
  return (
    <Row>
      <Section>
        <div className={style.projectsHeader}>
          <Header
            header={"Project"}
            description={
              "I like building project so Here is a small collection of my personal project and Experience."
            }
          />
        </div>
        <div className={style.projectList}>
          <ProjectCard
            title={"Mozika"}
            link={"mozika.netlify.app"}
            description={
              "A landing page to show all my local favorite artist , with a nice parallax effect on Desktop and a drag and drop on mobile."
            }
            image={MozikaApp}
            ambientColor={"rgba(172, 172, 172, 0.4)"}
          />
          <ProjectCard
            title={"TokyBlog"}
            link={"tokyblog.netlify.app"}
            description={
              "My portfolio and blog , so I can share my knowledge with other developer, I has a admin panel so i write article on the browser"
            }
            image={TokyblogApp}
            ambientColor={"rgba(172, 172, 172, 0.4)"}
          />
        </div>
      </Section>
    </Row>
  );
};

export default Project;
