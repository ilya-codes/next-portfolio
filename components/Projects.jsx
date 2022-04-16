import projectsStyles from "../styles/Projects.module.scss";
import Project from "./Project";
import Details from "./Details";
import image1 from "../public/tvshow-guide.png";
import image2 from "../public/recipes.png";
import image3 from "../public/landing.png";
import image4 from "../public/documentation.png";

const Projects = () => {
  return (
    <div className={projectsStyles.projects}>
      <Project
        img={image1}
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
        img={image2}
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
        img={image3}
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
        img={image4}
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
