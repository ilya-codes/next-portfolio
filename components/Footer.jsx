import footerStyles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
