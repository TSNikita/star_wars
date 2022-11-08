import React from "react";

import "./styles.scss";

const Card = ({ onClick, birth_year, name, height, mass, gender, url }) => {
  return (
    <div className="card" onClick={() => onClick(url)}>
      <div className="card_info">
        <h3>{name}</h3>

        <div className="card_size">
          <div className="card_size--left">
            <div className="card_height">
              <h5>{height}</h5>
            </div>

            <span>height</span>
          </div>

          <div className="card_size--right">
            <div className="card_mass">
              <h5>{mass}</h5>
            </div>

            <span>mass</span>
          </div>
        </div>

        <div className="card_block--info">
          <div className="card_floor">
            <span className="floor--span">{gender}</span>
          </div>
          {birth_year === "unknown" ? (
            <div></div>
          ) : (
            <div className="card_birthDate">
              <span className="birthDate--span">{birth_year}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
