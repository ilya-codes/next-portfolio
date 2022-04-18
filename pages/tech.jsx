import { useEffect, useState } from "react";
import Head from "next/head";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import techStyles from "../styles/Tech.module.scss";

const Tech = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);

  const techStack = [
    [<SiHtml5 />, "HTML"],
    [<SiCss3 />, "CSS"],
    [<SiJavascript />, "javaScript"],
    [<SiReact />, "React"],
    [<SiNextdotjs />, "Next.js"],
    [<SiNodedotjs />, "Node.js"],
    [<SiExpress />, "Express"],
    [<SiMongodb />, "MongoDB"],
  ];

  return (
    <>
      <Head>
        <title>Technologies stack</title>
      </Head>
      <div className={techStyles.tech}>
        <div className={techStyles.wrapper}>
          {techStack.map((item, i) => (
            <div
              className={`${techStyles.techBox} ${techStyles.techBoxLeft} ${
                transition && techStyles.transition
              }`}
              key={i}
            >
              <div className={techStyles.contentBox}>
                {item[0]} <h2>{item[1]}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
