import React from "react";

import AvatarMale from "../../assets/images/Icon female.png";
import AvatarFemale from "../../assets/images/Icon male.png";

import "./styles.scss";

const InfoModal = ({ name, gender, height, mass, hair_color, skin_color }) => {
  return (
    <div className="modal_wrapper">
      <div className="modal_img">
        {gender === "male" ? (
          <img src={AvatarMale} alt="Avatar-modal" />
        ) : (
          <img src={AvatarFemale} alt="Avatar-modal" />
        )}

        <div className="modal_block-bottom">
          <div className="gender">
            <span className="block-span">{gender}</span>
          </div>
          <div className="mass">
            <span className="block-span">{height}</span>
          </div>
        </div>
      </div>

      <div className="modal_info">
        <h1 className="modal_name">{name}</h1>

        <div className="modal_text">
          <div>
            <h4>{`hair color: ${hair_color}`}</h4>
            <h4>{`skin color: ${skin_color}`}</h4>
          </div>
        </div>

        <div className="modal_info--size">
          <div className="modal_info--size-height">
            <div className="size_height">
              <h5>{height}</h5>
            </div>
            <span className="height-span">heigth</span>
          </div>

          <div className="modal_info--size-mass">
            <div className="size_mass">
              <h5>{mass}</h5>
            </div>
            <span className="height-span">mass</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
