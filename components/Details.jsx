import detailsStyles from "../styles/Details.module.scss";

const Details = ({ title, text, isRight }) => {
  const leftText = isRight ? detailsStyles.leftText : "";

  return (
    <div
      className={`${detailsStyles.details} ${
        leftText && detailsStyles.leftText
      }`}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Details;
