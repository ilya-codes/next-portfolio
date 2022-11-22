import Hero from "../components/Hero";
import Projects from "../components/Projects";
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
import { useCallback, useEffect, useState } from "react";
import { SiMaildotru } from "react-icons/si";
import Image from "next/image";
import cv from "../public/CV1.jpg";
import contactStyles from "../styles/Contact.module.scss";

export default function Home() {
  const [showProj, setShowProj] = useState(false);
  const [transition, setTransition] = useState(false);
  const [transitionCont, setTransitionCont] = useState(false);
  const [showText, setShowText] = useState(false);

  const onScroll = useCallback((event) => {
    window.scrollY > 300 && setShowProj(true);
    window.scrollY > 2100 && setTransition(true);
    if (window.scrollY > 2800) {
      setTransitionCont(true);
      setShowText(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", onScroll, { passive: true });
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
        <title>Web Developer Portfolio</title>
      </Head>
      <div id="hero">
        <Hero />
        <Projects showProj={showProj} />
      </div>
      <div id="tech" className={techStyles.tech}>
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

      <div id="contact" className={contactStyles.contact}>
        <div
          className={`${contactStyles.wrapper} ${
            transitionCont && contactStyles.showBg
          }`}
        >
          <div
            className={`${contactStyles.contactBox} ${
              contactStyles.contactBoxLeft
            } ${transitionCont && contactStyles.transitionLeft}`}
          >
            <div
              className={`${contactStyles.content} ${
                showText && contactStyles.showText
              }`}
            >
              <h1>Contact Me</h1>

              <div className={contactStyles.email}>
                <SiMaildotru />
                <p>ilya.d.mailbox@gmail.com</p>
              </div>
              <p>
                Feel free to contact me if you have any questions or offerings!
              </p>
            </div>
          </div>
          <div
            className={`${contactStyles.contactBox} ${
              contactStyles.contactBoxRight
            } ${transitionCont && contactStyles.transitionRight}`}
          >
            <div
              className={`${contactStyles.content} ${
                showText && contactStyles.showText
              }`}
            >
              <h1>CV</h1>
              <div className={contactStyles.imageBox}>
                <a href="/CV1.pdf" target="_blank">
                  <div className={contactStyles.image}>
                    <Image
                      src={cv}
                      alt=""
                      width={816}
                      height={1056}
                      placeholder="blur"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
