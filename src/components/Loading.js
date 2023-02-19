import React from "react";
import Spinner from "../image/spinner.gif";

import "../styles/Loading.scss";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <img src={Spinner} className="loader" alt="loading" />
    </div>
  );
};

export default Loading;
