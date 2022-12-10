import React, { FunctionComponent } from "react";
import style from "./Project.module.scss";
import ProjectCard from "./ProjectCard";
import { Section } from "../../components/layouts/layout";
import Header from "../../components/header/header";
import projectData from "../Data/project";

const Project: FunctionComponent = () => {
  return (
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
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            ambientColor={project.ambientColor}
          />
        ))}
      </div>
    </Section>
  );
};

export default Project;
