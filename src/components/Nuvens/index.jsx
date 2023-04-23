import React from "react";

export const Nuvens = (props) => {
  return (
    <div className="nuvemContainer">
      <img className="nuvem1" src={props.img} alt="" />
      {props.children}
      <img className="nuvem2" src={props.img} alt="" />
    </div>
  );
};