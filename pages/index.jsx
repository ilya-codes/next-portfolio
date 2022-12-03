import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import techStyles from "../styles/Tech.module.scss";
import { useCallback, useEffect, useState } from "react";
import { SiMaildotru } from "react-icons/si";
import { techStack } from "../data";
import Image from "next/image";
import cv from "../public/CV1.jpg";
import contactStyles from "../styles/Contact.module.scss";

export default function Home() {
  const [showProj, setShowProj] = useState(false);
  const [transitionTech, setTransitionTech] = useState(false);
  const [transitionCont, setTransitionCont] = useState(false);
  const [showText, setShowText] = useState(false);

  const onScroll = useCallback((event) => {
    window.scrollY > 300 && setShowProj(true);

    if (window.innerHeight < window.innerWidth) {
      window.scrollY > 2200 && setTransitionTech(true);
      if (window.scrollY > 3000) {
        setTransitionCont(true);
        setShowText(true);
      }
    } else {
      window.scrollY > 1900 && setTransitionTech(true);
      if (window.scrollY > 2700) {
        setTransitionCont(true);
        setShowText(true);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <>
      <Head>
        <title>Web Developer Portfolio</title>
      </Head>
      <Nav />
      <div id="hero">
        <Hero />
        <Projects showProj={showProj} />
      </div>
      <div id="tech" className={techStyles.tech}>
        <h3
          className={`${techStyles.header} ${
            transitionTech && techStyles.visible
          }`}
        >
          Technologies I Use
        </h3>
        <div className={techStyles.wrapper}>
          {techStack.map((item, i) => (
            <div
              className={`${techStyles.techBox} ${techStyles.techBoxLeft} ${
                transitionTech && techStyles.transition
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
      <Footer />
    </>
  );
}
