import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import mindboard from "./public/mindboard.png";
import tvshowImage from "./public/tvshow-guide.png";
import recipesImage from "./public/recipes.png";
import qr from "./public/qr.png";

export const data = [
  {
    id: 1,
    image: mindboard,
    preview: "https://mind-board-ilya-codes.vercel.app/",
    github: "https://github.com/ilya-codes/mind-board",
    title: "Mindboard",
    description: "Build with Next.js, Tailwind and Firebase",
  },
  {
    id: 2,
    image: tvshowImage,
    preview: "https://ilya-codes.github.io/react-tv-show-guide",
    github: "https://github.com/ilya-codes/react-tv-show-guide/tree/master",
    title: "TV Show guide App",
    description: "Build with React, Styled Components and Tvmaze API",
  },
  {
    id: 3,
    image: recipesImage,
    preview: "https://ilya-codes.github.io/react-recipes-app",
    github: "https://github.com/ilya-codes/react-recipes-app/tree/master",
    title: "Recipes App",
    description: "Build with React, Styled Components and Edamam API",
  },
  {
    id: 4,
    image: qr,
    preview: "https://ilya-codes.github.io/easy-qr-generator",
    github: "https://github.com/ilya-codes/easy-qr-generator",
    title: "Easy Qr Code Generator",
    description: "Vanilla Javascript, Bootstrap styled",
  },
];

export const techStack = [
  [<SiHtml5 />, "HTML"],
  [<SiCss3 />, "CSS"],
  [<SiJavascript />, "javaScript"],
  [<SiTypescript />, "TypeScript"],
  [<SiReact />, "React"],
  [<SiNextdotjs />, "Next.js"],
  [<SiNodedotjs />, "Node.js"],
  [<SiExpress />, "Express"],
  [<SiMongodb />, "MongoDB"],
];
