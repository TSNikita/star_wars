import React from "react";
import { useNavigate } from "react-router-dom";

import numberError from "../../assets/images/Team_Rocket_trio_OS 1.png";

import "./styles.scss";

function Error() {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="error">
      <div className="error_text">
        <h1>404</h1>

        <img src={numberError} alt="numberError" />
      </div>

      <button onClick={handlerNavigate}>Return</button>
    </div>
  );
}

export default Error;
