import { useEffect, useState } from "react";
import { SiMaildotru } from "react-icons/si";
import Image from "next/image";
import contactStyles from "../styles/Contact.module.scss";

const Contact = () => {
  const [transition, setTransition] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTransition(true);
    setShowText(true);
  }, []);

  return (
    <div className={contactStyles.contact}>
      <div
        className={`${contactStyles.contactBox} ${
          contactStyles.contactBoxLeft
        } ${transition && contactStyles.transitionLeft}`}
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
          <p>Feel free to contact me if you have any questions or offerings!</p>
        </div>
      </div>
      <div
        className={`${contactStyles.contactBox} ${
          contactStyles.contactBoxRight
        } ${transition && contactStyles.transitionRight}`}
      >
        <div
          className={`${contactStyles.content} ${
            showText && contactStyles.showText
          }`}
        >
          <p>If you interested in hiring me, take a look at my CV</p>
          <div className={contactStyles.imageBox}>
            <a href="/CV.pdf" target="_blank">
              <div className={contactStyles.image}>
                <Image src="/CV.jpg" alt="" width={816} height={1056} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;