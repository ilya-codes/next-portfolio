import { useEffect, useState } from "react";
import heroStyles from "../styles/Hero.module.scss";

const Hero = () => {
  const [transition, setTransition] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTransition(true);
    setShowText(true);
  }, []);

  return (
    <div className={heroStyles.hero}>
      <div
        className={`${heroStyles.heroTextBox} ${
          showText && heroStyles.showText
        }`}
      >
        <h1 className={heroStyles.heroText}>
          Hi! My Name Is <span className={heroStyles.name}>Ilya</span>
        </h1>
        <h2 className={heroStyles.heroTextSecondary}>I'm a Web Developer</h2>
      </div>

      <div
        className={`${heroStyles.heroBox} ${heroStyles.heroBoxLeft} ${
          transition && heroStyles.transitionLeft
        }`}
      ></div>
      <div
        className={`${heroStyles.heroBox} ${heroStyles.heroBoxRight} ${
          transition && heroStyles.transitionRight
        }`}
      ></div>
    </div>
  );
};

export default Hero;
