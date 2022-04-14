import { useEffect, useState } from "react";
import Image from "next/image";

import projectStyles from "../styles/Project.module.scss";

const Project = ({ isRight, img, prev, github, details }) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(null);
  const [visible, setVisible] = useState(false);

  const visibleHandler = () => {
    window.scrollY > 300 && setVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", visibleHandler);
    return () => window.removeEventListener("scroll", visibleHandler);
  }, []);

  const projectOpenHandler = () => {
    setOpen(!open);
    setPos(window.scrollY);
  };

  useEffect(() => {
    const scrollHandler = () => {
      (window.scrollY > pos + 300 || window.scrollY < pos - 300) &&
        setOpen(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [open, pos]);

  const moveRight = isRight ? projectStyles.right : "";
  // const leftText = isRight ? projectStyles.leftText : "";

  return (
    <div
      className={`${projectStyles.wrapper} ${moveRight} ${
        visible && projectStyles.visible
      }`}
    >
      {details}
      <div
        className={`${projectStyles.projectCard} ${
          open && projectStyles.open
        } ${moveRight}`}
        onClick={projectOpenHandler}
      >
        <div
          className={`${projectStyles.image} ${open && projectStyles.open} `}
        >
          <Image src={img} alt="" width={2880} height={1645} />
        </div>

        <div className={projectStyles.textBox}>
          <div
            className={`${projectStyles.text} ${open && projectStyles.open}`}
          >
            <div
              className={` ${projectStyles.innerBox} ${
                open && projectStyles.open
              } ${projectStyles.left}`}
            >
              <a href={prev} target="_blank" rel="noreferrer noopener">
                Preview
              </a>
            </div>
            <div
              className={`${projectStyles.innerBox} ${
                open && projectStyles.open
              } ${projectStyles.right}`}
            >
              <a href={github} target="_blank" rel="noreferrer noopener">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
