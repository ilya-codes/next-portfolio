import projectsStyles from "../styles/Projects.module.scss";
import Project from "./Project";
import Details from "./Details";

const Projects = () => {
  return (
    <div className={projectsStyles.projects}>
      <Project
        img={"/tvshow-guide.png"}
        prev="https://ilya-codes.github.io/react-tv-show-guide"
        github="https://github.com/ilya-codes/react-tv-show-guide/tree/master"
        details={
          <Details
            title="TV Show guide App"
            text="Build with React, React-Context, third party API"
          />
        }
      />
      <Project
        img={"/recipes.png"}
        prev="https://ilya-codes.github.io/react-recipes-app"
        github="https://github.com/ilya-codes/react-recipes-app/tree/master"
        details={
          <Details
            title="Recipes App"
            text="Build with React, React-Context, third party API"
            isRight
          />
        }
        isRight
      />
      <Project
        img={"/landing.png"}
        prev=""
        github=""
        details={
          <Details
            title="Coffeeshop Landing Page"
            text="Build with Vanilla JS"
          />
        }
      />
      <Project
        img={"/documentation.png"}
        prev=""
        github=""
        details={
          <Details
            title="Documentation Page"
            text="Build with Vanilla JS"
            isRight
          />
        }
        isRight
      />
    </div>
  );
};

export default Projects;
