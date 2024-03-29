import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const menuHandler = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <div
        className={`${navStyles.hamburger} ${visible && navStyles.visible}`}
        onClick={menuHandler}
      >
        <div className={`${navStyles.bar1} ${menu && navStyles.open}`}></div>
        <div className={`${navStyles.bar2} ${menu && navStyles.open}`}></div>
        <div className={`${navStyles.bar3} ${menu && navStyles.open}`}></div>
      </div>
      <nav className={`${navStyles.nav}  ${menu && navStyles.burgerMenu}`}>
        <ul className={navStyles.social}>
          <li>
            <a
              href="https://github.com/ilya-codes"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ilya-dmitriev-663b02206"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <ul className={navStyles.navigation}>
          <li onClick={closeMenu}>
            <Link href="#hero">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#tech">Tech Stack</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
