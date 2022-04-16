import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      {/* <a href="https://www.versicherungen.at/hausversicherung-rechner/">
        Hausversicherung berechnen
      </a> */}
    </footer>
  );
};

export default Footer;
