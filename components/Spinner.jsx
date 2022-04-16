import React from "react";
import spinnerStyles from "../styles/Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={spinnerStyles.loadingScreen}>
      <div className={spinnerStyles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
