import React from "react";

import "./styles.scss";

const CardWokki = ({
  onClick,
  rhahrcaoac_roworarc,
  whrascwo,
  acwoahrracao,
  scracc,
  rrwowhwaworc,
  hurcan,
}) => {
  return (
    <div className="card" onClick={() => onClick(hurcan)}>
      <div className="card_info">
        <h3>{whrascwo}</h3>

        <div className="card_size">
          <div className="card_size--left">
            <div className="card_height">
              <h5>{acwoahrracao}</h5>
            </div>

            <span>height</span>
          </div>

          <div className="card_size--right">
            <div className="card_mass">
              <h5>{scracc}</h5>
            </div>

            <span>mass</span>
          </div>
        </div>

        <div className="card_block--info">
          <div className="card_floor">
            <span className="floor--span">{rrwowhwaworc}</span>
          </div>
          {rhahrcaoac_roworarc === "unknown" ? (
            <div></div>
          ) : (
            <div className="card_birthDate">
              <span className="birthDate--span">{rhahrcaoac_roworarc}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWokki;
