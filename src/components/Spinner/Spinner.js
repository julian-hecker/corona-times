import React from "react";
import SpinnerIcon from "./SpinnerIcon";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <SpinnerIcon />
    </div>
  );
};

export default Spinner;
