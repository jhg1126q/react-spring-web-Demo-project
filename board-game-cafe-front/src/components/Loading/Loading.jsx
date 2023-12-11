import React from "react";
import classes from "./Loading.module.css";
import ReactDOM from "react-dom";

import loadingBar from "../../assets/loading.svg";

const LoadingOverlay = () => {
  return (
    <div className={classes.backdrop}>
      <img src={loadingBar} className={classes.loader} />
    </div>
  );
};

const Loading = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <LoadingOverlay />,
        document.getElementById("overlay-loading")
      )}
    </>
  );
};

export default Loading;
