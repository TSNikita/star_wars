import React from "react";
import { useSelector } from "react-redux";

import { selectorPeopleName } from "./../../store/InfoDetails/infoDetails-selectors";
import InfoModal from "../InfoModal";

import "./styles.scss";

const Modal = ({ active, setActive }) => {
  const peopleName = useSelector(selectorPeopleName);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          onClick={() => setActive(false)}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="35.4683"
            height="9.21254"
            rx="3"
            transform="matrix(0.705326 0.708883 -0.705326 0.708883 5.5 -0.671875)"
            fill="#212121"
          />
          <rect
            width="35.4683"
            height="9.21254"
            rx="3"
            transform="matrix(-0.705326 0.708883 -0.705326 -0.708883 30.5156 5.53125)"
            fill="#212121"
          />
        </svg>

        {peopleName && <InfoModal {...peopleName} />}
      </div>
    </div>
  );
};

export default Modal;
