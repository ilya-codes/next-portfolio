import projectsStyles from "../styles/Projects.module.scss";
import Project from "./Project";
import Details from "./Details";
import { data } from "../data";

const Projects = () => {
  let isRight = false;

  return (
    <div className={projectsStyles.projects}>
      {data.map((project) => (
        <Project
          key={project.id}
          img={project.image}
          prev={project.preview}
          github={project.github}
          isRight={project.id % 2 ? isRight : !isRight}
          details={
            <Details
              title={project.title}
              text={project.description}
              isRight={project.id % 2 ? isRight : !isRight}
            />
          }
        />
      ))}
    </div>
  );
};

export default Projects;
